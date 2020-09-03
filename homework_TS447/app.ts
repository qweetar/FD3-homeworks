class Scales {
    items:Array<IScaleable>;

    constructor(_items:Array<IScaleable>) {
        this.items = _items;
    }

    add(item:IScaleable):void {
        this.items.push(item);
    }

    getSumScale():number {
        let sum:number = 0;
        for (var i:number = 0; i < this.items.length; i++) {
            sum += this.items[i].getScale();
        }
        return sum;
    }

    getNameList():Array<string> {
        let itemNames:Array<string> = this.items.map(item => item.getName());
        return itemNames;
    }
}

interface IScaleable {

    getScale():number;
    
    getName():string;

}

class Apple implements IScaleable {

    name:string;
    scale:number;
    color:string;
    taste:string;

    constructor(_name:string, _scale:number, _color:string, _taste:string) {
        this.name = _name;
        this.scale = _scale;
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

class Tomato implements IScaleable {

    name:string;
    scale:number;
    color:string;
    taste:string;

    constructor(_name:string, _scale:number, _color:string, _taste:string) {
        this.name = _name;
        this.scale = _scale;
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


console.log("________________________________");

newScale.add(apple1);
console.log("Список товаров на весах: " + newScale.getNameList());
console.log("Общий вес: " + newScale.getSumScale() + " кг");

console.log("________________________________");

console.log("Сорт яблок: " + productArr[2].getName() + ", вес в кг: " + productArr[2].getScale());
console.log("Сорт помидор: " + productArr[4].getName() + ", вес в кг: " + productArr[4].getScale());



