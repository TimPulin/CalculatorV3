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
        ShowHide_tabel ();
        Print_Title_Modal();
    });

    function AddRemove_Active(){
        Iam.closest('.tabCalc-links').find('.tabCalc-link').each(function(index){
            $(this).removeClass('active');
        });
        Iam.addClass('active');
    };

    function ShowHide_tabel(){
        Iam.closest('.JS_Section-tables').find('.JS_Tab').each(function(index){
            if (index==Index){
                $(this).removeClass('hide');
            }
           else {$(this).addClass('hide');}
        });
    };

    function Print_Title_Modal(){
        Iam.closest('.JS_Section-modal').find('.header-title').html(Title_Modal);
    };
});
//========================КОНЕЦ Переключение вкладок в модальном окне==

//=========================добавление/удаление прыжка в модальном окне==================
$(document).ready(function() {
   let Iam;
   $('.JS_AddJump').click(function() {

        $(this).closest('.JS_Section-Jumps').find('.JS_Section-El.hide:first').removeClass('hide').addClass('active');
   })
    $('.JS_RemoveJump').click(function() {
        $(this).closest('.JS_Section-Jumps').find('.JS_Section-El.active:first').removeClass('active').addClass('hide');
    })
})
//=========================КОНЕЦ добавление/удаление прыжка в модальном окне==================

//====================вызов вкладки для выбора значения атрибута элемента==========
$(document).ready(function() {
    let Iam;
    let ID;
    $('.JS_Button-CallModal').click(function() {
        Iam=$(this);
        ID='#'+Iam.attr('name');
        Iam.closest('.JS_Section-modal').find('.mod-header .JS_Section').each(function(index) {
            $(this).addClass('hide');
        })
        $(ID).removeClass('hide');
    })
})
//====================КОНЕЦ вызов вкладки для выбора значения атрибута элемента==========
