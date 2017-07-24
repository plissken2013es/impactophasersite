(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;

    var background = document.getElementById("screen"),
    bgCtx = background.getContext("2d"),
    width = window.innerWidth,
    height = document.body.offsetHeight;

    (height < 400) ? height = 400 : height;

    background.width = width;
    background.height = height;

    bgCtx.fillStyle = '#05004c';
    bgCtx.fillRect(0, 0, width, height);

    resources.load([
        "img/sprites.png"
    ]);
    resources.onReady(tick);

    var player = {
        pos: [width/2, height/2],
        sprite: new Sprite("img/sprites.png", [0, 0], [39, 39], 16, [0, 1]) 
    };

    var bullets = [], entities = [], pX = 0, pY = 0, speed = 1, SPEED_LIMIT = 30, playerSpeed = 350, bulletSpeed = 500;
    var now, lastTime = Date.now(), lastFire = Date.now();

    // Añadimos un Canvas para el jugador
    var playerCanvas = document.createElement("canvas"), playerCtx = playerCanvas.getContext("2d");
    playerCanvas.width = width;
    playerCanvas.height = height;
    document.body.appendChild(playerCanvas);

    // nuestro bucle
    function tick() {
        var now = Date.now();
        var dt = (now - lastTime) / 1000.0;

        pX = player.pos[0];
        pY = player.pos[1];


        bgCtx.fillStyle = '#110E19';
        bgCtx.fillRect(0, 0, width, height);
        bgCtx.fillStyle = '#ffffff';
        bgCtx.strokeStyle = '#ffffff';

        var entLen = entities.length;
        speed = (pX / width * SPEED_LIMIT) | 0;

        while (entLen--) {
            entities[entLen].update();
        }

        updatePlayer(dt);
        lastTime = now;

        playerCtx.clearRect(0, 0, width, height);
        playerCtx.fillStyle = "#fff";
        playerCtx.font = "16px Arial, sans";
        playerCtx.textAlign = "center";
        playerCtx.fillText("ARROW KEYS to move, SPACE to fire weapons", width/2, 50);

        renderEntity(player, playerCtx);
        renderEntities(bullets, playerCtx);

        requestAnimationFrame(tick);
    }

    function updatePlayer(dt) {
        handleInput(dt);

        // Refrescamos la animación del sprite del jugador
        player.sprite.update(dt);

        // Refrescamos las balas
        for (var i=0; i<bullets.length; i++) {
            var bullet = bullets[i];

            switch(bullet.dir) {
                case "up": 
                bullet.pos[1] -= bulletSpeed * dt;
                break;
                case "down":
                bullet.pos[1] += bulletSpeed * dt;
                break;
                default:
                bullet.pos[0] += bulletSpeed * dt;
            }

            if (bullet.pos[1] < 0 || bullet.pos[1] > height || bullet.pos[0] > width) {
                pool.removeBullet(bullets, i);
                i--;
            }
        }
    }

    function renderEntities(list, ctx) {
        for (var i=0; i<list.length; i++) {
            renderEntity(list[i], ctx);
        }
    }

    function renderEntity(entity, ctx) {
        ctx.save();
        ctx.translate(entity.pos[0], entity.pos[1]);
        entity.sprite.render(ctx);
        ctx.restore();
    }

    function handleInput(dt) {
        if (input.isDown("DOWN") || input.isDown("s")) {
            player.pos[1] += playerSpeed * dt;
        }

        if (input.isDown("UP") || input.isDown("w")) {
            player.pos[1] -= playerSpeed * dt;
        }

        if (input.isDown("LEFT") || input.isDown("a")) {
            player.pos[0] -= playerSpeed * dt;
        }

        if (input.isDown("RIGHT") || input.isDown("d")) {
            player.pos[0] += playerSpeed * dt;
        }

        if (input.isDown("SPACE") && Date.now() - lastFire > 100) {
            var x = player.pos[0] + player.sprite.size[0] / 2;
            var y = player.pos[1] + player.sprite.size[1] / 2;

            var tempBullets = pool.getBullets(x, y);
            bullets.push(tempBullets[0], tempBullets[1], tempBullets[2]);

            lastFire = Date.now();
        }
    }
})();