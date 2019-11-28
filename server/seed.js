

const makeDollarAmount = () => {
    return Number((Math.random() * 1000).toFixed(2))
};

const makeStockAmount = () => {
    return Math.floor(Math.random() * 100)
}

const makeTickerSymbol = () => {
    let ticker = '';
    let size = Math.floor(Math.random() * (5-1) + 1);
    let randNum = () => {
        return Math.floor(Math.random() * (91-65) + 65)  
    }; 

    while (ticker.length < size) {
        ticker += String.fromCharCode(randNum()) 
    }

    return ticker;
}

