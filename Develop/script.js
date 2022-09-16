var date = moment().format("dddd, MMMM Do");
$('#currentDay').text(date);


function ChangeColor(){
    for(var i= 0; i > 14 ; i++){
        var currentTime = "time"+ i;
        console.log(currentTime);
        console.log(i)
    }
}
ChangeColor();