jQuery(document).ready(function() {

//================================PrintTable==============================
$(document).ready(function() {
    let tr = '<tr class="JS_Section-El">\
                <td class="JS_NumberOfline"></td><td class=""><div class="boxoutput-name"><output class="lineoutput-name"></output></div></td>\
                <td><input type="button" class="JS_X JS_Button buttonGuideBasic" value="X" disabled></td>\
                <td><input type="button" class="JS_Goe JS_Button buttonGuideBasic" name="goe" value="0"></td>\
                <td><output class="lineoutput-scores">0.00</output></td>\
            </tr>';

    let lastrow= '<tr>\
                    <td colspan="4" class="pl-0">	<button class="JS_Reset buttonFlat float-left">Сброс</button></td>\
                    <td><output class="tableoutput-scores">0.00</output></td>\
                  </tr>';

    let i=0;

    for(i=0;i<12;i++){
        PrintTable()
    }
    PrintLastRow();

    function PrintTable() {
        $(tr).appendTo('.tbody');
        $('.JS_NumberOfline').eq(i).append(i+1)
        return;
    }
    function PrintLastRow() {
        $(lastrow).appendTo('.tbody');
    }
})
//================================КОНЕЦ PrintTable==============================

//=========================ModalWorkV3====================================
//==================вызов и закрытие модального окна======================
$(document).ready(function() {
    let Iam;
    //вызов модального окна
    jQuery('.boxoutput-name').click(function(){
        $('#ElementModal').modal();
    });
    //закрытие модального окна
    $('#ElementModal .JS_Save').click(function() {
         HideModal();
    })
    $('#ElementModal .JS_Reset').click(function() {
        Iam=$(this);
        HideModal();
        ResetModal(Iam);
    })
    function HideModal() {$('#ElementModal').modal('hide');}
    //КОНЕЦ закрытие модального окна

    $('.JS_Goe').click(function() {
        $('#GoeModal').modal();
    })
    $('#GoeModal .JS_ButtonModal').click(function() {
         $('#GoeModal').modal('hide');
    })
})
//======================КОНЕЦ вызов и закрытие модального окна======================


//===========================ПОВЕДЕНИЕ КНОПОК=========================================

//========================Переключение вкладок в модальном окне==
$(document).ready(function(){
    let Iam,
        Index,
        Title_Modal,
        section;
    $('.tabCalc-link').click(function(){
        Iam=$(this);
        Index=Iam.closest('.tabCalc-links').find('.tabCalc-link').index(Iam);
        Title_Modal=Iam.val();
        AddRemove_Active();
        ResetModal(Iam);
        ShowHide_tabel ();
        ShowHeader();
        Print_Title_Modal();
    });

    function AddRemove_Active(){
        Iam.closest('.tabCalc-links').find('.tabCalc-link.active').removeClass('active');
        Iam.addClass('active');
    };

    function ShowHide_tabel(){
        Iam.closest('.tabCalc-wrap').find('.tabCalc-content.active').removeClass('active');
        Iam.closest('.tabCalc-wrap').find('.tabCalc-content').eq(Index).addClass('active');
    };


    function Print_Title_Modal(){
        Iam.closest('.JS_Section-Modal').find('.headeroutput-title').text(Title_Modal);
    };

});
//========================КОНЕЦ Переключение вкладок в модальном окне==

//====================вызов экрана для выбора значения атрибута элемента==========
$(document).ready(function() {
    let Iam,
        Val_Iam,
        IamModal,
        ID;
    $('.JS_Goe').click(function() {
        Val_Iam=$(this).val();
        ID='#'+$(this).attr('name');
        addClassActiveTo_JS_ButtonModal();
    })

    $('.JS_Name, .JS_Level, .JS_Rotation').click(function() {
        Iam=$(this);
        Val_Iam=$(this).val();
        ID='#'+Iam.attr('name');
        Hide_CurrentHeadersSection();
        ToggleHeaderSection();
        CheckClass();
    })

    function Hide_CurrentHeadersSection() {
        Iam.closest('.JS_Section-Modal').find('.mod-header .JS_Section').not($(ID)).removeClass('active');
        return;
    }

    function ToggleHeaderSection() {
        $(ID).toggleClass('active');
        return;
    }

    function CheckClass() {
        if(!$(ID).hasClass('active')){
            ShowHeader();
        } else {
            addClassActiveTo_JS_ButtonModal();
        }
    }
    function addClassActiveTo_JS_ButtonModal(){
        $(ID).find(".JS_ButtonModal").each(function(index){
            jQuery(this).removeClass('active activeColor');
            if(Val_Iam==jQuery(this).val()){
                jQuery(this).addClass('active activeColor');
            }
        })
    }
})
//====================КОНЕЦ вызов экрана для выбора значения атрибута элемента==========

//=======================закрытие экранов "выбор значения атрибута элемента" и открытие заголовка модульного окна=======
$(document).ready(function () {
    let Iam;
    $('.JS_Fly, .JS_ChangeLeg, .JS_V, .JS_Galka, .JS_Edge').click(function(){
        Iam=$(this);
        Hide_HeadersSections(Iam);
        ShowHeader();
    })
})
//=======================КОНЕЦ закрытие экранов "выбор значения атрибута элемента"=======

//===============================активация кнопок при выборе значения атрибута==========
$(document).ready(function() {
    let Iam;

    $('.JS_Fly, .JS_ChangeLeg, .JS_V, .JS_Edge, .JS_X').click(function() {
        $(this).toggleClass('active activeColor');

    })

    $('.JS_Galka').click(function() {
        Iam=$(this);
        Iam.toggleClass('active activeColor');
        Iam.parent().find('.JS_Galka').not(Iam).each(function(index){
            jQuery(this).removeClass('active activeColor');
        })
    })
})

$(document).ready(function() {
    $('.JS_Level, .JS_Rotation').click(function() {
        $(this).addClass('active activeColor');

    })
})
//===============================КОНЕЦ поведение кнопок при выборе значения атрибута==========

//=====================работа кнопок на экране для выбора значения атрибута элемента====
$(document).ready(function(){
    let Iam;

    $('#GoeModal .JS_ButtonModal').click(function() {
        Iam=$(this);
        AddRemove_Active();
    })

    $('#ElementModal .JS_ButtonModal').click(function() {
        Iam=$(this);
        AddRemove_Active();
        Hide_HeadersSections(Iam);
        ShowHeader();
    })

    function AddRemove_Active() {
        Iam.closest('.JS_Section').find('.JS_ButtonModal').each(function(index){
            jQuery(this).removeClass('active activeColor');
        })
        Iam.addClass('active activeColor');
        return;
    }
})
//=====================КОНЕЦ работа кнопок на экране для выбора значения атрибута элемента====

//========================добавление/удаление прыжка в модальном окне==================
    //ДОЛЖНО БЫТЬ ВЫШЕ @разблокировка кнопок "добавить прыжок"@
$(document).ready(function() {
    let section,
        Iam;

      $('#ElementModal .JS_AddJump').click(function() {
          Iam=$(this);
          $(this).closest('.JS_Section-Table').find('.JS_Section-El:not(.active):first').addClass('active');
          Hide_HeadersSections(Iam);
          ShowHeader();
      })
      $('#ElementModal .JS_RemoveJump').click(function() {
          Iam=$(this);
          section=Iam.closest('.JS_Section-Table').find('.JS_Section-El.active:last')
          ResetButtons(section);
          section.removeClass('active').addClass('hide');
          Hide_HeadersSections(Iam);
          ShowHeader();
      })
})
//=========================КОНЕЦ добавление/удаление прыжка в модальном окне==================



//======================Блокировка/Разблокировка кнопок==================================================
$(document).ready(function () {

    //==блокировка/разблокировка кнопки "E"
    $(document).ready(function() {
        let section;
        let button;
        $('.JS_Name').click(function() {
            section=$(this).closest('.JS_Section-El');
        })
        $('#jumps .JS_ButtonModal[value="F"], #jumps .JS_ButtonModal[value="Lz"]').click(function() {
            section.find('.JS_Edge').prop('disabled', false);
        })
        $('#jumps .JS_ButtonModal:not(.JS_ButtonModal[value="F"], #jumps .JS_ButtonModal[value="Lz"])').click(function() {
            button=section.find('.JS_Edge');
            button.removeClass('active activeColor');
            button.prop('disabled', true);
        })
    })
    //==КОНЕЦ блокировка/разблокировка кнопки "E"

    $(document).ready(function(){
        let amount, //переменная используется для кнопок "добавить/удалить прыжок" и кнопки "Eu"
            IndexS;

        //===блокировка/разблокировка кнопок "добавить прыжок" и "удалить прыжок"
        $(document).ready(function() {
            let Iam;

            $('#ElementModal .JS_Name').click(function() {
                Iam=$(this);
            })
            $('#jumps .JS_ButtonModal:not(.JS_ButtonModal[value="A"])').click(function() {
                CheckAmountLinesHide();
                if(amount < 3){
                    $('#ElementModal .JS_AddJump').prop('disabled', false);
                }
            })
            $('#ElementModal .JS_RemoveJump').click(function () {
                Iam=$(this);
                CheckAmountLinesHide();
                if(amount < 3){
                    $('#ElementModal .JS_AddJump').prop('disabled', false);
                }
            })

            $('.JS_RemoveJump').click(function () {
                Iam=$(this);
                CheckAmountLinesHide();
                if(amount < 2){
                    $(this).prop('disabled', true);
                }
            })

            $('#ElementModal .JS_AddJump').click(function () {
               $(this).prop('disabled', true);
                $('#ElementModal .JS_RemoveJump').prop('disabled', false);;
            })

             //блокировка/разблокировка кнопки "добавить прыжок" в зависимости от кнопки "A"
             BUTTON_A.click(function() {
                 if(IndexS==1){
                     if(amount==3){
                         $('#ElementModal .JS_RemoveJump').trigger('click');
                     }
                     $('#ElementModal .JS_AddJump').prop('disabled', true);
                 }else {
                     $('#ElementModal .JS_AddJump').prop('disabled', false);
                }
             })
             //КОНЕЦ блокировка/разблокировка кнопки "добавить прыжок" в зависимости от кнопки "A"

            function CheckAmountLinesHide() {
                amount=$(Iam).closest('.JS_Section-Table').find('.JS_Section-El.active').length;

                return;
            }

        })
        //===КОНЕЦ блокировка/разблокировка кнопок "добавить прыжок" и "удалить прыжок"

        //====================блокировка/разблокировка кнопок   в секции "прыжки"===========
       $(document).ready(function() {
            let IndexT,
                section,
                table;
            const NAMESECONDLINE=$('.JS_Section-Table:eq(2) .JS_Section-El:eq(1) .JS_Name'),
                  BUTTONSJUMPS=$('#jumps .JS_ButtonModal');


            //представление кнопок выбора атрибута прыжка в секции "прыжки"
            $('#ElementModal .JS_Name').click(function() {
                table=$(this).closest('.JS_Section-Table');
                IndexT=$(this).closest('.JS_Section-Tables').find('.JS_Section-Table').index(table);
                if(IndexT==2){
                    section=$(this).closest('.JS_Section-El');
                    IndexS=$(this).closest('.JS_Section-Table').find('.JS_Section-El').index(section);
                    //представление прыжков в первой линии
                    if(IndexS==0){
                        BUTTON_EU.prop('disabled', true);
                        BUTTONSJUMPS.not(BUTTON_EU).prop('disabled', false);
                    //представление прыжков во второй линии
                    } else if (IndexS==1){
                        BUTTONSJUMPS.not('.JS_ButtonModal[value="Lz"]').prop('disabled', false);
                        $('#jumps .JS_ButtonModal[value="Lz"]').prop('disabled', true);
                     //представление прыжков в третьей линии
                    } else if(IndexS==2) {
                        if(NAMESECONDLINE.val()=='Eu'){
                            BUTTONSJUMPS.not('.JS_ButtonModal[value="S"], .JS_ButtonModal[value="F"]').prop('disabled', true);
                        }else {
                            $('.JS_ButtonModal[value="A"], .JS_ButtonModal[value="Eu"], .JS_ButtonModal[value="Lz"]').prop('disabled', true);
                            BUTTONSJUMPS.not('.JS_ButtonModal[value="A"], .JS_ButtonModal[value="Eu"], .JS_ButtonModal[value="Lz"]').prop('disabled', false);
                        }
                    }
                }
            })
            //КОНЕЦ представление кнопок выбора атрибута прыжка в секции "прыжки"

            //блокировка/разблокировка кнопки "JS_Rotation"
            BUTTON_EU.click(function() {
                BUTTON_ROTATION.prop('disabled', true);
            })
            $('.JS_RemoveJump').click(function() {
                if (amount==1){
                    BUTTON_ROTATION.prop('disabled', false);
                }
            })
            $('#jumps .JS_ButtonModal:not(.JS_ButtonModal[value="Eu"])').click(function() {
                if(IndexS==1){
                     BUTTON_ROTATION.prop('disabled', false);
                }
            })
            //КОНЕЦ блокировка/разблокировка кнопки "JS_Rotation"

            //блокировка/разблокировка кнопки "JS_Level" в зависимости от кнопки "StSq"
            BUTTON_CHSQ.click(function() {
                BUTTON_STEPLEVEL.prop('disabled', true);
            })
            $('#steps .JS_ButtonModal[value="StSq"]').click(function() {
                 BUTTON_STEPLEVEL.prop('disabled', false);
            })
            //КОНЕЦ блокировка/разблокировка кнопки "JS_Level" в зависимости от кнопки "StSq"

            //блокировка кнопки "V"
            $('#ElementModal .JS_Fly, #ElementModal .JS_ChangeLeg').click(function() {
                if($('#ElementModal  .JS_Fly').hasClass('active') || $('#ElementModal .JS_ChangeLeg').hasClass('active')){
                    $('#ElementModal .JS_V').prop('disabled', false);
                } else {
                     $('#ElementModal .JS_V').prop('disabled', true);
                }
            })
            //КОНЕЦ блокировка кнопки "V"
        })
        //====================КОНЕЦ блокировка/разблокировка кнопок в секции "прыжки"===========
    })
})
//======================КОНЕЦ Блокировка/Разблокировка кнопок===================================

//=========================КОНЕЦ ModalWorkV3====================================

//=========================ModalCalculateV3=====================================
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

    $('.tabCalc-link').click(function() {
        CleanerModalArrs();
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
            PusherInArr_forModal();
        })
        return;
    }
    function CleanerModalArrs(){
        arrName.splice(0, arrName.length);
        arrScore.splice(0, arrScore.length);
        delete arrNamesInMain[NameOfProperty];
        delete arrScoresInMain[NameOfProperty];

        return;
    }
    function PusherInArr_forModal() {
        if (linename!=null){
            arrName.push(linename);
            arrScore.push(linescores);
        }
            arrNamesInMain[NameOfProperty]=$.extend(true, [], arrName);
            arrScoresInMain[NameOfProperty]=$.extend(true, [], arrScore);

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

//=========================КОНЕЦ ModalCalculateV3=====================================

//=========================Director===================================================
//======================ГЛОБАЛЬНЫЕ служебные функции======================

let ID,
    Ich,
    IndexT,
    NameOfProperty,
    sectionINmain;

let arrActiveTabs={};
let arrButtonsClass={};
let arrButtonsVal={};
let arrLinesClass={};
let arrButtonsAbility={};
let arrOutputs={};

let arrNamesInMain={};
let arrScoresInMain={};
let arrLineScores={};

$(document).ready(function () {
    $('.JS_Section-Table').find('.boxoutput-name, .JS_Goe, .JS_X').click(function() {
        Ich=$(this);
        sectionINmain=$(this).closest('.JS_Section-El');
        GetID();
    })
})

function GetID() {
    ID=Ich.closest('.JS_Section-Table').find('.JS_Section-El').index(sectionINmain);
    return;
}

//====создание имени====
function MakeTheName_Modal(index) {
    NameOfProperty='line'+ID+1+'_index'+index;
    return;
}
//====КОНЕЦ создание имени====

const BUTTON_EU=$('#jumps .JS_ButtonModal[value="Eu"]'),
      BUTTON_A=$('#jumps .JS_ButtonModal[value="A"]'),
      BUTTON_ROTATION=$('#ElementModal .JS_Section-Tables .JS_Section-Table:eq(2) .JS_Section-El:eq(1) .JS_Rotation'),
      BUTTON_CHSQ=$('#steps .JS_ButtonModal[value="ChSq"]'),
      BUTTON_STEPLEVEL=$('#ElementModal .JS_Section-Tables .JS_Section-Table:eq(0) .JS_Level');


function ResetModal(Iam) {
    let section;
    section=Iam.closest('.JS_Section-Modal');
    ResetButtons(section);
    Hide_HeadersSections(Iam);

    ShowHeader();
    $('#ElementModal').find('.JS_Section-Table .JS_Section-El').not(':only-child').not(':first').removeClass('active');
    section.find('.headeroutput-name').val('');
    section.find('.headeroutput-scores').val('0.00');
    $('#ElementModal').find('.JS_RemoveJump, .JS_AddJump').prop('disabled', true);
    return;
}
function ResetButtons(section) {
    section.find('.JS_Button').removeClass('active activeColor');
    section.find('.JS_Name').val('элемент');
    section.find('.JS_Level').val('B').prop('disabled', false);
    section.find('.JS_Rotation').val('1').prop('disabled', false);
    $('#ElementModal .JS_V').prop('disabled', true);
    section.find('.lineoutput-scores').text('0.00');
    section.find('.JS_Edge').prop('disabled', true);

}

function ShowHeader() {
    $('#header_title').addClass('active');
    return ;
}
function Hide_HeadersSections(Iam) {
    Iam.closest('.JS_Section-Modal').find('.mod-header .JS_Section.active').removeClass('active');
    return;
}
//======================КОНЕЦ ГЛОБАЛЬНЫЕ служебные функции======================

//======================сброс массивов одной линии==============================
$(document).ready(function() {
    $('#ElementModal .JS_Reset').click(function(){
        MakeTheName_Modal(0);
        ResetModalArrs();
    })

    function ResetModalArrs() {
        delete arrActiveTabs[NameOfProperty];
        delete arrButtonsClass[NameOfProperty];
        delete arrButtonsVal[NameOfProperty];
        delete arrLinesClass[NameOfProperty];
        delete arrButtonsAbility[NameOfProperty];
        delete arrOutputs[NameOfProperty];
    }
})

//===================КОНЕЦ сброс массивов одной линии===================

//==================сброс массивов всей таблицы============================
$(document).ready(function() {
    let section;
    $('#MainTable .JS_Reset').click(function() {
        section=$(this).closest('.JS_Section-Table');
        ResetAllArrs();
        CleanUpMainTable();
    })

    function ResetAllArrs() {
        for (key in arrActiveTabs){
            delete arrActiveTabs[key];
        }
        for (key in arrButtonsClass){
            delete arrButtonsClass[key];
        }
        for (key in arrButtonsVal){
            delete arrButtonsVal[key];
        }
        for (key in arrLinesClass){
            delete arrLinesClass[key];
        }
        for (key in arrButtonsAbility){
            delete arrButtonsAbility[key];
        }
        for (key in arrOutputs){
            delete arrOutputs[key];
        }
        for (key in arrNamesInMain){
            delete arrNamesInMain[key];
        }
        for (key in arrScoresInMain){
            delete arrScoresInMain[key];
        }
        for (key in arrLineScores){
            delete arrLineScores[key];
        }
        return;
    }

    function CleanUpMainTable() {
        section.find('.lineoutput-name').val('');
        section.find('.JS_X').removeClass('active activeColor').prop('disabled', true);
        section.find('.JS_Goe').val(0).removeClass('active activeColor');
        section.find('.lineoutput-scores, .tableoutput-scores').val('0.00');
    }
})

//==================КОНЕЦ сброс массивов всей таблицы============================

//=========================КОНЕЦ Director===================================================

//=========================Compiling========================================================
$(document).ready(function() {

    let Iam,
        IamModal,
    //    IndexT,
        IamSectionTable;
    let arrTemporaryClass=[];
    let arrTemporaryAble=[];
    let arrTemporaryVal=[];

    $('#ElementModal .JS_Save').click(function() {
        Iam=$(this);
        IamModal=$(this).closest('.JS_Section-Modal');
        IamSectionTable=IamModal.find('.JS_Section-Tables .JS_Section-Table');
        DirectorCompilingConfig()
    })

    function DirectorCompilingConfig() {
        MakeTheName_Modal(0);
        FindActiveTab();
        GetSectionInfo();
        GetButtonsInfo();
        GetOutputInfo();
    }

    function FindActiveTab() {
        IamModal.find('.tabCalc-links .tabCalc-link').each(function(index) {
            if($(this).hasClass('active')){
                arrActiveTabs[NameOfProperty]=index;
                IndexT=index;
                return;
            }
        })
    }

    function GetSectionInfo() {
        Cleaner_arrTemporaryClass();
        IamSectionTable.eq(IndexT).find('.JS_Section-El').each(function() {
            arrTemporaryClass.push($(this).attr('class'))
        })
        arrLinesClass[NameOfProperty]=$.extend(true, [], arrTemporaryClass);
        return;
    }

    function GetButtonsInfo() {
        Cleaner_arrTemporaryClass();
        Cleaner_arrTemporaryAble();
        Cleaner_arrTemporaryVal();
        IamSectionTable.eq(IndexT).find('.JS_Button, .JS_RemoveJump, .JS_AddJump').each(function(index) {

            if($(this).hasClass('activeColor')){
                arrTemporaryClass.push('active activeColor')
            }
            else {
                arrTemporaryClass.push('')
            }
            arrTemporaryAble.push($(this).prop('disabled'));
            arrTemporaryVal.push($(this).val())
        })
        arrButtonsClass[NameOfProperty]=$.extend(true, [], arrTemporaryClass);
        arrButtonsAbility[NameOfProperty]=$.extend(true, [], arrTemporaryAble);
        arrButtonsVal[NameOfProperty]=$.extend(true, [], arrTemporaryVal);
        return;
    }
    function GetOutputInfo() {
        Cleaner_arrTemporaryVal();
        IamModal.find('.headeroutput-name, .headeroutput-scores, .lineoutput-scores').each(function() {
            arrTemporaryVal.push($(this).val());
        })
        arrOutputs[NameOfProperty]=$.extend(true, [], arrTemporaryVal);
    }

    function Cleaner_arrTemporaryClass() {
        arrTemporaryClass.splice(0, arrTemporaryClass.length);
        return;
    }
    function Cleaner_arrTemporaryAble() {
        arrTemporaryAble.splice(0, arrTemporaryAble.length);
        return;
    }
    function Cleaner_arrTemporaryVal() {
        arrTemporaryVal.splice(0, arrTemporaryVal.length);
        return;
    }

})
//=========================КОНЕЦ Compiling========================================================

//=========================Set====================================================================
$(document).ready(function() {

      let IndexT;
    const Iam=$('#ElementModal .tabCalc-links .tabCalc-link');
    const IamSectionTable=$('#ElementModal .JS_Section-Tables .JS_Section-Table');

    $('.boxoutput-name').click(function() {
        DirectorSetConfig();
    })


    function DirectorSetConfig() {
        MakeTheName_Modal(0);
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
        if(arrActiveTabs[NameOfProperty]==undefined){
            return false;
        }
        else {
            return true;
        }
    }

    function SetActiveTab() {
        IndexT=arrActiveTabs[NameOfProperty];
        Iam.eq(IndexT).click();
        return;
    }

    function SetLines() {
        IamSectionTable.eq(IndexT).find('.JS_Section-El').each(function(index) {
            $(this).addClass(arrLinesClass[NameOfProperty][index]);
        })
        return;
    }

    function SetButtons() {
        IamSectionTable.eq(IndexT).find('.JS_Button, .JS_RemoveJump, .JS_AddJump').each(function(index) {
            $(this).addClass(arrButtonsClass[NameOfProperty][index]);
            $(this).val(arrButtonsVal[NameOfProperty][index]);
            $(this).prop('disabled', arrButtonsAbility[NameOfProperty][index]);
        })
        return;
    }

    function SetOutputs() {
        $('#ElementModal').find('.headeroutput-name, .headeroutput-scores, .lineoutput-scores').each(function(index) {
            $(this).text(arrOutputs[NameOfProperty][index]);
        })
    }
})
//=========================КОНЕЦ Set====================================================================

//=========================MainCalculateV3==============================================================
$(document).ready(function() {
    let Iam,
        buttonX,
        buttonGoe,
        scores,
        x,
        goe,
        bonusGoe,
        compare,
        fullscores;
    let arrNameZero=[''];


    $('.boxoutput-name').click(function() {
        Iam=$(this);
        buttonX=$(this).closest('.JS_Section-El').find('.JS_X');
        buttonGoe=$(this).closest('.JS_Section-El').find('.JS_Goe');
    })
    $('#ElementModal .JS_Save').click(function(){
        if(IndexT==2){
            buttonX.prop('disabled', false);
        }
        else {
            buttonX.prop('disabled', true).removeClass('active activeColor');
        }
        buttonGoe.removeClass('active activeColor').val(0);
        DirectorMain();
    })
    $('#ElementModal .JS_Reset').click(function() {
        MakeTheName_Modal(0);
        arrScoresInMain[NameOfProperty]=0;
        arrNamesInMain[NameOfProperty]=$.extend(true, [], arrNameZero);
        buttonX.prop('disabled', true).removeClass('active activeColor');
        buttonGoe.removeClass('active activeColor').val(0);
        DirectorMain();
    })


    $('.JS_Section-Table .JS_X').click(function() {
        Iam=$(this);
        DirectorMain();
    })

    $(document).ready(function() {
        let Val_IamModal;

        $('.JS_Section-Table .JS_Goe').click(function() {
            Iam=$(this);
        })

        $('#GoeModal .JS_ButtonModal').click(function() {
            Val_IamModal=$(this).val();
            Iam.val(Val_IamModal);
            Iam.addClass('active activeColor');
            DirectorMain();
        })
    })


    function DirectorMain() {
        DirectorLine();
        CounterMain();
        PrinterMain();
    }

    function CounterMain() {
        fullscores=0;
        Iam.closest('.JS_Section-Table').find('.JS_Section-El').each(function(index) {
            Ich=$(this).find('.boxoutput-name');
            sectionINmain=$(this);
            GetID();
            MakeTheName_Modal(0);

            if(arrLineScores[NameOfProperty]==undefined){
                arrLineScores[NameOfProperty]=0;
            }
            fullscores=fullscores+arrLineScores[NameOfProperty];
        })
        return;
    }

    function PrinterMain() {
        Ich.closest('.JS_Section-Table').find('.tableoutput-scores').text(fullscores.toFixed(2));
    }

    //==============функции DirectorLine=====================
    function DirectorLine() {
        MakeTheName_Modal(0);
        CheckAvailabilityInfo();
        GetInfoX();
        GetGOE();
        CounterLIne();
        PrinterLine();
        return;
    }

    function CheckAvailabilityInfo() {
        if(arrNamesInMain[NameOfProperty]==undefined){
            arrScoresInMain[NameOfProperty]=0;
            arrNamesInMain[NameOfProperty]=$.extend(true, [], arrNameZero);
            arrLineScores[NameOfProperty]=0;
        }
        return;
    }

    function GetInfoX() {
        if(sectionINmain.find('.JS_X').hasClass('active')){
            x=1.1;
        }
        else {
            x=1;
        }
        return;
    }

    function GetGOE() {
        compare=0;
        bonusGoe=0;
        goe=sectionINmain.find('.JS_Goe').val();
        for(let i=0; i<arrScoresInMain[NameOfProperty].length; i++){
            if(arrScoresInMain[NameOfProperty][i]>compare){
                compare=arrScoresInMain[NameOfProperty][i];
            }
        }

        if(arrNamesInMain[NameOfProperty] =='ChSq1'){
            bonusGoe=0.5*goe;
        }
        else {
            bonusGoe=compare/10*goe;
        }
        return;
    }

    function CounterLIne() {
        scores=0;

        for(let i=0; i<arrScoresInMain[NameOfProperty].length; i++){
            scores=scores+arrScoresInMain[NameOfProperty][i];
        }
        scores=scores*x+bonusGoe;

        if(arrNamesInMain[NameOfProperty].length==2){
            let secondjump=arrNamesInMain[NameOfProperty][1].toLowerCase();
            CheckAxels(secondjump);
            if(CheckAxels(secondjump)){
                scores=scores*0.8;
                arrNamesInMain[NameOfProperty].push('SEQ');
            }
        }
        arrLineScores[NameOfProperty]=scores;

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

    function PrinterLine() {
        sectionINmain.find('.lineoutput-scores').text(scores.toFixed(2));
        sectionINmain.find('.lineoutput-name').text(arrNamesInMain[NameOfProperty].join('+'));
    }
    //==============КОНЕЦ функции DirectorLine=====================
})
//=========================КОНЕЦ MainCalculateV3==============================================================

})
//=============================КОНЕЦ ВСЕГО ДОКУМЕНТА============================================================
