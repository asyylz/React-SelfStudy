import React, { useState } from "react";
import DoctorSelectDropDownMenu from "./DoctorSelectDropDownMenu";
import "/src/styles/new-patient.css";

export default function NewPatient({ storedData, setStoredData }) {
  const [namePatient, setNamePatient] = useState("");
  const [DOBPatient, setDOBPatient] = useState("");
  const [appDatePatient, setAppDatePatient] = useState("");
  const [doctorPatient, setDoctorPatient] = useState("");
  const [concernsPatient, setConcernsPatient] = useState("");
  console.log(doctorPatient);
  console.log(namePatient);
  console.log(DOBPatient);
  console.log(appDatePatient);
  console.log(concernsPatient);

  function handleNewPatientAdd() {
    if (
      !namePatient ||
      namePatient.trim() == "" ||
      !DOBPatient ||
      !appDatePatient ||
      !concernsPatient ||
      concernsPatient.trim() === "" ||
      !doctorPatient
    ) {
      return;
    }
    console.log("clicked");
    const updatedData = storedData.map((doctor) => {
      if (doctor.id === parseInt(doctorPatient)) {
        console.log(doctorPatient);
        const patientIdCounter = doctor.patients
          ? doctor.patients.length + 1
          : 1;
        const updatedPatient = [
          ...(doctor.patients || []),
          {
            id: patientIdCounter,
            patientName: namePatient,
            appointmentData: appDatePatient,
            concerns: concernsPatient,
            isSeen: false,
          },
        ];
        return { ...doctor, patients: updatedPatient };
      }
      return doctor;
    });
    console.log(updatedData);
    setStoredData(updatedData);
    setNamePatient("");
    setDOBPatient("");
    setAppDatePatient("");
    setDoctorPatient("");
    setConcernsPatient("");
  }

  const handleSelect = (e) => {
    setDoctorPatient(e.target.value);
  };

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
                <input
                  id="input0"
                  type="text"
                  onChange={(e) => setNamePatient(e.target.value)}
                  required
                />
                {/* <label htmlFor="input0">Patient Name</label> */}
                <span className="underline"></span>
              </dd>
            </dl>
            <dl className="inputbox">
              <dt className="inputbox-title">Patient DOB</dt>
              <dd className="inputbox-content">
                <input
                  id="input1"
                  type="date"
                  onChange={(e) => setDOBPatient(e.target.value)}
                  required
                />
                <label htmlFor="input1"></label>
                <span className="underline"></span>
              </dd>
            </dl>
            <DoctorSelectDropDownMenu onSelect={handleSelect} />
            <div className="btns">
              <button
                className="btn btn-confirm"
                onClick={() => handleNewPatientAdd()}
              >
                Create Appointment
              </button>
              <button className="btn btn-cancel">Clear Form</button>
            </div>
          </div>
          <div className="input-section-2">
            <dl className="inputbox">
              <dt className="inputbox-title">Appointment Date</dt>
              <dd className="inputbox-content">
                <input
                  id="input2"
                  type="date"
                  onChange={(e) => setAppDatePatient(e.target.value)}
                  required
                />
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
                  onChange={(e) => setConcernsPatient(e.target.value)}
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
