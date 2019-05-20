window.addEventListener("load", init);

function init() {
    catalog.addItem("Трусы", 250, ["1.jpg", "2.jpg", "3.jpg"]);
    catalog.addItem("Носки", 150, ["1.jpg", "2.jpg", "3.jpg"]);
    catalog.addItem("Ремень", 1000, ["1.jpg", "2.jpg", "3.jpg"]);

    catalog.displayCatalog("catalog");

    cart.displayCart("cart");

    document.querySelector(".catalog").addEventListener("click", handleBtnBuy);
    document.querySelector(".catalog").addEventListener("click", handleImageClick);
}

function handleBtnBuy(event) {
    if (event.target.className === "btnBuy") {
        cart.addItem(
            event.target.parentElement.querySelector(".item-name").textContent,
            1,
            event.target.parentElement.querySelector(".item-price").textContent
        )

        cart.displayCart();
    }
}

function handleImageClick(event) {
    if (event.target.tagName === "IMG") {
        var modal = document.querySelector(".modal");
        modal.classList.toggle("closed");
    }
}


var catalog = {
    items: [],
    addItem: function (name, price, img) {
        var item = {
            name: name,
            price: price,
            img: img,
        }

        this.items.push(item);
    },

    displayCatalog: function () {
        var catalog = document.querySelector(".catalog")

        for (var i = 0; i < this.items.length; i++) {

            var item = document.createElement("div");
            item.className = "item";

            var image = document.createElement("img");
            image.src = this.items[i].img[0];
            var name = document.createElement("p");
            name.className = "item-name";
            name.textContent = this.items[i].name;

            var price = document.createElement("p");
            price.className = "item-price";
            price.textContent = this.items[i].price;

            var btnBuy = document.createElement("button");
            btnBuy.className = "btnBuy"
            btnBuy.textContent = "Купить";

            item.appendChild(image);
            item.appendChild(name);
            item.appendChild(price);
            item.appendChild(btnBuy);

            catalog.appendChild(item);
        }

    },

}

var cart = {
    items: [],
    addItem: function (name, qty, price) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name) {
                this.items[i].qty += qty;
                return;
            }
        }

        var item = {
            name: name,
            qty: +(qty),
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
    displayCart: function () {
        var cart = document.querySelector(".cart");
        cart.innerHTML = "";

        var message = document.createElement("p");
        message.className = "message";

        if (this.items.length === 0) {
            message.textContent = "Корзина пуста";
        } else {
            message.textContent = "В корзине " + this.countItemsQty() + " товаров на сумму " + this.countBasketPrice() + " рублей."
        }

        cart.appendChild(message);
    }
}