import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import Patients from "./Patients";
import { useState } from "react";
import "/src/styles/docs-profiles.css";

export default function MainPage({ dataDoctors, updateData }) {
  const [doctorSelected, setdoctorSelected] = useState(false);
  const [patientList, setPatientList] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  function handleBringPatients(drName) {
    dataDoctors.map((doctor) => {
      if (doctor.doctorName === drName) {
        setdoctorSelected(true);
        setPatientList(doctor.patient);
        setSelectedDoctor(doctor);
      }
    });
  }

  //console.log(patientList);
  //console.log(selectedDoctor);

  // ASK neden iki kere print ediyor
  // console.log(patientList)

  //  filter calismasi ASK
  // function handleBringPatients(drName) {
  //   console.log(drName);
  //   const selectedDoctor = dataDoctors.filter(
  //     (doctor) => doctor.doctorName === drName
  //   );
  //   setPatientList(selectedDoctor.patient);
  // }

  return (
    <>
      {doctorSelected ? (
        <Patients
          selectedDoctor={selectedDoctor}
          patientList={patientList}
          dataDoctors={dataDoctors}
          setPatientList={setPatientList}
          updateData={updateData}
        />
      ) : (
        {/* <MDBContainer className="px-3 mt-4">
          <MDBRow className="row-cols-sm-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-5 ">
            {dataDoctors.map((doctor) => (
              <MDBCol key={doctor.id}>
                <div className="p-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={doctor.img} />
                    <Card.Body>
                      <Card.Title>{doctor.doctorName}</Card.Title>
                      <Card.Text>{doctor.expertiseField}</Card.Text>
                      <Button
                        onClick={() => handleBringPatients(doctor.doctorName)}
                        variant="primary"
                      >
                        BOOKING
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer> */}

        
      )}
    </>
  );
}
