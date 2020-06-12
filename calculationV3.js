

//====================вычисления в модульном окне==========
$(document).ready(function() {
    let Iam,
        line,
        linename,
        linescores;

    $('.JS_Name, .JS_Level, .JS_Rotation').click(function() {
        Iam=$(this);
    })

//=============================перенос информации с экрана для выбора значения атрибута элемента
    $(document).ready(function () {
        let IamModal,
            Val_IamModal;

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
                if (Val_IamModal=='Eu'){
                    BUTTON_ROTATION.val(1);
                }
                else if(Val_IamModal=='ChSq'){
                    BUTTON_STEPLEVEL.val(1);
                }
            }

            return;
        }
    })
//=============================КОНЕЦ перенос информации с экрана для выбора значения атрибута элемента
    $('#ElementModal .JS_Fly, #ElementModal .JS_ChangeLeg').click(function() {
        Iam=$(this);
        if(!$('#ElementModal .JS_Fly').hasClass('active') && !$('#ElementModal .JS_ChangeLeg').hasClass('active')){
            $('#ElementModal .JS_V').removeClass('active activeColor');
        }
        DirectorModal();
    })

    $('#ElementModal .JS_V, #ElementModal .JS_Galka, #ElementModal .JS_Edge').click(function() {
        Iam=$(this);
        DirectorModal();
    })

    function DirectorModal() {
        DirectorLine();
    }

    //================все функции DirectorLine=====================
    function DirectorLine() {
        line=Iam.closest('.JS_Section-El');
        GetLineName();
        GetLineScores();
        PrintLineScores();

        return;
    }

    function GetLineName() {
        linename=''
        line.find('.JS_Button.active').each(function (index) {
            linename=linename+$(this).val();
        })
        return;
    }
    function GetLineScores() {
        linescores=list_value[linename.toLowerCase()]
        if (linescores==undefined){
            linescores=0;
            linename='';
            return false;
        }
        return true;
    }
    function PrintLineScores() {
        line.find('.lineoutput-scores').text(linescores.toFixed(2));
        return;
    }
//================КОНЕЦ все функции DirectorLine=====================
})
