import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export default function Doctors() {
  return (
    <div className="tables">
      <div className="last-appointments">
        <div className="headings">
          <h2>Last Appointments</h2>
          <a href="#" className="btn">
            View All
          </a>
        </div>
        <table className="appointments">
          <thead>
            <td>Name</td>
            <td>Doctor</td>
            <td>Condition</td>
            <td>Actions</td>
          </thead>
          <tbody>
            <tr>
              <td>Liam Smith Doe</td>
              <td>Dr.benjamin</td>
              <td>fracture</td>
              <td>
                <FaRegEye />
                <FaRegEdit />
                <FaRegTrashAlt />
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <div className="doctor-visiting">
        <div className="heading">
          <h2>Appointments</h2>
          <a href="" className="btn">
            View All
          </a>
        </div>
      </div>
    </div>
  );
}
