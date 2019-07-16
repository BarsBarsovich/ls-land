const btnArr = document.querySelectorAll('.sendrequest');

const close = document.querySelector('#close');
const prevBtn = document.querySelectorAll('.prevbtn');
const nextBtn = document.querySelectorAll('.nextbtn');
const slidesWrapper = document.querySelector('.slider__list');
const youtubebutton = document.querySelectorAll('.youtubebutton');
const overlay = document.querySelector('.overlay');
let slidesCount = 1;
let sliderPosition;

let widthSliderItem = document.querySelector('.slider__item');
let fixedItem = 0;

if (window.outerWidth < 769) {
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

Array.from(btnArr).forEach(item => {
    item.addEventListener('click', function (e) {
        const modal = document.querySelector('#modalwindow');
        modal.classList.add('modal--active');
        document.getElementById('modalcaption').innerText = e.target.innerText;
    });
})

close.addEventListener('click', function () {
    const modal = document.querySelector('#modalwindow');
    modal.classList.remove('modal--active');
});

overlay.addEventListener('click', function () {
    console.log('i called');
    document.body.classList.remove('is-modal');
    const rootEl = document.querySelector('.overlay');
    rootEl.classList.remove('is-visible');
    rootEl.querySelector('.mask').remove();
});

Array.from(youtubebutton).forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const rootEl = document.querySelector('.overlay');
        const videoUrl = this.dataset.id === "vova" ? 'https://www.youtube.com/embed/Fgb2izt19OI?autoplay=1' :
            'https://www.youtube.com/embed/CRT39ITMANs?autoplay=1';

        rootEl.classList.add('is-visible');
        if (rootEl.querySelector('.mask') == undefined) {
            const player = document.createElement('div');
            player.innerHTML = `<div class="mask"><div class="close"></div><div class="youtubemodal no-paddings videoframe__modal "style="background-color: transparent; margin-top: 201.5px;"><div class="x-aspectratio" user="[object Object]">`
                + `<iframe src="${videoUrl}" frameborder="0" id="youtube_player" allowfullscreen="allowfullscreen" title="YouTube"allow="autoplay" class="x-aspectratio-inner"></iframe></div></div></div>`;

            rootEl.appendChild(player);
        }
        document.body.classList.add('is-modal');
    })
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
});


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
