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
    let averageScore = getAverageMark;
    averageData = {
        algebra: averageScore(data.algebra),
        geometry: averageScore(data.geometry),
        russian: averageScore(data.russian),
        physics: averageScore(data.physics),
        music: averageScore(data.music),
        english: averageScore(data.english),
        poetry: averageScore(data.poetry),
        chemistry: averageScore(data.chemistry),
        french: averageScore(data.french)
    }
    averageData.average = averageScore(Object.values(averageData));
}
    return averageData;
}

console.log(getAverageScore());

function getAverageMark(marks) {
    let averageMark;

    if (marks.length == 0) {
        averageMark = 0;
    } else if (marks.length > 0) {
        let sumMarks = marks.reduce((a, b) => a + b);
        averageMark = sumMarks / marks.length;
    }

    return averageMark;
}

// Задача 3

function getPersonData(secretData) {
    secretData = {
        aaa: 1,
        bbb: 0
    }
    return secretData;
}

getDecodedValue(secret) {
    secret = {
        firstName: 'Эмильо',
        lastName: 'Родриго'
    }
    let condition = Object.values(getPersonData());
    let name;
    if (condition[0] == 1 && condition[1] == 1) {
        name = {
            firstName: secret.firstName,
            lastName: secret.firstName
        }
    } else if (condition[0] == 1 && condition[1] == 0) {
        name = {
            firstName: secret.firstName,
            lastName: secret.lastName
        }
    } else if (condition[0] == 0 && condition[1] == 1) {
        name = {
            firstName: secret.lastName,
            lastName: secret.firstName
        }
    } else if (condition[0] == 0 && condition[1] == 0) {
        name = {
            firstName: secret.lastName,
            lastName: secret.lastName
        }
    }
    return name;
}