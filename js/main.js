 $(document).ready(function () {
     $('#dismiss, .overlay').on('click', function () {
         $('#sidebar-nav').removeClass('active');
         $('.overlay').removeClass('active');
         $("#dismiss").removeClass("active");
     });

     $('#sidebar-button').on('click', function () {
         $('#sidebar-nav').addClass('active');
         $('.overlay').addClass('active');
         $("#dismiss").addClass("active");
         $('.collapse.in').toggleClass('in');
         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
     });


     var $funFirst = $('.funFirst');
     var $funSecond = $('.funSecond');
     var $win = $(window);

     $win.on('scroll', function () {
         var top = $win.scrollTop();
         $funFirst.css('transform', 'translateY(-' + top / 3 + 'px)');
         $funSecond.css('transform', 'translateY(-' + top / 5 + 'px)');
     });

     $("#nav-registrarse").click(function () {
         $("#elegirLogin").removeClass("d-none");
         $("#estudianteLogin").addClass("d-none");
     });

     $("#loginEstudiante").click(function () {
         $("#elegirLogin").addClass("d-none");
         $("body").addClass("modal-open");
         $("#estudianteLogin").removeClass("d-none");
         return false;
     });
 });
