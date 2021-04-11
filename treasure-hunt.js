// alert("Connection Successful")
var count=0
var treasureLocation = Math.floor(Math.random() * 9)
var bombLocation = Math.floor(Math.random() * 9)
console.log("Treasure Spot", treasureLocation)
console.log("Bomb Spot", bombLocation)

const treasure = (location) => {
    if(location === bombLocation){
        alert("Bomb!!")
        document.getElementById(location).innerHTML = "💣"

    }
    else if(location === treasureLocation){
        alert("You found the treasure!!")
        document.getElementById(location).innerHTML = "🏆"


    }

    else {
        alert("Try again")
        document.getElementById(location).innerHTML = "🚫"

    }
  }
// /    document.getElementById("count")
//     count=count+1;
//     this.innerHTML=count
// console.log(count);
