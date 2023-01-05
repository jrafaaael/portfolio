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
}

export const JAVASCRIPT: Tech = {
  name: "JavaScript",
  icon: JavaScript,
  fg: "text-javascript",
  bg: "bg-javascript/10",
};

export const NODE: Tech = {
  name: "NodeJS",
  icon: Node,
  fg: "text-node",
  bg: "bg-node/10",
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
  fg: "text-arduino",
  bg: "bg-arduino/10",
};

export const PYTHON: Tech = {
  name: "Python",
  icon: Python,
  fg: "text-python",
  bg: "bg-python/10",
};

export const REACT: Tech = {
  name: "React",
  icon: React,
  fg: "text-react",
  bg: "bg-react/10",
};

export const REACT_NATIVE: Tech = {
  name: "React Native",
  icon: React,
  fg: "text-react",
  bg: "bg-react/10",
};

export const TAILWIND: Tech = {
  name: "Tailwind",
  icon: Tailwind,
  fg: "text-tailwind",
  bg: "bg-tailwind/10",
};

export const EXPO: Tech = {
  name: "Expo",
  icon: Expo,
};

export const TYPESCRIPT: Tech = {
  name: "TypeScript",
  icon: TypeScript,
  fg: "text-typescript",
  bg: "bg-typescript/10",
};
