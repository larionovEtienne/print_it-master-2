let text = document.querySelectorAll(".centered")
let point = document.querySelectorAll('.point')
let imageSlider = document.querySelectorAll('.imageSlider')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')
point[0].classList.add('activeImage')
imageSlider[0].classList.add('activeImage')
text[0].classList.add('activecentered')
let counter = 0;
for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for (let k = 0; k<imageSlider.length; k++){
            point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
            text[k].classList.remove('activecentered')
        }
        counter = i;
        imageSlider[counter].classList.add('activeImage');
        point[counter].classList.add('activeImage');
        text[counter].classList.add('activecentered')
    })
}

leftBtn.addEventListener('click',()=>{
    for (let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
        text[counter].classList.remove('activecentered')
    }
    counter--
    if (counter < 0){
        counter = imageSlider.length-1
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
    text[counter].classList.add('activecentered')
})
rightBtn.addEventListener('click', ()=>{
    for (let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
        text[counter].classList.remove('activecentered')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage')
    text[counter].classList.add('activecentered')
})
function slowSlider() {
    for (let k = 0; k < imageSlider.length; k++) {
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
        text[counter].classList.remove('activecentered')
    }
    counter++
    if (counter >= imageSlider.length) {
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
    text[counter].classList.add('activecentered')
}
let  second = 1000*3
let TimerImage = setInterval(()=>slowSlider(),second)

let blockSlider = document.getElementById('blockSlider')
blockSlider.addEventListener('mouseover',()=>{
    clearInterval(TimerImage)
})

blockSlider.addEventListener('mouseleave',()=>{
    TimerImage = setInterval(()=>slowSlider(),second)
})

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
