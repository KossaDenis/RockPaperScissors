let play = [
    "img/stone.png",
    "img/scissors.png",
    "img/paper.png"
]

function random(arr) {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

let section = document.getElementById("choice-paragraph");
let result = document.getElementById("check")

document.getElementById("stone").addEventListener("click", function () {
    section.innerHTML = 'Игрок ходит камнем';
})
document.getElementById("scissors").addEventListener("click", function () {
    section.innerHTML = 'Игрок ходит ножницами';
})
document.getElementById("paper").addEventListener("click", function () {
    section.innerHTML = 'Игрок ходит бумагой';
})

document.getElementById("playing-field_button").addEventListener("click", function () {
    document.getElementById("players").style.display = "flex";
    document.getElementById("parent-button").style.display = "none"
})

document.getElementById("stone").addEventListener("click", function () {
    
    let compChoice = random(play)
    let compImg = document.getElementById("computer-choice")
    compImg.src = compChoice

    let userChoice = section.innerHTML;
    function getResult() {
        if (userChoice === "Игрок ходит камнем" && compChoice === "img/scissors.png") {
            result.innerHTML = "Игрок победил!"
        } else if (userChoice === "Игрок ходит камнем" && compChoice === "img/paper.png") {
            result.innerHTML = "Компьютер победил!"
        } else if (userChoice === "Игрок ходит камнем" && compChoice === "img/stone.png") {
            result.innerHTML = "Ничья!"
        } else if (userChoice === "Игрок ходит ножницами" && compChoice === "img/paper.png") {
            result.innerHTML = "Игрок победил!"
        } else if (userChoice === "Игрок ходит ножницами" && compChoice === "img/stone.png") {
            result.innerHTML = "Компьютер победил!"
        } else if (userChoice === "Игрок ходит ножницами" && compChoice === "img/scissors.png") {
            result.innerHTML = "Ничья!"
        } else if (userChoice === "Игрок ходит бумагой" && compChoice === "img/scissors.png") {
            result.innerHTML = "Компьютер победил!"
        } else if (userChoice === "Игрок ходит бумагой" && compChoice === "img/stone.png") {
            result.innerHTML = "Игрок победил!"
        } else if (userChoice === "Игрок ходит бумагой" && compChoice === "img/paper.png") {
            result.innerHTML = "Ничья!"
        }

    }


    let move = document.getElementById("move")
    if (compChoice == "img/stone.png") {
        move.innerHTML = 'Компьютер ходит камнем'
    } else if (compChoice == "img/scissors.png") {
        move.innerHTML = 'Компьютер ходит ножницами'
    } else if (compChoice == "img/paper.png") {
        move.innerHTML = 'Компьютер ходит бумагой'
    }

    getResult()
    
})

document.getElementById("scissors").addEventListener("click", function () {
    
    let compChoice = random(play)
    let compImg = document.getElementById("computer-choice")
    compImg.src = compChoice

    let userChoice = section.innerHTML;
    function getResult() {
        if (userChoice === "Игрок ходит камнем" && compChoice === "img/scissors.png") {
            result.innerHTML = "Игрок победил!"
        } else if (userChoice === "Игрок ходит камнем" && compChoice === "img/paper.png") {
            result.innerHTML = "Компьютер победил!"
        } else if (userChoice === "Игрок ходит камнем" && compChoice === "img/stone.png") {
            result.innerHTML = "Ничья!"
        } else if (userChoice === "Игрок ходит ножницами" && compChoice === "img/paper.png") {
            result.innerHTML = "Игрок победил!"
        } else if (userChoice === "Игрок ходит ножницами" && compChoice === "img/stone.png") {
            result.innerHTML = "Компьютер победил!"
        } else if (userChoice === "Игрок ходит ножницами" && compChoice === "img/scissors.png") {
            result.innerHTML = "Ничья!"
        } else if (userChoice === "Игрок ходит бумагой" && compChoice === "img/scissors.png") {
            result.innerHTML = "Компьютер победил!"
        } else if (userChoice === "Игрок ходит бумагой" && compChoice === "img/stone.png") {
            result.innerHTML = "Игрок победил!"
        } else if (userChoice === "Игрок ходит бумагой" && compChoice === "img/paper.png") {
            result.innerHTML = "Ничья!"
        }

    }

    let move = document.getElementById("move")
    if (compChoice == "img/stone.png") {
        move.innerHTML = 'Компьютер ходит камнем'
    } else if (compChoice == "img/scissors.png") {
        move.innerHTML = 'Компьютер ходит ножницами'
    } else if (compChoice == "img/paper.png") {
        move.innerHTML = 'Компьютер ходит бумагой'
    }
    getResult()
    
})

document.getElementById("paper").addEventListener("click", function () {
    
    let compChoice = random(play)
    let compImg = document.getElementById("computer-choice")
    compImg.src = compChoice

    let userChoice = section.innerHTML;
    function getResult() {
        if (userChoice === "Игрок ходит камнем" && compChoice === "img/scissors.png") {
            result.innerHTML = "Игрок победил!"
        } else if (userChoice === "Игрок ходит камнем" && compChoice === "img/paper.png") {
            result.innerHTML = "Компьютер победил!"
        } else if (userChoice === "Игрок ходит камнем" && compChoice === "img/stone.png") {
            result.innerHTML = "Ничья!"
        } else if (userChoice === "Игрок ходит ножницами" && compChoice === "img/paper.png") {
            result.innerHTML = "Игрок победил!"
        } else if (userChoice === "Игрок ходит ножницами" && compChoice === "img/stone.png") {
            result.innerHTML = "Компьютер победил!"
        } else if (userChoice === "Игрок ходит ножницами" && compChoice === "img/scissors.png") {
            result.innerHTML = "Ничья!"
        } else if (userChoice === "Игрок ходит бумагой" && compChoice === "img/scissors.png") {
            result.innerHTML = "Компьютер победил!"
        } else if (userChoice === "Игрок ходит бумагой" && compChoice === "img/stone.png") {
            result.innerHTML = "Игрок победил!"
        } else if (userChoice === "Игрок ходит бумагой" && compChoice === "img/paper.png") {
            result.innerHTML = "Ничья!"
        }

    }

    let move = document.getElementById("move")
    if (compChoice == "img/stone.png") {
        move.innerHTML = 'Компьютер ходит камнем'
    } else if (compChoice == "img/scissors.png") {
        move.innerHTML = 'Компьютер ходит ножницами'
    } else if (compChoice == "img/paper.png") {
        move.innerHTML = 'Компьютер ходит бумагой'
    }

    getResult()
    
})