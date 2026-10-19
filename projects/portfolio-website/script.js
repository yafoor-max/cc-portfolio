// Simple scroll animation for project cards
// Uses IntersectionObserver to fade cards in as they enter the viewport

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  // Observer: add 'visible' class when card enters viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stop watching after animation triggers once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // trigger when 15% of card is visible
    }
  );

  // Watch each card
  cards.forEach((card, index) => {
    // Stagger animation with a small delay per card
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
  });
});
