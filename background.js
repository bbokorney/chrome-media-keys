chrome.commands.onCommand.addListener(function(command) {
	// Grooveshark
	chrome.tabs.query({url : "http://grooveshark.com/*"}, function(tabs){
		if(tabs[0]) {
			chrome.tabs.executeScript(tabs[0].id, {code : "document.getElementById(\"play-pause\").click()"});
		}
	});
	// SoundCloud
	chrome.tabs.query({url: "https://soundcloud.com/*"}, function(tabs) {
		if(tabs[0]) {
			chrome.tabs.executeScript(tabs[0].id, {code : "document.getElementsByClassName(\"playControl sc-ir\")[0].click()"})
		}
	});
});
