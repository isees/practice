/**
 * Created by icodes on 3/29/2017.
 */


var numbers = []
for (var i = 0; i < 8; i++) {
    numbers.push(i)
}

for (var index = 0; index < 8; index++) {
    var versusIndex = (index + numbers.length / 2 ) % numbers.length
    var x = numbers[index]
    var y = numbers[versusIndex]
    console.log(x, y)
}




