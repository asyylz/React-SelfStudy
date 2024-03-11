import { useState } from "react";
import CurrentDoctorPage from "./CurrentDoctorPage";
import "/src/styles/doctor-profile-cards.css";

export default function Doctors({ storedData, doctorsTabSelected , setStoredData }) {

  const [currentDoctorSelected, setCurrentDoctorSelected] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState([]);

  function handleCurrentDoctorDetails(dr) {
    setCurrentDoctorSelected(!currentDoctorSelected);
    setCurrentDoctor(dr);
  }
  return (
    <>
      {doctorsTabSelected && !currentDoctorSelected ? (
        <ul className="card-doctors-wrapper">
          {storedData.map((doctor) => (
            <li
              key={doctor.id}
              onClick={() => handleCurrentDoctorDetails(doctor)}
            >
              <a href="#" className="doctor-profile-card">
                <img src={doctor.img} className="card-image" alt="" />
                <div className="card-overlay">
                  <div className="card-header">
                    <svg
                      className="card-arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
                    </svg>
                    <img className="card-thumb" src={doctor.img} alt="" />
                    <div className="card-header-text">
                      <h2 className="card-title">{doctor.doctorName}</h2>
                      <h3>{doctor.expertiseField}</h3>
                    </div>
                  </div>
                  <p className="card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, blanditiis?
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <CurrentDoctorPage currentDoctor={currentDoctor} storedData={storedData} setStoredData={setStoredData} />
      )}
    </>
  );
}
