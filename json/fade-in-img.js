const images = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target); // Deixa de observar a imagem após o fade-in
            }
          });
        }, {
          threshold: 0.1 //  Ativa o fade-in quando 10% da imagem está visível
        });
        
        images.forEach(image => {
          observer.observe(image);
        });