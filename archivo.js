/*SCROLL NAVBAR*/
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>200);
})
// var figure = $(".video");
// var vid = figure.find("video");

// [].forEach.call(figure, function (item,index) {
//     item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
//     item.addEventListener('mouseout', hideVideo.bind(item,index), false);
// });

// function hoverVideo(index, e) {
//     vid[index].play(); 
// }

// function hideVideo(index, e) {
//     vid[index].pause(); 
// }

// var prueba = $('.prueba');
// prueba.on('mouseenter focus', function(){
//     prueba.get(0).play()
// })

// prueba.on('mouseout blur', function(){
//     prueba.get(0).pause()
// })