//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
	const browserName = navigator.appName;
	const version = navigator.appVersion;

	const displayContent = document.getElementById("browser-info");

	displayContent.textContent =  "You are using " + browserName + " version " + version;
})