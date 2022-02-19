  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .gg-search");
  // let searchBoxCancel = document.querySelector(".search-box .gg-close");
  
  searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
      searchBox.classList.replace("gg-search" ,"gg-close");
    }else {
      searchBox.classList.replace("gg-close" ,"gg-search");
    }
  });
  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .gg-close");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
  
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  
  let jssArrow = document.querySelector(".jss-arrow");
  jssArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }
  

  