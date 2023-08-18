
function getClock() {
    let x = new Date();

    document.getElementById('hours').innerHTML = `${x.getHours()} h`;
    document.getElementById('minutes').innerHTML = `${x.getMinutes()} m`;
    document.getElementById('seconds').innerHTML = `${x.getSeconds()} s`;

    let day = 10;

    if (x.getHours() == 24) {
        day--;
    }
    document.getElementById('day').innerHTML = `${day} D`;

}
setInterval(() => {
    getClock();

}, 100);


// let y = $('toggle').eq();
// console.log(y);



$('.toggleFirst').on('click', function () {
    $('.toggleFirst').next().slideToggle(1000);
})

$('.toggle2').on('click', function () {

    $('.toggle2').prev().slideUp(1000);
    $('.toggle2').next().slideToggle(1000);


})
$('.toggle3').on('click', function () {

    $('.toggle3').prev().slideUp(1000);
    $('.toggle3').next().slideToggle(1000);


})
$('.toggle4').on('click', function () {

    $('.toggle4').prev().slideUp(1000);
    $('.toggle4').next().slideToggle(1000);


})

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let myEmail = document.getElementById('myEmail');

myEmail.addEventListener('input', function () {


if(emailPattern.test(myEmail.value)){
    myEmail.classList.remove('is-invalid');
    myEmail.classList.add('is-valid');
    
}else{
    // myEmail.classList.replace('is-valid','is-invalid')
    myEmail.classList.remove('is-valid');
    myEmail.classList.add('is-invalid');
}

})

// $('#colorBox i').on('click',function(){
//     let widthBox=$('#option').innerWidth();
//     if($('#colorBox').css('left')=='0px'){
//         $('#colorBox').animate({left:`-${widthBox}px`},1000)
//     }
//     else{
//         $('#colorBox').animate({left:0},1000)

//     }
// });

$('#openBtn').on('click',function(){
    let navBox=$('.links').innerWidth();
    if($('.myNav').css('left')=='0px'){
        $('.myNav').animate({left:`-${navBox}px`},1000)
    }
    else{
        $('.myNav').animate({left:0},1000)
    }
})



