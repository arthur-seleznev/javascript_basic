function drawChessBoard() {
    var board = document.getElementById("Board");
    var cell;
    var dark;
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
    
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            cell = document.createElement("div");

            if (j === 0) {
                dark = !(dark);
                var caption = document.createElement("p");
                caption.className = "caption numbers";
                caption.textContent = i + 1;
                cell.appendChild(caption);
            }

            if (i === 0) {
                var caption = document.createElement("p");
                caption.className = "caption letters";
                caption.textContent = letters[j];
                cell.appendChild(caption);
            }

            dark ? cell.className = "cell black" : cell.className = "cell dark";

            board.appendChild(cell);
            dark = !(dark);
        }
    }
}

drawChessBoard();