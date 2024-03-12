import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import "/src/styles/current-doctor-page.css";
import "/src/styles/patient-details.css";
import { MdDoneOutline } from "react-icons/md";
import { useEffect } from "react";
export default function CurrentDoctorPage({
  currentDoctor,
  setStoredData,
  storedData,
}) {
  function handleDeletePatient(patientID) {
    const updatedDoctor = storedData.find(
      (doctor) => doctor.id === currentDoctor.id
    );

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

    const alertMessage = "Patient's case is deleted successfully.";
    alert(alertMessage);
  }

  function handleIsSeenStatus(patientID, patientStatus) {
    const updatedData = storedData.map((doctor) => {
      if (doctor.id === currentDoctor.id) {
        const updatedPatients = doctor.patients.map((patient) => {
          if (patient.id === patientID) {
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
      const alertMessage = "Patient's case is completed successfully.";
      alert(alertMessage);
    }
  }

  return (
    <>
      {storedData.map(
        (doctor) =>
          doctor.id === currentDoctor.id && (
            <div className="current-doctor wrapper">
              <div>
                <h2 className="sm-screen-doctor-name">{doctor.doctorName}</h2>
                <a href="#" className="current-doctor profile-card">
                  <img src={doctor.img} className="card-image" alt="" />
                  <div className="card-overlay">
                    <div className="card-header">
                      <svg className="card-arc" xmlns="httpwww.w3.org/2000/svg">
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
                              <td>{patient.concerns}</td>
                              <td>{patient.appointmentDate}</td>
                              <td>{patient.isSeen ? "Completed" : "Active"}</td>
                              <td>
                                {patient.referral ? "Referred" : "Not Applied"}
                              </td>
                              <td>
                                <MdDoneOutline
                                  className="icons tick"
                                  onClick={() =>
                                    handleIsSeenStatus(
                                      patient.id,
                                      patient.isSeen
                                    )
                                  }
                                />
                                <FaRegTrashAlt
                                  className="icons trash"
                                  onClick={() =>
                                    handleDeletePatient(patient.id)
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
                              <td>{patient.concerns}</td>
                              <td>{patient.appointmentDate}</td>
                              <td>{patient.isSeen ? "Completed" : "Active"}</td>
                              <td>
                                {patient.referral ? "Referred" : "Not Applied"}
                              </td>
                              <td>
                                <MdDoneOutline
                                  //className="icons tick"
                                  className={`icons tick ${
                                    patient.isSeen ? "" : "notSeen"
                                  }`}
                                  onClick={() =>
                                    handleIsSeenStatus(
                                      patient.id,
                                      patient.isSeen
                                    )
                                  }
                                />
                                <FaRegTrashAlt
                                  className="icons trash"
                                  onClick={() =>
                                    handleDeletePatient(patient.id)
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
