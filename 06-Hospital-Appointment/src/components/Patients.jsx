import "/src/styles/patient-doctor-page.css";
import Patient from "./Patient";
export default function Patients({ selectedDoctor, patientList }) {
  console.log(selectedDoctor);
  console.log(patientList);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="border-bottom p-4">
            <div className="osahan-user text-center">
              <div className="osahan-user-media p-3">
                <h2>{selectedDoctor.expertiseField}</h2>
                <img
                  className="mb-3 rounded-pill shadow-sm mt-1"
                  src={selectedDoctor.img}
                  alt={selectedDoctor.doctorName}
                />
                <div className="osahan-user-media-body">
                  <h6 className="mb-2">{selectedDoctor.doctorName}</h6>
                  <p className="mb-1">{selectedDoctor.telNumber}</p>
                  <p>{selectedDoctor.email}</p>
                  <p className="mb-0 text-black font-weight-bold">
                    <button class="button-33" role="button">
                      Contact
                    </button>
                    <div className="book-appointment">
                      <h4 className="mt-3">Book Appointment</h4>
                      <label htmlFor="appointment-input">Name:</label>
                      <input id="appointment-input" type="text" />
                      <label htmlFor="appointment-date">Date:</label>
                      <input id="appointment-date" type="date" />
                      <textarea
                        className=""
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                      <button className="button-33 m-3" role="button">
                        Book
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 mt-4">
          <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade active show"
                id="offers"
                role="tabpanel"
                aria-labelledby="offers-tab"
              >
                <div className="row mb-4 pb-2">
                  <Patient patientList={patientList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
