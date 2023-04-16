import type { Lang } from "shiki";
import { Tech, ARDUINO, PYTHON } from "./techs";

export interface BaseProject {
  title: string;
  description: string;
  stack: Tech[];
  contribution: string[];
}

interface NoHasGUI {
  lang: Lang;
  code: string[];
}

export type ProjectWithoutGUI = BaseProject & NoHasGUI;

export const noGuiProjects: ProjectWithoutGUI[] = [
  {
    title: "tw-rt-report",
    description:
      "Script to generate a report spreadsheet with all retweets made by a list of users to @account in the current month.",
    stack: [PYTHON],
    contribution: ["Software"],
    lang: "python",
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
    lang: "cpp",
    code: [
      "void setup() {",
      "  if (!rtc.begin()) {",
      '    Serial.print("rtc not found");',
      "  }",
      "}",
    ],
  },
];
