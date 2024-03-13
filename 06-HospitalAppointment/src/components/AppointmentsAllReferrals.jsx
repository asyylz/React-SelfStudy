import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { useState } from "react";
import ModalWindow from "./ModalWindow";
export default function AppointmentsAllReferrals({
  appointmentTab,
  referralTab,
  storedData,
  setStoredData,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pat, setPat] = useState("");
  const [doc, setDoc] = useState("");

  function handleDeletePatient(patientID, patientName, doctorID) {
    const updatedDoctor = storedData.find((doctor) => doctor.id === doctorID);

    if (!updatedDoctor) {
      console.error("Doctor not found in stored data.");
      return;
    }

    const updatedPatients = updatedDoctor.patients.filter(
      (patient) => patient.id !== patientID
    );

    updatedDoctor.patients = updatedPatients;

    const updatedData = storedData.map((doctor) => {
      if (doctor.id === updatedDoctor.id) {
        return { ...doctor, patients: updatedPatients };
      }
      return doctor;
    });

    setStoredData(updatedData);
    const alertMessage = "Would you like patient's case to be deleted ?";
    alert(alertMessage);
  }

  function handleIsSeenStatus(patientID, patientName, doctorID, patientStatus) {
    const updatedData = storedData.map((doctor) => {
      if (doctor.id === doctorID) {
        const updatedPatients = doctor.patients.map((patient) => {
          if (patient.id === patientID && patient.patientName === patientName) {
            return {
              ...patient,
              isSeen: !patient.isSeen,
            };
          }
          return patient;
        });
        return {
          ...doctor,
          patients: updatedPatients,
        };
      }
      return doctor;
    });

    setStoredData(updatedData);

    if (!patientStatus) {
      const alertMessage = "Would you like Patient's case to be completed ?";
      alert(alertMessage);
    }
  }

  return (
    <>
      {modalIsOpen && (
        <ModalWindow
          pat={pat}
          setPat={setPat}
          setDoc={setDoc}
          doc={doc}
          setStoredData={setStoredData}
          storedData={storedData}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}

      <div className="tables">
        <div className="last-appointments">
          <div className="heading">
            <h2> All Appointments</h2>
            <a href="#" className="btn">
              View All
            </a>
          </div>
          <table className="appointments">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Concerns</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th>Referrals</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointmentTab &&
                storedData.map((doctor) =>
                  doctor.patients.map((patient) => (
                    <>
                      <tr
                        key={patient.id}
                        className={patient.isSeen ? "completed" : "active"}
                      >
                        <td>{patient.patientName}</td>
                        <td>{patient.concerns}</td>
                        <td>{patient.appointmentDate}</td>
                        <td>{patient.isSeen ? "Completed" : "Active"}</td>
                        <td>{patient.referral ? "Referred" : "Not Applied"}</td>
                        <td>
                          {/* <FaRegEye className="icons eye" />*/}
                          <FaRegEdit
                            className="icons edit"
                            onClick={() => {
                              setPat(patient);
                              setDoc(doctor);
                              setModalIsOpen(true);
                            }}
                          />
                          <MdDoneOutline
                            className="icons tick"
                            onClick={() =>
                              handleIsSeenStatus(
                                patient.id,
                                patient.patientName,
                                doctor.id,
                                patient.isSeen
                              )
                            }
                          />
                          <FaRegTrashAlt
                            className="icons trash"
                            onClick={() =>
                              handleDeletePatient(
                                patient.id,
                                patient.patientName,
                                doctor.id
                              )
                            }
                          />
                        </td>
                      </tr>
                      <tr className="gap-line"></tr>
                    </>
                  ))
                )}
              {referralTab &&
                storedData.map((doctor) =>
                  doctor.patients
                    .filter((patient) => patient.referral === true)
                    .map((patient) => (
                      <>
                        <tr
                          key={doctor.patients.id}
                          className={patient.isSeen ? "completed" : "active"}
                        >
                          <td>{patient.patientName}</td>
                          <td>{patient.concerns}</td>
                          <td>{patient.appointmentDate}</td>
                          <td>{patient.isSeen ? "Completed" : "Active"}</td>
                          <td>
                            {patient.referral ? "Referred" : "Not Applied"}
                          </td>
                          <td>
                            <FaRegEdit
                              className="icons edit"
                              onClick={() => {
                                setPat(patient);
                                setDoc(doctor);
                                setModalIsOpen(true);
                              }}
                            />
                            <MdDoneOutline
                              className="icons tick"
                              onClick={() =>
                                handleIsSeenStatus(
                                  patient.id,
                                  patient.patientName,
                                  doctor.id,
                                  patient.isSeen
                                )
                              }
                            />
                            <FaRegTrashAlt
                              className="icons trash"
                              onClick={() =>
                                handleDeletePatient(
                                  patient.id,
                                  patient.patientName,
                                  doctor.id
                                )
                              }
                            />
                          </td>
                        </tr>
                        <tr className="gap-line"></tr>
                      </>
                    ))
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
