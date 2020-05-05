var no1 = Math.floor(Math.random() * 6) + 1;
var no2 = Math.floor(Math.random() * 6) + 1;

if (no1===1) {
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        document.querySelector(".img1").setAttribute("alt","1");
    } else if (no1===2) {
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
        document.querySelector(".img1").setAttribute("alt","2");
    } else if (no1===3) {
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        document.querySelector(".img1").setAttribute("alt","3");
    } else if (no1===4) {
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        document.querySelector(".img1").setAttribute("alt","4");
    } else if (no1===5) {
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
        document.querySelector(".img1").setAttribute("alt","5");
    } else {
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
        document.querySelector(".img1").setAttribute("alt","6");
    }

if (no2===1) {
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
    document.querySelector(".img2").setAttribute("alt","1");
    console.log('values is', no2);
} else if (no2===2) {
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
    document.querySelector(".img2").setAttribute("alt","2");
} else if (no2===3) {
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
    document.querySelector(".img2").setAttribute("alt","3");
} else  if (no2===4) {
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
    document.querySelector(".img2").setAttribute("alt","4");
} else  if (no2===5) {
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
    document.querySelector(".img2").setAttribute("alt","5");
} else {
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("alt","6");
    }

if (no1 > no2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (no1 < no2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
    }