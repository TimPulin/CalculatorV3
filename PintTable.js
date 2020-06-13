$(document).ready(function() {
    let tr = '<tr class="JS_Section">\
                <td class="JS_numberofline"></td><td class=""><div class="boxoutput-name"><output class="JS_output-nameOfElement"></output></div></td>\
                <td><input type="button" class="JS_X JS_Button buttonGuideBasic" value="X"></td>\
                <td><input type="button" class="JS_Goe JS_Button buttonGuideBasic" value="0"></td>\
                <td><output class="JS_output-valueOfElement">0.00</output></td>\
            </tr><br/>';

    for(let i=0; i<12; i++){
        $(tr).appendTo('.tbody');

    }
    $('.JS_numberofline').each(function(index) {
        $(this).append(index+1);
    })
})
