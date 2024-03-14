import { useState, useEffect } from "react";
import LocalStoragePostGet from "../components/LocalStoragePostGet";
import Data from "../helper/Data";

// Function to initialize state using LocalStoragePostGet hook
function useStoredData() {
  return LocalStoragePostGet("dataInfo", Data);
}
export function handleDeletePatient(
  patientID,
  patientName,
  doctorID,
  storedData,
  setStoredData
) {
  const updatedDoctor = storedData.find((doctor) => doctor.id === doctorID);

  if (!updatedDoctor) {
    console.error("Doctor not found in stored data.");
    return;
  }

  const updatedPatients = updatedDoctor.patients.filter(
    (patient) => patient.id !== patientID
  );

  updatedDoctor.patients = updatedPatients;

  const updatedData = storedData.map((doctor) => {
    if (doctor.id === updatedDoctor.id) {
      return { ...doctor, patients: updatedPatients };
    }
    return doctor;
  });

  setStoredData(updatedData);
  const alertMessage = "Would you like patient's case to be deleted ?";
  alert(alertMessage);
}

export function handleIsSeenStatus(
  patientID,
  patientName,
  doctorID,
  patientStatus,
  storedData,
  setStoredData
) {
  const updatedData = storedData.map((doctor) => {
    if (doctor.id === doctorID) {
      const updatedPatients = doctor.patients.map((patient) => {
        if (patient.id === patientID && patient.patientName === patientName) {
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

  setStoredData(updatedData);

  if (!patientStatus) {
    const alertMessage = "Would you like Patient's case to be completed ?";
    alert(alertMessage);
  }
}
