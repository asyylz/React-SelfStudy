const Data = [
  {
    id: 1,
    doctorName: "Dr. John Smith",
    img: "./public/ahmet.png",
    expertiseField: "Cardiology",
    email: "john.smith@example.com",
    telNumber: "+1234567890",
    patients: [
      {
        id: 1,
        patientName: "John Doe",
        appointmentDate: "2024-03-10",
        isSeen: true,
        concerns: "Chest pain and shortness of breath",
        referral: true
      },
      {
        id: 2,
        patientName: "Jane Smith",
        appointmentDate: "2024-03-15",
        isSeen: false,
        concerns: "High blood pressure and headaches",
        referral: false
      }
    ]
  },
  {
    id: 2,
    doctorName: "Dr. Emily Johnson",
    img: "./public/ahmet.png",
    expertiseField: "Pediatrics",
    email: "emily.johnson@example.com",
    telNumber: "+1987654321",
    patients: [
      {
        id: 1,
        patientName: "Michael Brown",
        appointmentDate: "2024-03-12",
        isSeen: false,
        concerns: "Fever and cough",
        referral: false
      },
      {
        id: 2,
        patientName: "Emma Green",
        appointmentDate: "2024-03-18",
        isSeen: true,
        concerns: "Stomach pain and vomiting",
        referral: true
      }
    ]
  },
  {
    id: 3,
    doctorName: "Dr. Michael Brown",
    img: "./public/ahmet.png",
    expertiseField: "Orthopedics",
    email: "michael.brown@example.com",
    telNumber: "+1122334455",
    patients: [
      {
        id: 1,
        patientName: "Liam Johnson",
        appointmentDate: "2024-03-19",
        isSeen: false,
        concerns: "Fractured arm",
        referral: false
      },
      {
        id: 2,
        patientName: "Olivia Clark",
        appointmentDate: "2024-03-23",
        isSeen: true,
        concerns: "Back pain",
        referral: true
      }
    ]
  },
  {
    id: 4,
    doctorName: "Dr. Sarah White",
    img: "./public/ahmet.png",
    expertiseField: "Dermatology",
    email: "sarah.white@example.com",
    telNumber: "+9988776655",
    patients: [
      {
        id: 1,
        patientName: "Ethan Miller",
        appointmentDate: "2024-03-21",
        isSeen: true,
        concerns: "Skin rash",
        referral: true
      },
      {
        id: 2,
        patientName: "Ava Wilson",
        appointmentDate: "2024-03-25",
        isSeen: false,
        concerns: "Acne",
        referral: false
      }
    ]
  },
  {
    id: 5,
    doctorName: "Dr. Olivia Martinez",
    img: "./public/ahmet.png",
    expertiseField: "Neurology",
    email: "olivia.martinez@example.com",
    telNumber: "+3344556677",
    patients: [
      {
        id: 1,
        patientName: "Noah Anderson",
        appointmentDate: "2024-03-22",
        isSeen: false,
        concerns: "Headaches and dizziness",
        referral: false
      },
      {
        id: 2,
        patientName: "Sophia Thomas",
        appointmentDate: "2024-03-26",
        isSeen: true,
        concerns: "Memory loss",
        referral: true
      }
    ]
  },
  // Add more doctors with their patients...
];

export default Data;
