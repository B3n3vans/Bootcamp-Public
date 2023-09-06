function changeMaker(payment, price){
    let paymentTotal = 0;
    for(coin in payment){
        paymentTotal=paymentTotal + payment[coin];
    }
    let changeTotal = +(Math.round((paymentTotal - price) + "e+2") + "e-2")
    const coins = [0.25,0.1,0.05,0.01]
    const changeObj = {};
    if (paymentTotal > price){
        for (const coin of coins){
            const numCoins = Math.floor(changeTotal/coin)
            // console.log(numCoins + " numCoins")
            changeObj[coin] = numCoins
            changeTotal -= numCoins * coin;
            // console.log(changeObj)
        }
        return changeObj
    }
    else{
        changeTotal = +(Math.round((paymentTotal) + "e+2") + "e-2")
        console.log(changeTotal)
        for (const coin of coins){
            const numCoins = Math.floor(changeTotal/coin)
            changeObj[coin] = numCoins
            changeTotal -= numCoins * coin;
        }
            return changeObj
        }
    }




payment1=[1,0.25,0.25,0.25,0.25]
payment2=[1,1,0.25,0.10,0.25]
payment3=[0.25,0.1,0.1,0.1]
console.log(changeMaker(payment1, 1.87))
console.log(changeMaker(payment2, 2.5))
console.log(changeMaker(payment3, 2.45))
