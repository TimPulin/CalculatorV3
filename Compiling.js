$(document).ready(function() {

    let Iam,
        IamModal,
        IndexT;

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
                IndexT=index;
                return;
            }
        })
    }

    function GetButtonsInfo() {
        IamModal.find('.JS_Section-Tables .JS_Section-Table').eq(IndexT).find('.JS_Button').each(function(index) {
            MakeTheName_Modal(index);
            if($(this).hasClass('activeColor')){
                arrButtonsClass[NameOfProperty]='active activeColor'
            }
            else {
                arrButtonsClass[NameOfProperty]='';
            }
            arrButtonsVal[NameOfProperty]=$(this).val();
            return;
        })
    }

})
