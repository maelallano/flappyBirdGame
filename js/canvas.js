// --------------------- FlappyBird game -----------------

window.onload = function() {
    var canvas = document.getElementById('mon_canvas')
        if (!canvas) {
            alert("Impossible de récupérer le canvas")

            return
        }

    var context = canvas.getContext('2d')
        if (!context) {
            alert("Impossible de récupérer le context du canvas")

            return
        }


///////////////////////// setup des fonctions et initialisations des variables ////////////////////////////////
    
    let score = 0

    let temps = 0

    let dead = 0

    let jump = 0

    let a = 0
    let b = 0
    let c = 0
    let d = 0

    let birdSpeed = 4

    let spaceBetween = 200

    let spaceBetweenPair = 150

    var birdInit = {
        width: 20,
        height: 20,
        posX: canvas.width/2,
        posY: canvas.height/2,

        move: function() {
            bird.posY += jump
        }
    }

    var bird = {
        width: 20,
        height: 20,
        posX: canvas.width/2,
        posY: canvas.height/2,

        move: function() {
            bird.posY += jump
        }
    }

    // var pipe = {
    //     width: 50,
    //     height: 120,
    //     posX: canvas.width - 25,
    //     posY: 0,

    //     move: function() {
    //         pipe.posX += -4
    //     }
    // }

    function Pipe(abs, ord) {
        this.width = 50
        this.height = Math.floor(Math.random() * (canvas.height - spaceBetweenPair - 40) + 20)
        this.x = abs
        this.y = ord

        this.move = function() {
            this.x += -birdSpeed
        }
    }

    let pipes = []

    var pipe = new Pipe(canvas.width, 0)
    var pipe2 = new Pipe(canvas.width + spaceBetween, 0)
    var pipe3 = new Pipe(canvas.width + spaceBetween * 2, 0)

    pipes.push(pipe)
    pipes.push(pipe2)
    pipes.push(pipe3)

    let pipesInit = [pipe, pipe2, pipe3]

    // const secondPipe = new Pipe(, "Mélodie")

    // let contacts = [firstPipe, secondPipe]

    // contacts.push(new Pipe(newName, newSurname))

    // var Pipe = {
    //     this.width: 50,
    //     this.height: 120,
    //     this.posX: canvas.width - 25,
    //     this.posY: 0,

    //     this.move: function() {
    //         this.posX += -4
    //     }
    // }

    // var pipe.prototype = new Pipe

    let frameSpeed = 30

    var flappyBird = new Image()
    flappyBird.src = "../img/flappyBird.png"

    var pipeDown = new Image()
    pipeDown.src = "../img/pipeDown.png"
    var pipeUp = new Image()
    pipeUp.src = "../img/pipeUp.png"

    var backgroundImg = new Image()
    backgroundImg.src = "../img/flappyBackground.png"    

    var backgroundImgNight = new Image()
    backgroundImgNight.src = "../img/flappyBackgroundNight.png"

    var wesh = ['Red', 'Blue', 'Yellow', 'Green']

    var hardcore = ''
    
    function draw() {
        // context.fillStyle="blue"
        // context.fillRect(0, 0, canvas.width, canvas.height)

        // context.fillStyle="grey"
        // context.fillRect(20, 20, 100, canvas.height - 20)

        // for (i = 0; i < 7; i++) {
        //     context.fillStyle="white"
        //     context.fillRect(26, 30 + (i * 40), 40, 30)
        //     context.fillStyle="white"
        //     context.fillRect(74, 30 + (i * 40), 40, 30)
        // }

        // context.fillStyle="white"
        // context.fillRect(26, 70, 40, 30)
        // context.fillStyle="white"
        // context.fillRect(74, 70, 40, 30)

        // context.fillStyle="white"
        // context.fillRect(26, 110, 40, 30)
        // context.fillStyle="white"
        // context.fillRect(74, 110, 40, 30)

        // context.fillStyle="yellow"
        // context.fillRect(bird.posX, bird.posY, bird.width, bird.height)
        
        // if (dead) {
        //     context.drawImage(backgroundImgNight, 0, 0, 420, 420, 0, 0, 420, 420)
        //     context.fillStyle = "Orange"
        //     context.font = "27px Helvetica"
        //     context.fillText("Welcome to my flappyBird game !", 7, 40)
        // }
        if (hardcore !== 'oui' && hardcore !== 'non') {
            context.drawImage(backgroundImgNight, 0, 0, 420, 420, 0, 0, 420, 420)
            context.font = "27px Helvetica"
            context.fillText("Welcome to my flappyBird game !", 7, 40)
            context.font = "23px Helvetica"
            context.fillStyle = "Orange"
            context.fillText("In the game, press downKey to fly !", 6, 208)
            context.fillText("HARDCORE mode: press \"a\"", 112, 270)
            context.fillText("Normal mode: press \"z\"", 170, 300)
        } else {
            if (hardcore === 'oui') {
                setInterval(function() {
                    document.getElementById("mon_canvas").style.backgroundColor = wesh[Math.floor(Math.random() * 4)]
                }, 1000/100)} else if (score % 12 < 6) { 
                    context.drawImage(backgroundImg, 0, 0, 420, 420, 0, 0, 420, 420)
                } else {
                    context.drawImage(backgroundImgNight, 0, 0, 420, 420, 0, 0, 420, 420)
                }
            
            context.drawImage(flappyBird, 0, 0, 60, 60, bird.posX - 12, bird.posY - 13, 45, 45)
            
            for (i = 0; i < pipes.length; i++) { 
                // context.fillStyle="green"
                // context.fillRect(pipes[i].x, pipes[i].y, pipes[i].width, pipes[i].height)
                // context.fillRect(pipes[i].x, canvas.height, pipes[i].width, -(canvas.height - pipes[i].height - spaceBetweenPair))

                context.drawImage(pipeDown, 0, 0, 1400, 1500, pipes[i].x - 120, pipes[i].y, 290, pipes[i].height)
                context.drawImage(pipeUp, 0, 0, 1400, 1500, pipes[i].x - 120, canvas.height, 290, -(canvas.height - pipes[i].height - spaceBetweenPair))
            }


            context.fillStyle="yellow"
            context.font = "40px Helvetica"
            context.fillText(score, (canvas.width / 2), 40)

            // context.font = "30px Helvetica"
            // context.fillText((temps * 2) / 100 + '', (canvas.width / 2) - 10, canvas.height - 1)
        }
    }

    var myInterval = setInterval(anime, 1000/frameSpeed)




/////////////////////////////////// fonctions anime /////////////////////////////////////////////////

    function anime() {
        context.clearRect(0, 0, canvas.width, canvas.height)

        if (score === 5 && !d) {
            spaceBetweenPair -= 10
            d++
        }        
        if (score === 10 && d === 1) {
            spaceBetweenPair -= 10
            d++
        }        
        if (score === 15 && d === 2) {
            spaceBetweenPair -= 10
            d++
        }        
        if (score === 25 && d === 3) {
            spaceBetweenPair -= 10
            d++
        }        
        if (score === 40 && d === 4) {
            spaceBetweenPair -= 10
            d++
        }        
        if (score === 60 && d === 5) {
            spaceBetweenPair -= 10
            d++
        }        
        if (score === 85 && d === 6) {
            spaceBetweenPair -= 10
            d++
        }

        for (i = 0; i < pipes.length; i++) {
            if (pipes[i].x < -pipes[i].width) {
                pipes.shift()
                pipes.push(new Pipe(canvas.width + spaceBetween - pipe.width, 0))
            }
        }

        if (jump) {
            for (i = 0; i < pipes.length; i++) {
                pipes[i].move()
            }
        }

        for (index = 0; index < pipes.length; index++) {
            for (iBird = 0; iBird < bird.width; iBird++) {
                for (jBird = 0; jBird < bird.height; jBird++) {
                    for (i = 0; i < pipe.width; i++) {
                        if (pipes[index].x + i <= bird.posX + iBird && pipes[index].x + pipe.width >= bird.posX + iBird) {
                            if (bird.posY + jBird <= pipes[index].height || bird.posY + jBird >= pipes[index].height + spaceBetweenPair)
                                dead++
                        }
                    }
                }
            }
        }

        if (bird.posY + bird.height*2/3 >= canvas.height || bird.posY <= 0) {
            dead++
        }

        if (c) {
            temps++
        }

        if (dead) {
            hardcore = 'aza'
            birdSpeed = 0
            setInterval(function() {
                context.drawImage(backgroundImgNight, 0, 0, 420, 420, 0, 0, 420, 420)
                context.fillStyle = "Orange"
                context.font = "40px Helvetica"
                context.fillText("Only " + score + "...", 140, 230)
                context.fillText("Try again, NOOB !", 50, 290)
            }, 1000/60)
            // temps = 0
            // let tamer = 0
            // while (tamer < 80) {
            //     context.clearRect(0, 0, canvas.width, canvas.height)
            //     context.fillStyle="black"
            //     context.font = "22px Helvetica"
            //     context.fillText("Vous-avez passé " + score +  " tuyaux, bravo !", 40, canvas.height / 2)
            //     temps++
            //     tamer = (temps * 2) / 100
            // }
            setTimeout(function() {
                location.reload()
            }, 2000)
            // jump = 0
            // bird.posY = birdInit.posY
            // for (i = 0; i < pipes.length; i++) {
            //     pipes.shift()
            //     pipes.push(new Pipe(canvas.width + spaceBetween * i, 0))    
            // }
            // dead = 0
            // score = 0
        } else {
            draw()
        }

// ---------------- gestion des commandes (bas, haut, droite, gauche) ------------

        if (b < 3) {
            if (b < 1) {
                if (pipe.x < bird.posX) {
                    score++
                    b++
                }
            } else if (b < 2) {
                if (pipe2.x < bird.posX) {
                    score++
                    b++
                } 
            } else if (pipe3.x < bird.posX) {
                score++
                b++
            }
        }

        for (i = 0; i < pipes.length; i++) {
            if (bird.posX === pipes[i].x) {
                score++
            }
        }

        if (a > 0) {
            if (a < 10) {
                a++
            } else {
                a = 0
                jump = 8
            }
        }

        bird.move()

        // if (jump === -6) {
        //     document.getElementById("player").setAttribute('src', '../audio/2441.mp3')
        //     document.getElementById("player").play()
        // }

        document.addEventListener('keydown', function (e){
            if (e.keyCode === 40 && hardcore) {
                jump = -6
                a = 1
                c = 1
            }

            if ( e.keyCode === 65) {
                hardcore = 'oui'
            }
            if ( e.keyCode === 90) {
                hardcore = 'non'
            }
        })
    }
}