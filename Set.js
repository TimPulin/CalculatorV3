$(document).ready(function() {

    let section,
        Ich,
        IndexT;
    const Iam=$('#ElementModal .tabCalc-links .tabCalc-link');
    const IamSectionTable=$('#ElementModal .JS_Section-Tables .JS_Section-Table');

    $('.boxoutput-name').click(function() {
        Ich=$(this);
        section=$(this).closest('.JS_Section-El');
        DirectorSetConfig();
    })


    function DirectorSetConfig() {
        GetID();
        CheckAvailabilityInfo();
        if(CheckAvailabilityInfo()){
           // ResetModal(Iam);
            SetActiveTab();
            SetLines();
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

    function SetLines() {
        IamSectionTable.eq(IndexT).find('.JS_Section-El').each(function(index) {
            MakeTheName_Modal(index);
            $(this).addClass(arrLinesClass[NameOfProperty]);
        })
    }

    function SetButtons() {
        IamSectionTable.eq(IndexT).find('.JS_Button, .JS_RemoveJump, .JS_AddJump').each(function(index) {
            MakeTheName_Modal(index);
            $(this).addClass(arrButtonsClass[NameOfProperty]);
            $(this).val(arrButtonsVal[NameOfProperty]);
            $(this).prop('disabled', arrButtonsAbility[NameOfProperty]);
        })
    }

})
