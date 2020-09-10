var background = document.getElementsByTagName("body")[0];

var currentTime = new Date().getHours();
if (document.body) {
    if (7 <= currentTime && currentTime < 19) {
        // day theme
        background.classList.remove("nightGradientBackground");
        background.classList.add("dayGradientBackground");
    }
    else {
        // night theme

        background.classList.remove("dayGradientBackground");
        background.classList.add("nightGradientBackground");
    }
}
