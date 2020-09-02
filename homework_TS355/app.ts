class Scales {
    items:Array<Product>;

    constructor(_items:Array<Product>) {
        this.items = _items;
    }

    add(item:Product):void {
        this.items.push(item);
    }

    getSumScale():number {
        let sum = 0;
        for (var i = 0; i < this.items.length; i++) {
            sum += this.items[i].scale;
        }
        return sum;
    }

    getNameList():Array<string> {
        let itemNames = this.items.map(item => item.name);
        return itemNames;
    }
}

class Product {

    name:string;
    scale:number;

    constructor(_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }

    getScale():number {
        return this.scale;
    }

    getName():string {
        return this.name;
    }
}

class Apple extends Product {

    color:string;
    taste:string;

    constructor(_name:string, _scale:number, _color:string, _taste:string) {
        super(_name, _scale);
        this.color = _color;
        this.taste = _taste;
    }
}

class Tomato extends Product {

    color:string;
    taste:string;

    constructor(_name:string, _scale:number, _color:string, _taste:string) {
        super(_name, _scale);
        this.color = _color;
        this.taste = _taste;
    }
}

let apple1:Apple = new Apple("Белый налив", 5, "желтый", "сладкий");
let apple2:Apple = new Apple("Антоновка", 10, "желтый", "кислый");
let apple3:Apple = new Apple("Малиновка", 3, "красный", "кисло-сладкий");

let tomato1:Tomato = new Tomato("Черный принц", 5, "коричневый", "сладкий");
let tomato2:Tomato = new Tomato("Сливка", 3, "желтый", "сладкий");

let productArr = [];
productArr.push(apple1);
productArr.push(apple2);
productArr.push(apple3);
productArr.push(tomato1);
productArr.push(tomato2);

let newScale:Scales = new Scales(productArr);

console.log("Список товаров на весах: " + newScale.getNameList());
console.log("Общий вес: " + newScale.getSumScale() + " кг");
newScale.add(apple1);
console.log("Список товаров на весах: " + newScale.getNameList());
console.log("Общий вес: " + newScale.getSumScale() + " кг");




