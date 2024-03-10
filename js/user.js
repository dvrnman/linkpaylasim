document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var textbox1 = document.getElementById("textbox1");
    var textbox2 = document.getElementById("textbox2");
    var submitButton = document.getElementById("submitButton");

    toggleButton.addEventListener("click", function () {
        toggleVisibility(textbox1);
        toggleVisibility(textbox2);
        toggleVisibility(submitButton);
    });

    function toggleVisibility(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    }
});
