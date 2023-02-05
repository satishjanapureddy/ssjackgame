
let cards=[]
let sum=0
let hasbjack=false
let isalive=false
let message=""
let messageel=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let player={
    name:"per",
    chips:145
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" :$"+player.chips

function randomnumber(){
    let k=Math.floor(Math.random()*12)+1
    if(k===1){
        return 11
    }
    if(k>10){
        return 10
    }
    else{
    return k
    }
}

function start(){
    isalive=true
    let fcard=randomnumber()
    let scard=randomnumber()
    cards=[fcard,scard]
    sum=fcard+scard
    rendergame()
}




function rendergame(){
    
    cardEl.textContent= "Cards:" 
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent+=cards[i]+" "
       
    }
    sumEl.textContent= "Sum :" + sum
    if (sum <=20){
        message="Do you want to play game"
    }
    else if(sum === 21){
        message="You have got jack pot of black jack"
        hasbjack=true
        
    }
    else{
        message="You are out of game"
        isalive=false
    }
    messageel.textContent=message
}
function newcard(){
    if(isalive===true && hasbjack===false)
    {
    let card=randomnumber()
    sum=sum+card
    cards.push(card)
    rendergame()

    }
}