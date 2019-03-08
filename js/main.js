window.addEventListener('load', function() {
  init()
})

function init () {
  // attechEvtListnerOnOpenModal()
  // attechEvtListnerOnCloseModal()
  attachEventListner()
}

function attachEventListner () {
  document.addEventListener('click', function (evt) {
    let eventType = evt.target.dataset.target
    let targetEle = evt.target.dataset.href
    switch (eventType) {
      case 'modal':
      modalHandler(targetEle)
      break;
    }
  })
}

function modalHandler (targetEle) {
  let ele = document.getElementById(targetEle)
  ele.classList.contains('open') ? ele.classList.remove('open') : ele.classList.add('open')
}

// function attechEvtListnerOnOpenModal () {
//   // var ele = document.getElementsByName('modal')
//   // for (var i = 0; i < ele.length; i++) {
//   //   ele[i].addEventListener('click', function (ele) {
//   //     var modalEle = ele.currentTarget.dataset.target
//   //     document.getElementById(modalEle).classList.add('open')
//   //   })
//   // }
//   var a = document.getElementsByClassName('modal__button')
//   a.addEventListener('click', function(ele) {
//     debugger
//   })
// }

// function attechEvtListnerOnCloseModal () {
//   var ele = document.getElementsByName('close-modal')
//   for (var i = 0; i < ele.length; i++) {
//     ele[i].addEventListener('click', function (ele) {
//       var modalEle = ele.currentTarget.dataset.target
//       document.getElementById(modalEle).classList.remove('open')
//     })
//   }
// }