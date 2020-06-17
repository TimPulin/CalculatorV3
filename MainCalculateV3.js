$(document).ready(function() {
    let Iam,
        scores,
        x,
        goe,
        bonusGoe,
        coefficient,
        compare,
        fullscores;


    $('.boxoutput-name').click(function() {
        Iam=$(this);
    })
    $('#ElementModal .JS_Save').click(function(){
        DirectorMain();
    })
    $('#ElementModal .JS_Reset').click(function() {
        arrScoresInMain[NameOfProperty]
        arrNamesInMain[NameOfProperty]
    })


    $('.JS_Section-Table .JS_X').click(function() {
        Iam=$(this);
        DirectorMain();
    })

    $(document).ready(function() {
        let Val_IamModal;

        $('.JS_Section-Table .JS_Goe').click(function() {
            Iam=$(this);
        })

        $('#GoeModal .JS_ButtonModal').click(function() {
            Val_IamModal=$(this).val();
            Iam.val(Val_IamModal);
            Iam.addClass('active activeColor');
            DirectorMain();
        })
    })


    function DirectorMain() {
        DirectorLine();
        CounterMain();
        PrinterMain();
    }

    function CounterMain() {
        fullscores=0;
        Iam.closest('.JS_Section-Table').find('.JS_Section-El').each(function(index) {
            Ich=$(this).find('.boxoutput-name');
            sectionINmain=$(this);
            GetID();
            MakeTheName_Modal(0);

            if(arrLineScores[NameOfProperty]==undefined){
                arrLineScores[NameOfProperty]=0;
            }
            fullscores=fullscores+arrLineScores[NameOfProperty];
        })
        return;
    }

    function PrinterMain() {
        Ich.closest('.JS_Section-Table').find('.tableoutput-scores').text(fullscores.toFixed(2));
    }

    //==============функции DirectorLine=====================
    function DirectorLine() {
        MakeTheName_Modal(0);
        CheckAvailabilityInfo();
        if(CheckAvailabilityInfo()){
            GetInfoX();
            GetGOE();
            CounterLIne();
            PrinterLine();
        }
        else {
            arrLineScores[NameOfProperty]=0;
        }
        return;
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
        bonusGoe=0;
        goe=sectionINmain.find('.JS_Goe').val();
        for(let i=0; i<arrScoresInMain[NameOfProperty].length; i++){
            if(arrScoresInMain[NameOfProperty][i]>compare){
                compare=arrScoresInMain[NameOfProperty][i];
            }
        }

        if(arrNamesInMain[NameOfProperty] =='ChSq1'){
            coefficient=20;
        }
        else {
            coefficient=10;
        }
        bonusGoe=compare/coefficient*goe;
        return;
    }

    function CounterLIne() {
        scores=0;
        for(let i=0; i<arrScoresInMain[NameOfProperty].length; i++){
            scores=scores+arrScoresInMain[NameOfProperty][i];
        }
        scores=scores*x+bonusGoe;
        arrLineScores[NameOfProperty]=scores;

        return;
    }


    function PrinterLine() {
        sectionINmain.find('.lineoutput-scores').text(scores.toFixed(2));
        sectionINmain.find('.lineoutput-name').text(arrNamesInMain[NameOfProperty].join('+'));
    }
    //==============КОНЕЦ функции DirectorLine=====================

})
