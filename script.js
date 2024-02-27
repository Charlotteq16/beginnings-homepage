      
 var text1 = document.getElementById('text1');

       
        function makeOpacityPermanentForText1() {
            text1.classList.add('opaque');
        }

        text1.addEventListener('animationend', makeOpacityPermanentForText1);

var text2 = document.getElementById('text2');    
        function makeOpacityPermanent() {
            text2.classList.add('opaque');
        }
        text2.addEventListener('animationend', makeOpacityPermanent);




        window.onscroll = function() {
            var header = document.getElementById('header');
            var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
         
            if (scrollPosition > 200) {
                header.style.backgroundColor = 'black';
            } else {
                header.style.backgroundColor = 'rgb(235, 212, 197)';
            }
        };