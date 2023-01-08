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
  img?: string;
}

export const projects: Project[] = [
  {
    title: "ecg",
    description: `visualize ECG plot in different devices simultaneously in real-time through WiFi in the patient/doctor's preferred browser. developed for the subject "Instrumentación Médica IV" and chosen to be exposed at "Expo Investigación Universitaria 2022"`,
    stack: [JAVASCRIPT, NODE, EXPRESS, SOCKETIO, ARDUINO],
    img: "/images/ecg.webp",
  },
  {
    title: "tw-rt-report",
    description:
      "script that generate a spreadsheet with all retweets made by @account_a to @account_b in the current month. developed for CMSF",
    stack: [PYTHON],
    img: "/images/code.webp",
  },
  {
    title: "sigi",
    description: `internal tool to share files on local network and generate "Plan Operativo Anual" (POA) document. also allow internal comunication between teams through real-time chat. developed for CMSF`,
    stack: [JAVASCRIPT, REACT, TAILWIND],
    img: "/images/sigi.webp",
  },
  {
    title: "moodhub",
    description: `app to track emotions daily`,
    stack: [TYPESCRIPT, REACT_NATIVE, EXPO],
  },
  {
    title: "school-bell-automation",
    description: `automation of "Complejo Educativo Fray Luís Amigó"\`s school bell for each start of class, recess and end of classes of each section and grade`,
    stack: [ARDUINO],
    img: "/images/arduino.webp",
  },
].sort((a, b) => b.description.length - a.description.length);
