
var ballArr = [
    {name: "Мяч для американского футбола", code: 1,  imageUrl: "images/football.png", count: 12, description: "NFL Junior Bulk Wilson WTF1857XB.", price: 20},
    {name: "Бейсбольный мяч", code: 2, imageUrl: "images/baseball.png", count: 100, description: "Wilson 'Championship'", price: 25},
    {name: "Баскетбольный мяч", code: 3, imageUrl: "images/basketball.png", count: 20, description: "Jogel JB-100", price: 33},
    {name: "Шар для боулинга", code: 4, imageUrl: "images/bowling.png", count: 5, description: "Patriot Blaze", price: 15},
    {name: "Бильярдные шары", code: 5, imageUrl: "images/snoocer.png", count: 155, description: "Aramith Super PRO Cup", price: 42},
    {name: "Футбольный мяч", code: 6, imageUrl: "images/soccer.png", count: 25, description: "Adidas Uniforia Club", price: 38},
    {name: "Мяч для тенниса", code: 7, imageUrl: "images/tennis.png", count: 88, description: "Head Penn Coach Red Label", price: 81},
    {name: "Волейбольный мяч", code: 8, imageUrl: "images/voleyball.png", count: 32, description: "Mikasa V200W", price: 47}
]

var shopSection = "Мир мячей";

ReactDOM.render(
    React.createElement(SportShop, {shopName: shopSection, balls: ballArr}),
    document.getElementById("container")
);