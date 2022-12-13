// Write your solution here!
'use strict'

const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(){cats.push("Ralph")};

function destructivelyPrependCat(){cats.unshift("Bob")};

function destructivelyRemoveLastCat(){cats.pop()};

function destructivelyRemoveFirstCat(){cats.shift()};


function appendCat(){
    const appendedCats=[...cats,"Broom"];
    return appendedCats;
};

function prependCat(){
    const prependedCats = ["Arnold", ...cats];
    return prependedCats;
};

function removeLastCat(){
    const removeLastCat =cats.slice(0,2);
    return removeLastCat;
};

console.log(removeLastCat());


function removeFirstCat(){
    const removeFirstCat = cats.slice(1,3);
    return removeFirstCat;
};

console.log(removeFirstCat());



























