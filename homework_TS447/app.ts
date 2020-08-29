class Scales {
    items:Array<Product>;

    constructor(_items:Array<Product>) {
        this.items = _items;
    }

    add(item:Product):void {
        this.items.push(item);
    }

    getSumScale():void {
        let sum = 0;
        for (var i = 0; i < this.items.length; i++) {
            sum += this.items[i].scale;
        }
        console.log("Общий вес: " + sum + " кг");
    }

    getNameList():void {
        let itemNames = this.items.map(item => item.name);
        console.log("Список товаров на весах: " + itemNames);
    }
}

class Product {

    name:string;
    scale:number;

    constructor(_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }

}

interface IScaleable {

    getScale():number;
    
    getName():string;

}

class Apple extends Product implements IScaleable {

    color:string;
    taste:string;

    constructor(_name:string, _scale:number, _color:string, _taste:string) {
        super(_name, _scale);
        this.color = _color;
        this.taste = _taste;
    }
    getScale():number {
        return this.scale;
    }

    getName():string {
        return this.name;
    }
}

class Tomato extends Product implements IScaleable {

    color:string;
    taste:string;

    constructor(_name:string, _scale:number, _color:string, _taste:string) {
        super(_name, _scale);
        this.color = _color;
        this.taste = _taste;
    }
    getScale():number {
        return this.scale;
    }

    getName():string {
        return this.name;
    }
}

let apple1:Product = new Apple("Белый налив", 5, "желтый", "сладкий");
let apple2:Product = new Apple("Антоновка", 10, "желтый", "кислый");
let apple3:Product = new Apple("Малиновка", 3, "красный", "кисло-сладкий");

let tomato1:Product = new Tomato("Черный принц", 5, "коричневый", "сладкий");
let tomato2:Product = new Tomato("Сливка", 3, "желтый", "сладкий");

let productArr = [];
productArr.push(apple1);
productArr.push(apple2);
productArr.push(apple3);
productArr.push(tomato1);
productArr.push(tomato2);

let newScale:Scales = new Scales(productArr);

newScale.getNameList();
newScale.getSumScale();
newScale.add(apple1);
newScale.getNameList();
newScale.getSumScale();




