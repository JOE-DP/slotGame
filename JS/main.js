document.querySelector('button').addEventListener('click', runSlot)
let spins = 0;
let total = 100;
let reel1;
let reel2;
let reel3;

let slotSpin = () => {
let random = Math.random() * 10
if(random < 5){return "10"
} else if(random < 7){
    return "J"
} else if (random < 8){
    return "Q"
} else if(random < 9){
    return "K"
} else if(random < 10){
    return "A"
}
}

function runSlot(){
let bet = document.querySelector('input').value;
if(bet > total){
    return alert("Not enough funds")
} else if (total > 999){
    alert(`You have won! you have ${total} tokans and took ${spins} spins! Well done!`)
}
total -= bet;
spins ++
document.querySelector('.player-turns').innerText = spins

let reel1 = slotSpin()
let reel2 = slotSpin()
let reel3 = slotSpin()
document.querySelector('.reel1').innerText = reel1;
document.querySelector('.reel2').innerText = reel2;
document.querySelector('.reel3').innerText = reel3;

if(reel1 == "10" && reel2 == "10" && reel3 == "10"){
total += bet * 2;
} else if(reel1 == "J" && reel2 == "J" && reel3 == "J"){
    total += bet * 4;
} else if(reel1 == "Q" && reel2 == "Q" && reel3 == "Q"){
    total += bet * 6;
} else if(reel1 == "K" && reel2 == "K" && reel3 == "K"){
    total += bet * 8;
} else if(reel1 == "A" && reel2 == "A" && reel3 == "A"){
    total += bet * 10;
}

document.querySelector('.player-money').innerText = total;
if(total < 1){
    return alert("GAME OVER")
}
}