var siteMap = 
[
	{"title": "דף הבית", "url" : "index.html", "isDefault": true},
	{"title": "על המופע", "url" : "about.html", "isDefault": false},
	{"title": "תגובות וביקורות", "url" : "critics.html", "isDefault": false},
	{"title": "יצירת קשר", "url" : "contact.html", "isDefault": false},
];

var header = "\<a href=\"index.html\">\
				<div id=\"banner\">\
					<span id=\"y\">יניב דויטש : </span>\
					קוסם שקורא מחשבות\
				</div></a>\
				<a id=\"mobilemenu\"><img src=\"images/mobilemenu.png\"/></a>\
				<nav id=\"menu\"></nav>";
				
var footer = "<a href=\"http://www.alonintheworld.com\" target=\"_blank\"><img src=\"images/alonintheworld.png\" />אלון רותם</a>";

footer = "<a href=\"http://www.alonintheworld.com\" target=\"_blank\"><table border='0' cellpadding='0' cellspacing='0'><tr><td><img src=\"images/alonintheworld.png\" /></td><td>אלון רותם</td><td></td></tr></table></a>";

$(function() {
	$("#header").html(header);
	$("#footer").html(footer);
	for(var i=0; i < siteMap.length; i++)
	{
		appendMenuItem(siteMap[i]/*.title, siteMap[i].url*/, (i < siteMap.length - 1));
	}
	$("#mobilemenu").click(function(){ $("nav#menu").slideToggle() });
	$(window).resize(checkSize);
	
});

function checkSize()
{
	if($("#mobilemenu").is(':visible'))
	{
		$("nav#menu").hide();
	}
	else
		$("nav#menu").show();
}

function appendMenuItem(sitemapItem, addSeparator)
{
	var locationPageMatch = document.location.href.match(/[^\/]+$/);
	var currentPageUrl = "";
	if(locationPageMatch)
	{
		currentPageUrl = document.location.href.match(/[^\/]+$/)[0];
	}
	else
		if(sitemapItem.isDefault)
			currentPageUrl = sitemapItem.url
	
	var selectedClass = "";
	var separator = (addSeparator)? "<span class=\"menuSeparator\"> | </span>" : "";
	if(sitemapItem.url == currentPageUrl)
		selectedClass = "class='activePage'";
	$("nav#menu").append("<div " + selectedClass + "><a href='" + sitemapItem.url + "'>" + sitemapItem.title + "</a></div>" + separator);
}