document.addEventListener('DOMContentLoaded', function() {
document.querySelector('.Signin').addEventListener('click', function() {
      alert('Sign-in webpage (welcome!!!)');
    });
    document.querySelector('.Signup').addEventListener('click', function() {
      alert('Sign-up webpage (welcome!!!)');
    });
    const trialBtn = document.querySelector('.btn-primary');
    const featureSection = document.querySelector('.feature-section');
    if (trialBtn && featureSection) {
      trialBtn.addEventListener('click', function(e) {
        e.preventDefault();
        featureSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
    const container = document.querySelector('.circle-photo');
    if (container) {
      container.style.transition = 'transform 0.3s ease';
      container.style.cursor = 'zoom-in';

      container.addEventListener('click', function() {
        const isZoomed = container.classList.toggle('zoomed');
        container.style.cursor = isZoomed ? 'zoom-out' : 'zoom-in';
      });
    }
  });

