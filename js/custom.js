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


function onLoad() {
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

}

function downloadCsv() {
    if (saveAs) {
        var data = document.getElementById("postContentWrapper").innerHTML;
        //var regex = /<h4.*>(.*)<\/h4>([\S\s]*?)(?=\<h4|\<\/div|$)/;
        var h4s = $("#postContentWrapper").find("h4");
        var h4s = $("#postContentWrapper").find("h4");
        h4s.each(function (index, obj) {
            var frontside = obj.text();
            var backside = obj.nextUntil("h4");

        })
    }
    var firstQuestion = h4s.first();
    //var firstQuestion.nextUntil("h4")


}
window.onload = onLoad;

