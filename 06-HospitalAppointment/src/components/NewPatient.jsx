import React from "react";
import DoctorSelectDropDownMenu from "./DoctorSelectDropDownMenu";
import "/src/styles/new-patient.css";

export default function NewPatient() {
  return (
    <div id="wrap" className="new-patient">
      <header className="input-header">
        <h1>Patient Details</h1>
      </header>
      <section className="new-patient-content">
        <div className="new-patient-content-wrap">
          <dl className="inputbox">
            <dt className="inputbox-title">Input Text</dt>
            <dd className="inputbox-content">
              <input id="input0" type="text" required />
              <label htmlFor="input0">ID</label>
              <span className="underline"></span>
            </dd>
          </dl>
          <dl></dl>
          <dl className="inputbox">
            <dt className="inputbox-title">Input Password</dt>
            <dd className="inputbox-content">
              <input id="input1" type="password" required />
              <label htmlFor="input1">Password</label>
              <span className="underline"></span>
            </dd>
          </dl>
          <div className="btns">
            <button className="btn btn-confirm">Sign In</button>
            <button className="btn btn-cancel">Cancel</button>
          </div>
        </div>
      </section>
    </div>
    // <div className="new-patient-container">
    //   <h2>Patient Details</h2>
    //   <div className="wrapper">
    //     <div>
    //       <label htmlFor="patient-name">Name</label>
    //       <input type="text" name="" id="patient-name" />
    //     </div>
    //     <div>
    //       <label htmlFor="patient-surname">Surname</label>
    //       <input type="text" name="" id="patient-surname" />
    //     </div>
    //     <div>
    //       <label htmlFor="dob">DOB</label>
    //       <input type="date" id="dob" />
    //     </div>
    //     <div>
    //       <label htmlFor="concerns">Concerns</label>
    //       <textarea
    //         name="concerns"
    //         id="concerns"
    //         cols="30"
    //         rows="10"
    //       ></textarea>
    //     </div>
    //     <div>
    //       <label htmlFor="appointment-date">Appointment Date</label>
    //       <input type="text" id="appointment-date" />
    //     </div>
    //     <DoctorSelectDropDownMenu />
    //     <button>Create Appointment</button>
    //   </div>
    // </div>
  );
}
