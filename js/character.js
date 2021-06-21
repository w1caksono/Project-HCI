$(function(){
    let slides = $(".char-card");
    slides.hide();

    let slideindex = 1;

    slides.eq(slideindex-1).show()

    $("#slide-right").click(() => {
        slides.eq(slideindex-1).hide();
        slideindex++;
        
        if(slideindex > slides.length){
            slideindex = 1;
        }
        slides.eq(slideindex-1).show();
    })

    $("#slide-left").click(()=>{
        slides.eq(slideindex-1).hide();
        slideindex--;
        
        if(slideindex < 1){
            slideindex = slides.length;
        }
        slides.eq(slideindex-1).show();
    })
})