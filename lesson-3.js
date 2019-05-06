// Задание 1

var x = 2;
var endOfRange = 100;
var divider;
var dividerCounter;

while (x <= 100) {
    divider = 2;
    dividerCounter = 0;

    while (divider < x && dividerCounter === 0) {
        if (x % divider === 0) {
            dividerCounter++;
        }
        divider++;
    }

    if (dividerCounter === 0) {
        console.log(x);
    }

    x++;
}

// Задание 2-3

var cart = [["Трусы", 2, 250], ["Носки", 2, 150], ["Ремень", 1, 1000]];

function countBasketPrice(cart) {
    var basketPrice = 0;
    for (var i = 0; i < cart.length; i++) {
        basketPrice += cart[i][1] * cart[i][2];
    }
    return basketPrice;
}

console.log(countBasketPrice(cart));

// Задание 4

for (var i = 0; i <= 9; console.log(i++)){}

// Задание 5

var row = "";
for (var i = 0; i < 20;  i++) {
    row += "x";
    console.log(row);
}
