$(document).ready(function(){


    $("#all").click(function(){
      $('.portfolio-images-container .portfo').show();
      $('.portfolio-menu li a').css('border', '')
      $(this).css('border', 'solid #4bcaff');

    });

    $("#panorama").click(function(){
        $('.portfolio-images-container .portfo').hide();
        $('.portfolio-images-container .panorama').show();
        $('.portfolio-menu li a').css('border', 'none')
        $(this).css('border', 'solid #4bcaff');
    });

    $("#portraits").click(function(){
        $('.portfolio-images-container .portfo').hide();
        $('.portfolio-images-container .portraits').show();
        $('.portfolio-menu li a').css('border', 'none')
        $(this).css('border', 'solid #4bcaff');
    });

    $("#macros").click(function(){
        $('.portfolio-images-container .portfo').hide();
        $('.portfolio-images-container .macros').show();
        $('.portfolio-menu li a').css('border', 'none')
        $(this).css('border', 'solid #4bcaff');
    });

    $("#journal").click(function(){
        $('.portfolio-images-container .portfo').hide();
        $('.portfolio-images-container .journal').show();
        $('.portfolio-menu li a').css('border', 'none')
        $(this).css('border', 'solid #4bcaff');
    });

});