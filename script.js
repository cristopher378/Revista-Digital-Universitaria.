var allArticles = [
    { id:1, title:"El futuro de la inteligencia artificial", summary:"Cómo la IA cambia la enseñanza universitaria.", category:"tecnología", img:"https://msmk.university/wp-content/uploads/2024/11/imagen-de-inteligencia-artificial.webp" },
    { id:2, title:"Paneles solares en campus", summary:"Viabilidad y casos en la FIA.", category:"ciencia", img:"data:image/jpeg;base64,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" },
    { id:3, title:"Museos universitarios y patrimonio", summary:"Conservación y educación.", category:"cultura", img:"https://catedraunesco.usmp.edu.pe/wp-content/uploads/2024/05/MINISTERIO-CULTURA-PORTADA.png" },
    { id:4, title:"Robótica educativa", summary:"Integrando robótica en la currícula.", category:"tecnología", img:"https://fia.usmp.edu.pe/wp-content/uploads/2024/03/ROBOTICA.jpg" },
    { id:5, title:"Nuevas técnicas de cultivo", summary:"Agricultura urbana en campus.", category:"ciencia", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrM9b7fZ4WpRzdBIZtmCqN5mVNFuM6UgA9Q&s" },
    { id:6, title:"Lengua y cultura juvenil", summary:"Tendencias culturales en estudiantes.", category:"cultura", img:"https://lh4.googleusercontent.com/yOlu8B3wMLwGrxjOSRPIr2sJxuLa0dOOEVuUk2wjgRSab7g2XTETcT85D1c4uJwd=w650-h365-k-no" },
    { id:7, title:"Blockchain para registros académicos", summary:"Ventajas y retos.", category:"tecnología", img:"https://fcctp.usmp.edu.pe/site/wp-content/uploads/2023/06/PASO-1-SAP-1024x755.png" },
    { id:8, title:"Investigación en neurociencia", summary:"Avances recientes y aplicaciones.", category:"ciencia", img:"https://www.incn.gob.pe/wp-content/uploads/2020/07/brain-activity-e1628011184391-870x580.jpg" },
    { id:9, title:"Cine y universidad", summary:"Festivales estudiantiles y memoria social.", category:"cultura", img:"https://fcctp.usmp.edu.pe/noticias/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-10-at-15.13.52-1-scaled.jpeg" }
  ];
  

  $(document).on('click', '#btn-buscar', function(){
    $('#search-row').slideToggle(200);
  });
  
  function initHome(){
    var container = $('#latest-list');
    if(!container.length) return;
    container.empty();
    var items = allArticles.slice(0,6);
    items.forEach(function(a){
      var card = $('<article class="card">')
        .append($('<img>').attr('src', a.img).attr('alt', a.title))
        .append($('<h3>').text(a.title))
        .append($('<p>').text(a.summary))
        .append($('<a class="btn">').attr('href', a.category + '.html').text('Leer más'));
      container.append(card.hide().fadeIn(400));
    });

    $('#home-pagination').html('<button class="page">1</button> <button class="page">2</button>');
  }
  
  function initCiencia(){
    if($('#articles-list').length === 0) return;
    var articles = allArticles.filter(a => a.category === 'ciencia');
    var currentPage = 1;
    var perPage = parseInt($('#per-page').val(),10) || 4;
  
    function filtered(){
      var q = $('#buscar').val() ? $('#buscar').val().toLowerCase().trim() : '';
      if(!q) return articles;
      return articles.filter(a => (a.title + ' ' + a.summary).toLowerCase().indexOf(q) !== -1);
    }
  
    function totalPages(){
      return Math.max(1, Math.ceil(filtered().length / perPage));
    }
  
    function render(){
      var list = $('#articles-list').empty();
      var start = (currentPage-1)*perPage;
      var pageItems = filtered().slice(start, start + perPage);
      if(pageItems.length === 0){
        list.append($('<p>').text('No hay artículos que coincidan.'));
      } else {
        pageItems.forEach(function(a){
          var item = $('<div class="article-item">')
            .append($('<img>').attr('src', a.img).attr('alt', a.title))
            .append($('<div class="article-meta">')
              .append($('<h3>').text(a.title))
              .append($('<p>').text(a.summary))
              .append($('<a>').attr('href','cien.interno.html').text('Leer más')));
          list.append(item.hide().slideDown(200));
        });
      }
      renderPagination();
    }
  
    function renderPagination(){
      var pag = $('#pagination').empty();
      var tp = totalPages();
      pag.append($('<button>').text('Anterior').attr('data-page', Math.max(1, currentPage-1)));
      for(var p=1;p<=tp;p++){
        var btn = $('<button>').text(p).attr('data-page', p);
        if(p===currentPage) btn.addClass('active');
        pag.append(btn);
      }
      pag.append($('<button>').text('Siguiente').attr('data-page', Math.min(tp, currentPage+1)));
    }
  
    $(document).on('click', '#pagination button', function(){
      var p = parseInt($(this).attr('data-page'),10);
      if(!isNaN(p)){ currentPage = p; render(); $('html,body').animate({scrollTop:$('.controls').offset().top - 20},200); }
    });
    $('#per-page').on('change', function(){ perPage = parseInt(this.value,10); currentPage=1; render(); });
    $(document).on('input', '#buscar', function(){ currentPage=1; render(); });
  
    render();
  }

  function initTecnología(){
    if($('#articles-list').length === 0) return;
    var articles = allArticles.filter(a => a.category === 'tecnología');
    var currentPage = 1;
    var perPage = parseInt($('#per-page').val(),10) || 4;
  
    function filtered(){
      var q = $('#buscar').val() ? $('#buscar').val().toLowerCase().trim() : '';
      if(!q) return articles;
      return articles.filter(a => (a.title + ' ' + a.summary).toLowerCase().indexOf(q) !== -1);
    }
  
    function totalPages(){
      return Math.max(1, Math.ceil(filtered().length / perPage));
    }
  
    function render(){
      var list = $('#articles-list').empty();
      var start = (currentPage-1)*perPage;
      var pageItems = filtered().slice(start, start + perPage);
      if(pageItems.length === 0){
        list.append($('<p>').text('No hay artículos que coincidan.'));
      } else {
        pageItems.forEach(function(a){
          var item = $('<div class="article-item">')
            .append($('<img>').attr('src', a.img).attr('alt', a.title))
            .append($('<div class="article-meta">')
              .append($('<h3>').text(a.title))
              .append($('<p>').text(a.summary))
              .append($('<a>').attr('href','tec.interno.html').text('Leer más')));
          list.append(item.hide().slideDown(200));
        });
      }
      renderPagination();
    }
  
    function renderPagination(){
      var pag = $('#pagination').empty();
      var tp = totalPages();
      pag.append($('<button>').text('Anterior').attr('data-page', Math.max(1, currentPage-1)));
      for(var p=1;p<=tp;p++){
        var btn = $('<button>').text(p).attr('data-page', p);
        if(p===currentPage) btn.addClass('active');
        pag.append(btn);
      }
      pag.append($('<button>').text('Siguiente').attr('data-page', Math.min(tp, currentPage+1)));
    }
  
    $(document).on('click', '#pagination button', function(){
      var p = parseInt($(this).attr('data-page'),10);
      if(!isNaN(p)){ currentPage = p; render(); $('html,body').animate({scrollTop:$('.controls').offset().top - 20},200); }
    });
    $('#per-page').on('change', function(){ perPage = parseInt(this.value,10); currentPage=1; render(); });
    $(document).on('input', '#buscar', function(){ currentPage=1; render(); });
  
    render();
  }

  function initCultura(){
    if($('#articles-list').length === 0) return;
    var articles = allArticles.filter(a => a.category === 'cultura');
    var currentPage = 1;
    var perPage = parseInt($('#per-page').val(),10) || 4;
  
    function filtered(){
      var q = $('#buscar').val() ? $('#buscar').val().toLowerCase().trim() : '';
      if(!q) return articles;
      return articles.filter(a => (a.title + ' ' + a.summary).toLowerCase().indexOf(q) !== -1);
    }
  
    function totalPages(){
      return Math.max(1, Math.ceil(filtered().length / perPage));
    }
  
    function render(){
      var list = $('#articles-list').empty();
      var start = (currentPage-1)*perPage;
      var pageItems = filtered().slice(start, start + perPage);
      if(pageItems.length === 0){
        list.append($('<p>').text('No hay artículos que coincidan.'));
      } else {
        pageItems.forEach(function(a){
          var item = $('<div class="article-item">')
            .append($('<img>').attr('src', a.img).attr('alt', a.title))
            .append($('<div class="article-meta">')
              .append($('<h3>').text(a.title))
              .append($('<p>').text(a.summary))
              .append($('<a>').attr('href','cul.interno.html').text('Leer más')));
          list.append(item.hide().slideDown(200));
        });
      }
      renderPagination();
    }
  
    function renderPagination(){
      var pag = $('#pagination').empty();
      var tp = totalPages();
      pag.append($('<button>').text('Anterior').attr('data-page', Math.max(1, currentPage-1)));
      for(var p=1;p<=tp;p++){
        var btn = $('<button>').text(p).attr('data-page', p);
        if(p===currentPage) btn.addClass('active');
        pag.append(btn);
      }
      pag.append($('<button>').text('Siguiente').attr('data-page', Math.min(tp, currentPage+1)));
    }
  
    $(document).on('click', '#pagination button', function(){
      var p = parseInt($(this).attr('data-page'),10);
      if(!isNaN(p)){ currentPage = p; render(); $('html,body').animate({scrollTop:$('.controls').offset().top - 20},200); }
    });
    $('#per-page').on('change', function(){ perPage = parseInt(this.value,10); currentPage=1; render(); });
    $(document).on('input', '#buscar', function(){ currentPage=1; render(); });
  
    render();
  }