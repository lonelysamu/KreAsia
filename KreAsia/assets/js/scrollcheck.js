/** @format */

let fadeincase = 0;

scantoact();
document.querySelector("#framewindow").addEventListener('scroll', function () {
  scantoact();
});

function scantoact() {
  for (i = 0; i < document.querySelectorAll('.sectionbreaker').length; i++) {
    let position = document.querySelectorAll('.sectionbreaker')[i].getBoundingClientRect();
    let windowcheck = document.querySelector("#framewindow")
    // checking whether fully visible
    console.log(position);
    if ((position.top >= 0 && position.bottom <= windowcheck.clientHeight) || (position.top < windowcheck.clientHeight && position.bottom >= 0)) {
      if (document.querySelectorAll('.sectionbreaker')[i].classList.contains('fadefromleft1') == false) {
        document.querySelectorAll('.sectionbreaker')[i].classList.add('fadefromleft1');
      }
    } else {
      checkforallcases(i);
    }
  }
}

function checkforallcases(i) {
  if (document.querySelectorAll('.sectionbreaker')[i].classList.contains('fadefromleft1') == true) {
    document.querySelectorAll('.sectionbreaker')[i].classList.remove('fadefromleft1');
  } else {
  }
}
