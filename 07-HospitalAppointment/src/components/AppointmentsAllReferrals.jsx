import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { useState } from "react";
import ModalWindow from "./ModalWindow";
import { handleDeletePatient, handleIsSeenStatus } from "../util/Actions";
export default function AppointmentsAllReferrals({
  appointmentTab,
  referralTab,
  storedData,
  setStoredData,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pat, setPat] = useState("");
  const [doc, setDoc] = useState("");

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
                                patient.isSeen,
                                storedData,
                                setStoredData
                              )
                            }
                          />
                          <FaRegTrashAlt
                            className="icons trash"
                            onClick={() =>
                              handleDeletePatient(
                                patient.id,
                                patient.patientName,
                                doctor.id,
                                storedData,
                                setStoredData
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
                                  patient.isSeen,
                                  storedData,
                                  setStoredData
                                )
                              }
                            />
                            <FaRegTrashAlt
                              className="icons trash"
                              onClick={() =>
                                handleDeletePatient(
                                  patient.id,
                                  patient.patientName,
                                  doctor.id,
                                  storedData,
                                  setStoredData
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
