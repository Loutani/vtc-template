window.addEventListener('load', function () {
    //add scroll behavior
    this.document.addEventListener('scroll', function(e) {
        let navbar = document.querySelector('#navbar');

        if(navbar.offsetTop > 40) {
            navbar.classList.add('bg-light-black');
            navbar.classList.remove('bg-transparent');
        } else{
            navbar.classList.remove('bg-light-black')
            navbar.classList.add('bg-transparent');
        }
    });

    //add slider behavior

    //add swiper behavior

}, false);