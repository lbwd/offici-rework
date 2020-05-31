// window.addEventListener('scroll', (e) => {
//   var border = document.getElementsByClassName('border')[0];
//   // Width
//   var initLeft = (document.body.offsetWidth - border.offsetWidth) / 2;
//   if (initLeft - window.scrollY * 2 > 10) {
//     border.style.left = initLeft - window.scrollY * 2 + 'px';
//   } else {
//     border.style.left = '10px';
//   }
//   // Height
//   var initTop = (window.innerHeight - border.offsetHeight) / 2;
//   if (initTop - window.scrollY > 10) {
//     border.style.top = initTop - window.scrollY + 'px';
//   } else {
//     border.style.top = '10px';
//   }
//   // Dimension
//   if (window.scrollY < 466) {
//     border.style.transform =
//       'scale(' + (100 - window.scrollY * 0.15) / 100 + ')';
//   } else {
//     border.style.transform = 'scale(0.30)';
//   }
// });
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
      document.getElementById('show-image').src = 'img/show-1.png';
    });

  document
    .getElementsByClassName('show-2')[0]
    .addEventListener('mouseover', (e) => {
      document.getElementById('show-image').src = 'img/show-2.png';
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

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
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
