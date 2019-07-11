const btn = document.querySelector('#sendrequest');
const close = document.querySelector('#close');
const prevBtn = document.querySelectorAll('.prevbtn');
const nextBtn = document.querySelectorAll('.nextbtn');
const slidesWrapper = document.querySelector('.slider__list');
let slidesCount = 1;
let sliderPosition;

let widthSliderItem = document.querySelector('.slider__item');
let fixedItem = 0;

if (window.outerWidth < 769) {
  console.log('Iwork');
  if (window.outerWidth < 400) {
    let temp = document.querySelectorAll('.slider__item');
    Array.from(temp).forEach(item => {
      item.style.width = 280 + 'px';
    })
    fixedItem = 321;
  } else {
    let temp = document.querySelectorAll('.slider__item');
    Array.from(temp).forEach(item => {
      item.style.width = window.outerWidth - 30 + 'px';
      fixedItem = window.outerWidth - 30;
    })
  }
} else {
  fixedItem = 1100;
}

console.log(widthSliderItem);


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
    sliderPosition -= fixedItem;
    slidesWrapper.style.transform = `translateX(-${sliderPosition}px)`;
    document.getElementById('lastbtn').disabled = false;
  })
});

Array.from(nextBtn).forEach((item) => {
  item.addEventListener('click', function () {
    if (slidesCount <= 3) {
      sliderPosition = slidesCount * fixedItem;
      slidesWrapper.style.transform = `translateX(-${sliderPosition}px)`
      slidesCount++;
    }
    document.getElementById('lastbtn').disabled = slidesCount <= 3;
  })
})

function sendForm() {
  event.preventDefault();
  $.ajax({
    type: "get",
    url: "./data.php",
    data: $("#myform").serialize(),
    success: function (data) {
      $('.form').toggleClass('active');
      alert('Письмо отправлено');
    }
  });
}
