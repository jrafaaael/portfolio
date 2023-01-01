interface Project {
  title: string;
  description: string;
  stack: string[];
  img: string;
}

const projects = [
  {
    title: "ecg",
    description: `visualize the ECG graph in different devices simultaneously in real time through WiFi in the patient/doctor's preferred browser. developed for the subject "Instrumentación Médica IV" and chosen to be exposed at the "Expo Investigación Universitaria 2022"`,
    stack: ["javascript", "nodejs", "express", "socket.io", "arduino"],
    img: "/ecg.jpg",
  },
  {
    title: "tw-rt-report",
    description:
      "script that generate a SpreadSheet with all retweets made by @account_a to @account_b in the current month. developed for CMSF",
    stack: ["python", "tweepy", "openpyxl"],
    img: "/code-block.jpg",
  },
  {
    title: "audio-convert",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati voluptates aperiam inventore sunt error blanditiis iure, facilis debitis! Saepe, adipisci culpa inventore voluptate quaerat libero tempore facilis ratione aperiam.`,
    stack: ["python", "ffmpeg"],
    img: "/code.jpeg",
  },
  {
    title: "school-bell-automation",
    description: `automation of the school bell of "Complejo Educativo Fray Luís Amigó" for each start of class, recess and end of classes of each section and grade`,
    stack: ["arduino"],
    img: "/arduino.jpeg",
  },
  {
    title: "sigi",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nostrum eius, nemo iste iure odit voluptates vel quisquam ad sint ullam, placeat dolore aliquid voluptatem corrupti necessitatibus magnam ea quia.`,
    stack: ["react", "inertia", "php", "laravel"],
    img: "/arduino.jpeg",
  },
];

export default projects;
