// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         items:1,
//         margin: 20,
//         autoplay : true,
//         autoplayTime : 2000,
//         loop : true,
//         autoplayHoverPause:true, 
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:2
//             },
//             1000:{
//                 items:4
//             }
//         }
//     });
//   });

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// sp.html

$('.details1').click(()=>{
    $('.details2').slideToggle('slow')
    $('.details1>i').toggleClass('fa-chevron-down')
})