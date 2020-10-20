"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let totalAmount;
    if (isNaN(percent)) {
        totalAmount = `Параметр Процентная ставка содержит неправильное значение ${percent}`;
    } else if (isNaN(contribution)) {
        totalAmount = `Параметр Начальный взнос содержит неправильное значение ${contribution}`;
    } else if (isNaN(amount)) {
        totalAmount = `Параметр Общая стоимость содержит неправильное значение ${amount}`;
    } else {
        let credit = amount - contribution;
        const currentDate = new Date();
        let months = date.getMonth() - currentDate.getMonth() + ((date.getFullYear() - currentDate.getFullYear()) * 12);
        let monthlyPercent = percent / 12 / 100;
        let monthlyPayment = credit * (monthlyPercent + monthlyPercent / (Math.pow((1 + monthlyPercent), months) - 1));
        let total = monthlyPayment * months;
        totalAmount = parseFloat(total.toFixed(2));
    }

    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;
    let result = (name == '' || name == null || name == undefined) ? 'Аноним' : name;
    greeting = `Привет, мир! Меня зовут ${result}`;
    
    return greeting;
}