document.addEventListener("DOMContentLoaded", () => {
    let game = new NinetynineGame();

    const num = document.getElementById("num");
    const move = document.getElementById("move");
    const restart = document.getElementById("restart");
    const actions = {
        restart: document.getElementById("action-restart")
    };
    const btns = [
        document.getElementById("btn1"),
        document.getElementById("btn2"),
        document.getElementById("btn3"),
        document.getElementById("btn4"),
        document.getElementById("btn5"),
    ];

    restart.addEventListener("click", startNewGame);
    actions.restart.addEventListener("click", startNewGame);

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", () => {
            game.buttonPress(i + 1);
            refreshValues();
        });
    }

    function startNewGame() {
        game = new NinetynineGame();

        for (let i = 0; i < btns.length; i++) {
            const value = game.getButtonHiddenValue(i + 1);
            if (value === "+") btns[i].innerHTML = `<i class="display-3 bi bi-plus"></i>`;
            else if (value === "-") btns[i].innerHTML = `<i class="display-3 bi bi-dash"></i>`;
            else btns[i].innerHTML = value;

            btns[i].disabled = false;
        }

        refreshValues();
    }

    function refreshValues() {
        num.textContent = game.currentNum;

        if (game.isWin) {
            move.textContent = `Won in ${game.currentMove} moves`;
            restart.hidden = false;

            for (let i = 0; i < btns.length; i++) {
                btns[i].innerText = game.getButtonDisplayValue(i + 1);
                btns[i].disabled = true;
            }

            num.innerHTML = game.targetNum
                .toString()
                .split("")
                .map((digit, i) =>
                    `<span style="color:${i % 2 ? 'var(--btn-sub-colour)' : 'var(--btn-add-colour)'}">${digit}</span>`
                )
                .join("");

            return;
        }

        move.textContent = `Move ${game.currentMove}`;
        restart.hidden = true;
    }

    startNewGame();
});
