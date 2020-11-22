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
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}