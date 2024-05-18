// $(document).ready(function() {
//     var buttons = $('.kidlaroi');
//     var currentIndex = 0;
  
//     function cycleClass() {
//       buttons.eq(currentIndex).toggleClass('is-active');
//       currentIndex = (currentIndex + 1) % buttons.length;
//       buttons.eq(currentIndex).toggleClass('is-active');
//     }
  
//     setInterval(cycleClass, 4500);
//   });

$(document).ready(function() {
    var buttons = $('.kidlaroi');
    var currentIndex = 0;
  
    function cycleClass() {
      // Remove 'highlight' class from the current button
      buttons.eq(currentIndex).removeClass('is-active');
  
      // Increment currentIndex to move to the next button
      currentIndex = (currentIndex + 1) % buttons.length;
  
      // Add 'highlight' class to the next button
      buttons.eq(currentIndex).addClass('is-active');
    }
  
    setInterval(cycleClass, 2300);
  });
