import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    questionText: "When did JavaScript first appear?",
    options: ["1998", "1997", "1995", "1999"],
    correctAnswer: "1995"
  },
  {
    id: 2,
    questionText: "Which HTML element is used to put the JavaScript code?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correctAnswer: "<script>"
  },
  {
    id: 3,
    questionText: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    id: 4,
    questionText: "Which hook is used for state management in React?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    correctAnswer: "useState"
  },
  {
    id: 5,
    questionText: "What company developed React?",
    options: ["Google", "Facebook (Meta)", "Microsoft", "Twitter"],
    correctAnswer: "Facebook (Meta)"
  },
  {
    id: 6,
    questionText: "Which HTTP method is used to update existing resources?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "PUT"
  },
  {
    id: 7,
    questionText: "What is the default port for HTTP?",
    options: ["21", "80", "443", "8080"],
    correctAnswer: "80"
  },
  {
    id: 8,
    questionText: "In TypeScript, which keyword is used to declare an object type structure?",
    options: ["type", "interface", "struct", "class"],
    correctAnswer: "interface"
  },
  {
    id: 9,
    questionText: "Which prop passes child elements directly into a React component's output?",
    options: ["props.nested", "props.children", "props.content", "props.inner"],
    correctAnswer: "props.children"
  },
  {
    id: 10,
    questionText: "Which command is used to install packages in Node.js?",
    options: ["npm start", "npm install", "node add", "pkg get"],
    correctAnswer: "npm install"
  }
];
