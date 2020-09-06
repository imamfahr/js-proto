String.prototype.reverseString = function(){
    let splitString = this.split("");
    let reverseArray = splitString.reverse("");
    let joinArray = reverseArray.join("");
    return joinArray;
}

