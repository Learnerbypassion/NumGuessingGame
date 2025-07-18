let random = Math.floor(Math.random() * 100);
let click = new Audio("click.wav");
let levelup = new Audio("levelup.mp3");
let wrong = new Audio("wrong.mp3");
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
            let win = new Audio("win.wav");
            win.play();
            document.getElementById("msg").innerHTML = "<p>🎉 Congratulations! You guessed the correct number!</p>";
            document.querySelector("input").value = random;
            return;
        }
        else if (Math.abs(num - random) <= 2) {
            document.getElementById("msg").innerHTML = "<p>🔥 Super close! You're just 1 or 2 numbers away.</p>";
            levelup.play();
        }
        else if (Math.abs(num - random) <= 5) {
            document.getElementById("msg").innerHTML = "<p>👍 Close! You're within 5 numbers of the correct answer.</p>";
            levelup.play();
        }
        else if (Math.abs(num - random) <= 10) {
            document.getElementById("msg").innerHTML = "<p>🙂 Not too far. You're within 10 numbers of the target.</p>";
            levelup.play();
        }
        else if (num > random) {
            wrong.play();
            document.getElementById("msg").innerHTML = "<p>⬆️ Too high! Try a smaller number.</p>";
        }
        else if (num < random) {
            wrong.play();
            document.getElementById("msg").innerHTML = "<p>⬇️ Too low! Try a bigger number.</p>";
        }

    }
    s = "";
    document.querySelector("input").value = s;
}

let inPuts = document.querySelectorAll(".inPut")
let s = "";
inPuts.forEach((e) => {
    e.addEventListener("click", () => {
        console.log("clickeddd");
        
    click.play();
        s += e.innerText;
        document.querySelector("input").value = s;

    });
});

let undobtn = document.getElementById("undo-btn");
undobtn.addEventListener("click", () => {
    
    console.log("clickedundo");
    click.play();
    s = + s.slice(0, -1);
    if(s == "0"){
        s = "";
        document.querySelector("input").value = s;
    }
    document.querySelector("input").value = s;
})


function startGame(e) {
    if (e) e.stopPropagation(); // Prevent bubbling if button is clicked
    document.getElementById('rulesScreen').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}

const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function createStar() {
  stars.push({
    x: Math.random() * canvas.width,
    y: 0,
    radius: Math.random() * 2 + 1,
    speed: Math.random() * 1.5 + 0.5,
    opacity: Math.random()
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star, index) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
    star.y += star.speed;
    star.opacity -= 0.005;

    if (star.y > canvas.height || star.opacity <= 0) {
      stars.splice(index, 1); // Remove faded stars
    }
  });
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}

setInterval(createStar, 50); // Add a new star every 100ms
animate();

// Optional: Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
