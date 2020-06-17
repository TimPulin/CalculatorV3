$(document).ready(function() {

    let IndexT;
    const Iam=$('#ElementModal .tabCalc-links .tabCalc-link');
    const IamSectionTable=$('#ElementModal .JS_Section-Tables .JS_Section-Table');

    $('.boxoutput-name').click(function() {
        DirectorSetConfig();
    })


    function DirectorSetConfig() {
        CheckAvailabilityInfo();
        if(CheckAvailabilityInfo()){
            SetActiveTab();
            SetLines();
            SetButtons();
            SetOutputs();
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

    function SetActiveTab() {
        MakeTheName_Modal(0);
        IndexT=arrActiveTabs[NameOfProperty];
        Iam.eq(IndexT).click();
        return;
    }

    function SetLines() {
        IamSectionTable.eq(IndexT).find('.JS_Section-El').each(function(index) {
            MakeTheName_Modal(index);
            $(this).addClass(arrLinesClass[NameOfProperty]);
        })
        return;
    }

    function SetButtons() {
        IamSectionTable.eq(IndexT).find('.JS_Button, .JS_RemoveJump, .JS_AddJump').each(function(index) {
            MakeTheName_Modal(index);
            $(this).addClass(arrButtonsClass[NameOfProperty]);
            $(this).val(arrButtonsVal[NameOfProperty]);
            $(this).prop('disabled', arrButtonsAbility[NameOfProperty]);
        })
        return;
    }

    function SetOutputs() {
        $('#ElementModal').find('.headeroutput-name, .headeroutput-scores, .lineoutput-scores').each(function(index) {
            MakeTheName_Modal(index);
            $(this).text(arrOutputs[NameOfProperty]);
        })
    }

})
