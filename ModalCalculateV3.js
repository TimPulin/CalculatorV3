

//====================вычисления в модульном окне==========
$(document).ready(function() {
    let Iam,
        table,
        line,
        linename,
        linescores,
        tablescores;
    let arrNames=[];
    let arrScores=[];

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

    $('#ElementModal .JS_V, #ElementModal .JS_Galka, #ElementModal .JS_Edge, #ElementModal .JS_RemoveJump').click(function() {
        Iam=$(this);
        DirectorModal();
    })

    function DirectorModal() {
        Packer();
        ComputerModal();
        PrinterModal();
    }

    //==============все функции Packer==============================
    function Packer() {
        CleanerModalArrs();
        Iam.closest('.JS_Section-Table').find('.JS_Section-El').each(function(){
            line=$(this);
            DirectorLine();
            PusherInArr();
        })
        return;
    }
    function CleanerModalArrs(){
        arrNames.splice(0, arrNames.length);
        arrScores.splice(0, arrScores.length);
        return
    }
    function PusherInArr() {
        arrScores.push(linescores);
        if (linename!=null){
            arrNames.push(linename);
        }
    }
    //==============КОНЕЦ все функции Packer==============================

    //================все функции DirectorLine=====================
    function DirectorLine() {
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
            linename=null;
            return false;
        }
        return true;
    }
    function PrintLineScores() {
        line.find('.lineoutput-scores').text(linescores.toFixed(2));
        return;
    }
    //================КОНЕЦ все функции DirectorLine=====================

    //=================================подсчет баллов====================================================
    function ComputerModal() {
        GetTablescores();
        if(arrNames.length==2){
            let secondjump=arrNames[1].toLowerCase();
            CheckAxels(secondjump);
            if(CheckAxels(secondjump)){
                tablescores=tablescores*0.8;
                arrNames.push('SEQ');
            }
        }
        return;
    }
    function GetTablescores() {
        tablescores=0;
        for(let i=0; i<arrScores.length; i++){
            tablescores=tablescores+arrScores[i];
        }
        return;
    }
    //=========проверка второго элемента - является ли он акселем==========
    function CheckAxels(secondjump){
        for (let i=0; i<arrOfAxels.length; i++){
            if(arrOfAxels[i]===secondjump){
            return true;
            }
        }
        return false;
    }
    //=========КОНЕЦ проверка второго элемента - является ли он акселем==========
    //===============КОНЕЦ подсчет баллов====================================================

    function PrinterModal(){
        $('#ElementModal .headeroutput-name').text(arrNames.join('+'));
        $('#ElementModal .headeroutput-scores').text(tablescores.toFixed(2))
    }




})
//====================КОНЕЦ вычисления в модульном окне==========
