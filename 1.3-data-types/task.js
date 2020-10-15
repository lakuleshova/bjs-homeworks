"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let credit = amount - contribution;
    let months = date.getMonth() - new Date().getMonth() + ((date.getFullYear() - new Date().getFullYear()) * 12);
    let monthlyPercent = percent / 12 / 100;
    let monthlyPayment = credit * (monthlyPercent + monthlyPercent / (Math.pow((1 + monthlyPercent), months) - 1));
    let totalAmount = monthlyPayment * months;

    return parseFloat(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;

    if (name == "" || name == "null" || name == "undefined") {
        greeting = `Привет, мир! Меня зовут Аноним`
    } else {
        greeting = `Привет, мир! Меня зовут ${name}`
    }
    return greeting;
}