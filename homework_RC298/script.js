
var palindromArr = [
    {text: "Лёша на полке клопа нашёл", code: 1},
    {text: "А роза упала на лапу Азора", code: 2},
    {text: "Аргентина манит негра", code: 3},
    {text: "Уж редко рукою окурок держу", code: 4},
    {text: "Я — арка края", code: 5},
    {text: "Ася, молоко около мяса", code: 6},
    {text: "Тропа налево повела, на порт", code: 7},
    {text: "Надо меч в кулак, а лук – в чемодан", code: 8},
]


ReactDOM.render(
    React.createElement(PalindromBlock, {palindroms: palindromArr}),
    document.getElementById("container")
);