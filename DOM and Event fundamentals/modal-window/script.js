'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
// console.log(btnShowModal); /// to show the node

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

///////another way using style
// for (let i = 0; i < btnShowModal.length; i++) {
//   console.log(
//     btnShowModal[i].addEventListener('click', function () {
//       document.querySelector('.hidden').style.display = 'block';
//     })
//   );
// }

// document.querySelector('.close-modal').addEventListener('click', function () {
//   document.querySelector('.hidden').style.display = 'none';
// });
