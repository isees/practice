/**
 * ! fun version 0.0.1
 */


Number.prototype.before = function () {
    var value = parseInt(this.toString().split(".")[0], 10)
    return value ? value : 0
}

Number.prototype.after = function () {
    var value = parseInt(this.toString().split('.')[1], 10)
    return value ? value : 0
}

/**
 * Actually you can simply use
 *      decimal%1
 * @returns {*}
 */
Number.prototype.decimalPart = function () {
    var value = parseInt(this.toString().split('.')[1], 10)
    return value ? parseFloat('0.' + value) : 0
}


