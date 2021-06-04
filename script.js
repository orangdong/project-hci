$(document).ready(function(){
    let counter = 0;
    const firstImage = $('.first-image');
    const lastImage = $('.last-image');
    $('#nextButton').on('click', function(){
        const curr =  $('.active');
        const next = curr.next();
        const imgContainer =  $('.image-container');

        if(next.length){
            curr.removeClass('active');
            next.addClass('active');
            counter++;
            imgContainer.addClass('slide').css('transform', 'translateX('+ (-counter * 100) + '%)');
            // console.log(counter);
        } else {
            imgContainer.addClass('slide').css('transform', 'translateX(0)');
            firstImage.addClass('active');
            lastImage.removeClass('active');
            counter = 0;
        }
    });

    $('#prevButton').on('click', function(){
        const curr =  $('.active');
        const prev = curr.prev();
        const imgContainer =  $('.image-container');

        if(prev.length){
            curr.removeClass('active');
            prev.addClass('active');
            counter--;
            imgContainer.addClass('slide').css('transform', 'translateX('+ (-counter * 100) + '%)');
            // console.log(counter);
        } else {
            imgContainer.addClass('slide').css('transform', 'translateX(-400%)');
            firstImage.removeClass('active');
            lastImage.addClass('active');
            counter = 4;
        }
    });
    
});



function navToggle() {
    const navResponsive = document.getElementById('navResponsive');
    
    if(navResponsive.className === "navigation-responsive"){
        navResponsive.className += " show-nav"
    }else {
        navResponsive.className = "navigation-responsive"
    }
}