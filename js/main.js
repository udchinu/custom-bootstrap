window.addEventListener('load', function() {
  init()
})

function init() {
  attachEventListner()
  attachEventListnerOnLoad()
  initStickyTab()
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
        case 'sticky-tab':
          tabsHandler(targetEle, evt, true);
          break;
        case 'collapse':
          collapseHandler(targetEle)
          break;
        case 'accordian':
          accordianHandler(targetEle)
          break;
        case 'progress':
          progressHandler(targetEle)
          break;
      }
    }
  })
}

var slideIndex = 0

function initStickyTab() {
  var stickyTab = document.getElementById('sticky-tab');
  var sticky
  var height
  if (stickyTab) {
    sticky = stickyTab.offsetTop
    height = stickyTab.offsetHeight
    window.addEventListener('scroll', function() {
      if (window.pageYOffset >= sticky) {
        stickyTab.classList.add('sticky__element');
        stickyTab.style.marginBottom = height + 20 + 'px'
      } else {
        stickyTab.classList.remove('sticky__element');
        stickyTab.style.marginBottom = '0px'
      }
    });
  }
}

function tabsHandler(targetEle, evt, typeSticky) {
  removeAddActive(evt.target.parentElement)
  evt.target.classList.add('btn__blue')
  removeAddActive(evt.target.parentElement.nextElementSibling, 'data')
  let ele = document.getElementById(targetEle)
  ele.classList.add('active')
  if (typeSticky) {
    let yAxis = ele.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: yAxis - 88,
      behavior: 'smooth'
    })
  }
}

function removeAddActive(parentEle, type) {
  for (var i = 0; i < parentEle.children.length; i++) {
    type === 'data' ? parentEle.children[i].classList.remove('active') :
      parentEle.children[i].classList.remove('btn__blue')
  }
}

function modalToastHandler(targetEle) {
  let ele = document.getElementById(targetEle)
  ele.classList.contains('open') ? ele.classList.remove('open') : ele.classList.add('open')
}

function selectOptionHandler(targetEle, evt) {
  let parentEle = evt.target.closest('.select__wrapper')
  parentEle.firstElementChild.innerHTML = evt.target.innerHTML
  modalToastHandler(targetEle)
}

function attachEventListnerOnLoad() {
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

function setInfiniteInterval() {
  var ele = document.getElementById('custom-carousel')
  var timeInterval = ele.dataset.interval
  setTimeout(function() {
    carouselhandler('custom-carousel', 'next')
    setInfiniteInterval()
  }, timeInterval);
}

function carouselhandler(targetEle, carouselArrow, carouselDot) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (carouselArrow) {
    carouselArrow === 'prev' ? --slideIndex : slideIndex++
    if (slideIndex >= slides.length) {
      slideIndex = 0
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
  } else if (carouselDot) {
    slides[parseInt(carouselDot)].style.display = "block";
    dots[parseInt(carouselDot)].className += " active";
  }
}

function collapseHandler(targetEle) {
  let ele = document.getElementById(targetEle)
  ele.classList.toggle('active');
  var content = ele.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

function accordianHandler(targetEle) {
  let ele = document.getElementById(targetEle)
  let parentElement = ele.closest('.accordian')
  let targetChildrenEle = parentElement.querySelectorAll('.accordian__wrapper > .accordian__wrapper_data')
  let currentActiveEle
  for (var i = 0; i < targetChildrenEle.length; i++) {
    if (targetChildrenEle[i].classList.contains('open')) {
      currentActiveEle = targetChildrenEle[i]
    }
  }
  if (!currentActiveEle) {
    ele.classList.add('open')
  } else {
    if (currentActiveEle.id !== ele.id) {
      currentActiveEle.classList.remove('open')
      ele.classList.add('open')
    } else {
      currentActiveEle.classList.remove('open')
    }
  }
}

function progressHandler(targetEle) {
  let ele = document.getElementById(targetEle)
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      ele.style.width = width + '%';
    }
  }
}