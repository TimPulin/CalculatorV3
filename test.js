$(document).ready(function() {
let $Test,
    Ich;
    $('.button_test1, .button_test2').click(function() {

Ich=$(this);
        Test();
console.log($Test)
    })

    function Test() {
        $Test=$(Ich).closest('.JS_Section-Table').find('.JS_Section-El.hide').length;
        return;
    }
})
