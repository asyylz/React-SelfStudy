import "/src/styles/patient-doctor-page.css";
import Patient from "./Patient";
import { useState } from "react";
import Data from "../helper/Data";
export default function Patients({
  selectedDoctor,
  patientList,
  setPatientList,
  updateData,
}) {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [textarea, setTextarea] = useState("");

  // function handleNewAppointment() {
  //   if (
  //     !input ||
  //     !date ||
  //     !textarea ||
  //     input.trim() === "" ||
  //     textarea.trim() === ""
  //   ) {
  //     return;
  //   }
  //   // Assuming selectedDoctor is defined and patientList is the list of patients for that doctor
  //   if (selectedDoctor) {
  //     const patientIdCounter = selectedDoctor.patient.length + 1; // Incrementing patient ID
  //     const newPatient = {
  //       id: patientIdCounter,
  //       patientName: input.trim(), // Assuming input holds the patient's name
  //       appointmentDate: date, // Assuming date holds the appointment date
  //       isSeen: false, // Assuming the patient hasn't been seen yet
  //       concern: textarea.trim(), // Assuming textarea holds the patient's concern
  //     };

  //     // Update the patient list for the selected doctor
  //     //const updatedPatientList = [...selectedDoctor.patient, newPatient];

  //     // Update the state with the updated patient list
  //     //setPatientList(updatedPatientList);
  //     //updateData(selectedDoctor.id, newPatient);
  //     const doctorIndex = Data.findIndex(
  //       (doctor) => doctor.id === selectedDoctor.id
  //     );
  //   }
  //   if (doctorIndex !== -1) {
  //     Data[doctorIndex].patient.push(newPatient);
  //     console.log(Data);
  //   }
  // }
  function handleNewAppointment() {
    // Check if the input fields are empty or only contain whitespace
    if (
      !input ||
      !date ||
      !textarea ||
      input.trim() === "" ||
      textarea.trim() === ""
    ) {
      return;
    }

    // Assuming selectedDoctor is defined
    if (selectedDoctor) {
      const patientIdCounter = selectedDoctor.patient.length + 1; // Incrementing patient ID
      const newPatient = {
        id: patientIdCounter,
        patientName: input.trim(),
        appointmentDate: date,
        isSeen: false,
        concern: textarea.trim(),
      };

      // Find the doctor in the Data array
      const doctorIndex = Data.findIndex(
        (doctor) => doctor.id === selectedDoctor.id
      );

      // If the doctor is found, push the new patient to the doctor's patient array
      if (doctorIndex !== -1) {
        Data[doctorIndex].patient.push(newPatient);
      }

      // Optionally, you can log the updated Data array
      console.log(Data);
      updateData(selectedDoctor.id, newPatient);
    }
  }

  return 
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-3">
    //       <div className="border-bottom p-4">
    //         <div className="osahan-user text-center">
    //           <div className="osahan-user-media p-3">
    //             <h2>{selectedDoctor.expertiseField}</h2>
    //             <img
    //               className="mb-3 rounded-pill shadow-sm mt-1"
    //               src={selectedDoctor.img}
    //               alt={selectedDoctor.doctorName}
    //             />
    //             <div className="osahan-user-media-body">
    //               <h6 className="mb-2">{selectedDoctor.doctorName}</h6>
    //               <p className="mb-1">{selectedDoctor.telNumber}</p>
    //               <p>{selectedDoctor.email}</p>
    //               <p className="mb-0 text-black font-weight-bold">
    //                 <button className="button-33" role="button">
    //                   Contact
    //                 </button>
    //               </p>
    //               <div className="book-appointment">
    //                 <h4 className="mt-3">Book Appointment</h4>
    //                 <label htmlFor="appointment-input">Name:</label>
    //                 <input
    //                   id="appointment-input"
    //                   type="text"
    //                   onChange={(e) => setInput(e.target.value)}
    //                 />
    //                 <label htmlFor="appointment-date">Date:</label>
    //                 <input
    //                   id="appointment-date"
    //                   type="date"
    //                   onChange={(e) => setDate(e.target.value)}
    //                 />
    //                 <label htmlFor="appointment-message">Your concerns:</label>
    //                 <textarea
    //                   htmlFor="appointment-message"
    //                   className="p-1"
    //                   name=""
    //                   id=""
    //                   cols="30"
    //                   rows="10"
    //                   value={textarea} // Binding the value to the state variable textarea
    //                   onChange={(e) => setTextarea(e.target.value)}
    //                 ></textarea>
    //                 <button
    //                   className="button-33 m-3"
    //                   role="button"
    //                   onClick={handleNewAppointment}
    //                 >
    //                   Book
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="patient-container" className="col-md-9 mt-4">
    //       <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
    //         <div className="tab-content" id="myTabContent">
    //           <div
    //             className="tab-pane fade active show"
    //             id="offers"
    //             role="tabpanel"
    //             aria-labelledby="offers-tab"
    //           >
    //             <div className="row mb-4 pb-2">
    //               <Patient patientList={patientList} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  
}
