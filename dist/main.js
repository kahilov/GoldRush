/* eslint-disable no-undef */
const board = new GoldRush()
const render = new Renderer()

function loadScores() {
    render.RenderScores(board.player1.score, board.player2.score);
    if(board.player1.score == 50){
        $("#matrix").empty()
        let elem_p1WinSreen = $("<div style=\"font-size: 225px\"class=\"winScreen\">Player 1 Won!</div>")
        $("#matrix").css({'display':'flex'})
        $("#matrix").append(elem_p1WinSreen)
        $("#start").html("Restart")
    }
    if(board.player2.score == 50){
        $("#matrix").empty()
        let elem_p2WinSreen = $("<div style=\"font-size: 225px\" class=\"winScreen\">Player 2 Won!</div>")
        $("#matrix").css({'display':'flex'})  
        $("#matrix").append(elem_p2WinSreen)
        $("#start").html("Restart")
    }
}

function loadGame(x,y) {
    render.RenderBoard(board.loadBoard(x, y));
}

function movePlayer() {
    render.RenderBoard(board.matrix);
}

$("#start").on("click", function () {
    $("#matrix").empty()
    $("#matrix").css({'display':'grid'})
    board.player1.score=0
    board.player2.score=0
    let inputX = $("#minX").val()
    let inputY = $("#minY").val()
    loadGame(inputX,inputY)
    loadScores()
})

$(document).on('keypress', function (e) {
    if(board.player1.score == 50){
        return
    }
    if (e.which == 119) {
        board.movePlayer(1, "up")
        movePlayer();
        loadScores()
    }
    if (e.which == 115) {
        board.movePlayer(1, "down")
        movePlayer();
        loadScores()
    }
    if (e.which == 97) {
        board.movePlayer(1, "left")
        movePlayer();
        loadScores()
    }
    if (e.which == 100) {
        board.movePlayer(1, "right")
        movePlayer();
        loadScores()
    }
})
$(document).on('keypress', function (e) {
    if(board.player2.score == 50){
        return
    }
    if (e.which == 105) {
        board.movePlayer(2, "up")
        movePlayer();
        loadScores()
    }
    if (e.which == 107) {
        board.movePlayer(2, "down")
        movePlayer();
        loadScores()
    }
    if (e.which == 106) {
        board.movePlayer(2, "left")
        movePlayer();
        loadScores()
    }
    if (e.which == 108) {
        board.movePlayer(2, "right")
        movePlayer();
        loadScores()
    }
})






// if(board.player1.score){
//     render.RenderScores(board.player1.score)
// }

// if(board.player2.score){
//     render.RenderScores(board.player2.score