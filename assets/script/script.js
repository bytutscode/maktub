
const carouselContainer = document.querySelector('#carousel .container-carousel');
const carouselReviewsContainer = document.querySelector('#reviews .reviews-container');

AOS.init();

function carousel (){
    if( carouselContainer.style.marginLeft === '-100%'){
        carouselContainer.style.marginLeft = '-200%';
    }
    else if( carouselContainer.style.marginLeft === '-200%'){
        carouselContainer.style.marginLeft = '0';
    } else {
        carouselContainer.style.marginLeft = '-100%';
    }
}

let reviewsCount = 1;
const totalReviews = document.querySelectorAll('.review');

totalReviews.forEach((e,i)=>{
    let circle = document.createElement('span');
    circle.classList.add('circle');
    if(i === 0){
        circle.classList.add('active')
    }
    document.querySelector('.circles').append(circle);
});

function carouselReviews (){
reviewsCount == 7? (reviewsCount = 0, carouselReviewsContainer.style.marginLeft = '0'):null;
   carouselReviewsContainer.style.marginLeft = -(reviewsCount * 100)+'%';
    let totalCircles = document.querySelectorAll('.circle');
   totalCircles.forEach((e,i)=>{
    e.classList.remove('active');
    if(reviewsCount == i){
        e.classList.add('active')
    }
   })
   reviewsCount++;
}


const closeBtn = document.querySelector('.closeBtn img');
const openBtn = document.querySelector('.openBtn img');
const menuList = document.querySelectorAll('header ul li');


function menuBtn (){
    if(!document.querySelector('header ul').classList.contains('active')){
        document.querySelector('header ul').classList.add('active');
        openBtn.style.display = 'none';
        closeBtn.style.display = 'flex';
    } else {
        document.querySelector('header ul').classList.remove('active');
        openBtn.style.display = 'flex';
        closeBtn.style.display = 'none';
    }
}

menuList.forEach(e=>{
    if(window.innerWidth < 850){
        e.addEventListener('click',menuBtn);
    }
});



closeBtn.addEventListener('click',menuBtn);
openBtn.addEventListener('click',menuBtn);

setInterval(carousel,4000);
setInterval(carouselReviews,5000);
