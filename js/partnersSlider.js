const left = document.querySelector('#left');
const right = document.querySelector('#right');
// const itemsList = document.querySelector('#items');
const partnersSliderList = document.querySelector('#items'); 

(async () => {
  let DB = await (await fetch('./js/partnersSlider.json')).json();

  DB.forEach((element) => {
    SliderItem = document.createElement('li');
    SliderItem.className = 'slider__item';
    partnersSliderList.append(SliderItem);

    
    SliderImg = document.createElement('img');
    SliderImg.className = 'sponsor__logo';
    SliderImg.setAttribute('src', element.img);
    SliderImg.setAttribute('title', element.title);
    SliderImg.setAttribute('alt', `${element.title} logo`);
    SliderItem.append(SliderImg);
  });
})();



const loop = (direction, e) => {
  e.preventDefault();

  if (direction === 'right') {
    for (let i = 0; i < 5; i++) {
      partnersSliderList.appendChild(partnersSliderList.firstElementChild);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      partnersSliderList.insertBefore(partnersSliderList.lastElementChild, items.firstElementChild);
    }
  }
};

right.addEventListener('click', (e) => {
  loop('right', e);
});

left.addEventListener('click', (e) => {
  loop('left', e);
});
