const rewiewsSlider = document.querySelector('.reviews__list');
let lang = document.querySelector('.langauge__item.active').getAttribute('attr-lang');


(async () => {
  let DB = await (await fetch('./js/rewiewsSlider.json')).json();

  DB.forEach((element) => {
    /// / создание элементов  слайдера
    SliderItem = document.createElement('li');
    SliderItem.className = 'reviews__item';
    rewiewsSlider.append(SliderItem);

    // создание обертки слайда
    slideWrapper = document.createElement('div');
    slideWrapper.className = 'review';
    SliderItem.append(slideWrapper);

    // создание блока с лого конференции и датой
    slideConf = document.createElement('div');
    slideConf.className = 'review__conf';
    slideWrapper.append(slideConf);

    сonfLogo = document.createElement('div'); // обертка картинки
    сonfLogo.className = 'review__conf-logo';
    slideConf.append(сonfLogo);

    сonfImg = document.createElement('img'); // лого конфы
    сonfImg.className = 'review__conf-img';
    сonfImg.src = element.confImg;
    сonfLogo.append(сonfImg);

    // if (element.date) {
    //   сonfDate = document.createElement('div'); // дата
    //   сonfDate.className = 'review__date';
    //   сonfDate.innerText = element.date;
    //   slideConf.append(сonfDate);
    // }

    // создание блока с текстом  отзыва
    reviewText = document.createElement('div'); // текст отзыва
    reviewText.className = 'review__text';
    if (lang === 'EN' && element.reviewTextEng !== undefined) {
      reviewText.innerHTML = `“${element.reviewTextEng}”`;
    } else {
      reviewText.innerHTML = `“${element.reviewText}”`;
    }
    slideWrapper.append(reviewText);

    // создание блока с автором
    reviewAuthor = document.createElement('div'); // обертка блока
    reviewAuthor.className = 'review__author';
    slideWrapper.append(reviewAuthor);

    avatar = document.createElement('div'); // обертка автара
    avatar.className = 'review__author-img';
    reviewAuthor.append(avatar);

    avatarImg = document.createElement('img'); // аватар автора
    avatarImg.className = 'review__author-pic';
    avatarImg.alt = 'фото';
    avatarImg.src = element.avatar;
    avatar.append(avatarImg);

    authorAbout = document.createElement('div'); // обертка об авторе
    authorAbout.className = 'review__text-content';
    reviewAuthor.append(authorAbout);

    authorName = document.createElement('span'); // Имя автора
    authorName.className = 'review__name';

    if (lang === 'EN' && element.nameEng !== undefined) {
      authorName.innerHTML = element.nameEng;
    } else {
      authorName.innerHTML = element.name;
    }
    authorAbout.append(authorName);

    authorCompany = document.createElement('span'); // Компания автора
    authorCompany.className = 'review__company';

    if (lang === 'EN' && element.companyEng !== undefined) {
      authorCompany.innerHTML = element.companyEng;
    } else {
      authorCompany.innerHTML = element.company;
    }
    authorAbout.append(authorCompany);

    authorPosition = document.createElement('span'); // должность автора
    authorPosition.className = 'review__position';
    authorPosition.innerHTML = element.position;

    if (lang === 'EN' && element.positionEng !== undefined) {
      authorPosition.innerHTML = element.positionEng;
    } else {
      authorPosition.innerHTML = element.position;
    }
    authorAbout.append(authorPosition);
  });
  runSliderRewiew();
})();

function runSliderRewiew() {
  $(document).ready(() => {
    $('.reviews__list').slick({
      dots: true,
      prevArrow:
        '<div id="prev" class=" reviews__arrow reviews__arrow-l"><img src="https://it-events.com/system/attachments/files/000/002/026/original/left_arrow_grey.svg" alt="<" class="arrow__img"></div>',
      nextArrow:
        '<div id="next" class=" reviews__arrow reviews__arrow-r"><img src="https://it-events.com/system/attachments/files/000/002/027/original/right_arrow_grey.svg" alt=">" class="arrow__img"></div>',
    });
  });
}
