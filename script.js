// Mouse animation code below

const mouseCircle = document.querySelector('.mouse-circle')
const mouseDot = document.querySelector('.mouse-dot')

const mouseCircleFn = (x, y) => {
  mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
  mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};

document.body.addEventListener('mousemove', e => {
  let x = e.clientX;
  let y = e.clientY;

  mouseCircleFn(x, y);
});

document.body.addEventListener('mouseleave', () => {
  mouseCircle.style.opacity = '0';
  mouseDot.style.opacity = '0';
})

// Buttons

const mainBtns = document.querySelectorAll('.main-btn')

mainBtns.forEach(btn => {
  let ripple;

  btn.addEventListener('mouseenter', (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;
  
    ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
  
    btn.prepend(ripple)
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.removeChild(ripple);
  });
})

// Navigation

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
  menuIcon.classList.add('show-menu-icon')
  navbar.classList.add('hide-navbar');

  if(window.scrollY === 0) {
    menuIcon.classList.remove('show-menu-icon');
    navbar.classList.remove('hide-navbar');
  }
});

menuIcon.addEventListener('click', () => {
  menuIcon.classList.remove('show-menu-icon');
  navbar.classList.remove('hide-navbar');
});

// About Me section

const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent = "As a web developer, I combine creativity with technical expertise to craft immersive online experiences. With a sharp eye for design and a passion for coding, I seamlessly blend aesthetics and functionality, delivering captivating applications that leave a lasting impression.";

Array.from(aboutMeTextContent).forEach(char => {
  const span = document.createElement('span');
  span.textContent = char;
  aboutMeText.appendChild(span)

  span.addEventListener('mouseenter', (e) => {
    e.target.style.animation = 'aboutMeTextAnimation 10s infinite';
  });
});

// Project section

const container = document.querySelector('.container')
const projects = document.querySelectorAll('.project');
const projectHideBtn = document.querySelector('.project-hide-btn');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20}px`;
  });

  project.addEventListener('mouseleave', () => {
    project.firstElementChild.style.top = "2rem";
  });

  project.addEventListener('click', () => {
    const largeImgWrapper = document.createElement('div');
    largeImgWrapper.className = "project-img-wrapper";
    container.appendChild(largeImgWrapper);

    const largeImg = document.createElement('img')
    largeImg.className = 'project-img';

    const imgPath = project.firstElementChild.getAttribute('src').split('.')[0];
    largeImg.setAttribute('src', `${imgPath}-big.jpg`);
    largeImgWrapper.appendChild(largeImg);
    document.body.style.overflowY = 'hidden';

    projectHideBtn.classList.add('change');

    projectHideBtn.onclick = () => {
      projectHideBtn.classList.remove('change');
      largeImgWrapper.remove();
      document.body.style.overflowY = 'scroll';
    }
  });

});

document.querySelectorAll('.expertise-btn').forEach((expertise) => {
  expertise.addEventListener('click', e => {
    e.preventDefault();

    const expertiseText = expertise.nextElementSibling;
    expertiseText.classList.toggle('change');

    const rightPosition = expertiseText.classList.contains
    ('change') ? `calc(100% - ${getComputedStyle(expertise.firstElementChild).width})` : 0;

    expertise.firstElementChild.style.right = rightPosition;
  });
});

const formHeading = document.querySelector('.form-heading');
const formInputs = document.querySelectorAll('.contact-form-input');

formInputs.forEach(input => {
  input.addEventListener('focus', () => {
    formHeading.style.opacity = '0';
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = '1'
    }, 300);
  });
  input.addEventListener('blur', () => {
    formHeading.style.opacity = '0';
    setTimeout(() => {
      formHeading.textContent = 'Contact Me';
      formHeading.style.opacity = '1'
    }, 300);
  });
});
