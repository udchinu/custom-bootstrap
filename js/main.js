window.addEventListener('load', function() {
  init()
})

function init() {
  attachEventListner()
}

function attachEventListner() {
  document.addEventListener('click', function(evt) {
    let eventType = evt.target.dataset.target
    let targetEle = evt.target.dataset.href
    if (targetEle) {
      switch (eventType) {
        case 'modal':
          modalHandler(targetEle)
          break;
        case 'tabs':
          tabsHandler(targetEle, evt)
          break;
        case 'select':
          modalHandler(targetEle)
          break;
        case 'select-option':
          selectOptionHandler(targetEle, evt)
      }
    }
  })
}

function tabsHandler(targetEle, evt) {
  removeAddActive(evt.target.parentElement)
  evt.target.classList.add('active')
  removeAddActive(evt.target.parentElement.nextElementSibling)
  let ele = document.getElementById(targetEle)
  ele.classList.add('active')

}

function removeAddActive(parentEle) {
  for (var i = 0; i < parentEle.children.length; i++) {
    parentEle.children[i].classList.remove('active')
  }
}

function modalHandler(targetEle) {
  let ele = document.getElementById(targetEle)
  ele.classList.contains('open') ? ele.classList.remove('open') : ele.classList.add('open')
}

function selectOptionHandler(selectOptionHandler, evt) {
  let parentEle = evt.target.closest('.select__wrapper')
  parentEle.firstElementChild.innerHTML = evt.target.innerHTML
  modalHandler (selectOptionHandler)
}

