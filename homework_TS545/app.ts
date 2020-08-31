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

    addItem(item:Object):void;

    getItem(index:number):Object;

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
        console.log(this.itemArray);
        return this.itemArray[index];
    };

    getCount():number {
        console.log(this.itemArray);
        return this.itemArray.length;
    };
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    ls = window.localStorage;
    lsObj:string;
    key:string;
    itemArray:Array<Product>;

    constructor() {
        this.key = "Продукты";
        this.itemArray = new Array<Product>();
    }

    addItem(item:Product):void {
        this.itemArray.push(item);
        this.lsObj = JSON.stringify(this.itemArray);
        // console.log(this.itemArray);
        this.ls.setItem(this.key, this.lsObj);
    };

    getItem(index:number):Product {
        this.lsObj = this.ls.getItem(this.key);
        this.itemArray = JSON.parse(this.lsObj);
        console.log(this.itemArray);
        return this.itemArray[index];
    };

    getCount():number {
        this.lsObj = this.ls.getItem(this.key);
        this.itemArray = JSON.parse(this.lsObj);
        console.log(this.itemArray);
        return this.itemArray.length;
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

    getSumScale():void {
        let sum = 0;
        for (var i = 0; i < this.storage.getCount(); i++) {
            let tempProd:Product = <Product>this.storage.getItem(i);
            // console.log(tempProd);
            sum += tempProd.getScale();
        }
        console.log("Общий вес: " + sum + " кг");
    }

    getNameList():void {
        let itemNames = [];
        for (let i = 0; i < this.storage.getCount(); i++) {
            let tempProd:Product = <Product>this.storage.getItem(i);
            // console.log(tempProd);
            itemNames.push(tempProd.getName());
        }
        console.log("Список товаров на весах: " + itemNames);
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

newScale.getNameList();
newScale.getSumScale();

console.log("________________________________");

let newStorageLocalStorage = new ScalesStorageEngineLocalStorage;
let newScale2 = new Scales<IStorageEngine>(newStorageLocalStorage);

newScale2.add(product1);
newScale2.add(product2);
newScale2.add(product3);
newScale2.add(product4);
newScale2.add(product5);

newScale2.getNameList();
newScale2.getSumScale();

