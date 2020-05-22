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
    border.style.transform = 'scale(0.3)';
  }
  if (window.scrollY < 20) {
    border.style.top = logo.getBoundingClientRect().top + 'px';
    border.style.left = logo.getBoundingClientRect().left + 'px';
    border.style.transform = 'scale(1)';
  }
});
