import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import "/src/styles/current-doctor-page.css";
import "/src/styles/doctor-profile-cards.css";
import "/src/styles/patient-details.css";
export default function CurrentDoctorPage(currentDoctor) {
  console.log(currentDoctor)
  return (
    <div className="current-doctor-wrapper">
      <a href="#" className="doctor-profile-card">
        <img src={currentDoctor.img} className="card-image" alt="" />
        <div className="card-overlay">
          <div className="card-header">
            <svg className="card-arc" xmlns="httpwww.w3.org/2000/svg">
              <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
            </svg>
            <img className="card-thumb" src={currentDoctor.img} alt="" />
            <div className="card-header-text">
              <h2 className="card-title">{currentDoctor.doctorName}</h2>
              <h3>{currentDoctor.expertiseField}</h3>
            </div>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            blanditiis?
          </p>
        </div>
      </a>

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
    </div>

  );
}
