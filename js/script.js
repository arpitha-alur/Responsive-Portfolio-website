$(document).ready(function(){
//super slides options.   
  $('#slides').superslides({
    animation:'fade',
    play : 5000,
    pagination : false
  });

  var typed = new Typed(".typed",{

      strings: ["Software Engineer.", "Data Anlytics Enthusiast."],
      typeSpeed: 70,
      loop: true,
      startDelay: 1000,
      showCursor: false
  });

  $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }

        }
    });

    //jquery object, to activate chart on scroll when we reach skills section
    var skillsTopOffset = $(".skillssection").offset().top;
    console.log(skillsTopOffset);
    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() +200){
            
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent))
                }
            });
        }
    });

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*',
        animationOptions:{
            duration:1500,
            easing:'linear',
            queue: false
        }
    })
});