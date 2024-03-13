import React, { useState } from "react";
import Data from "../helper/Data";
import { useEffect } from "react";

export default function DoctorSelectDropDownMenu({
  onSelect,
  doc,
  selectedDoctor,
}) {
const [selected, setSelected] = useState("");

 useEffect(() => {
  setSelected(selectedDoctor || "");
}, [selectedDoctor]);

  const handleDoctorChange = (event) => {
    setSelected(event.target.value);
    onSelect(event);
  };

  return (
    <div className="input">
      <dl className="inputbox">
        <dt className="inputbox-title">Select a doctor:</dt>
        <dd className="inputbox-content">
          <select
            id="doctorSelect"
            // value={doc?.id || selectedDoctor}
            value={selected}
            onChange={handleDoctorChange}
            // onChange={(e) => {
            //   handleDoctorChange(e);
            //   onSelect(e);
            // }}
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
