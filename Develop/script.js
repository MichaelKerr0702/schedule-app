$(document).ready(function () {
    // set time and date 
    var date = moment().format("dddd, MMMM Do");
    $('#currentDay').text(date);

    // save to local storage when button is pressed
    $('.saveBtn').on('click', function (){
        var key = $(this).parent().attr('id');
        var value = $(this).siblings('.description').val();

        localStorage.setItem(key, value);        


    })

    //change colors of blocks
    function PastPresentFuture(){
        //get current hour 
        var currentHour = moment().format('H');

        //check time compared to color of text block
        $('.time-block').each(function () {
            var TimeBlock = parseInt($(this).attr('id').split('-')[1]);

            if (TimeBlock < currentHour){
                $(this).addClass('past');
            } else if (TimeBlock === currentHour){
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

    PastPresentFuture();

    $('#time-9 .description').val(localStorage.getItem('time-9'));
    $('#time-10 .description').val(localStorage.getItem('time-10'));
    $('#time-11 .description').val(localStorage.getItem('time-11'));
    $('#time-12 .description').val(localStorage.getItem('time-12'));
    $('#time-13 .description').val(localStorage.getItem('time-13'));
    $('#time-14 .description').val(localStorage.getItem('time-14'));
    $('#time-15 .description').val(localStorage.getItem('time-15'));
    $('#time-16 .description').val(localStorage.getItem('time-16'));
    $('#time-17 .description').val(localStorage.getItem('time-17'));
})