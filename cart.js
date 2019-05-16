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
    },
    countItemsQty: function () {
        var qty = 0;
        for (var i = 0; i < this.items.length; i++) {
            qty += this.items[i].qty;
        }
        return qty;
    },
    displayCart: function (block) {
        var container = document.getElementById(block);
        var message = document.createElement("p");
        message.className = "message";

        if (this.items.length === 0) {
            message.textContent = "Корзина пуста";
        }
        else {
            message.textContent = "В корзине " + this.countItemsQty() + " товаров на сумму " + this.countBasketPrice() + " рублей."
        }

        container.appendChild(message);
    }
}

cart.addItem("Трусы", 2, 250);
cart.addItem("Носки", 2, 150);
cart.addItem("Ремень", 1, 1000);

cart.displayCart("cart");