import {
  FaRegEye,
  FaRegEdit,
  FaRegTrashAlt,
  FaWheelchair,
} from "react-icons/fa";
import "/src/styles/doctor-profile-cards.css";

export default function Doctors({ dataDoctors }) {
  console.log(dataDoctors);
  return (
    <ul className="card-doctors-wrapper">
    {dataDoctors.map((doctor) =>
      <li key={doctor.id}>
        <a href="" className="doctor-profile-card">
          <img
            src={doctor.img}
            className="card-image"
            alt=""
          />
          <div className="card-overlay">
            <div className="card-header">
              <svg className="card-arc" xmlns="http://www.w3.org/2000/svg">
              <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
              </svg>
              <img
                className="card-thumb"
                src={doctor.img}
                alt=""
              />
              <div className="card-header-text">
                <h2 className="card-title">Jessica Parker</h2>
                <h3>{doctor.expertiseField}</h3>
              </div>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis?
            </p>
          </div>
        </a>
      </li>)}
    </ul>
  );
}
