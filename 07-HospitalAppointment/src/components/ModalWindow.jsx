import React, { useState, useEffect } from "react";
import DoctorSelectDropDownMenu from "./DoctorSelectDropDownMenu";
import "/src/styles/new-patient.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function ModalWindow({
  pat,
  doc,
  setPat,
  setDoc,
  setStoredData,
  storedData,
  modalIsOpen,
  setModalIsOpen,
}) {
  
  const [updatedPatient, setUpdatedPatient] = useState({
    patientName: pat.patientName,
    DOB: pat.DOB,
    concerns: pat.concerns,
    appointmentDate: pat.appointmentDate,
    isSeen: pat.isSeen,
    patientDoc: pat.patientDoc,
    referral: pat.referral,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUpdatedPatient((prevPatient) => {
      return {
        ...prevPatient,
        [inputIdentifier]: newValue,
      };
    });
  }

  function handleUpdate() {
    const updatedData = storedData.map((doctor) => {
      if (doctor.id === doc.id) {
        const updatedPatients = doctor.patients.map((patient) => {
          if (patient.id === pat.id) {
            return {
              ...updatedPatient,
            };
          }
          return patient;
        });
        return {
          ...doctor,
          patients: updatedPatients,
        };
      }
      return doctor;
    });

    setStoredData(updatedData);

    const alertMessage = "Would you like patient's case to be updated?";
    alert(alertMessage);
    setModalIsOpen(false);
  }

  return (
    <Modal
      id="modal"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Modal"
      style={customStyles}
    >
      <div id="wrap" className="input">
        <section className="input-content">
          <h2>
            Patient Details<span> (Update)</span>
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
                    value={updatedPatient.patientName}
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
                    value={updatedPatient.DOB}
                  />

                  <span className="underline"></span>
                </dd>
              </dl>
              {/* DROPDOWN INPUT */}
              <DoctorSelectDropDownMenu
                doc={doc}
                onSelect={(e) =>
                  handleInputChange("patientDoc", e.target.value)
                }
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
                    value={updatedPatient.referral ? "Yes" : "No"}
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
                  onClick={(e) => handleUpdate()}
                >
                  Update Detailes
                </button>
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
                    value={updatedPatient.appointmentDate}
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
                    value={updatedPatient.concerns}
                  ></textarea>

                  <span className="underline"></span>
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
}
