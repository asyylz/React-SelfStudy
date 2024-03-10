import {
  FaBriefcaseMedical,
  FaBed,
  FaWheelchair,
  FaDollarSign,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Doctors from "./Doctors";
import { useState } from "react";
import NewPatient from "./NewPatient";
import AppointmentsAll from "./AppointmentsAll";

export default function RightSubMain({ doctorData }) {
  const [doctorsTabSelected, setDoctorsTabSelected] = useState(true);
  const [newPatient, setNewPatient] = useState(false);
  const [appointmentTab, setAppointmentTab] = useState(false);

  return (
    <>
      <div className="cards">
        <div
          className={`card ${doctorsTabSelected ? "selected" : ""}`}
          onClick={() => {
            setNewPatient(false);
            setAppointmentTab(false);
            setDoctorsTabSelected(!doctorsTabSelected);
          }}
        >
          <div className="card-content">
            <div className="card-name">Doctors</div>
          </div>
          <div className="icon-box">
            <FaUserDoctor />
          </div>
        </div>
        <div
          className={`card ${appointmentTab ? "selected" : ""}`}
          onClick={() => {
            setNewPatient(false);
            setDoctorsTabSelected(false);
            setAppointmentTab(!appointmentTab);
          }}
        >
          <div className="card-content">
            <div className="card-name">Appointments</div>
          </div>
          <div className="icon-box">
            <FaWheelchair />
          </div>
        </div>
        <div
          className={`card ${newPatient ? "selected" : ""}`}
          onClick={() => {
            setDoctorsTabSelected(false);
            setAppointmentTab(false);
            setNewPatient(!newPatient);
          }}
        >
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
      {newPatient && <NewPatient />}
      {appointmentTab && <AppointmentsAll />}
    </>
  );
}
