var db = firebase.database();
var partnerNumber = 1;
applyBehaviors();
$('#next-section').click(function(){
    $(this).parent().animate({
        'opacity': 0
    },300,function(){ $(this).css('display','none'); $("#partner-cont").css('display','inline-block')});
})
function applyBehaviors(){
    $('.numerical').blur(function(){
        if($(this).val().length > 0){
            if(isNaN($(this).val())){
                console.log('bad news bears');
                if($(this).parent().find('.warning').length == 0)
                    $(this).parent().append("<span class='warning'>Non-numerical input.</span>")
            }
            else{
                $(this).parent().find(".warning").remove()
                console.log('we gucci')
            }        
        }
    })
    $('.cancel').click(function(){
        $(this).parent().remove();
    })
}
function hIndex(arr){
    arr = arr.sort(function(a,b){ return b-a; })
    var i = 1;
    return 0;
}
$('#partners-add').click(function(){
    partnerNumber++;
    $('#partners').append("<li><i class='fa fa-times-circle cancel' aria-hidden='true'></i>Partner "+partnerNumber+"<input class='encounters numerical' type='text' placeholder='#' maxlength='2'/>")
    applyBehaviors();
})
