(function customModule(){
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

    function buildToC() {
        /*var ToC =
            "<nav role='navigation' class='table-of-contents'>" +
            "<h2>On this page:</h2>" +
            "<ul>";

        $("#postContentWrapper").find("h2").each(function () {
            var el = $(this);
            var title = el.text();
            var link = "#" + el.attr("id");

            ToC += "<li>" +
                "<a href='" + link + "'>" +
                title +
                "</a>" +
                "</li>";
        });

        ToC +=
            "</ul>" +
            "</nav>";

        $("#toc").append(ToC);    */
        //$('#toc').toc({ headers: 'h2, h3, h4, h5, h6', showEffect: 'slideDown'});
    }


    function onLoad() {
        switchLoadingDisplay();
        resetScrollState();
        buildToC();

    }

    function resetScrollState(){
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


//functions to download a Websites questions (heading level 4 and 5) as cards.
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

    function buildCSVContent(cards){
        var buf = "";
        cards.map(function(val, index, arary){
            val.backside = val.backside.replace(/(?:\r\n|\r|\n)/g, '');
            val.backside = val.backside.replace(/(")/g, "'");
            buf += "\"" + val.frontside + "\",\"" + val.backside + "\"\n";
        });
        return buf;
    }

    window.onload = onLoad;


})()