import MainPage from "../components/MainPage";
import React, { useState, useEffect} from 'react';
import Data from "../helper/Data";


export default function Home() {

  const [data, setData] = useState(Data); // State to manage the Data array

  // Function to update the Data array with new patient
  const updateData = (doctorId, newPatient) => {
    const updatedData = Data.map((doctor) => {
      if (doctor.id === doctorId) {
        return {
          ...doctor,
          patient: [...doctor.patient, newPatient], // Add new patient to the doctor's patient list
        };
      } else {
        return doctor;
      }
    });

    setData(updatedData); // Update the state with the updated Data array

  };


  return <MainPage dataDoctors={Data} updateData={updateData} />;
}
