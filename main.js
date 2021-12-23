window.addEventListener('load',()=>{
    //var today = new Date(2022/1/2);
    //var endof2022 = new Date(2022/12/31)
    //差日を求める（86,400,000ミリ秒＝１日）
    //var termDay = (endof2022 - today) / 86400000;

    //console.log(today.getDate());

    //console.log(termDay);
    let days = document.getElementsByClassName('days');

    var today = new Date();
    var endof2022 = new Date("2022/12/31");
    var countdown = Math.ceil((endof2022.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    console.log(countdown)
    days[0].textContent = countdown;

});

 

