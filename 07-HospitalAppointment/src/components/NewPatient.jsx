import React, { useState } from "react";
import DoctorSelectDropDownMenu from "./DoctorSelectDropDownMenu";
import "/src/styles/new-patient.css";

export default function NewPatient({ storedData, setStoredData }) {
  const [patient, setPatient] = useState({
    patientName: "",
    DOB: "",
    concerns: "",
    appointmentDate: "",
    isSeen: false,
    patientDoc: "",
    referral: false,
  });
  const resetPatient = () => {
    setPatient({
      patientName: "",
      DOB: "",
      concerns: "",
      appointmentDate: "",
      isSeen: false,
      patientDoc: "",
      referral: false,
    });
  };

  const inputIsValid =
    !patient.patientName ||
    patient.patientName.trim() === "" ||
    !patient.DOB ||
    !patient.appointmentDate ||
    !patient.concerns ||
    patient.concerns.trim() === "" ||
    !patient.patientDoc;

  // const handleSelect = (e) => {
  //   setDoctorPatient(e.target.value);
  // };

  function handleNewPatientAdd() {
    if (inputIsValid) {
      const alertMessage = "Please enter all details...";
      alert(alertMessage);
      return;
    }

    const updatedData = storedData.map((doctor) => {
      if (doctor.id === parseInt(patient.patientDoc)) {
        const patientIdCounter = doctor.patients
          ? doctor.patients.length + 1
          : 1;
        const updatedPatient = [
          ...(doctor.patients || []),
          { id: patientIdCounter, ...patient },
        ];
        return { ...doctor, patients: updatedPatient };
      }
      return doctor;
    });

    setStoredData(updatedData);
    resetPatient();
  }

  function handleInputChange(inputIdentifier, newValue) {
    setPatient((prevPatient) => {
      return {
        ...prevPatient,
        [inputIdentifier]: newValue,
      };
    });
  }


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
                  onChange={(e) =>
                    handleInputChange("patientName", e.target.value)
                  }
                  value={patient.patientName}
                  required
                />

                <span className="underline"></span>
              </dd>
            </dl>
            <dl className="inputbox">
              <dt className="inputbox-title">Patient DOB</dt>
              <dd className="inputbox-content">
                <input
                  id="input1"
                  type="date"
                  onChange={(e) => handleInputChange("DOB", e.target.value)}
                  value={patient.DOB}
                  required
                />

                <span className="underline"></span>
              </dd>
            </dl>
            <DoctorSelectDropDownMenu
              onSelect={(e) => handleInputChange("patientDoc", e.target.value)}
              doctorPatient={patient.patientDoc}
            />

            <dl className="inputbox">
              <dt className="inputbox-title">Referral:</dt>
              <dd className="inputbox-content">
                <select
                  id="referral"
                  onChange={(e) =>
                    handleInputChange(
                      "referral",
                      e.target.value === "Yes" ? true : false
                    )
                  }
                  value={patient.referral ? "Yes" : "No"}
                >
                  <option value="">Select referral status:</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </dd>
            </dl>

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
                  onChange={(e) =>
                    handleInputChange("appointmentDate", e.target.value)
                  }
                  value={patient.appointmentDate}
                  required
                />

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
                  onChange={(e) =>
                    handleInputChange("concerns", e.target.value)
                  }
                  value={patient.concerns}
                  required
                ></textarea>

                <span className="underline"></span>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
