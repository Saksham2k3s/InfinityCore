document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let count = document.getElementById(id);
    let current = start;
    let range = end - start;
    (increment = end > start ? 1 : -1),
      (step = Math.abs(Math.floor(duration / range))),
      (timer = setInterval(() => {
        current += increment;
        count.textContent = current;
        // if (current == end) {
        //   clearInterval(timer);
        // }
        if (
          (increment > 0 && current >= end) ||
          (increment < 0 && current <= end)
        ) {
          clearInterval(timer);
          current = end; // Ensure the final value is exactly what was expected
        }
      }, step));
  }
  counter("count1", 0, 999, 1000);

  counter("count2", 0, 24, 1000);

  counter("count3", 0, 699, 1000);

  counter("count4", 0, 25, 1000);
});

//scroll to top button

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}
