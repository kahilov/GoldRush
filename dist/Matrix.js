/* eslint-disable no-unused-vars */
/* Write your code below */
class Matrix {
    constructor() {
    }
    generateMatrix(numRows, numColumns) {
        let matrix = []
        let placeHolder = "."
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(placeHolder)
            }
        }
        return matrix
    }
    print() {
        for (let x of this.matrix) {
            let line = ""
            for (let y of x) {
                line += (y + "\t")
            }
            console.log(line)
        }
    }
    get(num1, num2) {
        let x = this.matrix[num1]
        let y = x[num2]
        return y
    }
    alter(rowNum, columnNum, updatedValue) {
        let x = this.matrix
        x[rowNum][columnNum] = updatedValue
        return updatedValue
    }
    printRow(rowNum) {
        let x = this.matrix[rowNum]
        for (let y of x) {
            return y
        }
    }
    printColumn(columnNum) {
        for (let x of this.matrix) {
            return x[columnNum]
        }
    }
    findCoordinate(value) {
        let xIndex
        let yIndex
        let y = this.matrix
        for (let i = 0; i < y.length; i++) {
            xIndex = y[i].findIndex(x => x === value)
            yIndex = y.findIndex(y => y[i] === value)
            if (xIndex != -1 && yIndex != -1) {
                return {
                    x: xIndex,
                    y: yIndex
                }
            }
        }
    }
}
