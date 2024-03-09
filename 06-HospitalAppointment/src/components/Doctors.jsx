import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export default function Doctors() {
  return (
    <div className="tables">
      <div className="last-appointments">
        <div className="heading">
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
                <FaRegEye className="icons eye" />
                <FaRegEdit className="icons edit" />
                <FaRegTrashAlt className="icons trash" />
              </td>
            </tr>
          </tbody>
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
        <table className="visiting">
          <thead>
            <td>Photo</td>
            <td>Name</td>
            <td>Visit Time</td>
            <td>Detail</td>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="img-box-small">
                  <img src="./public/doctor.png" alt="" />
                </div>
              </td>
              <td>Benjamin</td>
              <td>14:00</td>
              <td>
                <FaRegEye className="icons eye" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="img-box-small">
                  <img src="./public/doctor.png" alt="" />
                </div>
              </td>
              <td>Benjamin</td>
              <td>14:00</td>
              <td>
                <FaRegEye className="icons eye" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="img-box-small">
                  <img src="./public/doctor.png" alt="" />
                </div>
              </td>
              <td>Benjamin</td>
              <td>14:00</td>
              <td>
                <FaRegEye className="icons eye" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
