let slide1 = document.getElementById('txt1');
let slide2 = document.getElementById('txt2');
let slide3 = document.getElementById('txt3');
let slidebar1 = document.getElementById('slidebar1');
let slidebar2 = document.getElementById('slidebar2');
let slidebar3 = document.getElementById('slidebar3');
let min = document.getElementById('min');
let seg = document.getElementById('seg');
let min3 = document.getElementById('min3');
let seg3 = document.getElementById('seg3');

let timer;
let contador = 0;
let segundos = 0;
let minutos = 0;
let slide;
let ImgRotate;

function slideshow(){
    //se esta na primeira slide
    if((document.getElementById('sliders').style.transform)=='translateX(100vw)'){
        document.getElementById('sliders').style.transform='translateX(0vw)';
        slidebar1.classList.remove('open');
        slidebar1.classList.add('closed');
        slidebar2.classList.remove('closed');
        slidebar2.classList.add('open');
    } else if((document.getElementById('sliders').style.transform)=='translateX(0vw)'){
        document.getElementById('sliders').style.transform='translateX(-100vw)';
        slidebar2.classList.remove('open');
        slidebar2.classList.add('closed');
        slidebar3.classList.remove('closed');
        slidebar3.classList.add('open');
    } else {
        document.getElementById('sliders').style.transform='translateX(100vw)';
        slidebar3.classList.remove('open');
        slidebar3.classList.add('closed');
        slidebar1.classList.remove('closed');
        slidebar1.classList.add('open');
    }
}
//slide = setInterval(slideshow, 3250);
function TitleAnimation(){
    segundos ++;
    if(segundos>59){
        minutos++;
        segundos = 0;
        if(minutos<9){
            document.getElementById('min').innerHTML= '0'+minutos;
            document.getElementById('min3').innerHTML= '0'+minutos;
        }else{
            document.getElementById('min').innerHTML= minutos;
            document.getElementById('min3').innerHTML= minutos;}
    }
        if(segundos<10){
            document.getElementById('seg').innerHTML= '0'+segundos;
            document.getElementById('seg3').innerHTML= '0'+segundos;
        } else{
            document.getElementById('seg').innerHTML= segundos;
            document.getElementById('seg3').innerHTML= segundos;}
}
timer = setInterval(TitleAnimation, 1000);



function ImgAnimation(){
if((document.getElementById('img1').style.transform)=='rotate(0deg)'){
    document.getElementById('img1').style.transform='rotate(-10deg)';
    document.getElementById('img2').style.transform='rotate(-10deg)';}
else
if((document.getElementById('img1').style.transform)=='rotate(-10deg)'){
    document.getElementById('img1').style.transform='rotate(60deg)';
    document.getElementById('img2').style.transform='rotate(60deg)';}
else
if((document.getElementById('img1').style.transform)=='rotate(60deg)'){
    document.getElementById('img1').style.transform='rotate(10deg)';
    document.getElementById('img2').style.transform='rotate(10deg)';
}else{
    document.getElementById('img1').style.transform='rotate(0deg)';
    document.getElementById('img2').style.transform='rotate(0deg)';
}
}
ImgRotate = setInterval(ImgAnimation, 1000);