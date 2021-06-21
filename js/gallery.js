$(function(){
    let slides = $(".gallery");

    slides.hide();

    let slideindex = 1;

    slides.eq(slideindex-1).show()

    $("#slide-right").click(()=>{
        slides.eq(slideindex-1).hide();
        slideindex++;

        if(slideindex > slides.length - 1) {
            slideindex = 0;
        }
        slides.eq(slideindex-1).show();
    })

    $("#slide-left").click(()=>{
        slides.eq(slideindex-1).hide();
        slideindex--;

        if(slideindex < 1) {
            slideindex = slides.length;
        }
        slides.eq(slideindex-1).show();
    })
})