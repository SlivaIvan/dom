/* eslint-disable no-use-before-define */
// eslint-disable-next-line import/prefer-default-export
export function onGoblinRandom() {
  const position = [...document.querySelectorAll('.block')];
  const random = Math.floor(Math.random() * position.length);
  position[random].classList.add('goblin');
  setInterval(changePosition, 1000, position);
}
function changePosition() {
  const position = [...document.querySelectorAll('.block')];
  const goblin = document.querySelector('.goblin');
  const posGoblin = position.indexOf(goblin);
  const random = Math.floor(Math.random() * position.length);
  if (posGoblin !== random) {
    position[posGoblin].classList.remove('goblin');
    position[random].classList.add('goblin');
  }
}
