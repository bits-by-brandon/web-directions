$(document).ready(function () {

    $('#menuIcon').click(function(){
        open();
    });

    function open(){
        $("#ham-toggle").toggleClass('active');
        $("#sideNav").toggleClass('sideNavActive');
        $('#menuIcon').unbind('click');
        $('#menuIcon').click(function(){
            close();
        });

        $('body').css({
            'overflow': 'hidden' ,
        }) 
    };

    function close(){
        $("#ham-toggle").toggleClass('active');
        $("#sideNav").toggleClass('sideNavActive');
        $('#menuIcon').unbind('click');
        $('#menuIcon').click(function(){
            open();
        });

        $('body').css({
            'overflow': 'auto' ,
        })  
    };

    if( $( '#changer' ).length != 0 ){
        var count = 0;
        var words = [ 'n awesome', ' geeky', ' motivating', ' inspirational', ' friendly', ' community driven' ];
        var letter_count = 0;
        var curr_word;
        var curr_word_len;
        var adding = false;
        window.setTimeout(changeWord, 3000);
        window.setInterval(blink, 600);
    }

    function blink(){
        $( '#underscore' ).toggleClass( 'invis' );
    }

    function changeWord(){
        length = $( '#changer' ).html().length;

        if ( length == 0 || length == false ){
            adding = true;
            count ++;
            length = 0;
        }

        if ( adding == true ){
            if ( count >= words.length ){
                count = 0;
            }
            curr_word = words[count];
            curr_word_len = curr_word.length;

            new_letter = curr_word.slice( 0, length + 1 );

            $( '#changer' ).html( new_letter );

            if( length == curr_word_len ){
                adding = false;
                window.setTimeout(changeWord, 3000);
            }else{
                window.setTimeout(changeWord, 200);
            }

        }else{
            old = $( '#changer' ).html();
            new_letter = old.slice( 0, -1 );
            $( '#changer' ).html( new_letter );

            window.setTimeout(changeWord, 100);

        }
    }


})

function submitForm(){
    $( '.confirmation' ).addClass( 'active' );
}
