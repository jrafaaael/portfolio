import type { Lang } from "shiki";

export interface BaseProject {
  title: string;
  description: string;
  stack: string[];
  link?: string;
}

interface WithImg {
  img: string;
  lang?: never;
  code?: never;
}

interface WithCode {
  lang: Lang;
  code: string[];
  img?: never;
}

export type ProjectWithImg = BaseProject & WithImg;
export type ProjectWithCode = BaseProject & WithCode;
export type Project = BaseProject & (WithImg | WithCode);

export const projects: Project[] = [
  {
    title: "ecg",
    description:
      "Visualize ECG plot in multiple devices simultaneously through WiFi in user's preferred browser.",
    stack: ["javascript", "express", "socketio", "arduino"],
    img: "/images/ecg.webp",
  },
  {
    title: "sigi",
    description:
      "Self-hosted app to allow internal real-time chat, share files on local network and generate POA document.",
    stack: ["javascript", "react", "tailwind", "socketio"],
    img: "/images/sigi.webp",
  },
  {
    title: "tw-rt-report",
    description:
      "Script to generate a spreadsheet with retweets made by a list of users to @account on specified month.",
    stack: ["python"],
    lang: "python",
    code: [
      "import tweepy",
      "",
      "def get_tweet(id):",
      "  tweets = tweepy.get_users_tweets(id)",
      "  return tweets",
      "",
      'if __main__ == "main"',
      "  for id in accounts_id:",
      "    tweets = get_tweets(id)",
    ],
  },
  {
    title: "school-bell-automation",
    description: `School bell automation for each start, recess and end of classes of each course.`,
    stack: ["arduino", "c++"],
    lang: "cpp",
    code: [
      "void setup() {",
      "  Serial.begin(9600);",
      "",
      "  if (!rtc.begin()) {",
      '    Serial.print("rtc not found");',
      "    while(1) {}",
      "  }",
      "}",
      "",
      "void loop() {",
    ],
  },
  {
    title: "cbv",
    description:
      "Python scraper of Central Bank of Venezuela to collect official exchange rates. Also nodejs API from those data.",
    stack: ["python", "typescript", "nodejs", "hono"],
    link: "https://github.com/jrafaaael/cbv",
    lang: "typescript",
    code: [
      'import { Hono } from "hono";',
      "",
      "const exchange = new Hono();",
      "",
      "exchange",
      '  .get("/", getExchangeRates)',
      '  .get("/:currencyNameOrId", getExchangeRateByCurrencyNameOrId);',
      "",
      "export { exchange };",
    ],
  },
];
