/*
  Offici x Luca Benedetti
  - https://github.com/lbwd
  - http://instagram.com/lucaunliked
*/
window.addEventListener('scroll', (e) => {
  const border = document.getElementsByClassName('border')[0];
  const logo = document.getElementsByClassName('logo-container')[0];
  if (window.scrollY >= 20) {
    border.style.top = '30px';
    border.style.left = '10px';
    border.style.transform = 'scale(0.45)';
  }
  if (window.scrollY < 20) {
    border.style.top = logo.getBoundingClientRect().top + 'px';
    border.style.left = logo.getBoundingClientRect().left + 'px';
    border.style.transform = 'scale(1)';
  }
});

window.addEventListener('mousemove', (e) => {
  let el = document.getElementById('show-image');
  if (el.classList.contains('visible')) {
    el.style.left = e.clientX + 'px';
    let container = document.getElementsByClassName('shows')[0];
    el.style.top = e.clientY - container.getBoundingClientRect().top + 'px';
  }
});

window.addEventListener('load', (e) => {
  const border = document.getElementsByClassName('border')[0];
  const logo = document.getElementsByClassName('logo-container')[0];
  border.style.top = logo.getBoundingClientRect().top + 'px';
  border.style.left = logo.getBoundingClientRect().left + 'px';

  Array.from(document.getElementsByClassName('show-name')).forEach((el) =>
    el.addEventListener('mouseover', (e) => {
      document.getElementById('show-image').classList.add('visible');
    })
  );

  Array.from(document.getElementsByClassName('show-name')).forEach((el) =>
    el.addEventListener('mouseout', (e) => {
      document.getElementById('show-image').classList.remove('visible');
    })
  );

  document
    .getElementsByClassName('show-0')[0]
    .addEventListener('mouseover', (e) => {
      document.getElementById('show-image').src = 'img/show-0.jpg';
    });

  document
    .getElementsByClassName('show-1')[0]
    .addEventListener('mouseover', (e) => {
      document.getElementById('show-image').src = 'img/show-1.jpg';
    });

  document
    .getElementsByClassName('show-2')[0]
    .addEventListener('mouseover', (e) => {
      document.getElementById('show-image').src = 'img/show-2.jpg';
    });

  document
    .getElementsByClassName('show-3')[0]
    .addEventListener('mouseover', (e) => {
      document.getElementById('show-image').src = 'img/show-3.jpg';
    });

  document
    .getElementsByClassName('show-4')[0]
    .addEventListener('mouseover', (e) => {
      document.getElementById('show-image').src = 'img/show-4.jpg';
    });

  document
    .getElementsByClassName('show-5')[0]
    .addEventListener('mouseover', (e) => {
      document.getElementById('show-image').src = 'img/show-5.jpg';
    });
});

let currentTarget = 'top';
let targets = [
  'top',
  'top-phrase',
  'description',
  'slider',
  'shows',
  'downloads',
  'contacts',
];
window.smoothScroll = function () {
  let target =
    targets.indexOf(currentTarget) + 1 === targets.length
      ? 'top'
      : targets[targets.indexOf(currentTarget) + 1];
  let button = document.getElementsByClassName('scroll-button')[0];

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    target = 'top';
    button.classList.add('reversed');
  }

  if (target === 'contacts') {
    button.classList.add('reversed');
  } else {
    if (button.classList.contains('reversed')) {
      button.classList.remove('reversed');
    }
  }
  currentTarget = target;
  var scrollContainer = document.getElementsByClassName(target)[0];

  scrollContainer.scrollIntoView({ behavior: 'smooth' });
};
