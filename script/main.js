$(function() {

    'use strict';
  
    $('.js-menu-toggle').click(function(e) {
  
        var $this = $(this);
  
        
  
        if ( $('body').hasClass('show-sidebar') ) {
            $('body').removeClass('show-sidebar');
            $this.removeClass('active');
        } else {
            $('body').addClass('show-sidebar');	
            $this.addClass('active');
        }
  
        e.preventDefault();
  
    });
  
    
      $(document).mouseup(function(e) {
      var container = $(".sidebar");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ( $('body').hasClass('show-sidebar') ) {
                  $('body').removeClass('show-sidebar');
                  $('body').find('.js-menu-toggle').removeClass('active');
              }
      }
      }); 
  
      
  
  });


    
  const down = document.getElementById('down');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  
  down.addEventListener('mouseover', function (e) {
    
    e.preventDefault();

    
    dropdownMenu.classList.toggle('dropped');
  });

  
  document.addEventListener('mouseout', function (e) {
    if (!pagesLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('dropped');
    }
});