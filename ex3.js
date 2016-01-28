//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
    
    console.log('ready'),
        
    $('.time').hide();
    
    
    //hovers
    $('#home').hover(function(){
        $('#homeText').show();
        $('#home img').css('width','200px');
    }, function(){
        $('#homeText').hide();
        $('#home img').css('width','150px');
    });
    
    $('#gym').hover(function(){
        $('#gymText').show();
        $('#gym img').css('width','200px');
    }, function(){
        $('#gymText').hide();
        $('#gym img').css('width','150px');
    });
    
    $('#art').hover(function(){
        $('#artText').show();
        $('#art img').css('width','200px');
    }, function(){
        $('#artText').hide();
        $('#art img').css('width','150px');
    })
    
    $('#music').hover(function(){
        $('#musicText').show();
        $('#music img').css('width','200px');
    }, function(){
        $('#musicText').hide();
        $('#music img').css('width','150px');
    });
    
    //clicks
    
    
})