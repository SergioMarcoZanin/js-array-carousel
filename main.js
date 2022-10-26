"use strict"
// 1. Inserire un array contenente le immagini
// 2. Inserire un ciclo di immagini nell'html
// 3. Nascondere tutte le immagini tranne la prima
// 4. Aggiungere frecce per cambiare immagine

const imgArray = [`img/01.jpg`,`img/02.jpg`,`img/03.jpg`,`img/04.jpg`,`img/05.jpg`,];

console.log(imgArray)
for (let i = 0; i < imgArray.length; i++) {
    document.querySelector(".container").innerHTML='<div class="item"></div>';
    document.querySelector(".item").innerHTML='<img src="img/01.jpg" alt=""></img>';
    document.querySelector("img").src=imgArray[i];
    document.querySelector(".item").classList.toggle("show");
}