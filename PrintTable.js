$(document).ready(function() {
    let tr = '<tr class="JS_Section-El">\
                <td class="JS_NumberOfline"></td><td class=""><div class="boxoutput-name"><output class="lineoutput-name"></output></div></td>\
                <td><input type="button" class="JS_X JS_Button buttonGuideBasic" value="X" disabled></td>\
                <td><input type="button" class="JS_Goe JS_Button buttonGuideBasic" name="goe" value="0"></td>\
                <td><output class="lineoutput-scores">0.00</output></td>\
            </tr>';

    let lastrow= '<tr>\
                    <td colspan="4" class="pl-0">	<button class="JS_Reset buttonFlat float-left">Сброс</button></td>\
                    <td><output class="tableoutput-scores">0.00</output></td>\
                  </tr>';

    let i=0;

    for(i=0;i<12;i++){
        PrintTable()
    }
    PrintLastRow();

    function PrintTable() {
        $(tr).appendTo('.tbody');
        $('.JS_NumberOfline').eq(i).append(i+1)
        return;
    }
    function PrintLastRow() {
        $(lastrow).appendTo('.tbody');
    }

  /*setInterval(function() {
        i++
        if(i<=12){
             $(tr).appendTo('.tbody');
             $('.JS_numberofline').eq(i-1).append(i);

        }else {
            clearInterval();
        }

    }, 100);*/
})
