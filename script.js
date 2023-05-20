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

// About Me section

const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent = "As a web developer, I combine creativity with technical expertise to craft immersive online experiences. With a sharp eye for design and a passion for coding, I seamlessly blend aesthetics and functionality, delivering captivating applications that leave a lasting impression.";

Array.from(aboutMeTextContent).forEach(char => {
  const span = document.createElement('span');
  span.textContent = char;
  aboutMeText.appendChild(span)

  span.addEventListener('mouseenter', (e) => {
    e.target.style.animation = "aboutMeTextAnimation 10s infinite";
  });
});

