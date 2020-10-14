function getResult(a,b,c){
    // код для задачи №1 писать здесь
    "use strict";

    let D = Math.pow(b, 2) - 4 * a * c;
    
    let x;
    let result = -b / (2 * a);
    let result1 = (-b + Math.sqrt(D)) / (2 * a);
    let result2 = (-b - Math.sqrt(D)) / (2 * a);

    if (D < 0) {
            x = [];   
        }    
        else if (D == 0) {
            x = [result];
        }
        else if (D > 0) {
            x = [result1, result2];
        }
        
    return(x);

    
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь

    let averageMark;

    if (marks.length == 0) {
        averageMark = 0;
    } else if (marks.length > 0) {
        let firstFive = marks.slice(0, 5);
        let sumMarks = firstFive.reduce((a, b) => a + b);
        averageMark = sumMarks / firstFive.length;
    }
    
    return averageMark;
}

function askDrink(name, dateOfBirthday){
    // код для задачи №3 писать здесь
    let now = new Date();
    let age = now.getFullYear() - dateOfBirthday.getFullYear();

    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }

    return result;
}