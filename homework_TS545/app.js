var Product = /** @class */ (function () {
    function Product(_name, _scale, _color, _taste) {
        this.name = _name;
        this.scale = _scale;
        this.color = _color;
        this.taste = _taste;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.itemArray = new Array();
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.itemArray.push(item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.itemArray[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.itemArray.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.ls = window.localStorage;
        this.key = "Продукты";
        this.itemArray = new Array();
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        this.itemArray.push(item);
        var lsObj = JSON.stringify(this.itemArray);
        this.ls.setItem(this.key, lsObj);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var lsObj = this.ls.getItem(this.key);
        var itemArray = [];
        itemArray = JSON.parse(lsObj);
        var newProduct = new Product(itemArray[index].name, itemArray[index].scale, itemArray[index].color, itemArray[index].taste);
        return newProduct;
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var lsObj = this.ls.getItem(this.key);
        var itemArray = [];
        itemArray = JSON.parse(lsObj);
        return itemArray.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(_storage) {
        this.storage = _storage;
    }
    Scales.prototype.add = function (item) {
        this.storage.addItem(item);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.storage.getCount(); i++) {
            var tempProd = this.storage.getItem(i).getScale();
            sum += tempProd;
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var itemNames = [];
        for (var i = 0; i < this.storage.getCount(); i++) {
            var tempProd = this.storage.getItem(i).getName();
            itemNames.push(tempProd);
        }
        return itemNames;
    };
    return Scales;
}());
var product1 = new Product("Белый налив", 5, "желтый", "сладкий");
var product2 = new Product("Антоновка", 10, "желтый", "кислый");
var product3 = new Product("Малиновка", 3, "красный", "кисло-сладкий");
var product4 = new Product("Черный принц", 5, "коричневый", "сладкий");
var product5 = new Product("Сливка", 3, "желтый", "сладкий");
var newStorageArray = new ScalesStorageEngineArray;
var newScale = new Scales(newStorageArray);
newScale.add(product1);
newScale.add(product2);
newScale.add(product3);
newScale.add(product4);
newScale.add(product5);
console.log("Список товаров на весах: " + newScale.getNameList());
console.log("Общий вес: " + newScale.getSumScale() + " кг");
console.log("________________________________");
var newStorageLocalStorage = new ScalesStorageEngineLocalStorage;
var newScale2 = new Scales(newStorageLocalStorage);
newScale2.add(product1);
newScale2.add(product2);
newScale2.add(product3);
newScale2.add(product4);
newScale2.add(product5);
console.log("Список товаров на весах: " + newScale.getNameList());
console.log("Общий вес: " + newScale.getSumScale() + " кг");
//# sourceMappingURL=app.js.map