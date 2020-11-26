//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function () {
    const text = this.toLowerCase().split(" ").join("");
    for (i = 0; i < text.length / 2; i++) {
        if (text[i] != text[text.length - i - 1]) {
            return false;
        }
    }
    
    return true;    
}

function getAverageMark(marks) {

        let sum = 0;
        if (marks.length === 0)
            return 0;
        for (let i = 0; i < marks.length; i++){
            sum += marks[i];
        }
        const average = sum / marks.length;   
        return Math.round(average);
}

function checkBirthday(birthday) {
    const now = Date.now();
    const diff = now - Number(new Date(birthday));
    const age = diff / 31536000000; // (1000*60*60*24*365) 
    const verdict = (age > 18 ? true : false);
    return verdict;
}