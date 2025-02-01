// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded!");

  // 1. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // 2. Dynamic Year in Footer
  const year = new Date().getFullYear();
  document.querySelector('footer p').innerHTML = `&copy; ${year} Your Name. All rights reserved.`;

  // 3. Dark Mode Toggle
  const darkModeToggle = document.createElement('button');
  darkModeToggle.innerText = 'Toggle Light Mode';
  darkModeToggle.classList.add('dark-mode-toggle');
  document.body.insertBefore(darkModeToggle, document.body.firstChild);

  // Check localStorage for theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    darkModeToggle.innerText = 'Toggle Dark Mode';
  }

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    darkModeToggle.innerText = isLightMode ? 'Toggle Dark Mode' : 'Toggle Light Mode';
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  });

  // 4. Interactive Animations for Projects
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      project.style.transform = 'scale(1.05)';
      project.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
    });
    project.addEventListener('mouseleave', () => {
      project.style.transform = 'scale(1)';
      project.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });
  });

  // 5. Animate Sections on Scroll
  const sections = document.querySelectorAll('.section');
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});