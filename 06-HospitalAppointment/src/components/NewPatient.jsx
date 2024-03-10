import React from "react";
import DoctorSelectDropDownMenu from "./DoctorSelectDropDownMenu";

export default function NewPatient() {
  return (
    <div className="new-patient-container">
      <h2>Patient Details</h2>
      <label htmlFor="patient-name">Name</label>
      <input type="text" name="" id="patient-name" />
      <label htmlFor="patient-surname">Surname</label>
      <input type="text" name="" id="patient-surname" />
      <label htmlFor="dob">DOB</label>
      <input type="date" id="dob" />
      <label htmlFor="concerns">Concerns</label>
      <textarea name="concerns" id="concerns" cols="30" rows="10"></textarea>
      <hr />
      <label htmlFor="appointment-date"></label>
      <input type="text" id="appointment-date" />
      <button>Create</button>
    </div>
  );
}
