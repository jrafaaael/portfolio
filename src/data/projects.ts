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
    description: `Hardware and software development to visualize ECG plot in multiple devices simultaneously in real-time through WiFi in patient/doctor's preferred browser.`,
    shortDescription:
      "visualize ECG plot in multiple devices simultaneously in real-time through WiFi in patient/doctor's preferred browser.",
    stack: [JAVASCRIPT, NODE, EXPRESS, SOCKETIO, ARDUINO],
    img: "/images/ecg.webp",
  },
  {
    title: "sigi",
    description: `Internal tool to share files on local network and generate "Plan Operativo Anual" (POA) document. Also allow internal comunication between teams through real-time chat.`,
    shortDescription:
      "internal tool to share files on local network, generate POA and chat in real-time.",
    stack: [JAVASCRIPT, REACT, TAILWIND, SOCKETIO],
    img: "/images/sigi.webp",
  },
  {
    title: "tw-rt-report",
    description:
      "Python script to generate a report spreadsheet with all retweets made by a list of users to @account in the current month.",
    shortDescription:
      "script to track retweets made by a list of users to @account in the current month.",
    stack: [PYTHON],
    img: "/images/python_code.webp",
  },
  {
    title: "school-bell-automation",
    description: `School bell automation of "Complejo Educativo Fray Luís Amigó" for each start of classes, recess and end of classes of each course.`,
    shortDescription:
      "school bell automation for each start of classes, recess and end of classes of each course.",
    stack: [ARDUINO],
    img: "/images/arduino.webp",
  },
  {
    title: "moodhub",
    description: `App to track emotions daily.`,
    shortDescription: null,
    stack: [TYPESCRIPT, REACT_NATIVE, EXPO],
    img: null,
  },
];
