var swalObject = {
  'success': '<div class="sa"><div class="sa-success"><div class="sa-success-tip"></div><div class="sa-success-long"></div><div class="sa-success-placeholder"></div><div class="sa-success-fix"></div></div></div>',
  'error': '<div class="sa"><div class="sa-error"><div class="sa-error-x"><div class="sa-error-left"></div><div class="sa-error-right"></div></div><div class="sa-error-placeholder"></div><div class="sa-error-fix"></div></div></div>',
  'warning': '<div class="sa"><div class="sa-warning"><div class="sa-warning-body"></div><div class="sa-warning-dot"></div></div></div>'
}

var swalParent = document.createElement('div');

function sweetAlert(swalData) {
  var swalBody = '<div class="sweet__alert"><div class="sweet__alert_container"><div class="sweet__alert_section"><div class="sweet__alert_wrapper"><div class="sweet__alert_icon">' + swalObject[swalData.type] + '</div><div class="sweet__alert_heading"><h2>' + swalData.heading + '</h2></div><div class="sweet__alert_content"><p>' + swalData.text + '</p></div><div class="sweet__alert_footer"><button class="btn" id="cancel-swal-btn">' + swalData.cancelBtnText + '</button><button class="btn btn__blue" id="confirm-swal-btn">' + swalData.confirmBtnText + '</button></div></div></div</div></div>';
  swalParent.innerHTML = swalBody;
  document.body.appendChild(swalParent);
  closeSweetALert(swalData.confirmFun);
  confirmSweetAlert();
}

function closeSweetALert(callbackFun) {
  var ele = document.getElementById('cancel-swal-btn');
  ele.addEventListener('click', function() {
    document.body.removeChild(swalParent);
    if (callbackFun) callbackFun();
  })
}

function confirmSweetAlert(callbackFun) {
  var ele = document.getElementById('confirm-swal-btn');
  ele.addEventListener('click', function() {
    document.body.removeChild(swalParent);
    if (callbackFun) callbackFun();
  })
}
