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
    if (marks.length > 5) {
        marks.splice(5);
     } if (marks.length == 0) {
         return 0;
     } 

     let sumOfMarks = 0;
      for (let i = 0; i < marks.length; i++) {
             sumOfMarks += marks[i]; 
         }
         let averageMark = sumOfMarks / marks.length;

         return averageMark;
}

function askDrink(name, dateOfBirthday){
    
    let userYear = dateOfBirthday.getFullYear();
    let currentDate = new Date().getFullYear();
    let userAge = currentDate - userYear;
    if (userAge > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`
    }
    else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }
}