"use strict";
var propertyShortHand = "Luke Skywalker";

const c = {
    propertyShortHand
};

var fullName = {
    name : "Kirill",
    surname : "Osokin"
};
function showFullname(fullName){
    let name = fullName.name;
    let surname = fullName.surname;
    alert(`${name} ${surname}`);
}

// Создание класса
class Kirill {
    constructor(name){
    this.name = name;
}
    getName() {
        return this.name;
    }
}
var kirill = new Kirill('Kirill');

/*alert(c.propertyShortHand);
alert(kirill.getName());
showFullname(fullName);*/

