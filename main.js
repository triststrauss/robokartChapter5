const BLOCK_HEIGHT = 35;

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

Blockly.JavaScript['start_block'] = function(block) {
	return 'isPlaying=true;'
};

Blockly.Blocks['move_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/block_imgs/walk_right.png", 70, BLOCK_HEIGHT));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('Walk right');
    this.setColour('#498bf5');
  }
};

Blockly.JavaScript['move_right'] = function(block) {

  return "warrior.actionsQ.push('warrior.direction=1;');warrior.actionsQ.push('warrior.x+=1;');"
};

Blockly.Blocks['move_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/block_imgs/walk_left.png", 70, BLOCK_HEIGHT));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('Walk left');
    this.setColour('#498bf5');
  }
};

Blockly.JavaScript['move_left'] = function(block) {

  return "warrior.actionsQ.push('warrior.direction=-1;');warrior.actionsQ.push('warrior.x-=1;');"
};

Blockly.Blocks['move_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/block_imgs/walk_up.png", 70, BLOCK_HEIGHT));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('Walk up');
    this.setColour('#498bf5');
  }
};

Blockly.JavaScript['move_up'] = function(block) {

  return "warrior.actionsQ.push('warrior.y-=1;');"
};

Blockly.Blocks['move_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/block_imgs/walk_down.png", 70, BLOCK_HEIGHT));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('Walk down');
    this.setColour('#498bf5');
  }
};

var x=0;
Blockly.JavaScript['move_down'] = function(block) {

  return "warrior.actionsQ.push('warrior.y+=1;');"
};


function run(){
var code = Blockly.JavaScript.workspaceToCode(workspace);
console.log(code);

if(code != '' && isPlaying==false){

eval(code);
interval = setInterval(runQ, 7+parseInt(speed_select.value));
}else{
	alert('Empty script');
}
}

function createBackgroundImage(index, x, y){

BGxPos = 0;
BGyPos = 0;

for(var i=0; i<map.length; i++){
	for(var j=0; j<map[i].length; j++){

		if(map[i][j] == 0){
			context.drawImage(street_upper_left, BGxPos, BGyPos)
		}else if(map[i][j] == 1){
			context.drawImage(street_upper, BGxPos, BGyPos)
		}else if(map[i][j] == 2){
			context.drawImage(street_upper_right, BGxPos, BGyPos)
		}else if(map[i][j] == 3){
			context.drawImage(street_right, BGxPos, BGyPos)
		}else if(map[i][j] == 4){
			context.drawImage(street_bottom_right, BGxPos, BGyPos)
		}else if(map[i][j] == 5){
			context.drawImage(street_bottom, BGxPos, BGyPos)
		}else if(map[i][j] == 6){
			context.drawImage(street_bottom_left, BGxPos, BGyPos)
		}else if(map[i][j] == 7){
			context.drawImage(street_left, BGxPos, BGyPos)
		}else if(map[i][j] == 8){
			context.drawImage(street_center, BGxPos, BGyPos)
		}

		BGxPos += 100;
	}
	BGxPos=0;
	BGyPos += 100;
}

switch(current_lesson){
	case 0:
		if(objective_completed==false){
			drawImage(rupee1, 211, 211, 80, 80, 0);
		}
	break;

	case 1:
		if(objective_completed==false){
			drawImage(rupee2, 411, 211, 80, 80, 0);
		}
		drawImage(rupee1, 111, 311, 80, 80, 0);

	break;

	case 2:
		if(objective_completed==false){
			drawImage(rupee5, 318, 418, 66, 65, 0);
		}
		drawImage(rupee2, 311, 211, 80, 80, 0);
		drawImage(rupee1, 111, 311, 80, 80, 0);
	break;

	case 3:
		if(objective_completed==false){
			drawImage(rupee10, 305, 25, 93, 43, -45);
		}
		drawImage(rupee2, 211, 11, 80, 80, 0);
		drawImage(rupee100, 105, 225, 91, 42, -45);
		drawImage(rupee5, 318, 318, 66, 65, 0);
	break;

	case 4:
		if(objective_completed==false){
			drawImage(rupee100, 5, 425, 93, 43, -45);
		}
		drawImage(rupee10, 5, 225, 93, 43, 45);
		drawImage(rupee10, 105, 225, 93, 43, 45);
		drawImage(rupee5, 318, 118, 66, 65, 0);

	break;

	case 5:
		if(objective_completed==false){
			drawImage(baloon, 225, 205, 43, 93, 0);
		}

		if(collected_coins[0]==false){
			drawImage(rupee5, 318, 318, 66, 65, 0);
		}
		if(collected_coins[1]==false){
			drawImage(rupee2, 111, 411, 80, 80, 0);
		}
		if(collected_coins[2]==false){
			drawImage(rupee2, 411, 211, 80, 80, 0);
		}
		if(collected_coins[3]==false){
			drawImage(rupee1, 311, 11, 80, 80, 0);
		}
		if(collected_coins[4]==false){
			drawImage(rupee1, 11, 211, 80, 80, 0);
		}
	break;

	case 6:
		if(collected_items[0]==false){
			drawImage(cricket_bat, 333, 102, 35, 98, -165);
		}
		if(collected_items[1]==false){
			drawImage(watch, 131, 306, 39, 88, 0);
		}

		if(collected_coins[0]==false){
			drawImage(rupee10, 305, 325, 93, 43, -45);
		}
		if(collected_coins[1]==false){
			drawImage(rupee5, 418, 18, 66, 65, 0);
		}
		if(collected_coins[2]==false){
			drawImage(rupee5, 118, 418, 66, 65, 0);
		}
		if(collected_coins[3]==false){
			drawImage(rupee5, 218, 118, 66, 65, 0);
		}
		if(collected_coins[4]==false){
			drawImage(rupee2, 11, 111, 80, 80, 0);
		}
		if(collected_coins[5]==false){
			drawImage(rupee2, 211, 11, 80, 80, 0);
		}
		if(collected_coins[6]==false){
			drawImage(rupee2, 411, 411, 80, 80, 0);
		}
		if(collected_coins[7]==false){
			drawImage(rupee1, 411, 211, 80, 80, 0);
		}
		if(collected_coins[8]==false){
			drawImage(rupee1, 111, 211, 80, 80, 0);
		}
	break;

	case 7:
		if(objective_completed==false){
			drawImage(bike, 204, 320, 93, 60, 0);
		}

		if(collected_coins[0]==false){
			drawImage(rupee5, 418, 118, 66, 65, 0);
		}
		if(collected_coins[1]==false){
			drawImage(rupee5, 18, 318, 66, 65, 0);
		}
		if(collected_coins[2]==false){
			drawImage(rupee2, 311, 411, 80, 80, 0);
		}
		if(collected_coins[3]==false){
			drawImage(rupee2, 211, 111, 80, 80, 0);
		}
		if(collected_coins[4]==false){
			drawImage(rupee1, 111, 211, 80, 80, 0);
		}
		if(collected_coins[5]==false){
			drawImage(rupee1, 111, 411, 80, 80, 0);
		}
		if(collected_coins[6]==false){
			drawImage(rupee1, 311, 211, 80, 80, 0);
		}
	break;
}
	frame_rate=15;
	
	if(step_count<frame_rate){
		hero.src = 'img/sprites/option'+character_select+'/sprite1.png';
	}else if(step_count<frame_rate*2){
		hero.src = 'img/sprites/option'+character_select+'/sprite2.png';	
	}else if(step_count<frame_rate*3){
		hero.src = 'img/sprites/option'+character_select+'/sprite3.png';	
	}else if(step_count<frame_rate*4){
		hero.src = 'img/sprites/option'+character_select+'/sprite4.png';	
	}else{
		step_count=0;
	}

	step_count+=1;

	if(warrior.direction==1){
		context.drawImage(hero, x+25, y+7);
	}else{
		drawFlipped(hero, warrior.x+25, warrior.y+7);	

	}


if(displayTalk==true){
	if(warrior.x+130>500){
		drawImage(talkL, warrior.x-100, warrior.y-80, 130, 100, 0);
	}else{
		drawImage(talkR, warrior.x+50, warrior.y-80, 130, 100, 0);
	}
	talkCount+=1;
	if(talkCount==200){
		talkCount=0;
		displayTalk=false;
	}
}
}

function runQ() {
		
	if(warrior.actionsQ.length<1){
		isPlaying=false;	
		stopInterval();		
	}
	
	if(warrior.actionsQ.length<1 && objective_completed==false){
		failure_popup();
	}
	
	
	if(isPlaying==true){
	eval(warrior.actionsQ[0]);
	createBackgroundImage(current_lesson, warrior.x, warrior.y);	
	
	stepSound.play();

	if(warrior.actionsQ.length>0){
		if(warrior.actionsQ[0][11]!='1'){
			warrior.actionsQ.shift() 
		}else if(countX==100){
			warrior.actionsQ.shift()
			countX=0;		
		}else if(warrior.actionsQ[0][8]=='x'){
			countX+=1;
		}
	}
	if(warrior.actionsQ.length>0){
		if(warrior.actionsQ[0][11]!='1' && warrior.actionsQ[0][8]=='y'){
			warrior.actionsQ.shift() 
		}else if(countY==100){
			warrior.actionsQ.shift()
			countY=0;		
		}else if(warrior.actionsQ[0][8]=='y'){
			countY+=1;
		}
	}
	
	if(warrior.x>404){
		warrior.x-=1;
	}else if(warrior.x<0){
		warrior.x+=1;
	}
	
	if(warrior.y<0){
		warrior.y+=1;
	}else if(warrior.y>404){
		warrior.y-=1;
	}

		switch(current_lesson){
		case 0:
			if(warrior.x==202 && warrior.y<=202 && warrior.y>=200){
				task_done();
			}
		break;
		
		case 1:
			if(warrior.x>=403 && warrior.x<=405 && warrior.y>=200 && warrior.y<=202){
					task_done();
			}else if(warrior.x>=100 && warrior.x<=102 && warrior.y>=301 && warrior.y<=303){
					failure_popup();
			}
			
		break;
		
		case 2:
			if(warrior.x>=302 && warrior.x<=304  && warrior.y>=401 && warrior.y<=404){
				task_done();
			}else if(warrior.x>=302 && warrior.x<=304  && warrior.y>=200 && warrior.y<=202){
				failure_popup();
			}else if(warrior.x>=100 && warrior.x<=102  && warrior.y>=302 && warrior.y<=304){
				failure_popup();
			}
		break;
		
		case 3:
			
			if(warrior.x>=301 && warrior.x<=304  && warrior.y<=1){
					task_done();
			}else if(warrior.x>=100 && warrior.x<=102  && warrior.y>=200 && warrior.y<=202){
				failure_popup();
			}else if(warrior.x>=201 && warrior.x<=203  && warrior.y<=1){
				failure_popup();
			}else if(warrior.x>=302 && warrior.x<=304  && warrior.y>=300 && warrior.y<=302){
				failure_popup();
			}
		break;
		
		case 4:
			
			if(warrior.x<=1 && warrior.y>=400 && warrior.y<=402){
					task_done();
			}else if(warrior.x<=1 && warrior.y>=200 && warrior.y<=202){
				failure_popup();
			}else if(warrior.x>=100 && warrior.x<=102  && warrior.y>=200 && warrior.y<=202){
				failure_popup();
			}else if(warrior.x>=302 && warrior.x<=304  && warrior.y>=100 && warrior.y<=102){
				failure_popup();
			}
		break;
		
		case 5:
			if(warrior.x>=201 && warrior.x<=203 && warrior.y>=200 && warrior.y<=205){
				if(pocket>=10){
					task_done();
				}else{
					displayTalk=true;
				}
			}else if(warrior.x>=302 && warrior.x<=304 && warrior.y<=1 && collected_coins[3]==false){
				pocket+=1;
				collect_coin(3);
			}else if(warrior.x<=1 && warrior.y<=203 && warrior.y>=201 && collected_coins[4]==false){		
				pocket+=1;
				collect_coin(4);
			}else if(warrior.x<=102 && warrior.x>=100 && warrior.y>=400 && warrior.y<=405 && collected_coins[1]==false){
				pocket+=2;
				collect_coin(1);
			}else if(warrior.x<=404 && warrior.x>=402 && warrior.y>=200 && warrior.y<=205 && collected_coins[2]==false){
				pocket+=2;
				collect_coin(2);
			}else if(warrior.x<=304 && warrior.x>=302 && warrior.y>=300 && warrior.y<=305 && collected_coins[0]==false){	
				pocket+=5;
				collect_coin(0);
			}
		break;
		
		case 6:
			if(collected_items[0]==true && collected_items[1]==true){
				task_done();
			}else if(warrior.x>=301 && warrior.x<=305 && warrior.y>=98 && warrior.y<=102 && collected_items[0]==false){
				if(pocket>=20){
					pocket-=20;
					collected_items[0]=true;
					if(collected_items[1]==false){
						collectSound.play();
					}
				}else{
					displayTalk=true;
				}
			}else if(warrior.x>=100 && warrior.x<=102 && warrior.y>=300 & warrior.y<=305 && collected_items[1]==false){
				if(pocket>=10){
					pocket-=10;
					collected_items[1]=true;
					if(collected_items[0]==false){
						collectSound.play();
					}
				}else{
					displayTalk=true;
				}
			}else if(warrior.x>=301 && warrior.x<=304 && warrior.y>=300 & warrior.y<=305 && collected_coins[0]==false){
				pocket+=10;
				collect_coin(0);
			}else if(warrior.x>=402 && warrior.x<=404 && warrior.y<=2 && collected_coins[1]==false){
				pocket+=5;
				collect_coin(1);
			}else if(warrior.x>=100 && warrior.x<=102 && warrior.y<=404 && warrior.y>=400 && collected_coins[2]==false){
				pocket+=5;
				collect_coin(2);
			}else if(warrior.x>=201 && warrior.x<=203 && warrior.y<=102 && warrior.y>=100 && collected_coins[3]==false){
				pocket+=5;
				collect_coin(3);
			}else if(warrior.x<=2 && warrior.y>=100 && warrior.y<=102 && collected_coins[4]==false){
				pocket+=2;
				collect_coin(4);
			}else if(warrior.x>=201 && warrior.x<=203 && warrior.y<=2 && collected_coins[5]==false){
				pocket+=2;
				collect_coin(5);
			}else if(warrior.x>=402 && warrior.x<=405 && warrior.y>=400 && warrior.y<=404 && collected_coins[6]==false){
				pocket+=2;
				collect_coin(6);
			}else if(warrior.x>=400 && warrior.x<=404 && warrior.y>=200 && warrior.y<=205 && collected_coins[7]==false){		
				pocket+=1;
				collect_coin(7);
			}else if(warrior.x>=100 && warrior.x<=102 && warrior.y>=200 && warrior.y<=205 && collected_coins[8]==false){		
				pocket+=1;
				collect_coin(8);
			}
		break;
		
		case 7:
			if(warrior.x>=201 && warrior.x<=203 && warrior.y>=300 && warrior.y<=305){
				if(pocket==14){
					task_done();
				}else if(pocket<14){
					displayTalk=true;
				}else{
					failure_popup();
				}
			}else if(warrior.x>=400 && warrior.x<=404 && warrior.y>=100 && warrior.y<=102 && collected_coins[0]==false){
				pocket+=5;
				collect_coin(0);
			}else if(warrior.x<=2 && warrior.y<=305 && warrior.y>=300 && collected_coins[1]==false){		
				pocket+=5;
				collect_coin(1);
			}else if(warrior.x>=302 && warrior.x<=304 && warrior.y>=400 && warrior.y<=404 && collected_coins[2]==false){
				pocket+=2;
				collect_coin(2);
			}else if(warrior.x>=201 && warrior.x<=203 && warrior.y>=100 && warrior.y<=103 && collected_coins[3]==false){
				pocket+=2;
				collect_coin(3);
			}else if(warrior.x>=100 && warrior.x<=102 && warrior.y>=200 && warrior.y<=205 && collected_coins[4]==false){		
				pocket+=1;
				collect_coin(4);
			}else if(warrior.x>=100 && warrior.x<=102 && warrior.y>=400 && warrior.y<=404 && collected_coins[5]==false){		
				pocket+=1;
				collect_coin(5);
			}else if(warrior.x>=301 && warrior.x<=304 && warrior.y>=200 && warrior.y<=205 && collected_coins[6]==false){		
				pocket+=1;
				collect_coin(6);
			}
		break;
	}
}
}

function drawFlipped(img,x,y){
    context.translate(x+img.width,y);

     context.scale(-1,1);
     context.drawImage(img,0,0);
    
     context.setTransform(1,0,0,1,0,0);
}

function drawImage(image, x, y, w, h, degrees){
  context.save();
  context.translate(x+w/2, y+h/2);
  context.rotate(degrees*Math.PI/180.0);
  context.translate(-x-w/2, -y-h/2);
  context.drawImage(image, x, y, w, h);
  context.restore();
}

function changeLesson(q){
	warrior.direction=1;
	workspace.clear();
	stopInterval();
	isPlaying=false;
	warrior.actionsQ = [];
	countX = 0;
	countY = 0;
	warrior.x=0;
    warrior.y=0;
	displayTalk=false;
	objective_completed=false;
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
	coverSound.play();
  
	selected = lesson_select.selectedIndex;
	if(q!=null){
	  selected=q;
	}
  
  current_lesson = selected;
  
  lesson_select.selectedIndex = current_lesson; 
  char_select.selectedIndex = character_select-1; 
  
  document.title = 'Lesson ' + (current_lesson+1);
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
  
function collect_coin(x){
	collected_coins[x]=true;
	collectSound.play();
}

function task_done(){
	objective_completed=true;
	createBackgroundImage(current_lesson, warrior.x, warrior.y);
	success_popup();
}

function success_popup(){
		isPlaying = false
		modalEle.hidden = false;
		collectSound.play();
		if(current_lesson==7){
			endContentEle.hidden = false;
		}else{
			successContentEle.hidden = false;
		}
}

function failure_popup(){
	isPlaying = false
	FailureContentEle.hidden = false;
	modalEle.hidden = false;
	failSound.play();
}

function stopInterval() {
	clearInterval(interval);
}

function selectCharacter(q){
	if(q<3){
		character_select = q;
	}else{
		character_select = parseInt(char_select.value);
	}
	changeLesson(current_lesson);
}

function displayTip(index){
	FailureContentEle.hidden = true;
	TipContentEle.hidden = false;
	modalEle.hidden = false;
	
	switch(index){
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

function displayTask(index){
	var description = document.getElementById('description-text');
	
	switch(index){
		case 0:
			description.innerHTML = 'Could you help me collect the 1 Rupee coin, please? Use arrows to move the character and "repeat" to create a loop.';
			break;
		
		case 1:
			description.innerHTML = "I can't tell which of these two is the 2 Rupee coin. Please, help me and take the correct one!";
		break;
		
		case 2:
		description.innerHTML = "I need the 5 Rupee coin to pay for the snack, but I've scattered all my money on the ground... Please, help me find it.";
		break;
		
		case 3:
		description.innerHTML = "Somewhere on the ground here is the 10 Rupee note, but I have no idea where... Would you take it for me, please?";
		break;
		
		case 4:
		description.innerHTML = "The car, that i want to buy costs 100 Rupee. Could you please collect the note, which I can pay for it with?";
		break;
		
		case 5:
		description.innerHTML = "You've been really helpful so far, thanks! You're now able the buy a Baloon yourself. It costs 10 Rupee, so first collect the funds!";
		break;
		
		case 6:
		description.innerHTML = "There are two more things you need to purchase. A Cricket Bat worth 20 Rupee and a Watch worth 10 Rupee. Collect the money from the coins and notes spread all over the ground.";
		break;
		
		case 7:
		description.innerHTML = "I've got one more task for you. Please, collect enough money to buy a bicycle worth 14 Rupee, but you won't receive a change, so make sure that the amount you've gathered is exactly 14 Rupee!";
		break;
	}
	description.innerHTML += '&nbsp;<img id="tip" title="Click here to show the hint!" src="img/items/light_bulb.png"onclick="displayTip(current_lesson)"/>'
}

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var lesson_select = document.getElementById("lesson-select");
var speed_select = document.getElementById("speed-select");
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

var street_upper_left = new Image();
var street_upper = new Image();
var street_upper_right = new Image();
var street_right = new Image();
var street_bottom_right = new Image();;
var street_bottom = new Image();
var street_bottom_left = new Image();
var street_left = new Image();
var street_center = new Image();

var rupee1 = new Image();
var rupee2 = new Image();
var rupee5 = new Image();
var rupee10 = new Image();
var rupee100 = new Image();

var baloon = new Image();
var cricket_bat = new Image();
var watch = new Image();
var bike = new Image();

var talkL = new Image();
var talkR = new Image();
var displayTalk=false;
var talkCount=0;

street_upper_left.src = 'img/street/upper_left.png';
street_upper.src = 'img/street/upper.png';
street_upper_right.src = 'img/street/upper_right.png';
street_right.src = 'img/street/right.png';
street_bottom_right.src = 'img/street/bottom_right.png';
street_bottom.src = 'img/street/bottom.png';
street_bottom_left.src = 'img/street/bottom_left.png';
street_left.src = 'img/street/left.png';
street_center.src = 'img/street/center.png';

rupee1.src = 'img/rupees/1Rupee.png'
rupee2.src = 'img/rupees/2Rupee.png'
rupee5.src = 'img/rupees/5Rupee.png'
rupee10.src = 'img/rupees/10Rupee.png'
rupee100.src = 'img/rupees/100Rupee.png'

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

coverSound.volume = 0.6;
stepSound.loop=false;
collectSound.loop=false;
failSound.loop=false;

var objective_completed=false;
var map;
var selected;
var BGxPos;
var BGyPos;
var mod;
var countX=0;
var countY=0;
var step_count = 0;
var character_select = 1;
var frame_rate;

var collected_coins = [false, false, false, false, false, false, false, false, false];
var collected_items = [false, false];
var pocket = 0;

var map = [
[0,1,1,1,2],
[7,8,8,8,3],
[7,8,8,8,3],
[7,8,8,8,3],
[6,5,5,5,4]
];

window.onload = function(){
	modalEle.hidden = false;
	charSelectEle.hidden = false;
}
