const startBtn = document.querySelector('.start-game');
const homePage = document.querySelector('.game-panel');
const questionPage = document.querySelector('.question');
const homeBtn = document.querySelector('.fa-home');
startBtn.addEventListener('click', startGame);
homeBtn.addEventListener('click', restartGame);

function startGame() {
  homePage.classList.add('hidden');
  questionPage.classList.remove('hidden');
}

function restartGame() {
  homePage.classList.remove('hidden');
  questionPage.classList.add('hidden');
}
// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const rulesBtn = document.querySelector('.rules');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

span.addEventListener('click', closeModal);
rulesBtn.addEventListener('click', openModal);

function closeModal() {
  modal.style.display = 'none';
}

function openModal() {
  modal.style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
