$ = jQuery;

$(window).scroll(function () {

  //淡入動畫
  var top = document.documentElement.scrollTop || document.body.scrollTop
  // var SE = document.getElementById('SE');
  var skill = document.getElementById('skill');
  var work = document.getElementById('work');
  // var contact = document.getElementById('contact');
  // if (top > 200){
  //   SE.style.animation = "fadeIn 3s";
  //   SE.style.marginTop = "0";
  // }
  if (top > (skill.offsetTop-skill.offsetHeight)){
    skill.style.animation = "fadeIn 3s";
    skill.style.marginTop = "0";
  }
  if (top > (work.offsetTop-work.offsetHeight)){
    work.style.animation = "fadeIn 3s";
    work.style.marginTop = "0";
  }
  // if (top > (contact.offsetTop-contact.offsetHeight)){
  //   contact.style.animation = "fadeIn 3s";
  //   contact.style.marginTop = "0";
  // }

});

// loading 動畫
$(document).ready(function () {
  document.getElementById("container").style.display = "none";
  setTimeout(function () {
    document.getElementById("load").style.display = "none";
    document.getElementById("container").style.display = "block";
  }, 3000);
});