import JavaScript from "../components/icons/JavaScript.astro";
import Node from "../components/icons/Node.astro";
import Express from "../components/icons/Express.astro";
import SocketIO from "../components/icons/SocketIO.astro";
import Arduino from "../components/icons/Arduino.astro";
import Python from "../components/icons/Python.astro";
import React from "../components/icons/React.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import Expo from "../components/icons/Expo.astro";
import TypeScript from "../components/icons/TypeScript.astro";

export interface Tech {
  name: string;
  icon: any;
  fg?: string;
  bg?: string;
  bd?: string;
}

export const JAVASCRIPT: Tech = {
  name: "JavaScript",
  icon: JavaScript,
  fg: "text-javascript",
  bg: "bg-javascript/20",
  bd: "border-javascript/40",
};

export const NODE: Tech = {
  name: "NodeJS",
  icon: Node,
  fg: "text-node",
  bg: "bg-node/20",
  bd: "border-node/40",
};

export const EXPRESS: Tech = {
  name: "Express",
  icon: Express,
};

export const SOCKETIO: Tech = {
  name: "Socket.IO",
  icon: SocketIO,
};

export const ARDUINO: Tech = {
  name: "Arduino",
  icon: Arduino,
  bg: "bg-arduino/40",
  bd: "border-arduino/40",
};

export const PYTHON: Tech = {
  name: "Python",
  icon: Python,
  fg: "text-python",
  bg: "bg-python/20",
  bd: "border-python/40",
};

export const REACT: Tech = {
  name: "React",
  icon: React,
  fg: "text-react",
  bg: "bg-react/20",
  bd: "border-react/40",
};

export const TAILWIND: Tech = {
  name: "Tailwind",
  icon: Tailwind,
  bg: "bg-tailwind/40",
  bd: "border-tailwind/40",
};

export const REACT_NATIVE: Tech = {
  name: "React Native",
  icon: React,
  fg: "text-react",
  bg: "bg-react/20",
  bd: "border-react/40",
};

export const TYPESCRIPT: Tech = {
  name: "TypeScript",
  icon: TypeScript,
  bg: "bg-typescript/40",
  bd: "border-typescript/40",
};

export const EXPO: Tech = {
  name: "Expo",
  icon: Expo,
};
