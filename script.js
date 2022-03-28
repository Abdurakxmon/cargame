
function car_ch(n){
    console.log(1);
    document.getElementById('car').src = `cars/car_${n}.png`;
    console.log(document.getElementById('car').src);
}

let car = document.getElementById("car");
let body = document.getElementsByTagName("body")[0];
let leftPosCar = 40;
let topPosCar = 70;
let topCar_1 = -20;
let score_menu = document.querySelector("#score");
let  i = 0;
let score = 0;
let position =40;
let ran = 0;
let road_1 = document.querySelector("#road-1");
let road_2 = document.querySelector("#road-2");
let roadTop = 0;
road_1.style.top = `${roadTop}vh`;
road_2.style.top = `${roadTop-100}vh`;
let gameOver = false;

let car_1 = document.getElementById("car-1");
car_1.src = `cars/car_${Math.floor(Math.random()*15+1)}.png`
car_1.style.cssText = `height: 20vh; width: 5%; top: ${topCar_1}vh; position: absolute; left: 40%;`
car.style.cssText = `left: ${leftPosCar}%; top: ${topPosCar}vh; height: 20vh; width: 5%;position: absolute; transition: .5s;`;
document.addEventListener("keydown", function (event){
    if(leftPosCar != 35){
        if((event.keyCode == 37 || event.keyCode == 65) && !gameOver){
            leftPosCar -= 1;
        }
    }
    if(topPosCar != 80){
        if((event.keyCode == 40 || event.keyCode == 83) && !gameOver){
            topPosCar += 1;
         }
    }
    if (topPosCar != 0) {
        if((event.keyCode == 38 || event.keyCode == 87) && !gameOver){
            topPosCar -= 1;  
    }
    }
    if(leftPosCar != 60){
        if((event.keyCode == 39 || event.keyCode == 68) && !gameOver){
            leftPosCar += 1;
        }
    }
    car.style.cssText = `left: ${leftPosCar}%; top: ${topPosCar}vh;height: 20vh;width:5%; position: absolute;`;
})
function qqqq() {
    score ++;
    i += 5+(score/100);
    score_menu.innerHTML = `Score: ${score}`;
    car_1.style.top = `${topCar_1 + i}vh`;
    if((((topCar_1 + i >= (topPosCar - 20)) && (topCar_1 + i <= (topPosCar+20))) && ((leftPosCar >= position-4) && (leftPosCar <= position+4)))){
        gameOver = true;
    }
    if (gameOver) {
        i = 0;
        clearInterval(mol);
        document.getElementById('btntnnnn').style.opacity = 1;
    }
    if (i >= 120){
        i = 0;
        ran = Math.floor(Math.random()*20 + 38);
        position = ran;
        car_1.style.left=`${ran}%`
        car_1.src = `cars/car_${Math.floor(Math.random()*15+1)}.png`
        
    }
    road_1.style.top = `${roadTop+i*(5/6)}vh`;
    road_2.style.top = `${roadTop+i*(5/6) - 100}vh`;
}
let mol = setInterval(qqqq, 100);
function retry(){
    document.getElementById('btntnnnn').style.opacity = 0;
    gameOver=false;
    score = 0;
    mol = setInterval(qqqq, 100);
}