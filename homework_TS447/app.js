var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            sum += this.items[i].scale;
        }
        console.log("Общий вес: " + sum + " кг");
    };
    Scales.prototype.getNameList = function () {
        var itemNames = this.items.map(function (item) { return item.name; });
        console.log("Список товаров на весах: " + itemNames);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale, _color, _taste) {
        var _this = _super.call(this, _name, _scale) || this;
        _this.color = _color;
        _this.taste = _taste;
        return _this;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale, _color, _taste) {
        var _this = _super.call(this, _name, _scale) || this;
        _this.color = _color;
        _this.taste = _taste;
        return _this;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}(Product));
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
newScale.getNameList();
newScale.getSumScale();
newScale.add(apple1);
newScale.getNameList();
newScale.getSumScale();
//# sourceMappingURL=app.js.map