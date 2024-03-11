import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import "/src/styles/current-doctor-page.css";
import "/src/styles/doctor-profile-cards.css";
import "/src/styles/patient-details.css";
export default function CurrentDoctorPage({
  currentDoctor,
  setStoredData,
  storedData,
}) {
  const doctor = currentDoctor;

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

    console.log("Patient deleted successfully.");
  }

  return (
    <div className="current-doctor-wrapper">
      <div>
        <h2 className="sm-screen-doctor-name">{doctor.doctorName}</h2>
        <a
          href="#"
          className="doctor-profile-card"
          style={{ height: "30vh", maxWidth: "330px", minWidth: "220px" }}
        >
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
              <td>Patient Name</td>
              <td>Concerns</td>
              <td>Appointment Date</td>
              <td>Status</td>
              <td>Referrals</td>
              <td>Actions</td>
            </thead>
            <tbody>
              {doctor.patients
                .filter((patient) => patient.isSeen === true)
                .map((patient) => (
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
                        <FaRegEye className="icons eye" />
                        <FaRegEdit className="icons edit" />
                        <FaRegTrashAlt className="icons trash" />
                      </td>
                    </tr>
                    <div className="gap-line"></div>
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
              <td>Patient Name</td>
              <td>Concerns</td>
              <td>Appointment Date</td>
              <td>Status</td>
              <td>Referrals</td>
              <td>Actions</td>
            </thead>
            <tbody>
              {doctor.patients
                .filter((patient) => patient.isSeen === false)
                .map((patient) => (
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
                        <FaRegEye className="icons eye" />
                        <FaRegEdit className="icons edit" />
                        <FaRegTrashAlt
                          className="icons trash"
                          onClick={() => handleDeletePatient(patient.id)}
                        />
                      </td>
                    </tr>
                    <div className="gap-line"></div>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
