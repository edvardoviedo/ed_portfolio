// Observer para grid items
const items = document.querySelectorAll('.grid-item');

const gridObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

items.forEach(item => gridObserver.observe(item));

// Observer para previews
const previews = document.querySelectorAll('.preview');

const previewObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      previewObserver.unobserve(entry.target); // solo una vez
    }
  });
}, { threshold: 0.1 });

previews.forEach(preview => previewObserver.observe(preview));
