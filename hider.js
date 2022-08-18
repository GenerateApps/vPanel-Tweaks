var element5 = document.querySelector("#software-body > div:nth-child(1)"); // hide sitebuilder - remove to unhide (although it was shut down)
element5.parentNode.removeChild(element5);

var element7 = document.querySelector("#email-body > div:nth-child(1)"); // hide emailaccounts - remove to unhide (although it is paid)
element7.parentNode.removeChild(element7);

var element9 = document.querySelector("#email-body > div:nth-child(2)"); // ^^^
element9.parentNode.removeChild(element9);

var element11 = document.querySelector("#email-body > div:nth-child(5)"); // Webmail
element11.parentNode.removeChild(element11);

var element13 = document.querySelector("#databases-body > div:nth-child(4)"); // hide postgresql databases - remove to unhide (although it is paid)
element13.parentNode.removeChild(element13);

var element16 = document.querySelector("#databases-body > div:nth-child(3)"); // hide remotemysql - remove to unhide (it is paid, not applicable in free hosting)
element16.parentNode.removeChild(element15);

var element17 = document.querySelector("#preferences-body > div:nth-child(1)"); // hide change language - remove to unhide
element17.parentNode.removeChild(element17);

var element18 = document.querySelector("#preferences-body > div:nth-child(1)"); // hide change password - remove to unhide
element18.parentNode.removeChild(element18);

var element19 = document.querySelector("#preferences-body > div:nth-child(3)"); // hide change email - remove to unhide
element19.parentNode.removeChild(element19);

var element20 = document.querySelector("#metrics-body > div:nth-child(2)"); // hide error logs (its trash and no use) - remove to unhide
element20.parentNode.removeChild(element20);


var element21 = document.querySelector("#metrics-body > div:nth-child(4)"); // hide access logs (its trash and no use) - remove to unhide
element21.parentNode.removeChild(element21);

var element22 = document.querySelector("#soft_div-body > div"); // hide duplicated softaculous - remove to unhide
element22.parentNode.removeChild(element22);

var element23 = document.querySelector("#boxes > div:nth-child(11)"); // hide duplicated softaculous - remove to unhide
element23.parentNode.removeChild(element23);



var sidebar = document.getElementById("sidebar").style.display = "none"; //Remove Sidebar
var mblesidebar = document.getElementById("btnSideBarToggle").style.display = "none"; //Remove Sidebar Button on Mobile
