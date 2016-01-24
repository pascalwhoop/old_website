// FIX scroll bug

var blocked = false;

var fixScroll = function(){
      var mainScrollArea = document.getElementsByClassName('mdl-layout__content')[0];
      if(window.location.href == localStorage.getItem('lastUrl')) {
                  mainScrollArea.scrollTop = localStorage.getItem('scrollTop');
            } else {
                  localStorage.setItem('lastUrl', window.location.href);
                  localStorage.setItem('scrollTop', 0);
            }

      mainScrollArea.addEventListener('scroll', function() {
            if(!blocked){
                  localStorage.setItem('scrollTop', this.scrollTop);
                  blocked = true;
                  setTimeout(function(){blocked = false;}, 200);    
            } 
      });
}

window.onload = fixScroll;