// Get the necessary elements
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
console.log(currentIndex)
// Display the initial slide
slides[currentIndex].style.display = 'block';

// Function to show the current slide
function showSlide(index) {
  // Hide all slides
  slides.forEach((item) => {
    item.style.display = 'none';
  });

  // Display the selected slide
  slides[index].style.display = 'block';
}

// Function to handle the next slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Wrap around to the first slide
  }
  showSlide(currentIndex);
console.log(currentIndex + ' next')

}

// Function to handle the previous slide
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Wrap around to the last slide
  }
  showSlide(currentIndex);
console.log(currentIndex + ' prev')

}

// Event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);



// Get the necessary elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Function to show the selected tab and its content
function showTab(tabId) {
  // Hide all tabs and tab contents
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });
  tabContents.forEach((content) => {
    content.style.display = 'none';
  });

  // Show the selected tab and corresponding content
  const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
  const selectedContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
  selectedTab.classList.add('active');
  selectedContent.style.display = 'block';
}

// Event listener for tab clicks
tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    const tabId = this.getAttribute('data-tab');
    console.log(this)
    showTab(tabId);
  });
});

// Show the initial tab
showTab('tab1');


const modalBtn = document.querySelector('.modal-btn'),
      closeBtn = document.querySelector('.modal-close'),
      modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
    modal.classList.toggle('visible')
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('visible');
});


