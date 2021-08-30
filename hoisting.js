// GIVEN
console.log(example);
let example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// 1.
// GIVEN
console.log(hello);                                   
var hello = 'world';                                 
// HOISTING
// var hello
// console.log(hello) // logs undefined
// hello = 'world

// 2.
// GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// HOISTED
// var needle
// function test()
// needle = haystack
// test()
// var needle = 'magnet'
// console.log(needle) //output magnet

// 3. 
// GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan
// function print() defined
// console.log(brendan) //output super cool

// 4.
// GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// HOISTED
// var food
// function eat defined
// console.log(food) //output chicken
// eat()
// food = half chicken
// console.log(food) // output: half-chicken

// 5.
// GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// HOISTED
// var mean function defined
// mean() ran
// var food
// food = chicken
// log(food) //output: chicken
// food = fish
// log(food) // output: fish
// log(food) // output:fish
// log(food) // output:fish
// INCORRECT: MEAN FUNCTION NOT INITIALIZED PREVIOUS TO THE CALL THROWS ERROR, NOT A FUNCTION

// 6.
// GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// HOISTED
// VAR genre
// function rewind()
// log(genre) //output:undefined
// genre = disco
// rewind()
// var genre
// genre = rock
// log: 'rock'
// genre = r&b
// log - r&b
// log - disco

// 6.
// GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// HOISTED
// var dojo
// function learn()
// dojo = san jose
// log // output san jose
// learn()
// dojo = seattle
// log // output seattle
// dojo = burbank
// log //burbank
// log //san jose
// ????????

// 7.
// GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// HOISTED
// var dojo
// function learn()
// dojo = san jose
// log // output san jose
// learn()
// dojo = seattle
// log // output seattle
// dojo = burbank
// log // output burbank
// log //san jose

// 8.
// GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// HOISTED
// function makeDojo()
// const dojo
// dojo.name = name
// dojo.students = students
// makeDojo(chicago, 65)
// dojo.hiring = true
// log // output {chicago, 65, true}
// log// output {berkely, 0, false}
// INCORRECT - assignment to a constant variable