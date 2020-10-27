"use strict"

// Задача 1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let answer;
    if (D < 0) {
        answer = {
            D: D,
            roots: []
        }
    } else if (D == 0) {
        let x1 = -b / (2 * a);
        answer = {
            D: D,
            roots: [x1]
        }
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        answer = {
            D: D,
            roots: [x1, x2]
        }
    };
    return answer;
};

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// Задача 2

function getAverageScore(data) {
    data = {
        algebra: [4, 5, 5, 4],
        geometry: [2, 5],
        russian: [3, 3, 4, 5],
        physics: [5, 5],
        music: [ 2, 2, 5],
        english: [4, 4, 3, 3],
        poetry: [5, 3, 4],
        chemistry: [2],
        french: [4, 4]
    }

    let averageData = new Object();

    if (Object.values(data) == 0) {
        averageData.average = 0;
    } else {
        let sum = 0;
        for (let subject in data) {
            let value = getAverageMark(data[subject]);
            averageData = `${subject}: ${value}`;
            sum += parseFloat(data[subject]);
            average = [sum] / Object.values(data).length;
            console.log(averageData);
        }
        console.log(`average: ${average}`);
    }
}

getAverageScore();

function getAverageMark(marks) {
    let sumMarks = marks.reduce((a, b) => a + b);
    let averageMark = sumMarks / marks.length;
    return averageMark;
}

// Задача 3

function getPersonData(secretData) {
    secretData = getDecodedValue();
    return secretData;
}
console.log(getPersonData());

function getDecodedValue(secret) {
    secret = {
        aaa: 0,
        bbb: 1
    }
    let a = (secret.aaa == 0) ? 'Родриго' : 'Эмильо';
    let b = (secret.bbb == 0) ? 'Родриго' : 'Эмильо';
    let name = `{firstName: ${a}, lastName: ${b}}`;
    return name;
}
    