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
  
    // click outisde offcanvas
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

    // Obtém a parte relativa do caminho da página atual
    var currentPagePath = window.location.pathname.split('/').pop();

    // Obtém todos os itens do menu
    var menuItems = document.querySelectorAll('.nav-menu li');
  
    // Itera sobre os itens do menu
    menuItems.forEach(function(item) {
      // Obtém o link dentro do item do menu
      var link = item.querySelector('a');
  
      // Obtém o atributo "href" do link e remove a parte relativa do caminho
      var href = link.getAttribute('href').split('/').pop();
  
      // Verifica se o atributo "href" corresponde à parte relativa do caminho da página atual
      if (href === currentPagePath) {
        // Adiciona a classe "active" ao item do menu
        item.classList.add('active');
      }
    });

    // Obtenha o elemento do link "pages" e o menu dropdown
  const down = document.getElementById('down');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Adicione um ouvinte de eventos para o clique no link "pages"
  down.addEventListener('mouseover', function (e) {
    // Impedir que o link redirecione para "#" (comportamento padrão)
    e.preventDefault();

    // Toggle a classe 'active' no elemento do menu dropdown
    dropdownMenu.classList.toggle('dropped');
  });

  // Adicione um ouvinte de eventos para fechar o menu quando clicar em qualquer lugar fora dele
  document.addEventListener('mouseout', function (e) {
    if (!pagesLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('dropped');
    }
});