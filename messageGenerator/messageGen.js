let v = "variable";
console.log('Hello world!');
let random = (Math.random(5));

const noun = ["Dog", "Cat", "Man", "Woman", "Child", "Yeti", "Ewok", "Lemming"]
const verb = ["eats", "breaks", "pushes", "hits", "bumps"]
const thing = ["bike", "dohnut", "village idiot"]

let randomNoun = noun[Math.round(random * (noun.length-1))] 
let randomVerb = verb[Math.round(random * (verb.length-1))]
let randomThing = thing[Math.round(random * (thing.length-1))]

console.log(randomNoun+" "+randomVerb+" the "+randomThing)
    