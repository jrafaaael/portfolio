import {
  Tech,
  ARDUINO,
  EXPRESS,
  JAVASCRIPT,
  NODE,
  PYTHON,
  REACT,
  SOCKETIO,
  TAILWIND,
} from "./techs";

export interface BaseProject {
  title: string;
  description: string;
  stack: Tech[];
  contribution: string[];
}

interface HasGUI {
  img: string;
}

interface NoHasGUI {
  code: string[];
}

export type ProjectWithGUI = BaseProject & HasGUI;
export type ProjectWithoutGUI = BaseProject & NoHasGUI;

export const guiProjects: ProjectWithGUI[] = [
  {
    title: "ecg",
    description: `Hardware, FrontEnd and BackEnd development to visualize ECG plot in multiple devices simultaneously in real-time through WiFi in user's preferred browser.`,
    stack: [JAVASCRIPT, NODE, EXPRESS, SOCKETIO, ARDUINO],
    contribution: ["Hardware", "FrontEnd", "BackEnd", "Design"],
    img: "/images/ecg.webp",
  },
  {
    title: "sigi",
    description: `Self-hosted app to share files on local network and generate "Plan Operativo Anual" (POA) document. Also allow internal comunication between teams through real-time chat. Backend built with PHP (Laravel) by a coworker.`,
    stack: [JAVASCRIPT, REACT, TAILWIND, SOCKETIO],
    contribution: ["FrontEnd", "Design"],
    img: "/images/sigi.webp",
  },
];

export const noGuiProjects: ProjectWithoutGUI[] = [
  {
    title: "tw-rt-report",
    description:
      "Script to generate a report spreadsheet with all retweets made by a list of users to @account in the current month.",
    stack: [PYTHON],
    contribution: ["Software"],
    code: [
      "import tweepy",
      "",
      "def get_tweet(id):",
      "  tweets = tweepy.get_users_tweets(id)",
      "  return tweets",
    ],
  },
  {
    title: "school-bell-automation",
    description: `School bell automation of "Complejo Educativo Fray Luís Amigó" for each start, recess and end of classes of each course.`,
    stack: [ARDUINO],
    contribution: ["Hardware", "Software"],
    code: [
      "import tweepy",
      "",
      "def get_tweet(id):",
      "  tweets = tweepy.get_users_tweets(id)",
      "  return tweets",
    ],
  },
];
