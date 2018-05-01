$(document).ready(function(){


    const $buttons = $('button')
    const $count = $('#count')
    const $clean = $('.clean')
    const $result = $('.result')

    $buttons.on('click',function () {
        $count.val($count.val() + $(this).data('val'))
    });
    $clean.on('click',function () {
        $count.val('')
    });
    $result.on('click',function () {
        console.log($count.val(eval($count.val())))
    });
});