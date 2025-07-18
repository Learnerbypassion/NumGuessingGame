let random = Math.floor(Math.random() * 100);
console.log(random);
if (random % 2 == 0) {
    document.getElementById("msg").innerHTML = "<p>Hint: The number is even</p>";
    console.log("Hint: The number is even");
}
else {
    document.getElementById("msg").innerHTML = "<p>Hint: The number is odd</p>";
    console.log("Hint: The number is odd");
}
console.log("Guess any number between 1-100:");
function input() {
    for (let i = 1; i <= 10; i++) {
        const num = document.getElementById("number").value;
        if (num == random) {
            document.getElementById("msg").innerHTML = "<p>Congratulations!! You guessed the correct number! WELL DONE";
            console.log("Congratulations!! You guessed the correct number!</p>");
        }
        else if (num >= (random - 2) && num <= (random + 2)) {
            document.getElementById("msg").innerHTML = "<p>Significant!!! You are very close, just +2 or -2</p>";
            console.log("Significant!!! You are very close, just +2 or -2");
        }
        else if (num >= (random - 5) && num <= (random + 5)) {
            document.getElementById("msg").innerHTML = "<p>YO!! Your number might be +5 or -5 to the real number</p>";
            console.log("YO!! Your number might be +5 or -5 to the real number");
        }
        else if (num >= (random - 10) && num <= (random + 10)) {
            document.getElementById("msg").innerHTML = "<p>YO!! Your number might be +10 or -10 to the real number</p>";
            console.log("YO!! Your number might be +10 or -10 to the real number");
        }
        else if (num > random) {
            document.getElementById("msg").innerHTML = "<p>Your number is too high</p>"
            console.log("Your number is too high");
        }
        else if (num < random) {
            document.getElementById("msg").innerHTML = "<p>Your number is too low</p>";
            console.log("Your number is too low");
        }
    }
    s = "";
    document.querySelector("input").value=s;
}

let inPuts = document.querySelectorAll(".inPut")
let s="";
inPuts.forEach((e)=>{
    e.addEventListener("click",()=>{
        console.log("clickeddd");
        s += e.innerText;
        document.querySelector("input").value=s;
        
    })
})
