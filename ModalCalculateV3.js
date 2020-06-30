

//====================вычисления в модульном окне==========
$(document).ready(function() {
    let Iam,
        table,
        line,
        linename,
        linescores,
        tablescores;
    let arrName=[];
    let arrScore=[];

    $('.JS_Name, .JS_Level, .JS_Rotation').click(function() {
        Iam=$(this);
    })



//=============================перенос информации с экрана для выбора значения атрибута элемента
    $(document).ready(function () {
        let Val_IamModal;

       $('#ElementModal .JS_ButtonModal').click(function() {
            Val_IamModal=$(this).val();
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

    $('#ElementModal').find('.JS_V, .JS_Galka, .JS_Edge, .JS_RemoveJump').click(function() {
        Iam=$(this);
        DirectorModal();
    })


    function DirectorModal() {
        Packer();
        ComputerModal();
        PrinterModal();
        return;
    }

    //==============все функции Packer==============================
    function Packer() {
        MakeTheName_Modal(0);
        CleanerModalArrs();
        Iam.closest('.JS_Section-Table').find('.JS_Section-El').each(function(){
            line=$(this);
            DirectorLine();
            //MakeTheName_Modal(0);
            PusherInArr();
        })
        return;
    }
    function CleanerModalArrs(){
        arrName.splice(0, arrName.length);
        arrScore.splice(0, arrScore.length);
        return;
    }
    function PusherInArr() {
        if (linename!=null){
            arrName.push(linename);
            arrScore.push(linescores);
            arrNamesInMain[NameOfProperty]=$.extend(true, [], arrName);
            arrScoresInMain[NameOfProperty]=$.extend(true, [], arrScore);
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
        if(arrName.length==2){
            let secondjump=arrName[1].toLowerCase();
            CheckAxels(secondjump);
            if(CheckAxels(secondjump)){
                tablescores=tablescores*0.8;
                arrName.push('SEQ');
            }
        }
        return;
    }
    function GetTablescores() {
        tablescores=0;
        for(let i=0; i<arrScore.length; i++){
            tablescores=tablescores+arrScore[i];
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
        $('#ElementModal .headeroutput-name').text(arrName.join('+'));
        $('#ElementModal .headeroutput-scores').text(tablescores.toFixed(2));
        return;
    }




})
//====================КОНЕЦ вычисления в модульном окне==========
