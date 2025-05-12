/*================search==================*/
const searchButton= document.getElementById('search-button')
const searchClose= document.getElementById('search--close')
const searchContent= document.getElementById('search-content')

/*================search item==================*/
if(searchButton){
    searchButton.addEventListener('click',() =>{
        searchContent.classList.add('show-search')
    })
}

/*================search hiddn==================*/
if(searchClose){
    searchClose.addEventListener('click',() =>{
        searchContent.classList.remove('show-search')
    })
}

/*================login==================*/
const loginButton= document.getElementById('login-button')
const loginClose= document.getElementById('login--close')
const loginContent= document.getElementById('login-content')

/*================login item==================*/
if(loginButton){
    loginButton.addEventListener('click',() =>{
        loginContent.classList.add('show-login')
    })
}

/*================login hiddn==================*/
if(loginClose){
    loginClose.addEventListener('click',() =>{
        loginContent.classList.remove('show-login')
    })
}

/*================home swiper==================*/

let swiperHome = new Swiper ('.home__swiper',{
    loop: true,
    spacebetween: -24,
    grabCursor: true,
    slidePerView: 'auto',
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


    autoplay: {
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints:{
        1220:{
            spaceBetween: -32,
        }
    }

    
})


/*=============== add shadow ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*================featured swiper==================*/

let swiperFeatured = new Swiper ('.featured__swiper',{
    loop: true,
    spacebetween: 16,
    grabCursor: true,
    slidePerView: 'auto',
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    

    breakpoints:{
        1150:{
            slidePerView: 3,
            centeredSlides:false,
        }
    }

    
})


/*================new swiper==================*/

let swiperNew = new Swiper ('.new__swiper',{
    loop: true,
    spacebetween: 16,
    slidePerView: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints:{
        1150:{
            slidePerView: 4,
            centeredSlides:false,
        }
    }

    
})

/*================testimonial swiper==================*/

let swiperTestimonial = new Swiper ('.testimonial__swiper',{
    loop: true,
    spacebetween: 16,
    grabCursor: true,
    slidePerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },



    breakpoints:{
        1150:{
            slidePerView: 4,
            centeredSlides:false,
        }
    }

    
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})