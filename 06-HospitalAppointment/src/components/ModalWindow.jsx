import React, { useState } from "react";
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
  setStoredData,
  storedData,
  modalIsOpen,
  setModalIsOpen,
}) {
  const [updatedPatient, setUpdatedPatient] = useState(pat);
  const [namePatient, setNamePatient] = useState(pat.patientName);
  const [DOBPatient, setDOBPatient] = useState(pat.DOB);
  const [appDatePatient, setAppDatePatient] = useState(pat.appointmentDate);
  const [doctorPatient, setDoctorPatient] = useState("");
  const [concernsPatient, setConcernsPatient] = useState(pat.concerns);

  const handleSelect = (e) => {
    setDoctorPatient(e.target.value);
  };
  function handleUpdate(patient, doctor) {
    console.log(patient, doctor);
    const updatedData = storedData.map((doctor) => {
      if (doctor.id === doc.id) {
        const updatedPatients = doctor.patients.map((patient) => {
          if (patient.id === pat.id) {
            return {
              ...patient,
              isSeen: !patient.isSeen,
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
  }

//   useEffect(() => {
//     setTitle(eskiTitle);
//     setDescription(eskiDesc);
//   }, [eskiDesc, eskiTitle]);

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
                    // onChange={(e) => setNamePatient(e.target.value)}
                    onChange={() =>
                      setUpdatedPatient({
                        ...updatedPatient,
                        patientName: e.target.value,
                      })
                    }
                    value={namePatient}
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
                    onChange={() =>
                      setUpdatedPatient({
                        ...updatedPatient,
                        DOB: e.target.value,
                      })
                    }
                    value={pat.DOB}
                    required
                  />

                  <span className="underline"></span>
                </dd>
              </dl>
              <DoctorSelectDropDownMenu doc={doc} onSelect={handleSelect} />
              <div className="btns">
                <button
                  className="btn btn-confirm"
                  onClick={() => handleUpdate()}
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
                    // onChange={(e) => setAppDatePatient(e.target.value)}
                    onChange={() =>
                      setUpdatedPatient({
                        ...updatedPatient,
                        appointmentDate: e.target.value,
                      })
                    }
                    value={pat.appointmentDate}
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
                    // onChange={(e) => setConcernsPatient(e.target.value)}
                    onChange={() =>
                      setUpdatedPatient({
                        ...updatedPatient,
                        concerns: e.target.value,
                      })
                    }
                    value={pat.concerns}
                    required
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
