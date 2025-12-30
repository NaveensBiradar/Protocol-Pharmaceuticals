const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(i) {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");

  index = i;

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  showSlide((index + 1) % slides.length);
}

function prevSlide() {
  showSlide((index - 1 + slides.length) % slides.length);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Auto slide
setInterval(nextSlide, 5000);

// Init
showSlide(0);


function showSlide(i) {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");
  index = i;
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

setInterval(() => {
  showSlide((index + 1) % slides.length);
}, 5000);



// Ensure anchor clicks scroll accounting for fixed navbar (works even without custom handlers)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH = document.querySelector('.navbar')?.offsetHeight || 68;
    const offset = 12; // extra breathing room
    const top = target.getBoundingClientRect().top + window.scrollY - navH - offset;
    window.scrollTo({ top, behavior: 'smooth' });

    // If using bootstrap collapse, close menu after clicking
    const bsCollapse = document.querySelector('.navbar-collapse.show');
    if (bsCollapse) {
      const collapse = bootstrap.Collapse.getInstance(bsCollapse) || new bootstrap.Collapse(bsCollapse);
      collapse.hide();
    }
  });
});

// basic form validation (bootstrap style)
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        alert('Form submitted (demo).')
      }
      form.classList.add('was-validated')
    }, false)
  })
})();


(function () {
  const collapseEl = document.getElementById('mainNav');
  if (!collapseEl) return;

  // handle clicks on any link inside collapse
  collapseEl.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      // only attempt to hide when the collapse is currently shown (mobile)
      if (collapseEl.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(collapseEl) || new bootstrap.Collapse(collapseEl);
        bsCollapse.hide();
      }
    });
  });
})();
