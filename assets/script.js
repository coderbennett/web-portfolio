var themeBtn = $('#themeBtn');
var themeBtnImg = $('#themeBtnImg');
var htmlEl = $('#htmlTag');

var theme = htmlEl.attr('data-theme');

var projects = [ {
    name: "PetHub",
    gitHubUrl: "https://github.com/coderbennett/pethub",
    deployedUrl: "https://coderbennett.github.io/pethub/",
    description: "Pethub is a web app for anyone interested in responsibly adopting a pet. On our webapp you can find pets in all areas to adopt.",
    img: ""
}, {
    name: "Weather Dashboard",
    gitHubUrl: "https://github.com/coderbennett/weather-dashboard",
    deployedUrl: "https://coderbennett.github.io/weather-dashboard/",
    description: "The Weather Dashboard is a simple web app which fetchs data from the Open Weather API and presents the user with today's weather forecast plus the next 5 following days.",
    img: ""
}, {
    name: "JavaScript Fundamentals Quiz",
    gitHubUrl: "https://github.com/coderbennett/quiz-javascript-fundamentals",
    deployedUrl: "https://coderbennett.github.io/quiz-javascript-fundamentals/",
    description: "A 10 question JavaScript quiz on some fundamental methods, definitions and syntax.",
    img: ""
}, {
    name: "Word Guess",
    gitHubUrl: "https://github.com/coderbennett/word-guess",
    deployedUrl: "https://coderbennett.github.io/word-guess/",
    description: "This game gives you a random word and it is up to you to type the word before the time runs out!",
    img: ""
}
];

if(localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", theme);
}

theme = localStorage.getItem("theme");
htmlEl.attr('data-theme', theme);
themeBtnImg.attr('src', "./assets/" + theme + "Mode.png");

themeBtn.on("click", changeTheme);

function changeTheme() {
    if (htmlEl.attr('data-theme') === "forest") {
        htmlEl.attr('data-theme', "garden");
        themeBtnImg.attr('src', "./assets/gardenMode.png");
        console.log('button pressed, changed to garden theme')
    } else {
        htmlEl.attr('data-theme', "forest");
        themeBtnImg.attr('src', "./assets/forestMode.png");
        console.log('button pressed, changed to forest theme')
    }
    theme = htmlEl.attr('data-theme');
    localStorage.setItem("theme", theme);
}