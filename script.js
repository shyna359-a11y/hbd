// ==============================
// BUTTON
// ==============================

const startBtn = document.getElementById("startBtn");
const letterPage = document.getElementById("card");
const typedText = document.getElementById("typedText");

const message = `Happy Birthday BBG!!!!!!!!!! ❤️

It has been 20 years since you were born and more than 10 years since we have known each other.

I am so blessed and grateful to have you in my life.

There were times when we were growing without each other, but somehow we always found our way back to each other. That's what makes our friendship so special.

It feels like yesterday we were sitting next to each other in school discussing political maps, and today we're discussing traumas, life, dreams and adulthood.

I wish you a life full of health, wealth and happiness. I hope this upcoming year brings endless joy, prosperity and beautiful memories.

I know things can get hard sometimes, but always remember that no matter what happens, I'll always be by your side.

Even if I can't physically be there every time, I pray that God protects you wherever you go.

Welcome to your twenties.

I hope this decade becomes the happiest chapter of your life.

In the coming years we're going to grow so much.

We'll build careers.

We'll chase dreams.

Maybe one day we'll even start families.

But I truly hope we always end up together in some way.

I want my future kids to call you their fun aunt.

I don't say this enough...

But I genuinely don't know what I would've done without you.

Thank you for being my home.

Thank you for loving me.

Thank you for always finding your way back to me.

Happy 20th Birthday my LOMLLLL ❤️

I love you forever.

- Your Best Friend 💕`;


// ==============================
// LETTER
// ==============================

let index = 0;

function typeLetter(){

    if(index < message.length){

        typedText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}


// ==============================
// OPEN LETTER
// ==============================

startBtn.onclick = function(){

    startBtn.style.display="none";

    letterPage.classList.remove("hidden");

    letterPage.scrollIntoView({
        behavior:"smooth"
    });

    typeLetter();

    createConfetti();

}


// ==============================
// SCROLL ANIMATION
// ==============================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

})

})

document.querySelectorAll(".event,.ending,.glass-card").forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(60px)";

el.style.transition="1s";

observer.observe(el);

})


// ==============================
// HEARTS
// ==============================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=Math.random()*20+20+"px";

heart.style.animation="fall 8s linear";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,700);


// ==============================
// HEART ANIMATION
// ==============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);


// ==============================
// CONFETTI
// ==============================

function createConfetti(){

for(let i=0;i<150;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="8px";

confetti.style.height="8px";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.background=`hsl(${Math.random()*360},100%,70%)`;

confetti.style.borderRadius="50%";

confetti.style.pointerEvents="none";

confetti.style.animation=`confetti ${Math.random()*3+3}s linear forwards`;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

}

}

const confettiStyle=document.createElement("style");

confettiStyle.innerHTML=`

@keyframes confetti{

0%{

transform:translateY(-50px) rotate(0deg);

}

100%{

transform:translateY(110vh) rotate(720deg);

opacity:0;

}

}

`;

document.head.appendChild(confettiStyle);


// ==============================
// FIREWORKS EFFECT
// ==============================

const canvas = document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

function firework(){

let x=Math.random()*canvas.width;

let y=Math.random()*canvas.height/2;

for(let i=0;i<80;i++){

ctx.beginPath();

ctx.arc(

x+Math.random()*120-60,

y+Math.random()*120-60,

2,

0,

Math.PI*2

);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

}

setTimeout(()=>{

ctx.clearRect(0,0,canvas.width,canvas.height);

},600);

}

setInterval(firework,1800);