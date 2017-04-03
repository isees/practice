/**
 * Created by icodes on 3/24/2017.
 */

function inheritsFrom(child, parent) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

Product = function (name, price) {
    this.name = name
    this.price = price
}

Product.prototype.getName = function () {
    return this.name
}

Product.prototype.getPrice = function () {
    return this.price
}

Product.prototype.getInformation = function () {
    return {
        "name": this.name,
        "price": this.price
    }
}

Toy = function (name, price) {
    Product.call(this, name, price)
    this.category = 'TOY'
}

inheritsFrom(Toy, Product)

Toy.prototype.getCategory = function () {
    return this.category
}

Toy.prototype.getInformation = function () {
    var info = Product.prototype.getInformation.call(this)
    info['category'] = this.category
    return info
}

fun = new Toy("Doggy", 1000)
debugger
console.log(fun.getName(), fun.getPrice(), fun.getCategory())
console.log(fun.getInformation())
