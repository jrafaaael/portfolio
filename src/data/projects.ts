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
  img: string | null;
  shortDescription: string | null;
}

export const projects: Project[] = [
  {
    title: "ecg",
    description: `hardware and software development to visualize ECG plot in multiple devices simultaneously in real-time through WiFi in patient/doctor's preferred browser. developed for the subject "Instrumentación Médica IV" and chosen to be exposed at "Expo Investigación Universitaria 2022"`,
    shortDescription:
      "visualize ECG plot in multiple devices simultaneously in real-time through WiFi in patient/doctor's preferred browser.",
    stack: [JAVASCRIPT, NODE, EXPRESS, SOCKETIO, ARDUINO],
    img: "/images/ecg.webp",
  },
  {
    title: "sigi",
    description: `internal tool to share files on local network and generate "Plan Operativo Anual" (POA) document. also allow internal comunication between teams through real-time chat. developed for CMSF`,
    shortDescription:
      "internal tool to share files on local network, generate POA and chat in real-time.",
    stack: [JAVASCRIPT, REACT, TAILWIND, SOCKETIO],
    img: "/images/sigi.webp",
  },
  {
    title: "tw-rt-report",
    description:
      "script to generate a spreadsheet with all retweets made by a list of users to @account in the current month. developed for CMSF",
    shortDescription:
      "track retweets made by a list of users to @account in the current month.",
    stack: [PYTHON],
    img: "/images/python_code.webp",
  },
  {
    title: "school-bell-automation",
    description: `automation of "Complejo Educativo Fray Luís Amigó"\`s school bell for each start of classes, recess and end of classes of each section and grade`,
    shortDescription:
      "school bell automation for each start of classes, recess and end of classes of each section and grade.",
    stack: [ARDUINO],
    img: "/images/arduino.webp",
  },
  {
    title: "moodhub",
    description: `app to track emotions daily.`,
    shortDescription: null,
    stack: [TYPESCRIPT, REACT_NATIVE, EXPO],
    img: null,
  },
];
