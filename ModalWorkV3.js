//==================вызов и закрытие модального окна======================
$(document).ready(function() {
    let Iam;
    //вызов модального окна
    jQuery('.boxoutput-name').click(function(){
        $('#ElementModal').modal();
    });
    //закрытие модального окна
    $('.JS_Button_SaveModal').click(function() {
         HideModal();
    })
    $('.JS_Button_ResetModal').click(function() {
        Iam=$(this);
        HideModal();
        ResetModal(Iam);
    })
    function HideModal() {$('#ElementModal').modal('hide');}
    //КОНЕЦ закрытие модального окна
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
        Iam.closest('.tabCalc-links').find('.tabCalc-link').each(function(index){
            $(this).removeClass('active');
        });
        Iam.addClass('active');
    };

    function ShowHide_tabel(){
        Iam.closest('.tabCalc-wrap').find('.tabCalc-content').addClass('hide');
        Iam.closest('.tabCalc-wrap').find('.tabCalc-content').eq(Index).removeClass('hide');
    };


    function Print_Title_Modal(){
        Iam.closest('.JS_Section-modal').find('.headeroutput-title').text(Title_Modal);
    };

});
//========================КОНЕЦ Переключение вкладок в модальном окне==

//====================вызов экрана для выбора значения атрибута элемента==========
$(document).ready(function() {
    let Iam,
        Val_Iam,
        IamModal,
        ID;
    $('.JS_Name, .JS_Level, .JS_Rotation').click(function() {
        Iam=$(this);
        Val_Iam=$(this).val();
        ID='#'+Iam.attr('name');
        Iam.closest('.JS_Section-modal').find('.mod-header .JS_Section').not($(ID)).addClass('hide');
        $(ID).toggleClass('hide');
        CheckClass();
    })

    function CheckClass() {
        if($(ID).hasClass('hide')){
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

    $('.JS_Fly, .JS_ChangeLeg, .JS_V, .JS_Edge').click(function() {
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
    $('#ElementModal .JS_ButtonModal').click(function() {
        Iam=$(this);
        Iam.closest('.JS_Section').find('.JS_ButtonModal').each(function(index){
            jQuery(this).removeClass('active activeColor');
        })
        Iam.addClass('active activeColor');
        Hide_HeadersSections(Iam);
        ShowHeader();
    })
})
//=====================КОНЕЦ работа кнопок на экране для выбора значения атрибута элемента====

//========================добавление/удаление прыжка в модальном окне==================
    //ДОЛЖНО БЫТЬ ВЫШЕ @разблокировка кнопок "добавить прыжок"@
$(document).ready(function() {
    let section,
        Iam;

      $('#ElementModal .JS_AddJump').click(function() {
          Iam=$(this);
          $(this).closest('.JS_Section-Table').find('.JS_Section-El.hide:first').removeClass('hide').addClass('active');
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
                if(amount != 0){
                    $('#ElementModal .JS_AddJump').prop('disabled', false);
                }
            })
            $('#ElementModal .JS_RemoveJump').click(function () {
                Iam=$(this);
                CheckAmountLinesHide();
                if(amount != 0){
                    $('#ElementModal .JS_AddJump').prop('disabled', false);
                }
            })

            $('.JS_RemoveJump').click(function () {
                Iam=$(this);
                CheckAmountLinesHide();
                if(amount == 2){
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
                     if(amount==0){
                         $('#ElementModal .JS_RemoveJump').trigger('click');
                     }
                     $('#ElementModal .JS_AddJump').prop('disabled', true);
                 }else {
                     $('#ElementModal .JS_AddJump').prop('disabled', false);
                }
             })
             //КОНЕЦ блокировка/разблокировка кнопки "добавить прыжок" в зависимости от кнопки "A"

            function CheckAmountLinesHide() {
                amount=$(Iam).closest('.JS_Section-Table').find('.JS_Section-El.hide').length;
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
                IndexT=$(this).closest('.JS_Section-tables').find('.JS_Section-Table').index(table);
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
                if (amount==2){
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






//======================служебные функции======================
const BUTTON_EU=$('#jumps .JS_ButtonModal[value="Eu"]'),
      BUTTON_A=$('#jumps .JS_ButtonModal[value="A"]'),
      BUTTON_ROTATION=$('#ElementModal .JS_Section-tables .JS_Section-Table:eq(2) .JS_Section-El:eq(1) .JS_Rotation'),
      BUTTON_CHSQ=$('#steps .JS_ButtonModal[value="ChSq"]'),
      BUTTON_STEPLEVEL=$('#ElementModal .JS_Section-tables .JS_Section-Table:eq(0) .JS_Level');


function ResetModal(Iam) {
    section=Iam.closest('.JS_Section-modal');
    ResetButtons(section);
    Hide_HeadersSections(Iam);
    ShowHeader();
    $('.JS_Section-El.active').addClass('hide');
    section.find('.headeroutput-name').val('');
    section.find('.headeroutput-scores').val('0.00');
    $('#ElementModal .JS_RemoveJump, #ElementModal .JS_AddJump').prop('disabled', true);
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
    $('#header_title').removeClass('hide');
    return ;
}
function Hide_HeadersSections(Iam) {
    Iam.closest('.JS_Section-modal').find('.mod-header .JS_Section').addClass('hide');
    return;
}
//======================КОНЕЦ служебные функции======================
