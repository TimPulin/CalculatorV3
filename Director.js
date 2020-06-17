//======================ГЛОБАЛЬНЫЕ служебные функции======================

let ID,
    Ich,
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


//======================ГЛОБАЛЬНЫЕ служебные функции======================
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
    Iam.closest('.JS_Section-Modal').find('.mod-header .JS_Section').removeClass('active');
    return;
}
//======================КОНЕЦ служебные функции======================
