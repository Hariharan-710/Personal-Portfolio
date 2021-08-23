
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
h = h % 12;
h = h ? h : 12;
m = m < 10 ? '0'+m : m;
document.getElementById('time').innerHTML=h+":"+m;  

var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  
document.getElementById('date').innerHTML=day+"/"+month+"/"+year;

// //type writer 
var content = 'A front end developer and web designer from India who loves design and the internet sphere';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('#profiletext').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});

//shaffle

const elements = document.querySelectorAll("[data-chaffle]");
Array.prototype.forEach.call(elements, function(el) {
  const chaffle = new Chaffle(el, {
    /* options */
    speed: 10, // default: 20
  delay: 150 // default: 100
  }); 
  el.addEventListener("mouseover", function() {
    chaffle.init();
  });
});

const element = document.getElementsByClassName("name");
Array.prototype.forEach.call(element, function(el) {
  const chaffle = new Chaffle(el, {
    /* options */
  });
  chaffle.init();
});

//tabbed
function openTab(evt, tabname) {
  var i, tabcontent, tablinks;
 var skills = document.getElementById("skills1");

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";

  skills.style.transform = "scale(0)"; 
  

}

//skills

function myFunction() {
  // Standard syntax
  document.getElementById("skills1").style.transform = "scale(1)"; 
}





//gif


// function Showgif1(){
//   var terran = document.getElementById("terran")
//   var mygif1 = document.getElementById("mygif1"),

  

//     show = function(){
//       mygif1.style.display = "block";
//       terran.style.display = "none";
//       setTimeout(hide, 800); 
//       textDelay1();
//     },

//     hide = function(){
//       mygif1.style.display = "none";
//     };
   
//   show();
// }


// function Showgif2(){
//   var lava = document.getElementById("lava")
//   var mygif2 = document.getElementById("mygif2"),

//     show = function(){
//       mygif2.style.display = "block";
//       lava.style.display = "none";
//       setTimeout(hide, 800); 
//       textDelay2();
//     },

//     hide = function(){
//       mygif2.style.display = "none";
//     };
   
//   show();
// }


// function Showgif3(){
//   var ice = document.getElementById("ice")
//   var mygif3 = document.getElementById("mygif3"),

//     show = function(){
//       mygif3.style.display = "block";
//       ice.style.display = "none";
//       setTimeout(hide, 800); 
//       textDelay3();
//     },

//     hide = function(){
//       mygif3.style.display = "none";
//     };
//   show();
// }

// var TextDelay1;
// var TextDelay2;
// var TextDelay3;
// function textDelay1() {
//   TextDelay1 = setInterval(delay1, 800);
// }
// function textDelay2() {
//   TextDelay2 = setInterval(delay2, 800);
// }
// function textDelay3() {
//   TextDelay3 = setInterval(delay3, 800);
// }

// function delay1() { 
//   var text1 = document.getElementById("resource-text1");
//   text1.style.display = "block";
// }

// function delay2() { 
//   var text2 = document.getElementById("resource-text2");
//   text2.style.display = "block";
// }

// function delay3() { 
//   var text3 = document.getElementById("resource-text3");
//   text3.style.display = "block";
// }
