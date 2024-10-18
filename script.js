document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".bx-pager-link");

  function changeSlide(nextIndex) {
    items[currentIndex].classList.remove("active");
    indicators[currentIndex].classList.remove("active");

    items[nextIndex].classList.add("active");
    indicators[nextIndex].classList.add("active");
    currentIndex = nextIndex;
  }

  setInterval(() => changeSlide((currentIndex + 1) % items.length), 3000);

  indicators.forEach((indicator, index) =>
    indicator.addEventListener("click", (e) => {
      e.preventDefault();
      changeSlide(index);
    })
  );
});

const endDate =
  new Date().getTime() +
  5 * 24 * 60 * 60 * 1000 + // 5 days
  20 * 60 * 60 * 1000 +     // 20 hours
  12 * 60 * 1000 +          // 12 minutes
  39 * 1000;                // 39 seconds

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = endDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Stop the countdown when time is up
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);


document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.addEventListener("click", function () {
    const box = this.parentElement;
    const panel = this.nextElementSibling;

    // If the clicked accordion is already active, collapse it
    if (box.classList.contains("active")) {
      box.classList.remove("active");
      this.classList.remove("active"); // Remove active class from the button
      panel.style.maxHeight = null; // Close the panel
    } else {
      // Close all other accordion panels
      document.querySelectorAll(".frequently_box").forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".accordion").classList.remove("active");
        item.querySelector(".panel").style.maxHeight = null; // Close other panels
      });

      // Expand the clicked accordion's panel and set it to active
      box.classList.add("active");
      this.classList.add("active"); // Add active class to the button
      panel.style.maxHeight = panel.scrollHeight + "px"; // Open the panel
    }
  });
});
