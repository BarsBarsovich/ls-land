const btn = document.querySelector('#sendrequest');
const close = document.querySelector('#close');

const prevBtn = document.querySelectorAll('.prevbtn');
const nextBtn = document.querySelectorAll('.nextbtn');
const slidesWrapper =  document.querySelector('.slider__list');

let slidesCount = 1;
let sliderPosition;

btn.addEventListener('click', function () {
  const modal = document.querySelector('#modalwindow');
  console.log(modal);
  modal.classList.add('modal--active');
});

close.addEventListener('click', function () {
  const modal = document.querySelector('#modalwindow');
  modal.classList.remove('modal--active');
});

Array.from(prevBtn).forEach((item) => {
  item.addEventListener('click', function () {  
    slidesCount--;
    sliderPosition -= 1100;
    slidesWrapper.style.transform = `translateX(-${sliderPosition}px)`;
    document.getElementById('lastbtn').disabled = false;
  })
});

Array.from(nextBtn).forEach((item)=>{
  item.addEventListener('click', function(){    
    if (slidesCount <= 3){
      sliderPosition = slidesCount * 1100;
      slidesWrapper.style.transform = `translateX(-${sliderPosition}px)`
      slidesCount++;
    }
    console.log(slidesCount);

    // console.log(document.getElementById('lastbtn'));
    document.getElementById('lastbtn').disabled = slidesCount <= 3;
    
  })
})
