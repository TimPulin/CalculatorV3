//вызов модального окна
jQuery('.boxoutput-name').click(function(){
    $('#ElementModal').modal();
});
//закрытие модального окна
$('.JS_Button_SaveModal').click(function() {
     HideModal();
})
$('.JS_Button_ResetModal').click(function() {
     HideModal();
})
function HideModal() {$('#ElementModal').modal('hide');}
//КОНЕЦ закрытие модального окна

//===========================Поведение кнопок=========================================

//========================Переключение вкладок в модальном окне==
$(document).ready(function(){
    let Iam;
    let Index;
    let Title_Modal;
    let section;
    $('.tabCalc-link').click(function(){
        Iam=$(this);
        Index=Iam.closest('.tabCalc-links').find('.tabCalc-link').index(Iam);
        Title_Modal=Iam.val();
        AddRemove_Active();
        ResetModal(Iam);
        ShowHide_tabel ();
        ShowHeader(Iam);
        Print_Title_Modal();
    });

    function AddRemove_Active(){
        Iam.closest('.tabCalc-links').find('.tabCalc-link').each(function(index){
            $(this).removeClass('active');
        });
        Iam.addClass('active');
    };

    function ShowHide_tabel(){
        Iam.closest('.tabCalc-wrap').find('.tabCalc-content').each(function(index){
            if (index==Index){
                $(this).removeClass('hide');
            }
           else {$(this).addClass('hide');}
        });
    };


    function Print_Title_Modal(){
        Iam.closest('.JS_Section-modal').find('.headeroutput-title').text(Title_Modal);
    };

});
//========================КОНЕЦ Переключение вкладок в модальном окне==

//=======================закрытие экранов "выбор значения атрибута элемента" и открытие заголовка модульного окна=======
$(document).ready(function () {
    let Iam;
    $('.JS_Fly, .JS_ChangeLeg, .JS_V, .JS_Galka, .JS_Edge').click(function(){
        Iam=$(this);
        Hide_HeadersSections(Iam);
        ShowHeader(Iam);
    })
})

function ShowHeader(Iam) {
    $('#header_title').removeClass('hide');
    return ;
}
function Hide_HeadersSections(Iam) {
    Iam.closest('.JS_Section-modal').find('.mod-header .JS_Section').each(function(index) {
        $(this).addClass('hide');
    })
    return;
}
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
//===============================КОНЕЦ поведение кнопок при выборе значения атрибута==========

$(document).ready(function() {
    $('.JS_Level, .JS_Rotation').click(function() {
        $(this).addClass('active activeColor');

    })
})



$(document).ready(function() {
    let Iam;
    let Val_Iam;
    let IamModal;
    let ID;
    //====================вызов экрана для выбора значения атрибута элемента==========
    $('.JS_Name, .JS_Level, .JS_Rotation').click(function() {
        Iam=$(this);
        Val_Iam=$(this).val();
        ID='#'+Iam.attr('name');
        Hide_HeadersSections(Iam)
        $(ID).removeClass('hide');
        addClassActiveTo_JS_ButtonModal();
    })

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
        $('#header_title').removeClass('hide');
    })
})
//=====================КОНЕЦ работа кнопок на экране для выбора значения атрибута элемента====

//========================добавление/удаление прыжка в модальном окне==================
    //ДОЛЖНО БЫТЬ ВЫШЕ @разблокировка кнопок "добавить прыжок"@
$(document).ready(function() {
    let section;

      $('.JS_AddJump').click(function() {
          $(this).closest('.JS_Section-Table').find('.JS_Section-El.hide:first').removeClass('hide').addClass('active');
      })
      $('.JS_RemoveJump').click(function() {
          section=$(this).closest('.JS_Section-Table').find('.JS_Section-El.active:last')
          ResetButtons(section);
          section.removeClass('active').addClass('hide');;
      })
})
//=========================КОНЕЦ добавление/удаление прыжка в модальном окне==================

//======================Блокировка/Разблокировка кнопок==================================================
$(document).ready(function () {
    let amount;


//==блокировка/разблокировка кнопки "E"
$(document).ready(function() {
    let section;
    let button;
    $('.JS_Name').click(function() {
        section=$(this).closest('.JS_Section-El');
    })
    $('.JS_ButtonModal[value="F"], .JS_ButtonModal[value="Lz"]').click(function() {
        button=section.find('.JS_Edge');
        RemoveDisabled(button);
    })
    $('#jumps .JS_ButtonModal:not(.JS_ButtonModal[value="F"], #jumps .JS_ButtonModal[value="Lz"])').click(function() {
        button=section.find('.JS_Edge');
        SetDisabled(button);
        RemoveClassActive(button);
    })
})
//==КОНЕЦ блокировка/разблокировка кнопки "E"

//===блокировка/разблокировка кнопок "добавить прыжок" и "удалить прыжок"
$(document).ready(function() {
    let button;

    $('#jumps .JS_ButtonModal, #ElementModal .JS_RemoveJump').click(function () {
        button=$('.JS_AddJump');
        CheckAmountLinesHide();
        if(amount != 0){
            RemoveDisabled(button);
        }
    })

    $('.JS_RemoveJump').click(function () {
        button=$(this);
        CheckAmountLinesHide();
        if(amount == 2){
            SetDisabled(button);
        }
    })

    $('.JS_AddJump').click(function () {
        button=$(this);
        SetDisabled(button);
        button=$('.JS_RemoveJump');
        RemoveDisabled(button);
    })

})
//===КОНЕЦ блокировка/разблокировка кнопок "добавить прыжок" и "удалить прыжок"




    //==========служебные функции блокировки/разблокировки кнопок секциип прыжки=====
    function RemoveDisabled(button) {
        button.prop('disabled', false);
        return ;
    }

    function SetDisabled(button) {
        button.prop('disabled', true);
        return ;
    }

    function CheckAmountLinesHide() {
        amount=$('#ElementModal .JS_Section-El.hide').length;
        return;
    }
    //==========служебные функции блокировки/разблокировки кнопок секциип прыжки=====


})
//======================КОНЕЦ Блокировка/Разблокировка кнопок===================================






//======================служебные функции======================
function RemoveClassActive(button) {
    button.removeClass('active activeColor');
    return ;
}
function ResetModal(Iam) {
    section=Iam.closest('.JS_Section-modal');
    ResetButtons(section);
    $('.JS_Section-El.active').addClass('hide');
    section.find('.headeroutput-name').val('');
    section.find('.headeroutput-scores').val('0.00');
    $('#ElementModal .JS_RemoveJump, #ElementModal .JS_AddJump').prop('disabled', true);
    return;
}
function ResetButtons(section) {
    section.find('.JS_Button').removeClass('active activeColor');
    section.find('.JS_Name').val('элемент');
    section.find('.JS_Level').val('B');
    section.find('.JS_Rotation').val('1');
    section.find('.lineoutput-scores').text('0.00');
    section.find('.JS_Edge').prop('disabled', true);

}
//======================КОНЕЦ служебные функции======================
