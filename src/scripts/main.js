'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeigth = spider.offsetHeight;

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  let spiderX = clickX - spiderWidth / 2;
  const spiderY = clickY - spiderHeigth / 2;

  if (spiderX < 0) {
    spiderX = 0;
  } else if (spiderX + spiderWidth > wall.offsetWidth) {
    spiderX = wall.offsetWidth - spiderWidth;
  }

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
