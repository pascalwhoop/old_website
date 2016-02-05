//showing loader in the beginning. We dont show it on default for non js clients
document.getElementById("loader").style.display = "block;";


(function(){
    // FIX scroll bug
    var caloo = function(){
        var that = this;
        this.blocked = false;


        this.hideLoadingIcon = function() {
            // loader page
            var loader = document.getElementById("loader").style.display = "none";
        };

        this.buildToC = function() {
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
        };


        this.onLoad = function() {
            window.caloo.initiate.call(window.caloo);
        };

        this.initiate = function(){
            this.hideLoadingIcon();
            this.resetScrollState();
            this.buildToC();
        };

        this.resetScrollState = function(){
            var mainScrollArea_a = document.getElementsByClassName('mdl-layout__content')[0];
            var mainScrollArea_b = document.getElementById("page");

            setTimeout(function () {
                if (window.location.href == localStorage.getItem('lastUrl')) {
                    mainScrollArea_a.scrollTop = localStorage.getItem('scrollTop');
                    mainScrollArea_b.scrollTop = localStorage.getItem('scrollTop');
                } else {
                    localStorage.setItem('lastUrl', window.location.href);
                    localStorage.setItem('scrollTop', 0);
                }
            }, 100);


            mainScrollArea_a.addEventListener('scroll', that.scrollListener);
            mainScrollArea_b.addEventListener('scroll', that.scrollListener);
        };

        this.scrollListener =  function () {
                if (!that.blocked) {
                    localStorage.setItem('scrollTop', this.scrollTop);
                    that.blocked = true;
                    setTimeout(function () {
                        that.blocked = false;
                    }, 200);
                }

            };


//functions to download a Websites questions (heading level 4 and 5) as cards.
        this.downloadCsv = function() {
            if (saveAs) {
                var headings = $("#postContentWrapper").find("h4, h5");

                var cards = [];
                headings.each(function () {
                    var back= $(this).nextUntil("h5, h4, h3, h2, h1");
                    that.makeImagesWork(back);

                    var card = {
                        frontside: $(this).text(),
                        backside: that.getStringFromJQueryObjects(back)
                    };
                    cards.push(card);
                });

                var blob = new Blob([this.buildCSVContent(cards)], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "cards.csv");
            }

        };

        this.makeImagesWork = function(back){            
            back.find("img").each(function(){
                var img = $(this)[0];
                if(img.getAttribute("src").indexOf("/images") == 0){
                    img.src = "http://pascalwhoop.github.io" + $(this).attr("src");    
                }                
            })
        }

        this.getStringFromJQueryObjects = function (jqObjects){
            var asText = "";
            jqObjects.each(function(){
                asText += $(this).prop('outerHTML');
            });
            return asText;
        };

        /**
         * build a string of our cards that is csv compatible and html conform
         * @param cards
         * @returns {string}
         */
        this.buildCSVContent = function (cards){
            var buf = "";
            cards.map(function(val){
                val.backside = val.backside.replace(/(?:\r\n|\r|\n)/g, '');
                val.backside = val.backside.replace(/(")/g, "'");
                buf += "\"" + val.frontside + "\",\"" + val.backside + "\"\n";
            });
            return buf;
        };
    };

    //expose globally
    window.caloo = new caloo();
})();

//perform our onload stuff
window.onload = window.caloo.onLoad;


