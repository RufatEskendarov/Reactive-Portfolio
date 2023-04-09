import cooking from "./../img/project-img/cooking.png";
import guess from "./../img/project-img/guess.png";
import bankist from "./../img/project-img/bankist.png";
import mapty from "./../img/project-img/mapty.png";
import pig from "./../img/project-img/pig.png";
import forkify from "./../img/project-img/forkify.png";

import cookingBig from "./../img/project-img/cookingBig.png";
import guessBig from "./../img/project-img/guessBig.png";
import bankistBig from "./../img/project-img/bankistBig.png";
import maptyBig from "./../img/project-img/maptyBig.png";
import pigBig from "./../img/project-img/pigBig.png";
import forkifyBig from "./../img/project-img/forkifyBig.png";

const projects = [
  {
    id: 0,
    title: "Whats Cooking",
    technologies:
      "HTML, CSS, Handlebars.js, JavaScript, MySQL, Sequelize, Node.js",
    img: cooking,
    imgBig: cookingBig,

    description:
      "What's Cooking is an all in one recipe app where you can search recipes, store recipes, and create recipes. They all save to your profile so you can instantly access them later.",
    repo: "https://github.com/RufatEskendarov/whats-cooking",
    deploy: "https://whats--cooking.herokuapp.com/",
  },
  {
    id: 1,
    title: "Guess My Number",
    technologies: "HTML, CSS, SASS, JavaScript",
    img: guess,
    imgBig: guessBig,

    description:
      "A simple game 'Guess my number', you are given 20 attempts to guess a number from 1 to 20. The indicators on the right will show how many active attempts to guess the number you have left. Also, with each unsuccessful attempt, you will receive a hint that your number is more or less than the mysterious one. If you guess the number, the screen will turn green. The game is an educational project whose instructor is Jonas Schmedtmann.",
    repo: "https://github.com/RufatEskendarov/Guess-MY-Number",
    deploy: "https://rufateskendarov.github.io/Guess-MY-Number/",
  },
  {
    id: 2,
    title: "Bankist",
    technologies: "HTML, CSS, SASS, JavaScript",
    img: bankist,
    imgBig: bankistBig,

    description:
      "Banking application, to enter the system, use the login: re and password: 1111 or jd and 2222. You can conduct transfer operations, request a loan or delete an account. To request a loan, you will need to fit out the bank condition, which is written in the code, to learn more about it, view the code in the repository. The application is an educational project whose instructor is Jonas Schmedtmann.",
    repo: "https://github.com/RufatEskendarov/Bankist",
    deploy: "https://rufateskendarov.github.io/Bankist/",
  },
  {
    id: 3,
    title: "Pig Game",
    technologies: "HTML, CSS, SASS, JavaScript",
    img: pig,
    imgBig: pigBig,
    description:
      "A simple game 'Pig game', a game for two. The first person to reach 100 points wins. The background of the active player is light pink, the background of the pending player is dark pink. The winning player's screen will turn black. When throwing the dice, points are added up until they reach 100 or until a 1 falls out. When a 1 falls out, the points are reset to zero and the turn passes to the next player. To save points, press 'Hold' then your points will go to the balance where they will be saved and the move will be transferred to another player. The game is an educational project whose instructor is Jonas Schmedtmann.",
    repo: "https://github.com/RufatEskendarov/PigGame",
    deploy: "https://rufateskendarov.github.io/PigGame/",
  },
  {
    id: 4,
    title: "Mapty",
    technologies: "HTML, CSS, JavaScript, 3rd Party API, Node.js",
    img: mapty,
    imgBig: maptyBig,

    description:
      "Mapti is a web application that will help you save your jogging and cycling locations. You can also see the time, pace, distance, etc. from the saved cards. Also, when you click on the card, the map will automatically focus on the location of the action. The web application is an educational project whose instructor is Jonas Schmedtmann.",
    repo: "https://github.com/RufatEskendarov/Mapty",
    deploy: "https://rufateskendarov.github.io/Mapty/",
  },
  {
    id: 5,
    title: "Forkify",
    technologies: "HTML, CSS, JavaScript, 3rd Party API, Parsel.js, Node.js",
    img: forkify,
    imgBig: forkifyBig,

    description:
      "Website with over a million recipes. The main advantage of the site is that the user can create their own recipes and save them, or create a list of favorite recipes already available on the site. There are also tools on the site that help you automatically calculate the number of ingredients for the number of guests. The site is an educational project whose instructor is Jonas Schmedtmann.",
    repo: "https://github.com/RufatEskendarov/forkify-app",
    deploy: "https://forkify-rufat.netlify.app/",
  },
];

export { projects };
