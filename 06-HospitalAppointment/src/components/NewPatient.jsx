import React from "react";
import DoctorSelectDropDownMenu from "./DoctorSelectDropDownMenu";
import "/src/styles/new-patient.css";

export default function NewPatient() {
  return (
    <div id="wrap" className="input">
      <section className="input-content">
        <h2>
          Input Text/Password Animation<span>Only CSS</span>
        </h2>
        <div className="input-content-wrap">
          <dl className="inputbox">
            <dt className="inputbox-title">Patient Full Name</dt>
            <dd className="inputbox-content">
              <input id="input0" type="text" required />
              <label htmlFor="input0">Patient Name</label>
              <span className="underline"></span>
            </dd>
          </dl>
          <dl className="inputbox">
            <dt className="inputbox-title">Patient DOB</dt>
            <dd className="inputbox-content">
              <input id="input1" type="date" required />
              <label htmlFor="input1"></label>
              <span className="underline"></span>
            </dd>
          </dl>
          <DoctorSelectDropDownMenu />
          <dl className="inputbox">
            <dt className="inputbox-title">Appointment Date</dt>
            <dd className="inputbox-content">
              <input id="input2" type="date" required />
              <label htmlFor="input2"></label>
              <span className="underline"></span>
            </dd>
          </dl>
          <dl className="inputbox">
            <dt className="inputbox-title">Patient Concerns</dt>
            <dd className="inputbox-content">
              <textarea
                id="textareaInput"
                name="input3"
                cols="30"
                rows="10"
                required
              ></textarea>
              <label htmlFor="textareaInput">Patient Concerns</label>
              <span className="underline"></span>
            </dd>
          </dl>

          <div className="btns">
            <button className="btn btn-confirm">Create Appointment</button>
            <button className="btn btn-cancel">Clear Form</button>
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
