/* =========================================================
   ANCHAL GUPTA — PORTFOLIO SCRIPTS
   ========================================================= */

// Animated heartbeat waveform — draws once on load
document.addEventListener('DOMContentLoaded', function () {
  const path = document.getElementById('wavePath');
  if (path) {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    requestAnimationFrame(function () {
      path.style.transition = 'stroke-dashoffset 2.2s cubic-bezier(0.65,0,0.35,1)';
      path.style.strokeDashoffset = 0;
    });
  }

  // Scroll reveal animation for sections
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(function (el) { io.observe(el); });
});
