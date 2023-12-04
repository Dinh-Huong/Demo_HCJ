// $(document).ready(function(){
//     $(".owl-carousel-home").owlCarousel({
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

var owl = $('.product-home');
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
            items:4
        }
    }
});

$('.owlCarousel-banner').owlCarousel({
    items: 1,
    loop: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
            dots: true
        }
    }
})
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

let check = true;

function clickReading() {
    if(check) {
        $('.read-toggle').html(` 
        Elegantly suspended from a fine white gold chain as if captured in mid-flight, our Pavé Butterfly Small pendant in white gold is meticulously set by our master craftsmen so that each precious wing gleams with pure, brilliant radiance. The butterfly is a signature Graff motif that has inspired an entire universe of jewels. We delight 
        <span> in bringing their delicate, graceful form to life in the finest diamonds.</span>
        <p class="mt-3 item">An enchanting Butterfly pavé diamond pendant with a total weight of 0.55 carats. <b class="item-toggle" onclick="clickReading()">Read Less</b></p>
        `);
        check = false;
    } else {
        $('.read-toggle').html(` 
        Elegantly suspended from a fine white gold chain as if captured in mid-flight, our Pavé Butterfly Small pendant in white gold is meticulously set by our master craftsmen so that each precious wing gleams with pure, brilliant radiance. The butterfly is a signature Graff motif that has inspired an entire universe of jewels. We delight <span class="item-toggle item">...<b onclick="clickReading()">Read More</b></span>
        `);
        check = true;
    }
}