let clickCount = 0;
let perClickAmount = 1;

const clickButton = document.querySelector('.clickButton');
const clickCountDisplay = document.querySelector('.clickCountDisplay');
clickCountDisplay.innerText ='You have ' + clickCount.toFixed(2) + ' clicks\nEach click is worth ' + perClickAmount.toFixed(2) + ' clicks';

const clickEvent = () => {
    clickCount += perClickAmount;
}

const updateClickCountDisplay = () => {
    clickCountDisplay.innerText = 'You have ' + clickCount.toFixed(2) + ' clicks\nEach click is worth ' + perClickAmount.toFixed(2) + ' clicks';
}

clickButton.addEventListener('click', () => {
    clickEvent(clickCount, perClickAmount);
    updateClickCountDisplay(clickCount);   
    console.log(clickCount); 
});

let companionCost = 100;
let companionCount = 0;

const companionButton = document.querySelector('.companionButton');
const companionCountDisplay = document.querySelector('.companionCountDisplay')
companionCountDisplay.innerText = 'You have ' + companionCount.toFixed(2) + ' Click Companions\nPurchase a Click Companion for ' + companionCost.toFixed(2) + ' clicks';

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

const updateCompanionCountDisplay = () => {
    companionCountDisplay.innerText = 'You have ' + companionCount.toFixed(2) + ' Click Companions\nPurchase a Click Companion for ' + companionCost.toFixed(2) + ' clicks';
}

companionButton.addEventListener('click', () => {
    purchaseCompanion(clickCount, companionCost, companionCount);
    updateCompanionCountDisplay(companionCount);
    updateClickCountDisplay(clickCount);
})

function timer() {
    addAutoClicks(clickCount, companionCount, perClickAmount);
    updateClickCountDisplay(companionCount);
}

setInterval(timer, 1000);

let compounderCost = 10;
let compounderCount = 0;

const compounderButton = document.querySelector('.compounderButton');
const compounderCountDisplay = document.querySelector('.compounderCountDisplay');
compounderCountDisplay.innerText = 'You have ' + compounderCount.toFixed(2) + ' Click Compounders\nPurchase a Click Compounder for ' + compounderCost.toFixed(2) + ' clicks';

const purchaseCompounder = () => {
    if(clickCount >= compounderCost){
        perClickAmount = perClickAmount * 1.2;
        clickCount -= compounderCost;
        compounderCount++;
        compounderCost = compounderCost * 1.1;
    }
}

const updateCompounderCountDisplay = () => {
    compounderCountDisplay.innerText = 'You have ' + compounderCount.toFixed(2) + ' Click Compounders\nPurchase a Click Compounder for ' + compounderCost.toFixed(2) + ' clicks';
}

compounderButton.addEventListener('click', () => {
    purchaseCompounder(clickCount, compounderCost, perClickAmount, compounderCount);
    updateCompounderCountDisplay(compounderCount, compounderCost);
    updateClickCountDisplay(clickCount);
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
    updateClickCountDisplay(clickCount);
    updateCompanionCountDisplay(companionCost, companionCount);
    updateCompounderCountDisplay(compounderCost, compounderCount);
})