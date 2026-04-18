document.addEventListener("DOMContentLoaded", () => {
    const game = new NinetynineGame();

    const num = document.getElementById("num");
    const move = document.getElementById("move");
    const btns = [
        document.getElementById("btn1"),
        document.getElementById("btn2"),
        document.getElementById("btn3"),
        document.getElementById("btn4"),
        document.getElementById("btn5"),
    ];

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", () => {
            game.buttonPress(i + 1);
            refreshValues();
        });
    }

    function refreshValues() {
        num.textContent = game.currentNum;

        if (game.isWin) {
            move.textContent = `Won in ${game.currentMove} moves`;
            btns.forEach(btn => btn.disabled = true);
        }

        else {
            move.textContent = `Move ${game.currentMove}`;
        }
    }

    refreshValues();
});
