const hero = document.getElementById('hero');
const title = document.getElementById('title');
const titleLinks = Array.from(title.children);
const bgImgs = Array.from(hero.children);

function changeBgImg(titleIndex) {
  if (titleIndex === 0) {
    bgImgs[1].classList.add('opaque');
    return;
  } else if (titleIndex === 1) {
    bgImgs[2].classList.add('opaque');
    return;
  } else if (titleIndex === 2) {
    bgImgs[3].classList.add('opaque');
    return;
  }
};

titleLinks.forEach((titleLink, index) => {
  titleLink.addEventListener('mouseenter', () => changeBgImg(index));
  titleLink.addEventListener('mouseleave', () => {
    bgImgs.forEach(bgImg => bgImg.classList.remove('opaque'));
    bgImgs[0].classList.add('opaque');
  });
});