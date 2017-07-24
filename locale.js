;(function() {
    var locale = {
        c1: "Get to work and make your own 'indie' videogame!",
        c2: "Impact or Phaser",
        c21: "Guide to create an 'indie' videogame in just 72 hours",
        c3: "The book",
        c31: "It covers several quite broad topics in the briefest and accesible way, based in the core philosophy of getting down to work as soon as possible. It's about doing something, get to finish it, enjoy it while we do it and, if possible, learn a lot of things along the way.",
        c32: "This is a general guide to develop a video game based on two of the most popular HTML5 engines on the web. We will make a game from scratch, that will end being ready for a 'Game Jam' or 'Compo'. And the best part of this process is that what we'll have learned when we get to this point will help us to create more games.",
        c4: "Two powerful HTML5 game engines",
        c41: "We'll learn to use two of the most powerful 2D game development libraries: ImpactJS and Phaser.",
        c42: "In a long lifetime, both libraries have proved to be robust and stable. And they have a very large community of people passionate about games, which assists in the resolution of doubts and problems.",
        c43: "We could develop a video game once with any of them and get an application compatible with any web browser, which can be packaged as a native application for IOS or Android, too.",
        c5: "Cloning an amazing game",
        c51: "The 'Gods will be watching' demo, developed in 72 hours for Ludum Dare #26 in 2013, became one of the most unexpected successes of Spanish 'indie' scene. An instant classic.",
        c52: "Develop from scratch a faithful and improved clone of this game, using the original graphic and sound resources. Along the way, you'll learn practical programming techniques using Impact and Phaser, and will solve real-world problems in record time.",
        c6: "Who is this book for",
        c61: "This book is intended for developers of different types and levels: even those with only few months of flight. In any case, having prior programming experience (in particular, being familiar with JavaScript and related technologies)  will be very useful to the potential reader.",
        c62: "We will study how Impact and Phaser libraries work, and how a game is generated based on them. In practice, we'll cover a little part of game design, too.",
        c7: "What will I actually receive?",
        c71: "Accompanying the book, you'll find several files that include graphics, fonts and sounds, needed to carry out the project. The reader will play the role of the game programmer.",
        c72: "&raquo; 130 pages explaining code and methodology",
        c73: "&raquo; Files with running code for each step of the process",
        c74: "&raquo; PDF, ePub and Mobi formats",
        c75: "&raquo; Fonts, graphics and sounds",
        c76: "&raquo; Two fully functional versions of the game: Phaser and Impact",
        c77: "&raquo; Book updates and free support",
        c8: "Content summary",
        c81: "Game mechanics study",
        c82: "Create the project file structure",
        c83: "Game engine states",
        c84: "Creating the introduction",
        c85: "Texts and fonts",
        c86: "Game entities",
        c87: "Effects and animations control",
        c88: "Management of graphics and sound",
        c89: "Create a resources preload screen",
        c891: "Information on screen",
        c892: "Variables and actions",
        c893: "Structure of the response mechanics ",
        c894: "Creating a debug mode",
        c895: "Improve outcome",
        c9: "Not convinced yet!",
        c91: "In that case please download a free sample of the book, which contains an entire chapter of it (Spanish only, sorry!).",
        c92: "Download sample (Spanish)",
        c10: "I want it! (Full edition)",
        c101: "I want it! (PHASER edition)",
        c102: "I want it! (IMPACT edition)",
		c11: "About the author",
		c111: "Hi, I'm LuisQuin, a.k.a. 'plissken2013es', a.k.a <a href='https://twitter.com/akidfromthe80s' target='_blank'>@aKidFromThe80s</a>. I develop software for a living and code videogames in my spare time. I wrote this book, too.",
		c112: "My submission \"<a href='http://js13kgames.com/entries/glitch-torpedo' target='_blank'>Glitch Torpedo</a>\" ranked #4 in <a href='http://2016.js13kgames.com/#winners-server' target='_blank'>server</a> category at <b>js13kgames</b> Compo. It's an HTML5 multiplayer videogame in less than 13k.",
		c113: "You may watch me writing \"<a href='https://youtu.be/Mf0oMKKpzr4' target='_blank'>Space Invaders</a>\" in VanillaJS in just 59 seconds, if you like.",
		c114: "Or checkout my other mini-games and experiments at <a href='http://cargocollective.com/luisQuin/About-me-Sobre-mi' target='_blank'>CargoCollective</a>."
    };
    if (window.location.hash === "#en") {
        document.title = "Impact or Phaser - guide to create an 'indie'  videogame in 72 hours";
        for (var prop in locale) {
            var el = document.getElementById(prop);
            if (el) el.innerHTML = locale[prop];
        }
    }
})();