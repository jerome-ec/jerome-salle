document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind('[data-fancybox="cert"]', {
    dragToClose: false, 
  });

  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1,
    scrub: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Handle window resize
  function handleResize() {
    ScrollTrigger.refresh(); 
    lenis.resize(); 
  }

  window.addEventListener("resize", () => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(handleResize, 200); 
  });

  // Back to top button
  const backToTop = document.getElementById('topButton');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      backToTop.style.transform = "translateY(0)";
    } else {
      backToTop.style.transform = "translateY(400px)";
    }
  });

  const elements = document.querySelectorAll(".js-fade-up");
  elements.forEach((element) => {
    gsap.from(element, {
      autoAlpha: 0,
      y: 10,
      ease: "power1.inOut",
      duration: 0.6,
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        // toggleActions: "play none none reset",
      },
    });
  });

  const staggered_elem = document.querySelectorAll(".js-staggered");
  staggered_elem.forEach((elem) => {
    gsap.from(elem.children, {
      autoAlpha: 0,
      ease: "power1.inOut",
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: elem,
        start: "top 75%",
      },
    });
  });
});
