// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeAll();
});

// Função principal de inicialização
function initializeAll() {
    initCarousel();
    initMobileMenu();
    initScrollReveal();
    initTopButton();
    initMoreProjects();
    initCertificates();
    initModalProjects();
}

// Inicialização do carrossel
function initCarousel() {
    $('.certificados-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '60px',
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '40px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '30px',
                    arrows: false
                }
            }
        ]
    });
}

// Inicialização do menu mobile
function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }
}

// Inicialização do ScrollReveal
function initScrollReveal() {
    ScrollReveal().reveal('header, section, footer', {
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true
    });
}

// Inicialização do botão de voltar ao topo
function initTopButton() {
    const topBtn = document.getElementById('topBtn');

    if (topBtn) {
        window.onscroll = () => {
            topBtn.style.display = 
                document.documentElement.scrollTop > 300 ? "block" : "none";
        };

        topBtn.onclick = () => {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        };
    }
}

// Inicialização do botão "Mais Projetos"
function initMoreProjects() {
    const btnMaisProjetos = document.getElementById('btn-mais-projetos');
    const maisProjetos = document.getElementById('mais-projetos');

    if (btnMaisProjetos && maisProjetos) {
        btnMaisProjetos.addEventListener('click', () => {
            maisProjetos.style.display = 'block';
            btnMaisProjetos.remove();
        });
    }
}

// Inicialização dos certificados
function initCertificates() {
    const loadMoreButton = document.getElementById('load-more-certificates');
    const hiddenCards = document.querySelector('.hidden-cards');
    const certificatesGrid = document.getElementById('certificates-grid');

    if (loadMoreButton && hiddenCards && certificatesGrid) {
        loadMoreButton.addEventListener('click', () => {
            Array.from(hiddenCards.children)
                .reverse()
                .forEach(card => {
                    certificatesGrid.insertBefore(card, hiddenCards);
                });
            loadMoreButton.remove();
        });
    }
}

// Inicialização do modal de projetos
function initModalProjects() {
    const btnMaisProjetos = document.getElementById('btn-mais-projetos');
    const modalProjetos = document.getElementById('modal-projetos');
    const modalClose = document.querySelector('.modal-close');

    if (btnMaisProjetos && modalProjetos && modalClose) {
        btnMaisProjetos.onclick = function() {
            modalProjetos.classList.add('active');
        };

        modalClose.onclick = function() {
            modalProjetos.classList.remove('active');
        };

        modalProjetos.onclick = function(e) {
            if (e.target === this) this.classList.remove('active');
        };
    }
}