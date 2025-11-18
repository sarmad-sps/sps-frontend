// Car form field configuration
export const carFormFields = [
  {
    name: "brand",
    label: "What is your vehicle Brand?",
    type: "input" as const,
    placeholder: "Enter Brand",
    required: true,
  },
  {
    name: "city",
    label: "What is your city?",
    type: "select" as const,
    placeholder: "--- Your City ---",
    required: true,
    options: [
      { value: "karachi", label: "Karachi" },
      { value: "lahore", label: "Lahore" },
      { value: "islamabad", label: "Islamabad" },
      { value: "rawalpindi", label: "Rawalpindi" },
    ],
  },
  {
    name: "purchaseDate",
    label: "What is your car Purchase date & year?",
    type: "date" as const,
    placeholder: "DD/MM/YYYY",
    required: true,
  },
  {
    name: "model",
    label: "What is your car model?",
    type: "select" as const,
    placeholder: "Your VIN Number",
    required: true,
    options: [
      { value: "2020", label: "2020" },
      { value: "2021", label: "2021" },
      { value: "2022", label: "2022" },
      { value: "2023", label: "2023" },
      { value: "2024", label: "2024" },
    ],
  },
  {
    name: "currentValue",
    label: "What is your car Current Value?",
    type: "input" as const,
    placeholder: "Enter Value",
    required: true,
  },
];

// Bike form field configuration
export const bikeFormFields = [
  {
    name: "brand",
    label: "What is your vehicle Brand?",
    type: "input" as const,
    placeholder: "Enter Brand",
    required: true,
  },
  {
    name: "bikeCC",
    label: "What is your Bike CC?",
    type: "select" as const,
    placeholder: "--- Select ---",
    required: true,
    options: [
      { value: "70cc", label: "70 CC" },
      { value: "100cc", label: "100 CC" },
      { value: "125cc", label: "125 CC" },
      { value: "150cc", label: "150 CC" },
      { value: "200cc", label: "200 CC" },
    ],
  },
  {
    name: "purchaseDate",
    label: "What is your bike Purchase date & year?",
    type: "date" as const,
    placeholder: "DD/MM/YYYY",
    required: true,
  },
  {
    name: "model",
    label: "What is your bike model?",
    type: "select" as const,
    placeholder: "Your VIN Number",
    required: true,
    options: [
      { value: "2020", label: "2020" },
      { value: "2021", label: "2021" },
      { value: "2022", label: "2022" },
      { value: "2023", label: "2023" },
      { value: "2024", label: "2024" },
    ],
  },
  {
    name: "currentValue",
    label: "What is your bike Current Value?",
    type: "input" as const,
    placeholder: "Enter Value",
    required: true,
  },
];

// Health Takaful form field configuration
export const healthTakafulFormFields = [
  {
    name: "yourName",
    type: "input" as const,
    placeholder: "Your Name",
    required: true,
  },
  {
    name: "companyName",
    type: "input" as const,
    placeholder: "Company Name",
    required: true,
  },
  {
    name: "workEmail",
    type: "input" as const,
    placeholder: "Work email",
    required: true,
  },
  {
    name: "city",
    type: "select" as const,
    placeholder: "City",
    required: true,
    options: [
      { value: "karachi", label: "Karachi" },
      { value: "lahore", label: "Lahore" },
      { value: "islamabad", label: "Islamabad" },
      { value: "rawalpindi", label: "Rawalpindi" },
    ],
  },
  {
    name: "employeeCount",
    type: "select" as const,
    placeholder: "Number of employees",
    required: true,
    options: [
      { value: "1-10", label: "1-10" },
      { value: "11-50", label: "11-50" },
      { value: "51-100", label: "51-100" },
      { value: "100+", label: "100+" },
    ],
  },
  {
    name: "insured",
    type: "select" as const,
    placeholder: "Are you insured",
    required: true,
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
];
// Fire Takaful form field configuration
export const fireTakafulFormFields = [
  {
    name: "yourName",
    type: "input" as const,
    placeholder: "Your Name",
    required: true,
  },
  {
    name: "companyName",
    type: "input" as const,
    placeholder: "Company Name",
    required: true,
  },
  {
    name: "workEmail",
    type: "input" as const,
    placeholder: "Work email",
    required: true,
  },
  {
    name: "city",
    type: "select" as const,
    placeholder: "City",
    required: true,
    options: [
      { value: "karachi", label: "Karachi" },
      { value: "lahore", label: "Lahore" },
      { value: "islamabad", label: "Islamabad" },
      { value: "rawalpindi", label: "Rawalpindi" },
    ],
  },
  {
    name: "employeeCount",
    type: "select" as const,
    placeholder: "Number of employees",
    required: true,
    options: [
      { value: "1-10", label: "1-10" },
      { value: "11-50", label: "11-50" },
      { value: "51-100", label: "51-100" },
      { value: "100+", label: "100+" },
    ],
  },
  {
    name: "insured",
    type: "select" as const,
    placeholder: "Are you insured",
    required: true,
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
];
