var db = firebase.database();
var partnerNumber = 1;
var pageNum = 1;
var allValid = false;
applyBehaviors();
$('.next').click(function(){
    $(this).parent().animate({
        'opacity': 0
    },300,function(){ pageNum++; $(this).css('display','none'); $("#section-"+pageNum).css('display','inline-block')});
})
function selectValidation(el){
    if(el.value != 'default'){
        $(el).parent().find(".warning").remove()
        $(el).addClass('valid');
    }
    else{
        $(el).parent().append("<span class='warning'>Invalid choice.</span>");
        $(el).removeClass('valid');
    }
    allValid = checkValidity();
}
function checkValidity(){
    console.log('VALIDITY CHECK')
    inputs = $('#section-'+pageNum).find('.question-input').toArray()
    for(x in inputs)
        console.log(($(inputs[x]).hasClass('valid')))
        if(!($(inputs[x]).hasClass('valid'))){
            $('#section-'+pageNum).find('.next').prop('disabled',true)
            return false;
        }      
    $('#section-'+pageNum).find('.next').prop('disabled',false)
    return true;
}
function applyBehaviors(){
    $('.numerical').blur(function(){
        if($(this).val().length > 0){
            if(isNaN($(this).val())){
                $(this).removeClass('valid')
                if($(this).parent().find('.warning').length == 0)
                    $(this).parent().append("<span class='warning'>Non-numerical input.</span>")
            }
            else{
                $(this).parent().find(".warning").remove()
                $(this).addClass('valid')
            }        
        }
        else
            $(this).removeClass('valid')
        allValid = checkValidity();
    })
    $('.cancel').click(function(){
        $(this).parent().remove();
        allValid = checkValidity();
    })
}
function hIndex(arr){
    arr = arr.sort(function(a,b){ return b-a; })
    var i = 1;
    return 0;
}
$('#partners-add').click(function(){
    partnerNumber++;
    $('#partners').append("<li><i class='fa fa-times-circle cancel' aria-hidden='true'></i>Partner "+partnerNumber+"<input class='question-input numerical' type='text' placeholder='#' maxlength='2'/>")
    allValid = checkValidity();
    applyBehaviors();
})
