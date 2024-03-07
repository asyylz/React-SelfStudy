import "/src/styles/patient-buttons.css";
import "/src/styles/patient-card.css";
import "/src/styles/docs-profiles.css";
export default function Patient({ patientList }) {
  console.log(patientList);
  return (
    <>
      {patientList.map((patient) => (
        <div key={patient.id} className="col-md-6 ag-format-container">
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                  {patient.patientName}
                  <h5 className="concerns" style={{ color: "white" }}>
                    {" "}
                    {patient.concerns}
                  </h5>
                </div>
                <div className="ag-courses-item_date-box">
                  Date:
                  <span className="ag-courses-item_date m-2">
                    {patient.appointmentDate}
                  </span>
                </div>
                <button class="button-33" role="button">
                  CLOSE CASE
                </button>
                <button class="button-33" role="button">
                  REFER
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

{
  /* <div key={patient.id} className="col-md-6 patient-card">
          <div className="card offer-card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{patient.patientName}</h5>
              <h4 className="card-subtitle mb-2 text-block">
                Patient Concerns:
              </h4>
              <p className="card-text">{patient.concerns}</p>
              <button class="button-33" role="button">
                CLOSE CASE
              </button>
              <button class="button-33" role="button">
                REFER
              </button>
            </div>
          </div>
        </div> */
}
