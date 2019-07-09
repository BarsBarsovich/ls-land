const btn = document.querySelector('#sendrequest');
const close = document.querySelector('#close');

btn.addEventListener('click', function(){
  const modal = document.querySelector('#modalwindow');
  console.log(modal);
  modal.classList.add('modal--active');
});

close.addEventListener('click', function(){
  const modal = document.querySelector('#modalwindow');
  modal.classList.remove('modal--active');
});
