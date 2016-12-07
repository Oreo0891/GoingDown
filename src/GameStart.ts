class GameStart extends eui.Component{
	public floorList:Floors[] = [];
	private theperson:Person = new Person();
	private blood:egret.Bitmap = Main.createBitmapByName("blood_png");	
	private ceil:egret.Bitmap = Main.createBitmapByName("ceil_png");
	private lb:egret.Bitmap = Main.createBitmapByName("left_png");
	private rb:egret.Bitmap = Main.createBitmapByName("right_png");
	private createFloor:egret.Timer = new egret.Timer(800,0);
	private countScore:egret.Timer = new egret.Timer(1000,0);
	private leftwall:egret.Bitmap;
	private rightwall:egret.Bitmap;
	private yourScore:number = 0;

	private theFirstNum:egret.Bitmap;
	private theSecondNum:egret.Bitmap;
	private theThirdNum:egret.Bitmap;
	private theFourthNum:egret.Bitmap;

	public constructor() {
		super();
		this.showthem();

	}

	private makeFloor(){
		var rdder:number = Math.floor(Math.random() * 305) + 40;
		var rdtype:number = Math.floor(Math.random()* 5);
		var floor:Floors = new Floors(rdtype);

		this.floorList.push(floor);		
		this.addChild(floor);
		floor.x = rdder;
		floor.y = 600;
		egret.Tween.get(floor).to({y:100},4000).call(()=>{
			if(floor&&floor.parent){
				this.floorList.shift();
				floor.parent.removeChild(floor);
			}
		},Floors,[floor]);
	}

	private makeBG(){
		var bg:BackGround = new BackGround();
		this.addChild(bg);
		bg.StageScrollStart();
	}

	private makeLeftBtn(){
		this.addChild(this.lb);
		this.lb.x = 50;
		this.lb.y = 360;
		this.lb.touchEnabled = true;
		this.lb.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.theperson.moveLeft,this.theperson);
		this.lb.addEventListener(egret.TouchEvent.TOUCH_END,this.theperson.stopLeft,this.theperson);
		
	}

	private makeRigthBtn(){
		
		this.addChild(this.rb);
		this.rb.x = 330;
		this.rb.y = 360;
		this.rb.touchEnabled = true;
        this.rb.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.theperson.moveRight,this.theperson);
		this.rb.addEventListener(egret.TouchEvent.TOUCH_END,this.theperson.stopRight,this.theperson);
	}

	private makeLeftWall(){
		this.leftwall = Main.createBitmapByName("wall_png");
		this.addChild(this.leftwall);
		this.leftwall.x = 25;
		this.leftwall.y = 65;
		this.leftwall.height = 550;
	}

	private makeRightWall(){
		this.rightwall = Main.createBitmapByName("wall_png");
		this.addChild(this.rightwall);
		this.rightwall.x = 440;
		this.rightwall.y = 65;
		this.rightwall.height = 550;
	}

	private makeBlood(){
		this.addChild(this.blood);
		this.blood.x = 51;
		this.blood.y = 34;
	}

	private makeCeil() {
		this.addChild(this.ceil);
	}

	private makePerson(){

		this.addChild(this.theperson);
		this.theperson.x = 240
		this.theperson.y = 100;
		

	}

	private showScore(){
		var thousand:number = Math.floor(this.yourScore / 1000);
		var hundurd:number = Math.floor((this.yourScore % 1000) / 100);
		var ten:number = Math.floor((this.yourScore % 100) / 10);
		var one:number = Math.floor(this.yourScore % 10);

		this.theFirstNum = Main.createBitmapByName(thousand + "_png");
		this.theSecondNum = Main.createBitmapByName(hundurd + "_png");
		this.theThirdNum = Main.createBitmapByName(ten + "_png");
		this.theFourthNum = Main.createBitmapByName(one + "_png");

		this.addChild(this.theFirstNum);
		this.addChild(this.theSecondNum);
		this.addChild(this.theThirdNum);
		this.addChild(this.theFourthNum);
		this.theFirstNum.x = 280;
		this.theFirstNum.y = 20;
		this.theSecondNum.x = 310;
		this.theSecondNum.y = 20;
		this.theThirdNum.x = 340;
		this.theThirdNum.y = 20;
		this.theFourthNum.x = 370;
		this.theFourthNum.y = 20;
	}

	private defaultScore(){
		
		this.showScore();
	}

	private updateScore() {
		this.countScore.addEventListener(egret.TimerEvent.TIMER,()=>{
			this.yourScore++;

			var thousand:number = Math.floor(this.yourScore / 1000);
			var hundurd:number = Math.floor((this.yourScore % 1000) / 100);
			var ten:number = Math.floor((this.yourScore % 100) / 10);
			var one:number = Math.floor(this.yourScore % 10);

			if(this.theFirstNum&&this.theFirstNum){
				this.theFirstNum.parent.removeChild(this.theFirstNum);
			}
			if(this.theSecondNum&&this.theSecondNum){
				this.theSecondNum.parent.removeChild(this.theSecondNum);
			}
			if(this.theThirdNum&&this.theThirdNum){
				this.theThirdNum.parent.removeChild(this.theThirdNum);
			}
			if(this.theFourthNum&&this.theFourthNum){
				this.theFourthNum.parent.removeChild(this.theFourthNum);
			}

			this.showScore();

		},this)
		this.countScore.start();

	}

	private showthem(){
		this.makeBG();
		this.makeLeftWall();
		this.makeRightWall();
		this.makeLeftBtn();
		this.makeRigthBtn();
		this.makePerson();

		this.createFloor.addEventListener(egret.TimerEvent.TIMER,this.makeFloor,this);
		this.createFloor.start();

		this.makeBlood();
		
		this.makeCeil();

		this.showScore();
		this.updateScore();

		this.addEventListener(egret.Event.ENTER_FRAME,this.myFloorChecker,this);
		this.addEventListener(egret.Event.ENTER_FRAME,this.deadChecker,this);
		this.addEventListener(egret.Event.ENTER_FRAME,this.leftwallChecker,this);
		this.addEventListener(egret.Event.ENTER_FRAME,this.rightwallChecker,this);
	}

	private myFloorChecker(){
		
		for(var i:number = 0;i<this.floorList.length;i++){
			var thisfloor:Floors = this.floorList[i];
			if(this.hitTest(thisfloor,this.theperson)){
				switch (thisfloor.floortype) {
					case 0:
						this.theperson.standOn();
						this.theperson.ishurt = 0;
						break;
				
					case 1:
						this.theperson.standOn();				
						this.theperson.ishurt = 0;
						if(thisfloor&&thisfloor.parent){
								thisfloor.parent.removeChild(thisfloor);
							}
						this.floorList.splice(i,1);
						break;
					case 2:
						this.theperson.standOn();						
						this.theperson.x -= 5;
						this.theperson.ishurt = 0;
						
						break;
					case 3:
						this.theperson.y -= 50;
						this.theperson.ishurt = 0;
						
						break;
					case 4:
						this.theperson.standOn();					
						this.beHurt();
						break;
				}
			}
		}
		
	}

	private beHurt() {

		if(this.theperson.ishurt == 0){
			this.theperson.myblood -= 1;
			this.blood.width -= 32;
			this.theperson.ishurt = 1;
		}
		
	}

	private leftwallChecker() {
		
		if(this.hitTest(this.leftwall,this.theperson)){
			this.theperson.x += 10;
		}

	}

	private rightwallChecker() {
		
		if(this.hitTest(this.rightwall,this.theperson)){
			this.theperson.x -= 10;
		}

	}

	private deadChecker(){

		if(this.theperson.myblood == 0 || this.theperson.y <= 90 || this.theperson.y >= 600){
			this.gameOver();
		}

	}

	private hitTest(obj1:any,obj2:egret.DisplayObject):boolean{

		var rect1: egret.Rectangle = obj1.getBounds();
        var rect2: egret.Rectangle = obj2.getBounds();

        rect1.x = obj1.x;
        rect1.y = obj1.y;
		rect2.x = obj2.x;
		rect2.y = obj2.y;

        return rect1.intersects(rect2);
    }

	

	private gameOver(){
		this.rb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.theperson.moveRight,this.theperson);
		this.rb.removeEventListener(egret.TouchEvent.TOUCH_END,this.theperson.stopRight,this.theperson);
		this.lb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.theperson.moveLeft,this.theperson);
		this.lb.removeEventListener(egret.TouchEvent.TOUCH_END,this.theperson.stopLeft,this.theperson);
		this.removeEventListener(egret.Event.ENTER_FRAME,this.myFloorChecker,this);
		this.removeEventListener(egret.Event.ENTER_FRAME,this.deadChecker,this);
		this.removeEventListener(egret.Event.ENTER_FRAME,this.leftwallChecker,this);
		this.removeEventListener(egret.Event.ENTER_FRAME,this.rightwallChecker,this);
		if(this.theperson&&this.theperson.parent){
			this.theperson.parent.removeChild(this.theperson);
		}
		this.countScore.stop();
		this.createFloor.removeEventListener(egret.TimerEvent.TIMER,this.makeFloor,this);		
		this.createFloor.stop();
		this.createFloor.removeEventListener(egret.TimerEvent.TIMER,this.makeFloor,this);
		
	}
} 