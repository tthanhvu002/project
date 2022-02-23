/* handle line animation  */

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

const line2 = document.querySelector('.line2')
const absLine = document.querySelector('.abs-line')
const heading = document.querySelectorAll('.banner__heading-wrap h2')
const desc = document.querySelector('.banner__text')

absLine.style.left = heading[0].offsetLeft +'px';
absLine.style.width = heading[0].offsetWidth + 'px';
/* heading.forEach((item, index) => {
    item.onclick = function() {
        
    }
    
}) */
heading[0].onclick = () => {
    absLine.style.left = heading[0].offsetLeft +'px';
    absLine.style.width = heading[0].offsetWidth + 'px';
    desc.innerText = 'Mentor Links giúp bạn quảng bá các khóa học cũng như các hoạt động 1:1 mentoring/coaching đến học viên tiềm năng, quản lý các khóa học hay hoạt động mentoriang, giúp xây dựng nội dung khóa học trực tuyến, tương tác với học viên kể cả quản lý quy trình đăng ký khóa học và lịch hẹn.'
    
    
}
heading[1].onclick = () =>{
    desc.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, velit ut? At eum, enim nulla ab perspiciatis numquam sequi veritatis! Veniam aliquid sunt explicabo fuga doloribus sapiente ab doloremque impedit.'
    absLine.style.left = heading[1].offsetLeft +'px';
        absLine.style.width = heading[1].offsetWidth + 'px';
    
}

/* handle slick slider */
$(document).ready(function(){
    $('.course__list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
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
                arrows: false,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.mentor__card-list').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      arrows: false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1023.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  })
})
/* handle menu header */

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

