chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query({url : "http://grooveshark.com/*"}, function(tabs){
		chrome.tabs.executeScript(tabs[0].id, {code : "document.getElementById(\"play-pause\").click()"});
	});
});
