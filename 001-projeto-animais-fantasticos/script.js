// TABNAV IMPLEMENTADO NOS ANIMAIS
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabSection = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length > 0 && tabSection.length > 0)
    tabSection[0].classList.add('ativo');

  function ativarSection(index) {
    tabSection.forEach((section) => {
      section.classList.remove('ativo');
    })
    tabSection[index].classList.add('ativo');
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      ativarSection(index);
    })
  })
}

initTabNav();

// ACCORDION NAV IMPLEMENTADO NO FAQ
function activeAcoordionNav() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  if (accordionList.length > 0) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

activeAcoordionNav();

function menuScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    // scroll suave com scrollTo
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: 'smooth'
    // })

    // scroll suave com scrollintoView
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener('click', scrollToSection)
  })
}

menuScroll();

function scrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length > 0) {
    const windowHalf = window.innerHeight * 0.6;
    sections[0].classList.add('.ativo');

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowHalf;

        if (sectionTop < 0) {
          section.classList.add('.ativo');
        }
        else
          section.classList.remove('.ativo')
      })
    }

    window.addEventListener('scroll', animateScroll);
  }
}

scrollAnimation();
