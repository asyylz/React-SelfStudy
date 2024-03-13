import { FaBed, FaWheelchair, FaDollarSign } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Doctors from "./Doctors";
import { useState } from "react";
import NewPatient from "./NewPatient";
import AppointmentsAllReferrals from "./AppointmentsAllReferrals";

export default function RightSubMain({ storedData, setStoredData }) {
  const [doctorsTabSelected, setDoctorsTabSelected] = useState(true);
  const [newPatient, setNewPatient] = useState(false);
  const [appointmentTab, setAppointmentTab] = useState(false);
  const [referralTab, setReferralTab] = useState(false);

  return (
    <>
      <div className="cards">
        <div
          className={`card ${doctorsTabSelected ? "selected" : ""}`}
          onClick={() => {
            setNewPatient(false);
            setAppointmentTab(false);
            setReferralTab(false);
            //setDoctorsTabSelected(!doctorsTabSelected);
            setDoctorsTabSelected(true);
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
            setReferralTab(false);
            //setAppointmentTab(!appointmentTab);
            setAppointmentTab(true);
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
            setReferralTab(false);
            //setNewPatient(!newPatient);
            setNewPatient(true);
          }}
        >
          <div className="card-content">
            <div className="card-name">New Patient</div>
          </div>
          <div className="icon-box">
            <FaBed />
          </div>
        </div>
        <div
          className={`card ${referralTab ? "selected" : ""}`}
          onClick={() => {
            setDoctorsTabSelected(false);
            setAppointmentTab(false);
            setNewPatient(false);
            //setReferralTab(!referralTab);
            setReferralTab(true);
          }}
        >
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
          storedData={storedData}
          doctorsTabSelected={doctorsTabSelected}
          setStoredData={setStoredData}
        />
      )}

      {newPatient && (
        <NewPatient storedData={storedData} setStoredData={setStoredData} />
      )}

      {!newPatient && !doctorsTabSelected && (
        <AppointmentsAllReferrals
          appointmentTab={appointmentTab}
          referralTab={referralTab}
          storedData={storedData}
          setStoredData={setStoredData}
        />
      )}

      {/* eksi */}

      {/* {appointmentTab && <AppointmentsAllReferrals filteredData={storedData} />}
      {referralTab && (
        <AppointmentsAllReferrals
          filteredData={storedData.flatMap((doctor) =>
            doctor.patients.filter((patient) => patient.referral === true)
          )}
        />
      )} */}

      {/* {appointmentTab && <AppointmentsAll storedData={storedData} />}

      {referralTab && <Referrals storedData={storedData} />} */}
    </>
  );
}
