/* 
* This code was written by SIREPICLYAMAZING (https://github.com/SirEpiclyAmazing/)
* This code is open source 
* The code is modified and re-coded by Spooky Kipper.
*/
/*
$(document).ready(function(){
  $("#item_attracta_seotips"); //hide SEOTOOLS - remove to unhide
  $("icon-attracta_seotips"); // ^^^
  // $("#icon-cloudflare"); //Hide Cloudflare - Remove comment to hide
  // $("#item_cloudflare"); // ^^^
  $("#icon-sitereptile"); // hide sitebuilder - remove to unhide (although it was shut down)
  $("#item_sitereptile"); // ^^^
  $("#item_accounts"); // hide emailaccounts - remove to unhide (Paid Hosting Service)
  $("#icon-accounts"); // ^^^
  $("#item_forwarders"); // ^^^
  $("#icon-forwarders"); // ^^^
  $("#item_email_filters"); // ^^^
  $("#icon-email_filters"); // ^^^
  $("#item_postgresql_databases"); // hide postgresql databases - remove to unhide (Paid hosting Service)
  $("#icon-postgresql_databases"); // ^^^
  $("#icon-remote_mysql"); // hide remotemysql - remove to unhide (Paid hosting Service)
  $("#item_remote_mysql"); // ^^^
});
*/


const element5 = document.querySelector("#software-body > div:nth-child(1)"); // hide sitebuilder - remove to unhide (although it was shut down)
element5.parentNode.removeChild(element5);

const element7 = document.querySelector("#email-body > div:nth-child(1)"); // hide emailaccounts - remove to unhide (although it is paid)
element7.parentNode.removeChild(element7);

const element9 = document.querySelector("#email-body > div:nth-child(2)"); // ^^^
element9.parentNode.removeChild(element9);

const element11 = document.querySelector("#email-body > div:nth-child(5)"); // Webmail
element11.parentNode.removeChild(element11);

const element13 = document.querySelector("#databases-body > div:nth-child(4)"); // hide postgresql databases - remove to unhide (although it is paid)
element13.parentNode.removeChild(element13);

const element16 = document.querySelector("#databases-body > div:nth-child(3)"); // hide remotemysql - remove to unhide (it is paid, not applicable in free hosting)
element16.parentNode.removeChild(element15);

const element17 = document.querySelector("#preferences-body > div:nth-child(1)"); // hide change language - remove to unhide
element17.parentNode.removeChild(element17);

const element18 = document.querySelector("#preferences-body > div:nth-child(1)"); // hide change password - remove to unhide
element18.parentNode.removeChild(element18);

const element19 = document.querySelector("#preferences-body > div:nth-child(3)"); // hide change email - remove to unhide
element19.parentNode.removeChild(element19);

const element20 = document.querySelector("#metrics-body > div:nth-child(2)"); // hide error logs (its trash and no use) - remove to unhide
element20.parentNode.removeChild(element20);


const element21 = document.querySelector("#metrics-body > div:nth-child(4)"); // hide access logs (its trash and no use) - remove to unhide
element21.parentNode.removeChild(element21);

const element22 = document.querySelector("#soft_div-body > div"); // hide duplicated softaculous - remove to unhide
element22.parentNode.removeChild(element22);

const element23 = document.querySelector("#boxes > div:nth-child(11)"); // hide duplicated softaculous - remove to unhide
element23.parentNode.removeChild(element23);



const sidebar = document.getElementById("sidebar").style.display = "none"; //Remove Sidebar
const mblesidebar = document.getElementById("btnSideBarToggle").style.display = "none"; //Remove Sidebar Button on Mobile
