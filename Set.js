$(document).ready(function() {

    let section,
        Ich,
        IndexT;
    let Iam=$('#ElementModal .tabCalc-links .tabCalc-link');

    $('.boxoutput-name').click(function() {
        Ich=$(this);
        section=$(this).closest('.JS_Section-El');
        DirectorSetConfig();
    })


    function DirectorSetConfig() {
        GetID();
        CheckAvailabilityInfo();
        if(CheckAvailabilityInfo()){
            ResetModal(Iam);
            SetActiveTab();
            SetButtons();
        }
        else {
            Iam.eq(2).click();
        }

    }

    function CheckAvailabilityInfo() {
        MakeTheName_Modal(0);
        if(arrActiveTabs[NameOfProperty]==undefined){
            return false;
        }
        else {
            return true;
        }
    }

    function GetID() {
        ID=Ich.closest('.JS_Section-Table').find('.JS_Section-El').index(section)+1;
        return;
    }


    function SetActiveTab() {
        MakeTheName_Modal(0);
        IndexT=arrActiveTabs[NameOfProperty];
        Iam.eq(IndexT).click();

        return;
    }

    function SetButtons() {
        $('#ElementModal .JS_Section-Tables .JS_Section-Table').eq(IndexT).find('.JS_Button').each(function(index) {
            MakeTheName_Modal(index);
            $(this).addClass(arrButtonsClass[NameOfProperty]);
            $(this).val(arrButtonsVal[NameOfProperty]);
        })
    }

})
