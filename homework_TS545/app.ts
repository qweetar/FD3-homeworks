class Product {

    private name:string;
    private scale:number;
    private color:string;
    private taste:string;

    constructor(_name:string, _scale:number, _color:string, _taste:string) {
        this.name = _name;
        this.scale = _scale;
        this.color = _color;
        this.taste = _taste;
    }

    public getScale():number {
        return this.scale;
    }

    public getName():string {
        return this.name;
    }
}

interface IStorageEngine {

    addItem(item:Product):void;

    getItem(index:number):Product;

    getCount():number;
}

class ScalesStorageEngineArray implements IStorageEngine {

    itemArray:Array<Product>;

    constructor() {
        this.itemArray = new Array<Product>();
    }

    addItem(item:Product):void {
        this.itemArray.push(item);
    };

    getItem(index:number):Product {
        return this.itemArray[index];
    };

    getCount():number {
        return this.itemArray.length;
    };
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    ls = window.localStorage;
    key:string;
    itemArray:Array<Product>;

    constructor() {
        this.key = "Продукты";
        this.itemArray = new Array<Product>();
    }

    addItem(item:Product):void {
        this.itemArray.push(item);
        let lsObj = JSON.stringify(this.itemArray);
        this.ls.setItem(this.key, lsObj);
    };

    getItem(index:number):Product {
        let lsObj = this.ls.getItem(this.key);
        let itemArray = [];
        itemArray = JSON.parse(lsObj);
        var newProduct = new Product(itemArray[index].name, itemArray[index].scale, itemArray[index].color, itemArray[index].taste);
        return newProduct;
    };

    getCount():number {
        let lsObj = this.ls.getItem(this.key);
        let itemArray = [];
        itemArray = JSON.parse(lsObj);
        return itemArray.length;
    };
}

class Scales<StorageEngine extends IStorageEngine> {

    storage:IStorageEngine;

    constructor(_storage:IStorageEngine) {
        this.storage = _storage;
    }

    add(item:Product):void {
        this.storage.addItem(item);
    }

    getSumScale():number {
        let sum = 0;
        for (var i = 0; i < this.storage.getCount(); i++) {
            let tempProd:number = this.storage.getItem(i).getScale();
            sum += tempProd;
        }
        return sum;
    }

    getNameList():Array<string> {
        let itemNames = [];
        for (let i = 0; i < this.storage.getCount(); i++) {
            let tempProd:string = this.storage.getItem(i).getName();
            itemNames.push(tempProd);
        }
        return itemNames;
    }
}


let product1:Product = new Product("Белый налив", 5, "желтый", "сладкий");
let product2:Product = new Product("Антоновка", 10, "желтый", "кислый");
let product3:Product = new Product("Малиновка", 3, "красный", "кисло-сладкий");

let product4:Product = new Product("Черный принц", 5, "коричневый", "сладкий");
let product5:Product = new Product("Сливка", 3, "желтый", "сладкий");

let newStorageArray = new ScalesStorageEngineArray;
let newScale = new Scales<IStorageEngine>(newStorageArray);

newScale.add(product1);
newScale.add(product2);
newScale.add(product3);
newScale.add(product4);
newScale.add(product5);

console.log("Список товаров на весах: " + newScale.getNameList());
console.log("Общий вес: " + newScale.getSumScale() + " кг");

console.log("________________________________");

let newStorageLocalStorage = new ScalesStorageEngineLocalStorage;
let newScale2 = new Scales<IStorageEngine>(newStorageLocalStorage);

newScale2.add(product1);
newScale2.add(product2);
newScale2.add(product3);
newScale2.add(product4);
newScale2.add(product5);

console.log("Список товаров на весах: " + newScale.getNameList());
console.log("Общий вес: " + newScale.getSumScale() + " кг");

