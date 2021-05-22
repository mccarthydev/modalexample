'use strict';

const showModal = function () {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
};

const closeModal = function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};

const buttonModals = document.querySelectorAll('.show-modal');
for (let i = 0; i < buttonModals.length; i++) {
  const button = buttonModals[i];
  button.addEventListener('click', showModal);
}

document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.overlay').addEventListener('click', closeModal);
