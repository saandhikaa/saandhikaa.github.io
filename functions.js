var myphotoheight = document.getElementById("myphoto").height;
document.getElementById("photo").style.height = myphotoheight + "px";


var myphotowidth = document.getElementById("myphoto").width;
document.getElementById("Ltriangle").style.borderLeft = myphotowidth/2 + "px solid white";
document.getElementById("Rtriangle").style.borderRight = myphotowidth/2 + "px solid white";



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 400) {
    document.getElementById("scrollUpButton").style.display = "block";
  } else {
    document.getElementById("scrollUpButton").style.display = "none";
  }
}

document.getElementById("scrollUpButton").addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});



const myDivs = document.querySelectorAll('.project');

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top + 100;
  const elemBottom = rect.bottom;
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

window.addEventListener('scroll', function() {
  for (let i = 0; i < myDivs.length; i++) {
    if (isScrolledIntoView(myDivs[i])) {
      myDivs[i].classList.add('animate');
    }
  }
});
