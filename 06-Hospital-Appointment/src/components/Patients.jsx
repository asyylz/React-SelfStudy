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

  return;
}
