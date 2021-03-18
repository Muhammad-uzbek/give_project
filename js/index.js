//navbar
(function() {
    $(function() {
      var collapseMyMenu, expandMyMenu, hideMenuTexts, showMenuTexts;
      expandMyMenu = function() {
        return $("nav.sidebar").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
      };
      collapseMyMenu = function() {
        return $("nav.sidebar").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
      };
      showMenuTexts = function() {
        return $("nav.sidebar ul a span.expanded-element").show();
      };
      hideMenuTexts = function() {
        return $("nav.sidebar ul a span.expanded-element").hide();
      };
      return $("#justify-icon").click(function(e) {
        if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-collapsed")) {
          expandMyMenu();
          showMenuTexts();
          $(this).css({
            color: "#000"
          });
        } else if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-expanded")) {
          collapseMyMenu();
          hideMenuTexts();
          $(this).css({
            color: "#FFF"
          });
        }
        return false;
      });
    });
  
  }).call(this);
//quote panel
var listQuotes = [
  {quote: "O‘zaro hadya  ulashinglar, bir-birlaringizga muhabbatli bo‘lasizlar”", author: "Rasululloh sollollohu alayhi vassallam"},
  {quote: "Qo‘shningga yaxshilik qilgin, mo‘min bo‘lasan", author: "Hadis(imom Termiziy rivoyat qilgan)"},
  {quote: "Ey iymon keltirganlar! Sadaqalaringizni minnat va ozor berish bilan, Allohga va oxirat kuniga iymon keltirmasa ham, kishilarga riyo uchun molini nafaqa qilganga o‘xshab bekorga ketkazmang", author: "Qur`on: Baqara surasi 264-oyat"},
  {quote: "Sadaqalaringizni oshkora bersangiz, qandoq ham yaxshi...", author: "Baqara surasi 271-oyat"},
  {quote: "Ehsonning mukofoti faqat ehsondir", author: "Rohman surasi 60-oyat"},
];

var currentQuote = 0;
var progress = setInterval(timerProgress, 9);
var progressWidth = 0;

// var timeDisplayed = 10000;
// var timer = setInterval(changeQuote, timeDisplayed);

function timerProgress() {
$(".quote-progress").width(progressWidth + "%");
if(progressWidth < 100) {
  progressWidth += 0.1;
} else {
  changeQuote();
  progressWidth = 0;
}
}

function setQuote() {
$(".quote").html('"' + listQuotes[currentQuote].quote + '"');
$(".author-name").html(listQuotes[currentQuote].author);
}

function changeQuote() {
 //$("blockquote").fadeToggle( "slow", "linear" );
if(currentQuote < listQuotes.length - 1){
  currentQuote++;
} else {
  currentQuote = 0;
}
setQuote();
}

$(".previous").click(function() {
if(currentQuote > 0){
  currentQuote--;
} else {
  currentQuote = listQuotes.length - 1;
}
setQuote();
progressWidth = 0;
});

$(".next").click(function() {
changeQuote();
progressWidth = 0;
});
setQuote();
//letter length
function letterhome() {
  var x = document.getElementById("textareahome").value;
    var e=x.length;
    if(x.length>180) document.getElementById("pastkiyozuv").innerHTML ='Your massage more than 180 letter!';
   else document.getElementById("pastkiyozuv").innerHTML = e+'/180';
}

//give page textareea letter counter
function letter() {
  var x = document.getElementById("name_pr").value;
    var e=x.length;
    if(x.length>30) document.getElementById("pastyoz").innerHTML ='Your massage more than 30 letter!';
   else document.getElementById("pastyoz").innerHTML = e+'/30';
}
function freeOr(){
  var v1=document.getElementById("tekin").checked;
  var v2=document.getElementById("pulli").checked;
  if (v2!=true) document.getElementById("narxcont").style.visibility="hidden";
  else document.getElementById("narxcont").style.visibility="visible";
}

//filter bar
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

