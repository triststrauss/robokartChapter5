const BLOCK_HEIGHT = 35;

const INSTRUMENT_BLOCK_WIDTH = 60;
const INSTRUMENT_BLOCK_HEIGHT = 60;

const NOTE_BLOCK_WIDTH = 60;
const NOTE_BLOCK_HEIGHT = 30;




var isPlaying = false;
var code = '';
var current_lesson = 0;
var interval = null;

Blockly.Blocks["repeater"] = {
    init: function () {
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setOutput(false);
        this.setColour("#16de34");
        this.setTooltip('Repeat block');
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(3, 0, 20), 'TIMES');
        this.appendStatementInput('DO')
            .appendField(new Blockly.FieldImage('img/block_imgs/repeater.png', BLOCK_HEIGHT * 1.6, BLOCK_HEIGHT * 1.6));
    }
};
Blockly.JavaScript['repeater'] = Blockly.JavaScript['controls_repeat_ext'];

Blockly.Blocks['start_block'] = {
    init: function () {
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour("#f00");
        this.setTooltip('Starting block');
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("img/block_imgs/play.png", 150, BLOCK_HEIGHT));
    }
};

Blockly.JavaScript['start_block'] = function (block) {
    return 'isPlaying=true;'
};


// Blockly.Blocks['guitar_block'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("GUITAR ")
//             .appendField(new Blockly.FieldDropdown([["A3", "A3"], ["A4", "A4"],
//                 ["B3", "B3"],
//                 ["B4", "B4"],
//                 ["C3", "C3"],
//                 ["C4", "C4"],
//                 ["D3", "D3"],
//                 ["D4", "D4"],
//                 ["E3", "E3"],
//                 ["E4", "E4"],
//                 ["F3", "F3"],
//                 ["F4", "F4"],
//                 ["G3", "G3"],
//                 ["G4", "G4"]]), "NAME");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
//
//
// Blockly.JavaScript['guitar_block'] = function (block) {
//     dropDown = block.getFieldValue('NAME');
//     var code = 'actionQ.push(new SoundsQ("soundfonts/guitar/" + dropDown + ".mp3"));';
//     return code;
// };
//
// Blockly.Blocks['drum_block'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("DRUM ")
//             .appendField(new Blockly.FieldDropdown([["A3", "A3"], ["A4", "A4"],
//                 ["B3", "B3"],
//                 ["B4", "B4"],
//                 ["C3", "C3"],
//                 ["C4", "C4"],
//                 ["D3", "D3"],
//                 ["D4", "D4"],
//                 ["E3", "E3"],
//                 ["E4", "E4"],
//                 ["F3", "F3"],
//                 ["F4", "F4"],
//                 ["G3", "G3"],
//                 ["G4", "G4"]]), "NAME");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
//
//
// Blockly.JavaScript['drum_block'] = function (block) {
//     dropDown = block.getFieldValue('NAME');
//     var code = 'actionQ.push(new SoundsQ("soundfonts/drum/" + dropDown + ".mp3"));';
//     return code;
// };
//
// Blockly.Blocks['flute_block'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("FLUTE ")
//             .appendField(new Blockly.FieldDropdown([["A3", "A3"], ["A4", "A4"],
//                 ["B3", "B3"],
//                 ["B4", "B4"],
//                 ["C3", "C3"],
//                 ["C4", "C4"],
//                 ["D3", "D3"],
//                 ["D4", "D4"],
//                 ["E3", "E3"],
//                 ["E4", "E4"],
//                 ["F3", "F3"],
//                 ["F4", "F4"],
//                 ["G3", "G3"],
//                 ["G4", "G4"]]), "NAME");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
//
//
// Blockly.JavaScript['flute_block'] = function (block) {
//     dropDown = block.getFieldValue('NAME');
//     var code = 'actionQ.push(new SoundsQ("soundfonts/flute/" + dropDown + ".mp3"));';
//     return code;
// };

var frameCount;
var dropDown;

Blockly.Blocks['block_guitar'] = {
    init: function () {
        this.appendValueInput("guitar")
            .setCheck(null)
            .appendField(new Blockly.FieldImage("img/block_imgs/guitar.png", INSTRUMENT_BLOCK_WIDTH, INSTRUMENT_BLOCK_HEIGHT));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['block_guitar'] = function (block) {
    var value_guitar = Blockly.JavaScript.valueToCode(block, 'guitar', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    soundNote = value_guitar.replace(/[\(\)']+/g, '');
    console.log(soundNote);

    switch (soundNote) {
        case 'A3':
            return 'actionQ.push(new SoundsQ("soundfonts/guitar/A3.mp3")); \n';
        case 'A4':
            return 'actionQ.push(new SoundsQ("soundfonts/guitar/A4.mp3")); \n';
        case 'B3':
            return 'actionQ.push(new SoundsQ("soundfonts/guitar/B3.mp3")); \n';
        case 'B4':
            return 'actionQ.push(new SoundsQ("soundfonts/guitar/B4.mp3")); \n';
        case 'C3':
            return 'actionQ.push(new SoundsQ("soundfonts/guitar/C3.mp3")); \n';
        case 'C4':
            return 'actionQ.push(new SoundsQ("soundfonts/guitar/C4.mp3")); \n';
        case 'D3':
            return 'actionQ.push(new SoundsQ("soundfonts/guitar/D3.mp3")); \n';
        case 'D4':
            return 'actionQ.push(new SoundsQ("soundfonts/guitar/D4.mp3")); \n';
        case 'E3':
            return 'actionQ.push(new SoundsQ("soundfonts/guitar/E3.mp3")); \n';
    }
};


var block = Blockly.Blocks['block_note'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("img/block_imgs/note.png", NOTE_BLOCK_WIDTH, NOTE_BLOCK_HEIGHT))
            .appendField(new Blockly.FieldDropdown([["A3", "A3"], ["A4", "A4"],
                ["B3", "B3"],
                ["B4", "B4"],
                ["C3", "C3"],
                ["C4", "C4"],
                ["D3", "D3"],
                ["D4", "D4"],
                ["E3", "E3"]]), "NAME");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['block_drum'] = {
    init: function () {
        this.appendValueInput("drum")
            .setCheck(null)
            .appendField(new Blockly.FieldImage("img/block_imgs/drum.png", INSTRUMENT_BLOCK_WIDTH, INSTRUMENT_BLOCK_HEIGHT));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['block_note'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code;
    // TODO: Assemble JavaScript into code variable.
    switch (dropdown_name)
    {
        case 'A3':
            code = 'A3';
            break;
        case 'A4':
            code = 'A4';
            break;
        case 'B3':
            code = 'B3';
            break;
        case 'B4':
            code = 'B4';
            break;
        case 'C3':
            code = 'C3';
            break;
        case 'C4':
            code = 'C4';
            break;
        case 'D3':
            code = 'D3';
            break;
        case 'D4':
            code = 'D4';
            break;
        case 'E3':
            code = 'E3';
            break;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];

};
var soundNote;

Blockly.JavaScript['block_drum'] = function (block) {
    var value_drum = Blockly.JavaScript.valueToCode(block, 'drum', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    soundNote = value_drum.replace(/[\(\)']+/g, '');
    console.log(soundNote);


    switch (soundNote) {
        case 'A3':
            return 'actionQ.push(new SoundsQ("soundfonts/drum/A3.mp3")); \n';
        case 'A4':
            return 'actionQ.push(new SoundsQ("soundfonts/drum/A4.mp3")); \n';
        case 'B3':
            return 'actionQ.push(new SoundsQ("soundfonts/drum/B3.mp3")); \n';
        case 'B4':
            return 'actionQ.push(new SoundsQ("soundfonts/drum/B4.mp3")); \n';
        case 'C3':
            return 'actionQ.push(new SoundsQ("soundfonts/drum/C3.mp3")); \n';
        case 'C4':
            return 'actionQ.push(new SoundsQ("soundfonts/drum/C4.mp3")); \n';
        case 'D3':
            return 'actionQ.push(new SoundsQ("soundfonts/drum/D3.mp3")); \n';
        case 'D4':
            return 'actionQ.push(new SoundsQ("soundfonts/drum/D4.mp3")); \n';
        case 'E3':
            return 'actionQ.push(new SoundsQ("soundfonts/drum/E3.mp3")); \n';
    }

};

Blockly.Blocks['block_trumpet'] = {
    init: function () {
        this.appendValueInput("trumpet")
            .setCheck(null)
            .appendField(new Blockly.FieldImage("img/block_imgs/trumpet.png", INSTRUMENT_BLOCK_WIDTH, INSTRUMENT_BLOCK_HEIGHT));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['block_trumpet'] = function (block) {
    var value_trumpet = Blockly.JavaScript.valueToCode(block, 'trumpet', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    soundNote = value_trumpet.replace(/[\(\)']+/g, '');
    console.log(soundNote);


    switch (soundNote) {
        case 'A3':
            return 'actionQ.push(new SoundsQ("soundfonts/trumpet/A3.mp3")); \n';
        case 'A4':
            return 'actionQ.push(new SoundsQ("soundfonts/trumpet/A4.mp3")); \n';
        case 'B3':
            return 'actionQ.push(new SoundsQ("soundfonts/trumpet/B3.mp3")); \n';
        case 'B4':
            return 'actionQ.push(new SoundsQ("soundfonts/trumpet/B4.mp3")); \n';
        case 'C3':
            return 'actionQ.push(new SoundsQ("soundfonts/trumpet/C3.mp3")); \n';
        case 'C4':
            return 'actionQ.push(new SoundsQ("soundfonts/trumpet/C4.mp3")); \n';
        case 'D3':
            return 'actionQ.push(new SoundsQ("soundfonts/trumpet/D3.mp3")); \n';
        case 'D4':
            return 'actionQ.push(new SoundsQ("soundfonts/trumpet/D4.mp3")); \n';
        case 'E3':
            return 'actionQ.push(new SoundsQ("soundfonts/trumpet/E3.mp3")); \n';
    }

};

Blockly.Blocks['block_glow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("GLOW")
            .appendField(new Blockly.FieldDropdown([["GREEN","green"], ["RED","red"], ["BLUE","blue"]]), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['block_glow'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.

    switch (dropdown_name)
    {
        case 'green':
            return 'changeGlow("#1efd08");\n';
        case 'blue':
            return 'changeGlow("#0b00fc");\n';
        case 'red':
           return  'changeGlow("#fc0000");\n';
    }
};
function run() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
    frameCount = 1;

    if (code != '' && isPlaying == false) {

        eval(code);
        actionQ[cursor].sound.play();
        interval = setInterval(runQ, 7 + parseInt(1));
    } else {
        alert('Empty script');
    }
}

function createBackgroundImage(index, x, y) {

    BGxPos = 0;
    BGyPos = 0;

    frame_rate = 15;

    if (step_count < frame_rate) {
        hero.src = 'img/sprites/option' + character_select + '/sprite1.png';
    } else if (step_count < frame_rate * 2) {
        hero.src = 'img/sprites/option' + character_select + '/sprite2.png';
    } else if (step_count < frame_rate * 3) {
        hero.src = 'img/sprites/option' + character_select + '/sprite3.png';
    } else if (step_count < frame_rate * 4) {
        hero.src = 'img/sprites/option' + character_select + '/sprite4.png';
    } else {
        step_count = 0;
    }

    step_count += 1;

    // if (warrior.direction == 1) {
    //     context.drawImage(hero, x + 25, y + 7);
    // } else {
    //     drawFlipped(hero, warrior.x + 25, warrior.y + 7);
    //
    // }


    if (displayTalk == true) {
        if (warrior.x + 130 > 500) {
            drawImage(talkL, warrior.x - 100, warrior.y - 80, 130, 100, 0);
        } else {
            drawImage(talkR, warrior.x + 50, warrior.y - 80, 130, 100, 0);
        }
        talkCount += 1;
        if (talkCount == 200) {
            talkCount = 0;
            displayTalk = false;
        }
    }
}

function runQ() {
    if (frameCount % 40 === 0) {
        cursor++;
        if (cursor < actionQ.length) {
            actionQ[cursor].sound.play();
        } else {
            isPlaying = false;
            stopInterval();
        }
    }
    frameCount++;
    console.log("Frame Count : " + frameCount);
}

// function drawFlipped(img, x, y) {
//     context.translate(x + img.width, y);
//
//     context.scale(-1, 1);
//     context.drawImage(img, 0, 0);
//
//     context.setTransform(1, 0, 0, 1, 0, 0);
// }

function drawImage(image, x, y, w, h, degrees) {
    // context.save();
    // context.translate(x + w / 2, y + h / 2);
    // context.rotate(degrees * Math.PI / 180.0);
    // context.translate(-x - w / 2, -y - h / 2);
    // context.drawImage(image, x, y, w, h);
    // context.restore();
}

function changeLesson(q) {
    warrior.direction = 1;
    workspace.clear();
    stopInterval();
    isPlaying = false;
    warrior.actionsQ = [];
    countX = 0;
    countY = 0;
    warrior.x = 0;
    warrior.y = 0;
    displayTalk = false;
    objective_completed = false;
    successContentEle.hidden = true;
    modalEle.hidden = true;
    charSelectEle.hidden = true;
    endContentEle.hidden = true;
    talkCount = 0;
    TipContentEle.hidden = true;
    FailureContentEle.hidden = true;
    collected_coins = [false, false, false, false, false, false, false, false, false];
    collected_items = [false, false];
    pocket = 0;
    // coverSound.play();

    selected = lesson_select.selectedIndex;
    if (q != null) {
        selected = q;
    }

    current_lesson = selected;

    lesson_select.selectedIndex = current_lesson;
    char_select.selectedIndex = character_select - 1;

    document.title = 'Lesson ' + (current_lesson + 1);
    console.log(selected);
    createBackgroundImage(current_lesson, 0, 0);
    displayTask(selected);

}

class Sprite {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = 1;
        this.actionsQ = []
    }
}

class SoundsQ {
    constructor(path) {
        this.sound = new Audio(path);
        this.sound.addEventListener("ended", function () {
            console.log("ended" + cursor)
        }, true);
        this.sound.loop = false;
    }
}

function collect_coin(x) {
    collected_coins[x] = true;
    collectSound.play();
}

function task_done() {
    objective_completed = true;
    createBackgroundImage(current_lesson, warrior.x, warrior.y);
    success_popup();
}

function success_popup() {
    isPlaying = false
    modalEle.hidden = false;
    collectSound.play();
    if (current_lesson == 7) {
        endContentEle.hidden = false;
    } else {
        successContentEle.hidden = false;
    }
}

function failure_popup() {
    isPlaying = false
    FailureContentEle.hidden = false;
    modalEle.hidden = false;
    failSound.play();
}

function stopInterval() {
    clearInterval(interval);
}

function selectCharacter(q) {
    if (q < 3) {
        character_select = q;
    } else {
        character_select = parseInt(char_select.value);
    }
    changeLesson(current_lesson);
}

function displayTip(index) {
    FailureContentEle.hidden = true;
    TipContentEle.hidden = false;
    modalEle.hidden = false;

    switch (index) {
        case 0:
            TipTextEle.innerHTML = 'Here is how the 1 Rupee coin looks like! &nbsp<img id="tip-image" src="img/rupees/1Rupee.png"/>';
            break;

        case 1:
            TipTextEle.innerHTML = 'Here is how the 2 Rupee coin looks like! &nbsp<img id="tip-image" src="img/rupees/2Rupee.png"/>';
            break;

        case 2:
            TipTextEle.innerHTML = 'Here is how the 5 Rupee coin looks like! &nbsp<img id="tip-image" src="img/rupees/5Rupee.png"/>';
            break;

        case 3:
            TipTextEle.innerHTML = 'Here is how the 10 Rupee note looks like! &nbsp<img id="tip-image" src="img/rupees/10Rupee.png"/>';
            break;

        case 4:
            TipTextEle.innerHTML = 'Here is how the 100 Rupee note looks like! &nbsp<img id="tip-image" src="img/rupees/100Rupee.png"/>';
            break;

        case 5:
            TipTextEle.innerHTML = "<center>These together equal 10 Rupee!<br><br><img src='img/rupees/5Rupee.png'/><img src='img/rupees/2Rupee.png'/><img src='img/rupees/2Rupee.png'/><img src='img/rupees/1Rupee.png'/></center>";
            break;

        case 6:
            TipTextEle.innerHTML = "Walk through the map using arrows and Repeat and collect sufficient amount of money. Once you've done it, go and buy a baloon";
            break;

        case 7:
            TipTextEle.innerHTML = "Make sure, that you've collected exactly 14 Rupee!";
            break;
    }

}

function displayTask(index) {
    var description = document.getElementById('description-text');

    switch (index) {
        case 0:
            description.innerHTML = 'Select instrument and play one sound.';
            break;

        case 1:
            description.innerHTML = "Select instrument and play 3-4 sounds.";
            break;

        case 2:
            description.innerHTML = "Add two instrument and play one sound of each instrument.";
            break;

        case 3:
            description.innerHTML = "Add two instrument and play three sounds of each instrument.";
            break;

        case 4:
            description.innerHTML = "Add two instrument and play three sounds of each instrument and change background.";
            break;

        case 5:
            description.innerHTML = "Add two instrument and play three sounds of each instrument and change background and change lighting effect.";
            break;

        case 6:
            description.innerHTML = "Play melody like happy birthday.";
            break;

        case 7:
            description.innerHTML = "";
            break;
    }
    description.innerHTML += '&nbsp;<img id="tip" title="Click here to show the hint!" src="img/items/light_bulb.png"onclick="displayTip(current_lesson)"/>'
}

// var canvas = document.querySelector('canvas');
// var context = canvas.getContext('2d');
var lesson_select = document.getElementById("lesson-select");
// var speed_select = document.getElementById("speed-select");
var char_select = document.getElementById("character-select");

var modalEle = document.getElementById("modal");
var successContentEle = document.getElementById("success-content");
var FailureContentEle = document.getElementById("failure-content");
var endContentEle = document.getElementById("end-content");
var TipContentEle = document.getElementById("tip-content");
var TipTextEle = document.getElementById("tip_text");
var charSelectEle = document.getElementById("character-select-content");

warrior = new Sprite(0, 0);


var hero = new Image();

// var street_upper_left = new Image();
// var street_upper = new Image();
// var street_upper_right = new Image();
// var street_right = new Image();
// var street_bottom_right = new Image();
// ;
// var street_bottom = new Image();
// var street_bottom_left = new Image();
// var street_left = new Image();
// var street_center = new Image();
//
// var rupee1 = new Image();
// var rupee2 = new Image();
// var rupee5 = new Image();
// var rupee10 = new Image();
// var rupee100 = new Image();

var baloon = new Image();
var cricket_bat = new Image();
var watch = new Image();
var bike = new Image();

var talkL = new Image();
var talkR = new Image();
var displayTalk = false;
var talkCount = 0;

// street_upper_left.src = 'img/street/upper_left.png';
// street_upper.src = 'img/street/upper.png';
// street_upper_right.src = 'img/street/upper_right.png';
// street_right.src = 'img/street/right.png';
// street_bottom_right.src = 'img/street/bottom_right.png';
// street_bottom.src = 'img/street/bottom.png';
// street_bottom_left.src = 'img/street/bottom_left.png';
// street_left.src = 'img/street/left.png';
// street_center.src = 'img/street/center.png';
//
// rupee1.src = 'img/rupees/1Rupee.png'
// rupee2.src = 'img/rupees/2Rupee.png'
// rupee5.src = 'img/rupees/5Rupee.png'
// rupee10.src = 'img/rupees/10Rupee.png'
// rupee100.src = 'img/rupees/100Rupee.png'

baloon.src = 'img/items/baloon.png';
cricket_bat.src = 'img/items/cricket_bat.png';
watch.src = 'img/items/watch.png';
bike.src = 'img/items/bike.png';

talkL.src = 'img/talk/talkL.png'
talkR.src = 'img/talk/talkR.png'

var stepSound = new Audio('sounds/step.wav');
var collectSound = new Audio('sounds/collect.wav');
var coverSound = new Audio('sounds/cover.wav');
var failSound = new Audio('sounds/fail.wav');


soundsQ = new SoundsQ();


coverSound.volume = 0.6;
stepSound.loop = false;
collectSound.loop = false;
failSound.loop = false;

var objective_completed = false;
var map;
var selected;
var BGxPos;
var BGyPos;
var mod;
var countX = 0;
var countY = 0;
var step_count = 0;
var character_select = 1;
var frame_rate;

var collected_coins = [false, false, false, false, false, false, false, false, false];
var collected_items = [false, false];
var pocket = 0;

var map = [
    [0, 1, 1, 1, 2],
    [7, 8, 8, 8, 3],
    [7, 8, 8, 8, 3],
    [7, 8, 8, 8, 3],
    [6, 5, 5, 5, 4]
];

window.onload = function () {
    // modalEle.hidden = false;
    // charSelectEle.hidden = false;
}

var actionQ = [];

var cursor = 0;

var glow = document.getElementById("blocklyDiv");
var glowObj = document.getElementById("glow");

function changeGlow(color)
{
    glow.style.boxShadow = "0px 0px 40px 20px "+ color;
    glowObj.style.boxShadow = "0 0 60px 30px #fff,  /* inner white */\n" +
        "          0 0 100px 60px #f0f, /* middle magenta */\n" +
        "          0 0 140px 90px " + color;
}
