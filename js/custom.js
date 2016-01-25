// FIX scroll bug

var blocked = false;

function switchLoadingDisplay() {
    // loader page
    var page = document.getElementById("page");
    var loader = document.getElementById("loader");
    loader.style.display = "none";
    document.getElementsByClassName("mdl-layout__content")[0].style.width = "100%";
    page.style.display = "block";

}


var onLoad = function () {
    switchLoadingDisplay();

    var mainScrollArea = document.getElementsByClassName('mdl-layout')[0];
    setTimeout(function () {
        if (window.location.href == localStorage.getItem('lastUrl')) {
            mainScrollArea.scrollTop = localStorage.getItem('scrollTop');
        } else {
            localStorage.setItem('lastUrl', window.location.href);
            localStorage.setItem('scrollTop', 0);
        }
    }, 100);


    mainScrollArea.addEventListener('scroll', function () {
        if (!blocked) {
            localStorage.setItem('scrollTop', this.scrollTop);
            blocked = true;
            setTimeout(function () {
                blocked = false;
            }, 200);
        }
    });

};

window.onload = onLoad;

