const game = () => {

    let currentSign = "x";

    const board = document.querySelector('.board');
    const tiles = document.querySelectorAll('.cell');
    console.log(tiles)

    tiles.forEach(tile => {
        tile.addEventListener('click', function() {
            click(tile);
        })
    })



    function flipSign() {
        if (currentSign === "x"){
            board.classList.remove(currentSign)
            currentSign = "o";
            board.classList.add(currentSign)
        }
        else {
            board.classList.remove(currentSign)
            currentSign = "x";
            board.classList.add(currentSign)
        }

    }


    function click(tile) {
        if (!tile.classList.contains("x") && !tile.classList.contains("o")){
            console.log(tile)
            tile.classList.add(currentSign)
            flipSign()
            checkWin()
        }
    }
    function checkWin() {
        const one =document.querySelector(".c1")
        const two = document.querySelector(".c2")
        const three = document.querySelector(".c3")
        const four = document.querySelector(".c4")
        const five = document.querySelector(".c5")
        const six = document.querySelector(".c6")
        const seven = document.querySelector(".c7")
        const eight = document.querySelector(".c8")
        const nine = document.querySelector(".c9")
        const signs = ["x", "o"]

        signs.forEach(sign => {
            if (one.classList.contains(sign)) {
                if (two.classList.contains(sign) && three.classList.contains(sign)) {
                    win(sign);
                }
                else if (four.classList.contains(sign) && seven.classList.contains(sign)) {
                    win(sign);
                }
                else if (five.classList.contains(sign) && nine.classList.contains(sign)) {
                    win(sign);
                }
            }
            else if (seven.classList.contains(sign)) {
                if (five.classList.contains(sign) && three.classList.contains(sign)) {
                    win(sign);
                }
                else if (eight.classList.contains(sign) && nine.classList.contains()) {
                    win(sign);
                }
            }
            else if (two.classList.contains(sign) && five.classList.contains(sign) && eight.classList.contains(sign)) {
                win(sign);
            }
            else if (four.classList.contains(sign) && five.classList.contains(sign) && six.classList.contains(sign)) {
                win(sign);
            }
            else if (three.classList.contains(sign) && six.classList.contains(sign) && nine.classList.contains(sign)) {
                win(sign);
            }

        })

    }

    function win(sign) {
        const winningMessage = document.querySelector('.winning-message')
        const winningText = document.querySelector('.winning-message div')
        winningMessage.classList.add('show');
        winningText.textContent = sign.toUpperCase() + " WINS"

    }
}

game();