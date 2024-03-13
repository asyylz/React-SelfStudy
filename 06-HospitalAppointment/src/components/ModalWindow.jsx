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
  const {
    id,
    patientName: prevName,
    appointmentDate: prevAppDate,
    isSeen: prevIsSeen,
    concerns: prevConcerns,
    DOB: prevDOB,
    referral: prevRefferal,
  } = pat;

  //const [updatedPatient, setUpdatedPatient] = useState(pat);
  const [doctorPatient, setDoctorPatient] = useState("");
  const [namePatient, setNamePatient] = useState(prevName);
  const [DOBPatient, setDOBPatient] = useState(prevDOB);
  const [appDatePatient, setAppDatePatient] = useState(prevAppDate);
  const [concernsPatient, setConcernsPatient] = useState(prevConcerns);

  const handleSelect = (e) => {
    setDoctorPatient(e.target.value);
  };
  function handleUpdate() {
    const updatedData = storedData.map((doctor) => {
      if (doctor.id === doc.id) {
        const updatedPatients = doctor.patients.map((patient) => {
          if (patient.id === pat.id) {
            return {
              ...pat,
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
    console.log(pat);
    setStoredData(updatedData);

    const alertMessage = "Would you like patient's case to be updated?";
    alert(alertMessage);
    setModalIsOpen(false);

  }

  useEffect(() => {
    setNamePatient(prevName);
    setConcernsPatient(prevConcerns);
    setAppDatePatient(prevAppDate);
    setDOBPatient(prevDOB);
  }, [prevName, prevConcerns, prevDOB, prevAppDate]);

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
                      setPat({
                        ...pat,
                        patientName: e.target.value,
                      })
                    }
                    value={namePatient || ""}
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
                    onChange={(e) =>
                      setPat({
                        ...pat,
                        DOB: e.target.value,
                      })
                    }
                    value={DOBPatient}
                  />

                  <span className="underline"></span>
                </dd>
              </dl>
              <DoctorSelectDropDownMenu doc={doc} onSelect={handleSelect} />
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
                      setPat({
                        ...pat,
                        appointmentDate: e.target.value,
                      })
                    }
                    value={appDatePatient}
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
                      setPat({
                        ...pat,
                        concerns: e.target.value,
                      })
                    }
                    value={concernsPatient || ""}
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
