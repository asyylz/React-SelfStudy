import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import "/src/styles/current-doctor-page.css";
import "/src/styles/patient-details.css";
import { MdDoneOutline } from "react-icons/md";
import ModalWindow from "./ModalWindow";
import { useState } from "react";
import { handleDeletePatient, handleIsSeenStatus } from "../util/Actions";
export default function CurrentDoctorPage({
  currentDoctor,
  setStoredData,
  storedData,
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

      {!modalIsOpen &&
        storedData.map(
          (doctor) =>
            doctor.id === currentDoctor.id && (
              <div className="current-doctor wrapper">
                <div>
                  <h2 className="sm-screen-doctor-name">{doctor.doctorName}</h2>
                  <a href="#" className="current-doctor profile-card">
                    <img src={doctor.img} className="card-image" alt="" />
                    <div className="card-overlay">
                      <div className="card-header">
                        <svg
                          className="card-arc"
                          xmlns="httpwww.w3.org/2000/svg"
                        >
                          <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
                        </svg>
                        <img className="card-thumb" src={doctor.img} alt="" />
                        <div className="card-header-text">
                          <h2 className="card-title">{doctor.doctorName}</h2>
                          <h3>{doctor.expertiseField}</h3>
                        </div>
                      </div>
                      <p className="card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, blanditiis?
                      </p>
                    </div>
                  </a>
                </div>

                <div className="tables">
                  <div className="last-appointments">
                    <div className="heading">
                      <h2>Completed Appointments</h2>
                      <a href="#" className="btn">
                        View All
                      </a>
                    </div>
                    <table className="appointments">
                      <thead>
                        <tr>
                          <th>Patient Name</th>
                          <th>DOB</th>
                          <th>Concerns</th>
                          <th>Appointment Date</th>
                          <th>Status</th>
                          <th>Referrals</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doctor.patients
                          .filter((patient) => patient.isSeen === true)
                          .map((patient) => (
                            <>
                              <tr
                                key={patient.id}
                                className={
                                  patient.isSeen ? "completed" : "active"
                                }
                              >
                                <td>{patient.patientName}</td>
                                <td>{patient.DOB}</td>
                                <td>{patient.concerns}</td>
                                <td>{patient.appointmentDate}</td>
                                <td>
                                  {patient.isSeen ? "Completed" : "Active"}
                                </td>
                                <td>
                                  {patient.referral
                                    ? "Referred"
                                    : "Not Applied"}
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
                                        null,
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
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="last-appointments">
                    <div className="heading">
                      <h2>Upcoming Appointments</h2>
                      <a href="#" className="btn">
                        View All
                      </a>
                    </div>
                    <table className="appointments">
                      <thead>
                        <tr>
                          <th>Patient Name</th>
                          <th>DOB</th>
                          <th>Concerns</th>
                          <th>Appointment Date</th>
                          <th>Status</th>
                          <th>Referrals</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {doctor.patients
                          .filter((patient) => patient.isSeen === false)
                          .map((patient) => (
                            <>
                              <tr
                                key={patient.id}
                                className={
                                  patient.isSeen ? "completed" : "active"
                                }
                              >
                                <td>{patient.patientName}</td>
                                <td>{patient.DOB}</td>
                                <td>{patient.concerns}</td>
                                <td>{patient.appointmentDate}</td>
                                <td>
                                  {patient.isSeen ? "Completed" : "Active"}
                                </td>
                                <td>
                                  {patient.referral
                                    ? "Referred"
                                    : "Not Applied"}
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
                                    className={`icons tick ${
                                      patient.isSeen ? "" : "notSeen"
                                    }`}
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
                                        null,
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
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
        )}
    </>
  );
}
