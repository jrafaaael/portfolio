import {
  Tech,
  ARDUINO,
  EXPO,
  EXPRESS,
  JAVASCRIPT,
  NODE,
  PYTHON,
  REACT,
  REACT_NATIVE,
  SOCKETIO,
  TAILWIND,
  TYPESCRIPT,
} from "./techs";

export interface Project {
  title: string;
  description: string;
  stack: Tech[];
  img: string;
}

export const projects: Project[] = [
  {
    title: "ecg",
    description: `visualize the ECG graph in different devices simultaneously in real time through WiFi in the patient/doctor's preferred browser. developed for the subject "Instrumentación Médica IV" and chosen to be exposed at the "Expo Investigación Universitaria 2022"`,
    stack: [JAVASCRIPT, NODE, EXPRESS, SOCKETIO, ARDUINO],
    img: "/images/ecg.webp",
  },
  {
    title: "tw-rt-report",
    description:
      "script that generate a SpreadSheet with all retweets made by @account_a to @account_b in the current month. developed for CMSF",
    stack: [PYTHON],
    img: "/images/code.webp",
  },
  {
    title: "sigi",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nostrum eius, nemo iste iure odit voluptates vel quisquam ad sint ullam, placeat dolore aliquid voluptatem corrupti necessitatibus magnam ea quia.`,
    stack: [JAVASCRIPT, REACT, TAILWIND],
    img: "/images/sigi.webp",
  },
  {
    title: "moodhub",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nostrum eius, nemo iste iure odit voluptates vel quisquam ad sint ullam, placeat dolore aliquid voluptatem corrupti necessitatibus magnam ea quia.`,
    stack: [TYPESCRIPT, REACT, REACT_NATIVE, EXPO],
    img: "/images/arduino.webp",
  },
  {
    title: "school-bell-automation",
    description: `automation of the school bell of "Complejo Educativo Fray Luís Amigó" for each start of class, recess and end of classes of each section and grade`,
    stack: [ARDUINO],
    img: "/images/arduino.webp",
  },
];
