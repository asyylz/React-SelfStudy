import React, { useState } from "react";
import Data from "../helper/Data";

export default function DoctorSelectDropDownMenu({ onSelect }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  return (
    <div className="input">
      <dl className="inputbox">
        <dt className="inputbox-title">Select a doctor:</dt>
        <dd className="inputbox-content">
          <select
            id="doctorSelect"
            value={selectedDoctor}
            onChange={(e) => {
              handleDoctorChange(e);
              onSelect(e);
            }}
          >
            <option value="">Select a doctor</option>
            {Data.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.doctorName}
              </option>
            ))}
          </select>
        </dd>
      </dl>
      {selectedDoctor && (
        <div className="inputbox-content">
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
