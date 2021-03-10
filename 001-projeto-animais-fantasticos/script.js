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
