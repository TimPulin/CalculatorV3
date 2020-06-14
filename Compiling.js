$(document).ready(function() {

    let Iam,
        IamModal;

    $('.JS_Section-Modal .JS_Save').click(function() {
        Iam=$(this);
        IamModal=$(this).closest('.JS_Section-Modal');
        DirectorCompilingConfig()
    })

    function DirectorCompilingConfig() {
        FindActiveTab();
        GetButtonsInfo();

    }

    function FindActiveTab() {
        MakeTheName_Modal(0);
        IamModal.find('.tabCalc-links .tabCalc-link').each(function(index) {
            if($(this).hasClass('active')){
                arrActiveTabs[NameOfProperty]=index;
                return;
            }
        })
    }

    function GetButtonsInfo() {
        
    }

})
