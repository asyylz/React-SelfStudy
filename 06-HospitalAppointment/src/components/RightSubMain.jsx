import {
  FaBriefcaseMedical,
  FaBed,
  FaWheelchair,
  FaDollarSign,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Doctors from "./Doctors";
import { useState } from "react";

export default function RightSubMain({ doctorData }) {
  const [doctorsTabSelected, setDoctorsTabSelected] = useState(true);
  console.log(doctorsTabSelected);

  return (
    <>
      <div className="cards">
        <div
          className={`card ${doctorsTabSelected ? "selected" : ""}`}
          onClick={() => setDoctorsTabSelected(!doctorsTabSelected)}
        >
          <div className="card-content">
            <div className="card-name">Doctors</div>
          </div>
          <div className="icon-box">
            <FaUserDoctor />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-name">Appointments</div>
          </div>
          <div className="icon-box">
            <FaWheelchair />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-name">New Patient</div>
          </div>
          <div className="icon-box">
            <FaBed />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-name">Referrals</div>
          </div>
          <div className="icon-box">
            <FaDollarSign />
          </div>
        </div>
      </div>
      <hr />
      {doctorsTabSelected && (
        <Doctors
          dataDoctors={doctorData}
          doctorsTabSelected={doctorsTabSelected}
        />
      )}
    </>
  );
}
