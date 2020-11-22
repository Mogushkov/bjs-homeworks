"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
        return "Параметр Процентная ставка содержит неправильное значение ${percent}";
    }
    else if (isNaN(contribution)) {
        return "Параметр Первоначальный взнос содержит неправильное значение ${contribution}";
    }
    else if (isNaN(amount)) {
        return "Параметр Сумма кредита содержит неправильное значение ${amount}";
    }
    let percentRate = (percent / 100) / 12;
    let period = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()); 
    let currentPay = (amount - contribution) * (percentRate + percentRate / ((Math.pow((1 + percentRate), period)) - 1)); 
    let totalAmount = amount + (currentPay * period - amount);
    return Number(totalAmount.toFixed(2));  
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}