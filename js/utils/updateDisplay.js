const updateDisplay = (display, count, type) => {
    display.innerText = 'You have ' + count.toFixed(2) + ' ' + type + 's';
}

const updateCost = (display, type, cost) => {
    display.innerText = 'Purchase a ' + type + ' for ' + cost.toFixed(2) + ' clicks';
}

const updateClickWorth = (display, cost) => {
    display.innerText = 'Each click is worth ' + cost.toFixed(2) + ' clicks';
}

export{
    updateClickWorth, updateCost, updateDisplay
}