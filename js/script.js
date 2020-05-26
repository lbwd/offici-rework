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
window.addEventListener('load', () => {
  const border = document.getElementsByClassName('border')[0];
  const logo = document.getElementsByClassName('logo-container')[0];
  border.style.top = logo.getBoundingClientRect().top + 'px';
  border.style.left = logo.getBoundingClientRect().left + 'px';
});

window.addEventListener('scroll', (e) => {
  const border = document.getElementsByClassName('border')[0];
  const logo = document.getElementsByClassName('logo-container')[0];
  if (window.scrollY >= 20) {
    border.style.top = '10px';
    border.style.left = '10px';
    border.style.transform = 'scale(0.4)';
  }
  if (window.scrollY < 20) {
    border.style.top = logo.getBoundingClientRect().top + 'px';
    border.style.left = logo.getBoundingClientRect().left + 'px';
    border.style.transform = 'scale(1)';
  }
});

document.addEventListener('mousemove', (e) => {
  let el = document.getElementById('show-image');
  el.style.left = e.clientX + 'px';
  el.style.top = e.clientY + 25 + 'px';
  console.log(e.clientX);
  console.log(e.clientY);
});

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
    document.getElementById('show-image').style.backgroundColor = 'red';
  });

document
  .getElementsByClassName('show-1')[0]
  .addEventListener('mouseover', (e) => {
    document.getElementById('show-image').style.backgroundColor = 'blue';
  });

document
  .getElementsByClassName('show-2')[0]
  .addEventListener('mouseover', (e) => {
    document.getElementById('show-image').style.backgroundColor = 'green';
  });

document
  .getElementsByClassName('show-3')[0]
  .addEventListener('mouseover', (e) => {
    document.getElementById('show-image').style.backgroundColor = 'yellow';
  });
