// Making the navigation bar fixed at top while scrolling
document.addEventListener("DOMContentLoaded", function () {
  // getting the navigation bar through id
    const navbar = document.querySelector("#navbar");
    // initiating a varibale 
    const initialScroll = 200;
    // using scroll event listener
    window.addEventListener("scroll", function () {
      // storing scroll value
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Using condition if the initial value is smaller than the scrolled value then it should make the navbar fixed and vice versa
      scrollTop>initialScroll ? navbar.classList.add('fixed'):navbar.classList.remove('fixed')
    });
  });

  // Toggling mobile navigation bar
  document.getElementById('mobile-menu-button').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});


// Search bar focus
document.getElementById('searchIcon').addEventListener('click', function() {
  const searchInput = document.getElementById('searchInput');
  searchInput.focus();
});


