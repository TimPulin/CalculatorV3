

//====================вычисления в модульном окне==========
$(document).ready(function() {
    let Iam;
    let IamLine;
    let linename;
    let linescores;

    $('.JS_Name, .JS_Level, .JS_Rotation').click(function() {
        Iam=$(this);
    })

//=============================перенос информации с экрана для выбора значения атрибута элемента
    $(document).ready(function () {
        let IamModal;
        let Val_IamModal;
        $('.JS_ButtonModal').click(function() {
            IamModal=$(this);
            Val_IamModal=IamModal.val();
            AddInLine_ValButtonModal();
            CheckClass();
            DirectorModal();
        })
        function AddInLine_ValButtonModal(){
            Iam.val(Val_IamModal);
            Iam.addClass('active activeColor');
            return
        };
        function CheckClass() {
            if(Iam.hasClass('JS_Name')){
                Iam.closest('.JS_Section-El').find('.JS_Level, .JS_Rotation').addClass('active activeColor');
            }
            return;
        }
    })
//=============================КОНЕЦ перенос информации с экрана для выбора значения атрибута элемента

    $('.JS_Fly, .JS_ChangeLeg, .JS_V, .JS_Galka, .JS_Edge').click(function() {
        Iam=$(this);
        DirectorModal();
    })

    function DirectorModal() {
        DirectorLine();
    }

    //================все функции DirectorLine=====================
    function DirectorLine() {
        IamLine=Iam.closest('.JS_Section-El');
        GetLineName();
        GetLineScores();
        PrintLineScores();
        return;
    }

    function GetLineName() {
        linename=''
        IamLine.find('.JS_Button.active').each(function (index) {
            linename=linename+$(this).val();
        })
        return;
    }
    function GetLineScores() {
        linescores=list_value[linename.toLowerCase()]
        if (linescores==undefined){
            linescores=0;
            linename='';
            return;
        }
        return;
    }
    function PrintLineScores() {
        IamLine.find('.lineoutput-scores').text(linescores.toFixed(2));
        return;
    }
//================КОНЕЦ все функции DirectorLine=====================
})
