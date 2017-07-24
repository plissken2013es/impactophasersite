;(function () {
    var requestAnimFrame = (function(){
        return window.requestAnimationFrame         ||
            window.webkitRequestAnimationFrame      ||
            window.mozRequestAnimationFrame         ||
            window.oRequestAnimationFrame           ||
            window.msRequestAnimationFrame          ||
            function(callback){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    // Create the canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 320;
    canvas.height = 215;
    document.getElementById("gwbw").appendChild(canvas);
    
    // The main game loop
    var lastTime;
    function loop() {
        var now = Date.now();
        var dt = (now - lastTime) / 1000.0;
        update(dt);
        render();
        lastTime = now;
        requestAnimFrame(loop);
    }

    function init() {
        fondo = {
            pos: [0, 0],
            sprite: new Sprite("img/fondo.png", [0, 0], [320, 215], 0, [0]) 
        };
        agua = {
            pos: [6, 84],
            sprite: new Sprite("img/agua302x58.png", [0, 0], [302, 58], 7, [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]) 
        };
        hoguera = {
            pos: [146, 129],
            sprite: new Sprite("img/hoguera70x57.png", [0, 0], [70, 57], 6, [0, 1, 2, 3, 4, 5, 6, 7, 8]) 
        };
        radio = {
            pos: [245, 127],
            sprite: new Sprite("img/radio75x57.png", [0, 0], [75, 57], 0, [0]) 
        };
        planet1 = {
            pos: [150, 33],
            sprite: new Sprite("img/planet1.png", [0, 0], [14, 13], 0, [0]) 
        };
        planet2 = {
            pos: [170, 42],
            sprite: new Sprite("img/planet2.png", [0, 0], [9, 9], 0, [0]) 
        };
        objects.push(hoguera, agua, radio, planet1, planet2);
        
        doctor = {
            pos: [82, 121],
            sprite: new Sprite("img/doctor54x54.png", [0, 0], [54, 54], 6, [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 6, 7, 8, 11, 10, 9, 9, 9, 9, 10, 11, 10, 10, 12, 13, 14, 15, 16]) 
        };
        soldado = {
            pos: [7, 109],
            sprite: new Sprite("img/soldado68x75.png", [0, 0], [68, 75], 6, [0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]) 
        };
        cientifico = {
            pos: [234, 105],
            sprite: new Sprite("img/ingeniero52x68.png", [0, 0], [52, 68], 6, [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5, 6, 2]) 
        };
        psicologa = {
            pos: [102, 114],
            sprite: new Sprite("img/chica61x48.png", [0, 0], [61, 48], 6, [4, 4, 4, 4, 4, 5, 6, 7, 6, 5, 4, 8]) 
        };
        robot = {
            pos: [247, 113],
            sprite: new Sprite("img/robot65x81.png", [0, 0], [65, 81], 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 4, 5, 4, 5, 3, 2, 1, 6, 7, 8, 0]) 
        };
        perro = {
            pos: [9, 142],
            sprite: new Sprite("img/perro31x34.png", [0, 0], [31, 34], 6, [0, 1, 2, 1]) 
        };
        characters.push(doctor, soldado, cientifico, psicologa, robot, perro);
        
        loop();
    }

    Resources.load([
        "img/fondo.png",
        "img/agua302x58.png",
        "img/hoguera70x57.png",
        "img/radio75x57.png",
        "img/planet1.png",
        "img/planet2.png",
        "img/doctor54x54.png",
        "img/soldado68x75.png",
        "img/ingeniero52x68.png",
        "img/chica61x48.png",
        "img/robot65x81.png",
        "img/perro31x34.png"
    ]);
    Resources.onReady(init);

    // Game state
    var fondo, agua, hoguera, radio, planet1, planet2, 
        doctor,
        objects = [], characters = [], lastTime = 0;
    
    // Update game objects
    function update(dt) {
        updateEntities(dt);
    }

    function updateEntities(dt) {
        // Update the player sprite animation
        fondo.sprite.update(dt);

        // Update all the objects
        for (var i=0; i<objects.length; i++) {
            objects[i].sprite.update(dt);
        }

        // Update all the characters
        for (i=0; i<characters.length; i++) {
            characters[i].sprite.update(dt);
        }
    }

    // Draw everything
    function render() {
        renderEntity(fondo);
        renderEntities(objects);
        renderEntities(characters);
    }

    function renderEntities(list) {
        for (var i=0; i<list.length; i++) {
            renderEntity(list[i]);
        }
    }

    function renderEntity(entity) {
        ctx.save();
        ctx.translate(entity.pos[0], entity.pos[1]);
        entity.sprite.render(ctx);
        ctx.restore();
    }
})();