window.addEventListener('load', function() {
  init()
})

function init () {
  attechEvtListnerOnModal()
}

function attechEvtListnerOnModal () {
  var ele = document.getElementsByName('modal')
  ele[0].addEventListener('click', function (ele) {
    var modalEle = ele.currentTarget.dataset.target
    document.getElementById(modalEle).classList.add('open')
  })
}