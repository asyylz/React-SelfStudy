import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
export default function AppointmentsAllReferrals({
  appointmentTab,
  referralTab,
  storedData,
  setStoredData,
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
    console.log(storedData);

    console.log("Patient deleted successfully.");
  }

  function handleIsSeenStatus(patientID, patientName) {
    console.log(patientID);
    const updatedData = storedData.map((doctor) => {
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
    });
    console.log(updatedData);

    setStoredData(updatedData);
    console.log("Patient completed successfully.");
  }
  return (
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
            <td>Patient Name</td>
            <td>Concerns</td>
            <td>Appointment Date</td>
            <td>Status</td>
            <td>Referrals</td>
            <td>Actions</td>
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
                        <MdDoneOutline
                          className="icons tick"
                          onClick={() =>
                            handleIsSeenStatus(patient.id, patient.patientName)
                          }
                        />
                        <FaRegTrashAlt className="icons trash" />
                      </td>
                    </tr>
                    <div className="gap-line"></div>
                  </>
                ))
              )}
            {storedData.map((doctor) =>
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
                      <td>{patient.referral ? "Referred" : "Not Applied"}</td>
                      <td>
                        <FaRegEdit className="icons edit" />
                        <MdDoneOutline
                          className="icons tick"
                          onClick={() =>
                            handleIsSeenStatus(patient.id, patient.patientName)
                          }
                        />
                        <FaRegTrashAlt
                          className="icons trash"
                          onClick={() => handleDeletePatient(patient.id,patient.patientName)}
                        />
                      </td>
                    </tr>
                    <div className="gap-line"></div>
                  </>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
