/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-empty */

class GoldRush extends Matrix {
    constructor() {
        super()
        this.matrix = []
        this.player1 = {
            x: 0,
            y: 0,
            score: 0
        }
        this.player2 = {
            x: 0,
            y: 0,
            score: 0
        }
    }
    loadBoard(x, y) {
        let matrix = this.generateMatrix(x, y)
        matrix[0][0] = 1
        matrix[x - 1][y - 1] = 2
        this.matrix = matrix
        this.player1.x = 0
        this.player1.y = 0
        this.player2.x = x - 1
        this.player2.y = y - 1
        for (let i in matrix) {
            for (let j in matrix[i]) {
                if (matrix[i][j] != 1 && matrix[i][j] != 2) {
                    let rand = Math.random()
                    if (rand < 0.75) {
                        matrix[i][j] = "c"
                    } else {
                        matrix[i][j] = "w"
                    }
                }
            }
        }


        return this.matrix
    }
    otherPlayer(playerNum) {
        if (playerNum == 1) {
            return 2
        } else {
            return 1
        }
    }
    validPosition(cellContent, playerNum) {
        if (cellContent === "w" || cellContent == this.otherPlayer(playerNum)) {
            return false
        }
        return true
    }
    movePlayer(playerNum, direction) {
        let playerObj = this["player" + playerNum]

        if (direction === "up" && playerObj.x != 0) {
            playerObj.x--
            if (this.matrix[playerObj.x][playerObj.y] === "c") {
                playerObj.score += 10
            }
            if (!this.validPosition(this.matrix[playerObj.x][playerObj.y], playerNum)) {
                playerObj.x++
                return
            }
            this.alter(playerObj.x, (playerObj.y), playerNum)
            this.matrix[playerObj.x + 1].splice((playerObj.y), 1, ".")
        }
        if (direction === "down" && playerObj.x != this.matrix.length - 1) {
            playerObj.x++
            if (this.matrix[playerObj.x][playerObj.y] === "c") {
                playerObj.score += 10
            }
            if (!this.validPosition(this.matrix[playerObj.x][playerObj.y], playerNum)) {
                playerObj.x--
                return
            }
            this.alter(playerObj.x, (playerObj.y), playerNum)
            this.matrix[playerObj.x - 1].splice((playerObj.y), 1, ".")
        }
        if (direction === "left" && playerObj.y != 0) {
            playerObj.y--
            if (this.matrix[playerObj.x][playerObj.y] === "c") {
                playerObj.score += 10
            }
            if (!this.validPosition(this.matrix[playerObj.x][playerObj.y], playerNum)) {
                playerObj.y++
                return
            }
            this.alter(playerObj.x, (playerObj.y), playerNum)
            this.matrix[playerObj.x].splice((playerObj.y + 1), 1, ".")
        }
        if (direction === "right" && playerObj.y != this.matrix.length - 1) {
            playerObj.y++
            if (this.matrix[playerObj.x][playerObj.y] === "c") {
                playerObj.score += 10
            }
            if (!this.validPosition(this.matrix[playerObj.x][playerObj.y], playerNum)) {
                playerObj.y--
                return
            }
            this.alter(playerObj.x, (playerObj.y), playerNum)
            this.matrix[playerObj.x].splice((playerObj.y - 1), 1, ".")
        }
    }
}