(function($){
    $(function(){

// ----- SCROLL FUNKCE -----
        const scrollToSection = (target, duration) => {
            $("html, body").animate({scrollTop: $(target).offset().top}, duration);
        };

        $(".jq--scroll-home").click(() => scrollToSection(".jq--home", 1000));
        $(".jq--scroll-about").click(() => scrollToSection(".jq--about", 1000));
        $(".jq--scroll-skill").click(() => scrollToSection(".jq--skill", 1200));
        $(".jq--scroll-project").click(() => scrollToSection(".jq--project", 1400));
        $(".jq--scroll-contakt").click(() => scrollToSection(".jq--contakt", 1600));


// ------ZAJÍŽDĚCÍ MENU------

let previousScroll = 0;
const navBar = $(".nav-bar");
const navBackground = $(".nav-background");

$(window).on("scroll", function() {
    const currentScroll = $(this).scrollTop();

    if (currentScroll > previousScroll) {
        // Skrolování dolů - zasunout menu a pozadí
        navBar.addClass("hidden-nav");
        navBackground.addClass("hidden-nav");
    } else {
        // Skrolování nahoru - vysunout menu a pozadí
        navBar.removeClass("hidden-nav");
        navBackground.removeClass("hidden-nav");
    }

    previousScroll = currentScroll;
});



// ------MOBIL navigace----rozbalovací menu----
        // Mobilní navigace - rozbalovací menu
$(document).ready(function () {
    const navIcon = $('.jq--nav-icon');
    const navMenu = $('nav ul');
    const navBackground = $('.mobil-nav-background');
    const desktopNavBackground = $('.nav-background');
    const hamburgerImg = 'img/hamburgerMenu.png';
    const crossImg = 'img/crossMenu.png';

    let isMobileMenuOpen = false; // Stav mobilního menu

    // Funkce pro kontrolu velikosti okna
    function checkWindowSize() {
        if (window.matchMedia('(max-width: 440px)').matches) {
            // Mobilní verze
            if (isMobileMenuOpen) {
                // Pokud je mobilní menu otevřené, zachovej jeho stav
                navMenu.show();
                navBackground.show();
                navIcon.find('img').attr('src', crossImg);
            } else {
                // Pokud je mobilní menu zavřené, nastav výchozí stav
                navMenu.hide();
                navBackground.hide();
                navIcon.find('img').attr('src', hamburgerImg);
            }
            navIcon.show(); // Zobrazí ikonu hamburger menu
            desktopNavBackground.hide(); // Skryje pozadí pro desktop
        } else {
            // Desktopová verze
            navMenu.show(); // Zobrazí desktopové menu
            navBackground.hide(); // Skryje pozadí mobilního menu
            navIcon.hide(); // Skryje ikonu hamburger menu
            desktopNavBackground.show(); // Zobrazí pozadí pro desktop
            isMobileMenuOpen = false; // Resetuje stav mobilního menu
        }
    }

    // Inicializace při načtení stránky
    checkWindowSize();

    // Přepínání menu při kliknutí na ikonu
    navIcon.click(function () {
        navMenu.slideToggle(200); // Zobrazí/skryje mobilní menu
        navBackground.toggle(); // Přepíná pozadí mobilního menu

        // Změna obrázku
        const img = $(this).find('img');
        if (img.attr('src') === hamburgerImg) {
            img.attr('src', crossImg);
            isMobileMenuOpen = true; // Nastaví stav mobilního menu na otevřené
        } else {
            img.attr('src', hamburgerImg);
            isMobileMenuOpen = false; // Nastaví stav mobilního menu na zavřené
        }
    });

    // Kontrola velikosti okna při změně velikosti
    $(window).resize(checkWindowSize);
});


    });
})(jQuery);