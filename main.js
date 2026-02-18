// Button animations
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'all 0.3s ease';
    this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    this.style.cursor = 'pointer';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
  });
  
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
    }
  });
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});