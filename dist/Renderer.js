/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


class Renderer {
    constructor() {}
    RenderBoard(matrix) {
        let rowNum = matrix.length
        let columnNum = matrix[0].length
        $("#matrix").css({'grid-template-columns':`repeat(${columnNum},1fr)`})  
        $("#matrix").css({' grid-template-rows':`repeat(${rowNum},1fr)`})
        $("#matrix").empty();
        for (let x of matrix) {
            for (let y of x) {
                let elem_playerI = $("<i class=\"fas fa-chess-pawn\"></i>")
                if (y == 1) {
                    let elem_player1 = $("<div style=\"font-size: 3em\"id=\"player1\"class=\"items\"></div>")
                    $("#matrix").append(elem_player1)
                    $("#player1").append(elem_playerI)
                }
                if (y == 2) {
                    let elem_player2 = $("<div style=\"font-size: 3em\" id=\"player2\"class=\"items\"></div>")
                    $("#matrix").append(elem_player2)
                    $("#player2").append(elem_playerI)
                }
                if (y === "c") {
                    let elem_coin = $("<div id=\"coin\"class=\"items\"style=\"font-size: 3em\"><i class=\"fas fa-shekel-sign\"></i></div>")
                    $("#matrix").append(elem_coin)
                }
                if (y === ".") {
                    let elem_dot = $("<div id=\"dot\"class=\"items\"style=\"font-size: 3em\">.</div>")
                    $("#matrix").append(elem_dot)
                }
                if (y === "w") {
                    let elem_wall = $("<div id=\"wall\"class=\"items\"style=\"font-size: 3em\">w</div>")
                    $("#matrix").append(elem_wall)
                }
            }
        }
    }
    RenderScores(score1, score2) {
        $("#score1").text(score1)
        $("#score2").text(score2)
    }
}