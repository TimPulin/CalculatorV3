$(document).ready(function() {
    let Iam,
        scores,
        x,
        goe,
        bonusGoe,
        coefficient,
        compare;

    $('#ElementModal .JS_Save').click(function(){
        DirectorMain();
    })

    $('.JS_Section-Table .JS_Goe').click(function() {
        Ich=Iam=$(this);
        sectionINmain=$(this).closest('.JS_Section-El');
        GetID();
    })

    $('.JS_Section-Table .JS_X').click(function() {
        Ich=$(this);
        sectionINmain=$(this).closest('.JS_Section-El');
        GetID();
        DirectorMain();
    })

    $(document).ready(function() {

        let Val_IamModal;

        $('#GoeModal .JS_ButtonModal').click(function() {
            Val_IamModal=$(this).val();
            Iam.val(Val_IamModal);
            Iam.addClass('active activeColor');
            DirectorMain();
        })
    })



    function DirectorMain() {
        MakeTheName_Modal(0);
        CheckAvailabilityInfo();
        if(CheckAvailabilityInfo()){
        GetInfoX();
        GetGOE();
        ComputerMain();
        Printer()
        }
    }

    function CheckAvailabilityInfo() {
        if(arrNamesInMain[NameOfProperty]==undefined){
            return false;
        }
        else {
            return true;
        }
    }

    function GetInfoX() {
        if(sectionINmain.find('.JS_X').hasClass('active')){
            x=1.1;
        }
        else {
            x=1;
        }
        return;
    }

    function GetGOE() {
        compare=0;
        goe=sectionINmain.find('.JS_Goe').val();
        for(let i=0; i<arrScoresInMain[NameOfProperty].length; i++){
            if(arrScoresInMain[NameOfProperty][i]>compare){
                compare=arrScoresInMain[NameOfProperty][i];
            }
        }
        if(arrNamesInMain[NameOfProperty]==='ChSq1'){
            coefficient=20;
        }
        else {
            coefficient=10;
        }
        bonusGoe=compare/coefficient*goe;
        return;
    }

    function ComputerMain() {
        scores=0;
        for(let i=0; i<arrScoresInMain[NameOfProperty].length; i++){
            scores=scores+arrScoresInMain[NameOfProperty][i];
        }
        scores=scores*x+bonusGoe;
        return;
    }


    function Printer() {
        sectionINmain.find('.lineoutput-scores').text(scores.toFixed(2));
        sectionINmain.find('.lineoutput-name').text(arrNamesInMain[NameOfProperty].join('+'));
    }








})
