# Vista Panel Tweaks
<h2>Hide unwanted/paid hosting buttons in vPanel, Change Links.</h2>

<h1><u>Installation</u></h1>
 1. Go to your MyOwnFreeHost Panel > <a href="http://panel.myownfreehost.net/panel/index2.php?option=paneladvertsdomselect" target="_blank">Control Panel Advert Control</a> > Select your domain.<br>2. Add <code><script src="https://spookykipper.github.io/vPanel-Tweaks/hider.js"></script></code> to the <b>Bottom Advert</b> Section
 
 Or you can self host it with Github Pages if you need to make changes yourself

# File Manage Link or Tutorial Link Changer
Set the variables *before* this script loads. Example:
```html
<script>
var tutolink = "https://forum.spookhost.eu.org/t/tutorials"; //Replace it with your Link *INCLUDE HTTP(S) PROTOCOL
var filelink = "files.spookhost.eu.org"; //Replace it with your Link, Must be Monsta FTP HOST EDITION, *DO NOT INCLUDE HTTP(S) PROTOCOL OR TRAILING SLASH)
</script>
<script src="https://spookykipper.github.io/vPanel-Tweaks/hider.js"></script>
```

<h1>Full Feature List</h1>
<ul>
<li>Hide Unwanted/Premium Hosting Buttons on the homepage</li>
<li>Hide Password, Email Changing Buttons (In favour of Client Areas)</li>
<li>Replaces File Manager Button with HTTPS for Security</li>
<li>Hide Site Builder Button on Addon Domains and Subdomains Page.</li>
<li>Hide the Sidebar (I don't see a point of having it, there's only two buttons)</li>
<li>Change File Manager and Tutorial Link(Configurable)</li>
</ul>
