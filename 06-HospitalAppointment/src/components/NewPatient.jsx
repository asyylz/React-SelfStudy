import React from "react";
import DoctorSelectDropDownMenu from "./DoctorSelectDropDownMenu";
import "/src/styles/new-patient.css";

export default function NewPatient() {
  return (
    <div id="wrap" className="input">
      <section className="input-content">
        <h2>
          Patient Details<span> (New Patient)</span>
        </h2>
        <div className="input-content-wrap">
          <div className="input-section-1">
            <dl className="inputbox">
              <dt className="inputbox-title">Patient Full Name</dt>
              <dd className="inputbox-content">
                <input id="input0" type="text" required />
                {/* <label htmlFor="input0">Patient Name</label> */}
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
            <div className="btns">
              <button className="btn btn-confirm">Create Appointment</button>
              <button className="btn btn-cancel">Clear Form</button>
            </div>
          </div>
          <div className="input-section-2">
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
                {/* <label htmlFor="textareaInput"></label> */}
                <span className="underline"></span>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
