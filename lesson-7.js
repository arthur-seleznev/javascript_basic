window.addEventListener("load", init);
window.addEventListener("click", handleDetailsClick);
window.addEventListener("keydown", handleArrowPress);

function init() {
    catalog.addItem("Трусы", 250, ["1.jpg", "2.jpg", "3.jpg"]);
    catalog.addItem("Носки", 150, ["1.jpg", "2.jpg", "3.jpg"]);
    catalog.addItem("Ремень", 1000, ["1.jpg", "2.jpg", "3.jpg"]);

    console.log(catalog.items[1].img);

    catalog.displayCatalog();

    cart.displayCart();

    document.querySelector(".catalog").addEventListener("click", handleBtnBuy);
    document.querySelector(".catalog").addEventListener("click", handleImageClick);
    document.querySelector("#next").addEventListener("click", handleNextClick);
    document.querySelector("#close").addEventListener("click", handleCloseClick);
    document.querySelector("#previous").addEventListener("click", handlePreviousClick);
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

function handleDetailsClick(event) {
    if (event.target.tagName === "SUMMARY") {
        event.preventDefault();
        var tabs = document.getElementsByTagName("details");

        for (var i = 0; i < tabs.length; i++) {
            tabs[i].open = false;
        }

        event.target.parentElement.open = true;
    }
}

function handleRemoveClick(event) {
    if (event.target.tagName === "BUTTON") {
        var itemId = event.target.parentElement.parentElement.id.substring("cartItem".length);
        cart.removeItem(itemId);
        cart.displayCart();
    }
}

function handleImageClick(event) {
    if (event.target.tagName === "IMG") {
        var modal = document.querySelector(".modal");
        modal.classList.toggle("closed");

        slider.loadItem(catalog.items[event.target.parentElement.dataset.id]);
        slider.currentImage = 0;

        var image = document.querySelector(".modal IMG");
        image.src = slider.images[slider.currentImage];

    }
}

function handleNextClick() {
    slider.next();
    var image = document.querySelector(".modal IMG");
    image.src = slider.images[slider.currentImage];
}

function handlePreviousClick() {
    slider.previous();
    var image = document.querySelector(".modal IMG");
    image.src = slider.images[slider.currentImage];
}

function handleCloseClick() {
    var modal = document.querySelector(".modal");
    modal.classList.toggle("closed");
}

function handleArrowPress(event) {
    switch(event.code) {
        case "ArrowRight":
            handleNextClick();
            break;
        case "ArrowLeft":
            handlePreviousClick();
            break;
    }
}

var slider = {
    images: [],
    currentImage: 0,
    loadItem: function (item) {
        this.images = item.img;
    },

    next: function () {
        this.currentImage === this.images.length - 1 ? this.currentImage = 0 : this.currentImage++;
    },

    previous: function () {
        this.currentImage === 0 ? this.currentImage = this.images.length - 1 : this.currentImage--;
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
            item.dataset.id = i;

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

    removeItem: function(itemId) {
        if (this.items[itemId].qty > 1) {
            this.items[itemId].qty--;
        }
        else {
            this.items.splice(itemId, 1);
        }
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

        if (this.items.length === 0) {
            cart.textContent = "Корзина пуста";
        } else {
            var cartTable = document.createElement("table");
            var cartTableHeader = document.createElement("tr");

            var nameHeader = document.createElement("th");
            nameHeader.textContent = "Наименование";
            cartTableHeader.appendChild(nameHeader);

            var qtyHeader = document.createElement("th");
            qtyHeader.textContent = "Количество";
            cartTableHeader.appendChild(qtyHeader);

            var priceHeader = document.createElement("th");
            priceHeader.textContent = "Цена";
            cartTableHeader.appendChild(priceHeader);

            var amountHeader = document.createElement("th");
            amountHeader.textContent = "Сумма";
            cartTableHeader.appendChild(amountHeader);

            cartTable.appendChild(cartTableHeader);

            for (var i = 0; i < this.items.length; i++) {
                var dataRow = document.createElement("tr");
                dataRow.id = "cartItem" + i;

                var $name = document.createElement("td");
                $name.textContent = this.items[i].name;
                dataRow.appendChild($name);

                var $qty = document.createElement("td");
                $qty.textContent = this.items[i].qty;
                dataRow.appendChild($qty);

                var $price = document.createElement("td");
                $price.textContent = this.items[i].price;
                dataRow.appendChild($price);

                var $amount = document.createElement("td");
                $amount.textContent = this.items[i].price * this.items[i].qty;
                dataRow.appendChild($amount);

                var $deleteBtn = document.createElement("button");
                var $btnCell = document.createElement("td");
                $deleteBtn.textContent = "X";
                $deleteBtn.classList.add("deleteBtn");
                $btnCell.appendChild($deleteBtn);
                dataRow.appendChild($btnCell);

                cartTable.appendChild(dataRow);
            }

            var $summaryRow = document.createElement("tr");
            var $summaryCaption = document.createElement("td");
            $summaryCaption.colSpan = 3;
            $summaryCaption.textContent = "Общая сумма корзины:";
            var $summaryTotal = document.createElement("td");
            $summaryTotal.textContent = this.countBasketPrice();

            $summaryRow.appendChild($summaryCaption);
            $summaryRow.appendChild($summaryTotal);
            $summaryRow.appendChild(document.createElement("td"));

            cartTable.appendChild($summaryRow);
            
            cartTable.addEventListener("click", handleRemoveClick);


            cart.appendChild(cartTable);
        }

    }
}