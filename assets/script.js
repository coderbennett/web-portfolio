var themeBtn = $('#themeBtn');
var themeLeafIcons = $('.leafIcon');
var htmlEl = $('#htmlTag');
var twitterIconEl = $('#twitterIcon');
var githubIconEl = $('#githubIcon');
var linkedinIconEl = $('#linkedinIcon');
var projectsContainer = $('#projects');
var heroEl = $('.hero');

var theme = htmlEl.attr('data-theme');

//this is the projects array, to add more projects to this page
//just simply add more projects to the array
var projects = [ {
    name: "PetHub",
    gitHubUrl: "https://github.com/coderbennett/pethub",
    deployedUrl: "https://coderbennett.github.io/pethub/",
    description: "Pethub is a web app for anyone interested in responsibly adopting a pet. On our webapp you can find pets in all areas to adopt.",
    media: "./assets/media/petHub.gif"
}, {
    name: "Weather Dashboard",
    gitHubUrl: "https://github.com/coderbennett/weather-dashboard",
    deployedUrl: "https://coderbennett.github.io/weather-dashboard/",
    description: "The Weather Dashboard is a simple web app which fetchs data from the Open Weather API and presents the user with today's weather forecast plus the next 5 following days.",
    media: "./assets/media/weatherDashboard.gif"
}, {
    name: "JavaScript Fundamentals Quiz",
    gitHubUrl: "https://github.com/coderbennett/quiz-javascript-fundamentals",
    deployedUrl: "https://coderbennett.github.io/quiz-javascript-fundamentals/",
    description: "A 10 question JavaScript quiz on some fundamental methods, definitions and syntax.",
    media: "./assets/media/jsQuiz.gif"
}, {
    name: "Word Guess",
    gitHubUrl: "https://github.com/coderbennett/word-guess",
    deployedUrl: "https://coderbennett.github.io/word-guess/",
    description: "This game gives you a random word and it is up to you to type the word before the time runs out!",
    media: "./assets/media/wordGuess.gif"
}
];

//the display projects function displays all the projects onto cards
displayProjects();

//if there is no locally stored theme, set the current to it
if(localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", theme);
}

//set all the themed content to the correct theme
theme = localStorage.getItem("theme");
htmlEl.attr('data-theme', theme);
themeLeafIcons.attr('src', "./assets/" + theme + "/leafIcon.png");
twitterIconEl.attr('src', "./assets/" + theme + "/twitterIcon.png");
githubIconEl.attr('src', "./assets/" + theme + "/githubIcon.png");
linkedinIconEl.attr('src', "./assets/" + theme + "/linkedinIcon.png");
heroEl.css('background-image', 'url("./assets/' + theme + '/background.png")');

//set up the event listener if someone changes the theme
themeBtn.on("click", changeTheme);

//this function swaps the themed elements from one to the other
function changeTheme() {
    if (htmlEl.attr('data-theme') === "forest") {
        htmlEl.attr('data-theme', "garden");
        themeLeafIcons.attr('src', "./assets/garden/leafIcon.png");
        twitterIconEl.attr('src', "./assets/garden/twitterIcon.png");
        githubIconEl.attr('src', "./assets/garden/githubIcon.png");
        linkedinIconEl.attr('src', "./assets/garden/linkedinIcon.png");
        heroEl.css('background-image', "url('./assets/garden/background.png')");
        console.log('button pressed, changed to garden theme')
    } else {
        htmlEl.attr('data-theme', "forest");
        themeLeafIcons.attr('src', "./assets/forest/leafIcon.png");
        twitterIconEl.attr('src', "./assets/forest/twitterIcon.png");
        githubIconEl.attr('src', "./assets/forest/githubIcon.png");
        linkedinIconEl.attr('src', "./assets/forest/linkedinIcon.png");
        heroEl.css('background-image', "url('./assets/forest/background.png')");
        console.log('button pressed, changed to forest theme')
    }
    theme = htmlEl.attr('data-theme');
    localStorage.setItem("theme", theme);
}

//the display projects function creates card elements with buttons,
//an image, a title and description
function displayProjects() {

    for (var i = 0; i < projects.length; i++) {
        var tempCardEl = $('<div class="card bg-neutral w-96 m-6 shadow-xl">');
        projectsContainer.append(tempCardEl);

        var tempCardFigure = $("<figure class='bg-cover h-96 bg-center' style='background-image: url(\"" + projects[i].media + "\");'</figure>");
        tempCardEl.append(tempCardFigure);

        var tempCardBodyEl = $('<div class="card-body">');
        tempCardEl.append(tempCardBodyEl);

        var tempCardTitleEl = $('<h2 class="card-title text-secondary">' + projects[i].name + '</h2>');
        tempCardBodyEl.append(tempCardTitleEl);

        var tempCardDescEl = $('<p class="text-secondary">');
        tempCardDescEl.text(projects[i].description);
        tempCardBodyEl.append(tempCardDescEl);

        var tempCardButtonDivEl = $('<div class="card-actions justify-end">');
        tempCardBodyEl.append(tempCardButtonDivEl);

        var tempCardButton1El = $('<a target="_blank" class="btn btn-primary">');
        tempCardButton1El.attr('href', projects[i].gitHubUrl);
        tempCardButton1El.text('view repo');
        tempCardButtonDivEl.append(tempCardButton1El);

        var tempCardButton2El = $('<a target="_blank" class="btn btn-primary">');
        tempCardButton2El.attr('href', projects[i].deployedUrl);
        tempCardButton2El.text('view app');
        tempCardButtonDivEl.append(tempCardButton2El);
    }
    //with the scroll reveal function here we apply it to all the cards
    ScrollReveal().reveal('.card');
}