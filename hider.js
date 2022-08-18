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

});*/


const element1 = document.getElementById("item_attracta_seotips"); //hide SEOTOOLS - remove to unhide
element1.parentNode.removeChild(element1);
const element2 = document.getElementById("icon-attracta_seotips"); // ^^^
element2.parentNode.removeChild(element2);
const element3 = document.getElementById("icon-cloudflare"); // hide CLOUDFLARE - remove to unhideelement.remove();
element3.parentNode.removeChild(element3);
const element4 = document.getElementById("item_cloudflare"); // ^^^
element4.parentNode.removeChild(element4);
const element5 = document.getElementById("icon-sitereptile"); // hide sitebuilder - remove to unhide (although it was shut down)
element5.parentNode.removeChild(element5);
const element6 = document.getElementById("item_sitereptile"); // ^^^
element6.parentNode.removeChild(element6);
const element7 = document.getElementById("item_accounts"); // hide emailaccounts - remove to unhide (although it is paid)
element7.parentNode.removeChild(element7);
const element8 = document.getElementById("icon-accounts"); // ^^^
element8.parentNode.removeChild(element8);
const element9 = document.getElementById("item_forwarders"); // ^^^
element9.parentNode.removeChild(element9);
const element10 = document.getElementById("icon-forwarders"); // ^^^
element10.parentNode.removeChild(element10);
const element11 = document.getElementById("item_email_filters"); // ^^^
element11.parentNode.removeChild(element11);
const element12 = document.getElementById("icon-email_filters"); // ^^^
element12.parentNode.removeChild(element12);
const element13 = document.getElementById("item_postgresql_databases"); // hide postgresql databases - remove to unhide (although it is paid)
element13.parentNode.removeChild(element13);
const element14 = document.getElementById("icon-postgresql_databases"); // ^^^ 
element15.parentNode.removeChild(element14);
const element16 = document.getElementById("icon-remote_mysql"); // hide remotemysql - remove to unhide (it is paid, not applicable in free hosting)
element16.parentNode.removeChild(element15);
const element17 = document.getElementById("item_remote_mysql"); // ^^^
element17.parentNode.removeChild(element16);
const element18 = document.getElementById("imgPoweredByCpanel"); // hide poweredbycpanel - remove to unhide
element18.parentNode.removeChild(element17);



const sidebar = document.getElementById("sidebar").style.display = "none"; //Remove Sidebar
const mblesidebar = document.getElementById("btnSideBarToggle").style.display = "none"; //Remove Sidebar Button on Mobile
