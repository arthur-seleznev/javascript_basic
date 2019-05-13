//Задание 1

function describeNumber(num) {
    if (!parseInt(num) || num > 999 || num < 0) {
        console.log("Введите корректное число");
        var numDescription = {};
        return numDescription;
    }

    var numStr = num.toString();
    var numDescription = {
        units: numStr[numStr.length - 1],
        tens: numStr[numStr.length - 2],
        hundreds: numStr[numStr.length - 3],
    };

    return numDescription;

}

var numDescription = describeNumber(68);

console.log(numDescription.units);
console.log(numDescription.tens);
console.log(numDescription.hundreds);

//Задание 2

var cart = {
    items: [],
    addItem: function (name, qty, price) {
        var item = {
            name: name,
            qty: qty,
            price: price,
        }

        this.items.push(item);
    },
    countBasketPrice: function () {
        var basketPrice = 0;
        for (var i = 0; i < this.items.length; i++) {
            basketPrice += this.items[i].qty * this.items[i].price;
        }
        return basketPrice;
    }
}

cart.addItem("Трусы", 2, 250);
cart.addItem("Носки", 2, 150);
cart.addItem("Ремень", 1, 1000);

console.log(cart.countBasketPrice());