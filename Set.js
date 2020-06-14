$(document).ready(function() {

    let section,
        Ich;
    let Iam=$('#ElementModal .tabCalc-links .tabCalc-link');

    $('.boxoutput-name').click(function() {
        Ich=$(this);
        section=$(this).closest('.JS_Section-El');
        DirectorSetConfig();
    })


    function DirectorSetConfig() {
        GetID();
        CheckAvailabilityInfo();
        ResetModal(Iam);
        if(CheckAvailabilityInfo()){
            SetActiveTab();
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
        $('#ElementModal .tabCalc-links .tabCalc-link').eq(arrActiveTabs[NameOfProperty]).click();
        return;
    }



})
