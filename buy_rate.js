// config start
// buy
type = 'buy';
amount = 5078.71;
reach = '0.00244388';
price = 0.00000048;
// config end
percent = 0.0025;
if ('buy' == type) {
    percent += 1;
} else {
    percent = 1 - percent;
}
counter = 0;
status = 0;
while (1) {
    oldamount = amount;
    amount += 0.00000001 * counter;
    totalwithfee = price * amount * percent;
    if (reach < totalwithfee.toFixed(8)) {
        amount = oldamount;
        status = 1;
        if (counter == 1) {
            console.log(amount);
            break;
        }
        counter = 1;
    } else {
        counter++;
    }
}
