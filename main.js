
var w = window.innerWidth;

const menuBtn = document.querySelector('.menu-button');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-open');
    /* if sats - för att få ''to-the-moon'' att försvinna under menyn i
     screensize mindre än 1366 men annars synas*/
        if (menuBtn.classList.length == 2 && w < 1366) {
            document.getElementById("to-the-moon").style.display = "none";
        }
        else {
            document.getElementById("to-the-moon").style.display = "block";
        }

        
        /*
    console.log(menuBtn.classList.length);
    console.log(w);
    Använt för att felsöka i konsol-fönstret*/
    
});

