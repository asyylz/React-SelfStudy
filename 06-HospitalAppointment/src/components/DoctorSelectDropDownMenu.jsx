import React, { useState } from "react";
import Data from "../helper/Data";

export default function DoctorSelectDropDownMenu() {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  return (
    <div>
      <label htmlFor="doctorSelect">Select a doctor:</label>
      <select
        id="doctorSelect"
        value={selectedDoctor}
        onChange={handleDoctorChange}
      >
        <option value="">Select a doctor</option>
        {Data.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>
            {doctor.doctorName}
          </option>
        ))}
      </select>
      {selectedDoctor && (
        <div>
          You have selected:{" "}
          {
            Data.find((doctor) => doctor.id === parseInt(selectedDoctor))
              .doctorName
          }
        </div>
      )}
    </div>
  );
}
