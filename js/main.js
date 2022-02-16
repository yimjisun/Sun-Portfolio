$(document).ready(function(){
    //fuiipage
    $('#fullpage').fullpage({
		anchors:['intro', 'profile','web','edit','drawing','contact'],
         sectionsColor:['#fcdada','#fff','#fff','#fff0f0','#fff','#fff0f0'], //  섹션별 색깔넣는법
         menu:"#myMenu",    
        //현재 섹션이 나타난 후(활성화 된후, 열란후)
        afterLoad: function(anchorLink,index){
            //만약 활성화 된 section이 두번째 section이면
            if(index == 1){

            }else if(index == 2){
                //자식객체 애니메이션
                $('.profile h1').addClass('active');
                $('.profile .box-icon1').addClass('active');
                $('.profile .box > div').addClass('active');
            }
            else if(index == 3){
                 //자식객체 애니메이션
                 $('.web h1').addClass('active');
                 $('.web .box-icon4').addClass('active');
                 $('.web .swiper').addClass('active');
            }
            else if(index == 4){
                //자식객체 애니메이션
                $('.edit h1').addClass('active');
                $('.edit .box-icon8').addClass('active');
                $('.edit .gallery').addClass('active');
            }else if(index == 5){
                 //자식객체 애니메이션
                 $('.drawing h1').addClass('active');
                 $('.drawing .box-icon9').addClass('active');
                 $('.drawing .mySwiper2').addClass('active');
            }else{
                 //자식객체 애니메이션
                $('.contact h1').addClass('active');
                $('.contact .box-icon10').addClass('active');
                $('.contact .contact_wrap').addClass('active');            
            }
        }
	});
    jQuery(document).ready(function(){
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').delay(1300).animate({
				width:jQuery(this).attr('data-percent')
			},3000);
		});
	});
    var swiper = new Swiper('.swiper', {
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });
    //editoroal gallery
    $('.big_img ul li').hide();
    $('.big_img ul li').eq(0).show();
    $('.thum_img ul li').click(function(){
        var idx=$(this).index();
        $('.big_img ul li').hide();
        $('.big_img ul li').eq(idx).fadeIn();
    });
        var swiper = new Swiper(".mySwiper2", {
            loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
          
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});