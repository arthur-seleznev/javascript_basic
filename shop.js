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
        var container = document.querySelector("")
        for (var i = 0; i < this.items.length; i++) {
            var item = document.createElement("div");
            item.className = "item";
            var image = document.createElement("img");
            image.setAttribute("src", this.items[i].img);
            var name = document.createElement("p");
            name.className = "item-name";
            name.textContent = this.items[i].name;
            var price = document.createElement("p");
            price.className = "item-price";
            price.textContent = this.items[i].price;
            item.appendChild(image);
            item.appendChild(name);
            item.appendChild(price);
            container.appendChild(item)
        }
    }
}