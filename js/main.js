window.addEventListener('load', function() {
  init()
})

function init () {
  attechEvtListnerOnModal()
}

function attechEvtListnerOnModal () {
  var ele = document.getElementsByName('modal')
  for (var i = 0; i < ele.length; i++) {
    ele[i].addEventListener('click', function (ele) {
      debugger
      var modalEle = ele.currentTarget.dataset.target
      document.getElementById(modalEle).classList.add('open')
    })
  }
}