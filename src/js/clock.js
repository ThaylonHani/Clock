$(() => {
    const date = new Date();
    // $(".time").text(`${ date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`)
    Clock();
    handleHoverOnClock();
})


function handleHoverOnClock() {
    $('.timer h1').mouseenter((e) => {
        $(e.target).css('opacity', 0.5);
    })
    $('.timer h1').mouseleave((e) => {

        $(e.target).css('opacity', 1);

    })
}



function Clock() {
    
    
    setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const clock = `${``}`;
        $('#hour').text(hours < 10 ? '0' + hours : hours < 12 ? hours : hours - 12).attr('title',`Hora: ${hours/2}` )
        $('#minutes').text(minutes < 10 ? '0' + minutes : minutes).attr('title',`Minutos: ${minutes}` )
        $('#seconds').text(seconds < 10 ? '0' + seconds : seconds).attr('title', `Segundos: ${seconds}`)
        // $('#meridiem').text(hours < 12 ? 'Am' : 'Pm')
        // $(".time").text(clock);
        handleMeridiem(hours,minutes,seconds);
    }, 1000);

}

function handleMeridiem(hours) {


    if (hours < 12) {
        $('#meridiem').animate({ padding: '2rem ' }, {
            duration: 1000, progress: () => {
                $("#meridiem").css({animation:'handleMeridiemAm 1s linear forwards'})
        }})
    }
    else {
        $('#meridiem').animate({ padding: '1.5rem ' }, {
            duration: 1000, progress: () => {
                $("#meridiem").css({animation:'handleMeridiemPm 1s linear forwards'})
        }})

    }


}

   
