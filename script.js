let random = Math.floor(Math.random()*100);
console.log(random);
if(random % 2 == 0){
    document.getElementById("msg").innerHTML ="Hint: The number is even";
    console.log("Hint: The number is even");}
    else{
        document.getElementById("msg").innerHTML ="Hint: The number is odd";
        console.log("Hint: The number is odd");}
    console.log("Guess any number between 1-100:");
function input(){
    for(let i=1;i<=10;i++){
        const num = document.getElementById("number").value;
        if (num==random){
            document.getElementById("msg").innerHTML = "Congratulations!! You guessed the correct number! WELL DONE";
            console.log("Congratulations!! You guessed the correct number! WELL DONE");} 
        else if(num>=(random-2) && num<=(random+2)){
            document.getElementById("msg").innerHTML = "Significant!!! You are very close, just +2 or -2";
            console.log("Significant!!! You are very close, just +2 or -2");}
        else if(num>=(random-5) && num<=(random+5)){
            document.getElementById("msg").innerHTML = "YO!! Your number might be +5 or -5 to the real number";
            console.log("YO!! Your number might be +5 or -5 to the real number");}
        else if(num>=(random-10) && num<=(random+10)){
            document.getElementById("msg").innerHTML = "YO!! Your number might be +10 or -10 to the real number";
            console.log("YO!! Your number might be +10 or -10 to the real number");}
        else if (num>random){
            document.getElementById("msg").innerHTML = "Your number is too high"
            console.log("Your number is too high");}
        else if (num<random){
            document.getElementById("msg").innerHTML = "Your number is too low";
            console.log("Your number is too low");}      
    }
}