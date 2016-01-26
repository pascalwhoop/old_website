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
        var headings = $("#postContentWrapper").find("h4, h5");

        var cards = [];
        headings.each(function (index, obj) {
            var back= $(this).nextUntil("h5, h4, h3, h2, h1");

            var card = {
                frontside: $(this).text(),
                backside: getStringFromJQueryObjects(back)
            };
            cards.push(card);
        });
        //displayInWebsite(cards);
        var blob = new Blob([buildCSVContent(cards)], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "cards.csv");
    }

}

function getStringFromJQueryObjects(jQobjects){
    var asText = "";
    jQobjects.each(function(index, object){
        asText += $(this).prop('outerHTML');
    });
    return asText;
}

function displayInWebsite(dataArray) {
    //array of objects with "frontside" and "backside"
    //make our outlet visible
    var outlet = document.getElementById("csvOutlet");
    outlet.style.display = "block";
    var table = $("#csvOutlet table");
    dataArray.map(function(val, index, array){
        var buf = "<tr><td>" + val.frontside + "</td>" + "<td><code>" + val.backside+ "</code></td></tr>";
        table.append(buf);
    });
}

function buildCSVContent(cards){
    var buf = "frontside, backside\n";
    cards.map(function(val, index, arary){
        val.backside = val.backside.replace(/(?:\r\n|\r|\n)/g, '');
        val.backside = val.backside.replace(/(")/g, "'");
        buf += "\"" + val.frontside + "\",\"" + val.backside + "\"\n";
    });
    return buf;
}

window.onload = onLoad;

