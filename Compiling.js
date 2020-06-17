$(document).ready(function() {

    let Iam,
        IamModal,
        IndexT,
        IamSectionTable;

    $('#ElementModal .JS_Save').click(function() {
        Iam=$(this);
        IamModal=$(this).closest('.JS_Section-Modal');
        IamSectionTable=IamModal.find('.JS_Section-Tables .JS_Section-Table');
        DirectorCompilingConfig()
    })

    function DirectorCompilingConfig() {
        FindActiveTab();
        GetSectionInfo();
        GetButtonsInfo();
        GetOutputInfo();
    }

    function FindActiveTab() {
        MakeTheName_Modal(0);
        IamModal.find('.tabCalc-links .tabCalc-link').each(function(index) {
            if($(this).hasClass('active')){
                arrActiveTabs[NameOfProperty]=index;
                IndexT=index;
                return;
            }
        })
    }

    function GetSectionInfo() {
        IamSectionTable.eq(IndexT).find('.JS_Section-El').each(function(index) {
            MakeTheName_Modal(index);
            arrLinesClass[NameOfProperty]=$(this).attr('class');
        })
        return;
    }

    function GetButtonsInfo() {
        IamSectionTable.eq(IndexT).find('.JS_Button, .JS_RemoveJump, .JS_AddJump').each(function(index) {
            MakeTheName_Modal(index);
            if($(this).hasClass('activeColor')){
                arrButtonsClass[NameOfProperty]='active activeColor'
            }
            else {
                arrButtonsClass[NameOfProperty]='';
            }
            arrButtonsAbility[NameOfProperty]=$(this).prop('disabled');
            arrButtonsVal[NameOfProperty]=$(this).val();
            return;
        })
    }
    function GetOutputInfo() {
        IamModal.find('.headeroutput-name, .headeroutput-scores, .lineoutput-scores').each(function(index) {
            MakeTheName_Modal(index);
            arrOutputs[NameOfProperty]=$(this).val();
        })
    }

})
