"use strict";
function getResult(a,b,c){
    let discriminant = Math.pow(b,2) - 4 * a * c;
    let result = [];
    
    if (discriminant >= 0) {
        result.push(( -b + Math.sqrt(discriminant) ) / ( 2 * a ));
    }
    if (discriminant > 0) {
        result.push(( -b - Math.sqrt(discriminant) ) / ( 2 * a ));
    }

    return result;
}

function getAverageMark(marks){
    let result = [];
    if (marks.length === 0) {
        return 0;
    }
    else {
        let result = marks.splice(0, 5);
        let amount = (result.reduce((a, b) => (a + b)) / result.length);
        return amount;
    }
}

function askDrink(name, dateOfBirthday){
    let userName = name;
    let userYear = dateOfBirthday.getFullYear();
    let currentDate = new Date().getFullYear();
    let userAge = currentDate - userYear;
    if (userAge > 18) {
        return "Не желаете ли олд-фэшн, ${userName}?"
    }
    else {
        return "Сожалею, ${userName}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!"
    }
}