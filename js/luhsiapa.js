document.oncontextmenu = function() {
  alert('no right click');
  return false;
}

document.body.oncopy = function() {
  alert('no copy text');
  return false;
}
