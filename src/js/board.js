export default class Board {
  constructor() {
    this.size = 4;
  }

  init() {
    const board = document.querySelector('.board');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.size * this.size; i++) {
      const block = document.createElement('div');
      block.classList.add('block');
      board.appendChild(block);
    }
  }
}
