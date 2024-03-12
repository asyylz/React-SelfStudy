import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
export default function AppointmentsAll({ storedData }) {
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
            {storedData.map((doctor) =>
              doctor.patients.map((patient) => (
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
                      {/* <FaRegEye className="icons eye" />
                    <FaRegEdit className="icons edit" /> */}
                      <MdDoneOutline
                        className="icons tick"
                        onClick={() => handleIsSeenStatus(patient.id)}
                      />
                      <FaRegTrashAlt className="icons trash" />
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
