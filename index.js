document.getElementById('learn-more-btn').addEventListener('click', () => {
    alert('Discover our delicious menu and excellent service!');
});

function adjustImageSize() {
    const images = document.querySelectorAll('img');
  
    images.forEach(img => {
      if (!img.dataset.originalWidth) {
        img.dataset.originalWidth = img.width;
        img.dataset.originalHeight = img.height;
      }
  
      if (window.innerWidth < 768) {
        // Scale based on window width
        const scaleFactor = window.innerWidth / 768; // Scale relative to 768px width
        img.style.width = img.dataset.originalWidth * scaleFactor + 'px';
        img.style.height = 'auto'; // Maintain aspect ratio
        img.classList.add('mobile-image');
      } else {
        img.style.width = img.dataset.originalWidth + 'px';
        img.style.height = img.dataset.originalHeight + 'px';
        img.classList.remove('mobile-image');
      }
    });
  }
  
  window.addEventListener('load', adjustImageSize);
  window.addEventListener('resize', adjustImageSize);
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out to us. We will get back to you shortly.');
});
