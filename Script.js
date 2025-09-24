let Money = 1;
let gold = 0;
let position = 1;

const moneyDivElement = document.getElementById('moneydiv');
const positonelement = document.getElementById('position');
const goldelement = document.getElementById('goldcount');
const manelelement = document.getElementById('Man')

moneyDivElement.innerHTML = Money;
positonelement.innerHTML = position;
goldelement.innerHTML = gold;

function Clickmoney() {
    Money++;
    moneyDivElement.innerHTML = Money;
}

function Clickgold() {
    gold++;
    goldelement.innerHTML = gold;
}

function changepos() {
    if (position === 1) {
        position = 2;
        manelelement.style.right = '30%'
    } else if (position === 2) {
        manelelement.style.right = '49%'
        position = 1;
    }
    positonelement.innerHTML = position;
}

function gameloop() {
    if (position === 1) {
        if (gold > 0) {
            gold--;
            Money++;
            goldelement.innerHTML = gold;
            moneyDivElement.innerHTML = Money;
        }
    } else if (position === 2) {
        gold++;
        goldelement.innerHTML = gold;
    }
}

function startgame() {
    setInterval(gameloop, 1000);
}

manelelement.style.right = '49%'