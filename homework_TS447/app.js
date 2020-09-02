var Scales = /** @class */ (function () {
    function Scales(_items) {
        this.items = _items;
    }
    Scales.prototype.add = function (item) {
        this.items.push(item);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.items.length; i++) {
            sum += this.items[i].getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var itemNames = this.items.map(function (item) { return item.getName(); });
        return itemNames;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _scale, _color, _taste) {
        this.name = _name;
        this.scale = _scale;
        this.color = _color;
        this.taste = _taste;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale, _color, _taste) {
        this.name = _name;
        this.scale = _scale;
        this.color = _color;
        this.taste = _taste;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var apple1 = new Apple("Белый налив", 5, "желтый", "сладкий");
var apple2 = new Apple("Антоновка", 10, "желтый", "кислый");
var apple3 = new Apple("Малиновка", 3, "красный", "кисло-сладкий");
var tomato1 = new Tomato("Черный принц", 5, "коричневый", "сладкий");
var tomato2 = new Tomato("Сливка", 3, "желтый", "сладкий");
var productArr = [];
productArr.push(apple1);
productArr.push(apple2);
productArr.push(apple3);
productArr.push(tomato1);
productArr.push(tomato2);
var newScale = new Scales(productArr);
console.log("Список товаров на весах: " + newScale.getNameList());
console.log("Общий вес: " + newScale.getSumScale() + " кг");
console.log("________________________________");
newScale.add(apple1);
console.log("Список товаров на весах: " + newScale.getNameList());
console.log("Общий вес: " + newScale.getSumScale() + " кг");
console.log("________________________________");
console.log("Сорт яблок: " + productArr[2].getName() + ", вес в кг: " + productArr[2].getScale());
console.log("Сорт помидор: " + productArr[4].getName() + ", вес в кг: " + productArr[4].getScale());
//# sourceMappingURL=app.js.map