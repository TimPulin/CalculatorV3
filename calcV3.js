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
    $('.tabCalc-link').click(function(){
        Iam=$(this);
        Index=Iam.closest('.tabCalc-links').find('.tabCalc-link').index(Iam);
        Title_Modal=Iam.val();
        AddRemove_Active();
        ResetModal();
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
        Iam.closest('.tabCalc-wrap').find('.tabCalc-content').each(function(index){
            if (index==Index){
                $(this).removeClass('hide');
            }
           else {$(this).addClass('hide');}
        });
    };

    function ResetModal() {
        Iam.closest('.JS_Section-modal').find('.JS_Button').removeClass('active activeColor');
        Iam.closest('.JS_Section-modal').find('.header-name').val('');
        return;
    }

    function ShowHeader() {
        Hide_HeadersSections(Iam);
        $('#header_title').removeClass('hide');
    }

    function Print_Title_Modal(){
        Iam.closest('.JS_Section-modal').find('.header-title').html(Title_Modal);
    };

});
//========================КОНЕЦ Переключение вкладок в модальном окне==



//=======================закрытие экранов "выбор значения атрибута элемента"=======
function Hide_HeadersSections(Iam) {
    Iam.closest('.JS_Section-modal').find('.mod-header .JS_Section').each(function(index) {
        $(this).addClass('hide');
    })
    return;
}
//=======================КОНЕЦ закрытие экранов "выбор значения атрибута элемента"=======

//=========================добавление/удаление прыжка в модальном окне==================
$(document).ready(function() {
   $('.JS_AddJump').click(function() {
        $(this).closest('.JS_Section-Table').find('.JS_Section-El.hide:first').removeClass('hide').addClass('active');
   })
    $('.JS_RemoveJump').click(function() {
        $(this).closest('.JS_Section-Table').find('.JS_Section-El.active:first').removeClass('active').addClass('hide');
    })
})
//=========================КОНЕЦ добавление/удаление прыжка в модальном окне==================

//===============================активация кнопок при выборе значения атрибута==========
$(document).ready(function() {
    let Iam;

    $('.JS_Button-Toggle').click(function() {
        $(this).toggleClass('active activeColor');
    })

    $('.JS_Button-Switch').click(function() {
        Iam=$(this);
        Iam.toggleClass('active activeColor');
        Iam.parent().find('.JS_Button-Switch').not(Iam).each(function(index){
            jQuery(this).removeClass('active activeColor');
        })
    })
})
//===============================КОНЕЦ поведение кнопок при выборе значения атрибута==========

//====================вызов экрана для выбора значения атрибута элемента и обратная связь==========
$(document).ready(function() {
    let Iam;
    let Iam_CallModal;
    let Val_IamCalModal;
    let Val_ButtonModal;
    let ID;

    $('.JS_Button-CallModal').click(function() {
        Iam_CallModal=$(this);
        Val_IamCalModal=$(this).val();
        ID='#'+Iam_CallModal.attr('name');
        Hide_HeadersSections(Iam_CallModal)
        $(ID).removeClass('hide');
        addClassActiveTo_JS_ButtonModal();
    })

    $('.JS_ButtonModal').click(function() {
        Iam=$(this);
        Val_ButtonModal=Iam.val();
        Iam.closest('.JS_Section').find('.JS_ButtonModal').each(function(index){
            jQuery(this).removeClass('active activeColor');
        })
        Iam.addClass('active activeColor');
        Hide_HeadersSections(Iam);
        $('#header_title').removeClass('hide');
        AddInMain_ValButtonModal();
    })

    function addClassActiveTo_JS_ButtonModal(){
        $(ID).find(".JS_ButtonModal").each(function(index){
            jQuery(this).removeClass('active activeColor');
            if(Val_IamCalModal==jQuery(this).val()){
                jQuery(this).addClass('active activeColor');
            };
        });
    };
    function AddInMain_ValButtonModal(){
        Iam_CallModal.val(Val_ButtonModal);
        Iam_CallModal.addClass('active activeColor');
        Iam_CallModal.closest('.JS_Section-El').find('.JS_Button-CallModal:last').addClass('active activeColor');
        return
    };
})
//====================КОНЕЦ вызов экрана "выбор значения атрибута элемента" и обратная связь==========
