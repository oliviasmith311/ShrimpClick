import{
    updateClickWorth, updateCost, updateDisplay
} from './utils/updateDisplay.js'

let clickCount = 0;
let perClickAmount = 1;

let companionCost = 100;
let companionCount = 0;

let compounderCost = 10;
let compounderCount = 0;

const clickType = 'click';
const companionType = 'Click Companion';
const compounderType = 'Click Compounder';

const clickButton = document.querySelector('.clickButton');
const clickCountDisplay = document.querySelector('.clickCountDisplay');
const clickWorthDisplay = document.querySelector('.clickWorth');

clickCountDisplay.innerText ='You have 0 clicks';
clickWorthDisplay.innerText = 'Each click is worth 1 click'

const companionWorthDisplay = document.querySelector('.companionCountWorth');
const compounderWorthDisplay = document.querySelector('.compounderCountWorth');

const companionButton = document.querySelector('.companionButton');
const companionCountDisplay = document.querySelector('.companionCountDisplay')

companionCountDisplay.innerText = 'You have ' + companionCount.toFixed(2) + ' Click Companions\nPurchase a Click Companion for ' + companionCost.toFixed(2) + ' clicks';

const compounderButton = document.querySelector('.compounderButton');
const compounderCountDisplay = document.querySelector('.compounderCountDisplay');

compounderCountDisplay.innerText = 'You have ' + compounderCount.toFixed(2) + ' Click Compounders\nPurchase a Click Compounder for ' + compounderCost.toFixed(2) + ' clicks';

const clickEvent = () => {
    clickCount += perClickAmount;
}

clickButton.addEventListener('click', () => {
    clickEvent(clickCount, perClickAmount);
    updateDisplay(clickCountDisplay, clickCount, clickType);
    updateClickWorth(clickWorthDisplay, perClickAmount);
});

const purchaseCompanion = () => {
    if(clickCount >= companionCost) {
        clickCount -= companionCost;
        companionCount++;
        companionCost = companionCost * 1.1;
    }
}

const addAutoClicks = () => {
    clickCount += (companionCount * perClickAmount);
}

companionButton.addEventListener('click', () => {
    purchaseCompanion(clickCount, companionCost, companionCount);
    updateDisplay(companionCountDisplay, companionCount, companionType);
    updateCost(companionWorthDisplay, companionType, companionCost);
    updateDisplay(clickCountDisplay, clickCount, clickType);
    updateClickWorth(clickWorthDisplay, perClickAmount);
})

function timer() {
    addAutoClicks(clickCount, companionCount, perClickAmount);
    updateDisplay(clickCountDisplay, clickCount, clickType);
    updateClickWorth(clickWorthDisplay, perClickAmount);
}

setInterval(timer, 1000);

const purchaseCompounder = () => {
    if(clickCount >= compounderCost){
        perClickAmount = perClickAmount * 1.2;
        clickCount -= compounderCost;
        compounderCount++;
        compounderCost = compounderCost * 1.1;
    }
}

compounderButton.addEventListener('click', () => {
    purchaseCompounder(clickCount, compounderCost, perClickAmount, compounderCount);
    updateDisplay(compounderCountDisplay, compounderCount, compounderType);
    updateCost(compounderWorthDisplay, compounderType, compounderCost);
    updateDisplay(clickCountDisplay, clickCount, clickType);
    updateClickWorth(clickWorthDisplay, perClickAmount);
})

const resetButton = document.querySelector('.resetButton');

const reset = () => {
    clickCount = 0;
    perClickAmount = 0;
    companionCost = 100;
    companionCount = 0;
    compounderCost = 10;
    compounderCount = 0;
}

resetButton.addEventListener('click', () => {
    reset(clickCount, perClickAmount, companionCost, companionCount, compounderCount, compounderCost);
    updateDisplay(clickCountDisplay, clickCount, clickType);
    updateClickWorth(clickWorthDisplay, perClickAmount);
    updateDisplay(companionCountDisplay, companionCount, companionType);
    updateDisplay(compounderCountDisplay, compounderCount, compounderType);
    updateCost(companionWorthDisplay, companionType, companionCost);
    updateCost(compounderWorthDisplay, compounderType, compounderCost);
})