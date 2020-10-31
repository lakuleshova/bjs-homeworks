"use strict"

//String.prototype.isPalindrome - для задачи №1
let str = new String();
String.prototype.isPalindrome = function() {
    if (str.toUpperCase() == reverseString(str.toUpperCase())) {
        return true;
    } else {
        return false;
    }
}
console.log(str.isPalindrome());
  
function reverseString(rev) {
    return rev.split('').reverse().join('');
}


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}