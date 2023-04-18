export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "ecg",
    description:
      "Visualize ECG plot in multiple devices simultaneously through WiFi in user's preferred browser.",
    stack: ["javascript", "express", "socketio", "arduino"],
  },
  {
    title: "sigi",
    description:
      "Self-hosted app to allow internal real-time chat, share files on local network and generate POA document.",
    stack: ["javascript", "react", "tailwind", "socketio"],
  },
  {
    title: "tw-rt-report",
    description:
      "Script to generate a spreadsheet with retweets made by a list of users to @account on specified month.",
    stack: ["python"],
  },
  {
    title: "school-bell-automation",
    description: `School bell automation for each start, recess and end of classes of each course.`,
    stack: ["arduino", "c++"],
  },
  {
    title: "cbv",
    description:
      "Python scraper of Central Bank of Venezuela to collect official exchange rates. Also nodejs API from those data.",
    stack: ["python", "nodejs"],
    link: "https://github.com/jrafaaael/cbv",
  },
].sort((a) => (a.link ? -1 : 1));
