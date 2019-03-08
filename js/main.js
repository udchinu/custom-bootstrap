window.addEventListener('load', function() {
  init()
})

function init () {
  attachEventListner()
}

function attachEventListner () {
  document.addEventListener('click', function (evt) {
    let eventType = evt.target.dataset.target
    let targetEle = evt.target.dataset.href
    if (targetEle) {
      switch (eventType) {
        case 'modal':
        modalHandler(targetEle)
        break;
      }
    }
  })
}

function modalHandler (targetEle) {
  let ele = document.getElementById(targetEle)
  ele.classList.contains('open') ? ele.classList.remove('open') : ele.classList.add('open')
}
