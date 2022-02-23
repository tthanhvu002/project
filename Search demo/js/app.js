/* header */
const menuItems = document.querySelectorAll('.menu-item')
menuItems.forEach(item => {
    item.onclick = () => {
        document.querySelectorAll('.line').forEach(e => {
            if(e.classList.contains('active')){
                e.classList.remove('active')
            }
        }) 
        item.querySelector('.line').classList.add('active')
    }
})

/* mobile menu */
const toggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
toggle.onclick = () => {
    menu.classList.add('active')
}

window.addEventListener('click', function(e){   
    if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')){
        menu.classList.remove('active')

    } /* else{
        document.querySelector('.menu').classList.remove('active')

    } */
})

$(document).ready(function(){
    $('.course__list').slick({
        infinite: true,
        slidesToShow: 4,
        rows:2,
        slidesToScroll: 4,
        dots: true,
        /* arrows: true, */
        prevArrow:`<button type='button' class='slick-prev pull-left'> < </button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'>  
           >
        </ button>`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1023.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows:1
              }
            }
        ]
    });
    const dots = document.querySelector('.slick-dots button')
    dots.forEach( (item,index) => {
      item.innerText = index +1
    } )

})


