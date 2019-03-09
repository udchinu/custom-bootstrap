window.addEventListener('load', function() {
  init()
})

function init() {
  attachEventListner()
  attachEventListnerOnLoad()
}

function attachEventListner() {
  document.addEventListener('click', function(evt) {
    let eventType = evt.target.dataset.target
    let targetEle = evt.target.dataset.href
    if (targetEle) {
      switch (eventType) {
        case 'modal':
          modalToastHandler(targetEle)
          break;
        case 'tabs':
          tabsHandler(targetEle, evt)
          break;
        case 'select':
          modalToastHandler(targetEle)
          break;
        case 'select-option':
          selectOptionHandler(targetEle, evt)
          break;
        case 'toast':
          modalToastHandler(targetEle)
          break;
        case 'carousel':
          let carouselArrow = evt.target.dataset.arrow
          let carouselDot = evt.target.dataset.dot
          carouselhandler(targetEle, carouselArrow, carouselDot)
          break;
      }
    }
  })
}

var slideIndex = 0

function tabsHandler(targetEle, evt) {
  removeAddActive(evt.target.parentElement)
  evt.target.classList.add('btn__blue')
  removeAddActive(evt.target.parentElement.nextElementSibling, 'data')
  let ele = document.getElementById(targetEle)
  ele.classList.add('active')

}

function removeAddActive(parentEle, type) {
  for (var i = 0; i < parentEle.children.length; i++) {
    type === 'data' ? parentEle.children[i].classList.remove('active') :
    parentEle.children[i].classList.remove('btn__blue')
  }
}

function modalToastHandler (targetEle) {
  let ele = document.getElementById(targetEle)
  ele.classList.contains('open') ? ele.classList.remove('open') : ele.classList.add('open')
}

function selectOptionHandler(selectOptionHandler, evt) {
  let parentEle = evt.target.closest('.select__wrapper')
  parentEle.firstElementChild.innerHTML = evt.target.innerHTML
  modalHandler (selectOptionHandler)
}

function attachEventListnerOnLoad () {
  var slides = document.getElementsByClassName("mySlides");
  if (!slides.length) return;
  slides[0].style.display = "block";
  let automaticSlide = document.getElementById('custom-carousel').dataset.automaticCarousel
  if (automaticSlide === 'true') {
    setInfiniteInterval()
  }
  for (var i = 0; i < slides.length; i++) {
    var span = document.createElement('span')
    span.setAttribute('class', 'dot')
    span.setAttribute('data-target', 'carousel')
    span.setAttribute('data-href', 'custom-carousel')
    span.setAttribute('data-dot', i)
    span.setAttribute('class', 'dot')
    if (i === 0) {
      span.classList.add('active')
    }
    document.getElementsByClassName('carousel_dot')[0].appendChild(span)
  }
}

function setInfiniteInterval () {
  var ele = document.getElementById('custom-carousel')
  var timeInterval = ele.dataset.interval
  setTimeout(function () {
    carouselhandler('custom-carousel', 'next')
    setInfiniteInterval()
  }, timeInterval);
}

function  carouselhandler (targetEle, carouselArrow, carouselDot) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if (carouselArrow) {
    carouselArrow === 'prev' ? --slideIndex : slideIndex ++
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length-1}
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].className += " active";
  } else if(carouselDot){
    slides[parseInt(carouselDot)].style.display = "block";
    dots[parseInt(carouselDot)].className += " active";
  }
}

