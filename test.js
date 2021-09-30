
showBtn()

function showBtn(){    
    if($('.first-block').hasClass('active')){
        $('.arrow-left-block').css('display','none')
        $('.arrow-flex-container').css('justifyContent','flex-end')
    }else{
        $('.arrow-left-block').css('display','inline-flex')
        $('.arrow-flex-container').css('justifyContent','space-between')
    }

    if($('.sixth-block').hasClass('active') ||$('.third-block').hasClass('active') ){
        $('.arrow-right-block').css('display','none')
    }else{
        $('.arrow-right-block').css('display','inline-flex')
    }
}

$('.arrow-right-block, .third-block .quiz-btn').click(()=>{      
    $('.stages-list li.active').addClass('on-vizited').removeClass('active').next().addClass('active')
    $('.questions > div.active').removeClass('active').next().addClass('active')
    showBtn()
})

$('.arrow-left-block').click(()=>{      
    $('.stages-list li.active').removeClass('active').prev().addClass('active').removeClass('on-vizited')
    $('.questions > div.active').removeClass('active').prev().addClass('active')
    showBtn()
})

$('.cross-block').click(()=>{
    $('.custom-quiz').css('display','none')
})

$('.sixth-block .quiz-btn').click(()=>{
    $('.result-block').css('display','block')
    $('.custom-quiz section:first').css('display','none')
})

$('.fifth-block .img span').click(()=>{
    $('.article-hover').addClass('active')
})

$('.fifth-block .cross-btn-hover').click(()=>{
    $('.article-hover').removeClass('active')
})


