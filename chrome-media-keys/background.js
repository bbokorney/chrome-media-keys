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
	// Pandora
	chrome.tabs.query({url: "http://www.pandora.com/*"}, function(tabs) {
		if(tabs[0]) {
			var code = "var a = document.getElementsByClassName(\"playButton\")[0];"
			code += "if(a.style.cssText != \"display: none;\") a.click();"
			code += "else document.getElementsByClassName(\"pauseButton\")[0].click();"
			chrome.tabs.executeScript(tabs[0].id, {"code" : code});
		}
	})
});
