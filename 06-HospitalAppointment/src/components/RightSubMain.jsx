import {
  FaBriefcaseMedical,
  FaBed,
  FaWheelchair,
  FaDollarSign,
} from "react-icons/fa";
import Doctors from "./Doctors";

export default function RightSubMain({ data }) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card-content">
            <div className="number">67</div>
            <div className="card-name">Appointments</div>
          </div>
          <div className="icon-box">
            <FaBriefcaseMedical />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="number">67</div>
            <div className="card-name">New Patient</div>
          </div>
          <div className="icon-box">
            <FaWheelchair />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="number">67</div>
            <div className="card-name">Operations</div>
          </div>
          <div className="icon-box">
            <FaBed />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="number">67</div>
            <div className="card-name">Earnings</div>
          </div>
          <div className="icon-box">
            <FaDollarSign />
          </div>
        </div>
      </div>
      <Doctors />
    </>
  );
}
