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
        console.log(this.itemArray);
        return this.itemArray[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        console.log(this.itemArray);
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
        this.lsObj = JSON.stringify(this.itemArray);
        // console.log(this.itemArray);
        this.ls.setItem(this.key, this.lsObj);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        this.lsObj = this.ls.getItem(this.key);
        this.itemArray = JSON.parse(this.lsObj);
        console.log(this.itemArray);
        return this.itemArray[index];
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        this.lsObj = this.ls.getItem(this.key);
        this.itemArray = JSON.parse(this.lsObj);
        console.log(this.itemArray);
        return this.itemArray.length;
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
            var tempProd = this.storage.getItem(i);
            // console.log(tempProd);
            sum += tempProd.getScale();
        }
        console.log("Общий вес: " + sum + " кг");
    };
    Scales.prototype.getNameList = function () {
        var itemNames = [];
        for (var i = 0; i < this.storage.getCount(); i++) {
            var tempProd = this.storage.getItem(i);
            // console.log(tempProd);
            itemNames.push(tempProd.getName());
        }
        console.log("Список товаров на весах: " + itemNames);
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
newScale.getNameList();
newScale.getSumScale();
console.log("________________________________");
var newStorageLocalStorage = new ScalesStorageEngineLocalStorage;
var newScale2 = new Scales(newStorageLocalStorage);
newScale2.add(product1);
newScale2.add(product2);
newScale2.add(product3);
newScale2.add(product4);
newScale2.add(product5);
newScale2.getNameList();
newScale2.getSumScale();
//# sourceMappingURL=app.js.map