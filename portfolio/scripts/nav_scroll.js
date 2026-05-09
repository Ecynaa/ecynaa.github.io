    const nav = document.querySelector('header nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { //Mettre à 200 plus tard
            nav.classList.add('scrolled');
            } else {
            nav.classList.remove('scrolled');
            }
        });