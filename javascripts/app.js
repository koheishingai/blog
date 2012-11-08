window.onscroll = function() {
  document.getElementById('page-header').className = "active";
  if(window.scrollY < 25) {
    document.getElementById('page-header').className = "";
  }
};