class GameStart extends egret.Sprite {
	public floorList: Floors[] = [];
	public leftList: egret.DisplayObject[] = [];
	public rightList: egret.DisplayObject[] = [];
	private theperson: Person = new Person();
	private blood: egret.Bitmap = Utils.createBitmapByName("Down_json.blood");
	private ceil: egret.Bitmap = Utils.createBitmapByName("Down_json.img_ui");
	private lb: egret.Bitmap = Utils.createBitmapByName("Down_json.btn01");
	private rb: egret.Bitmap = Utils.createBitmapByName("Down_json.btn02");
	private createFloor: egret.Timer = new egret.Timer(800, 0);
	private countScore: egret.Timer = new egret.Timer(1000, 0);
	private leftwall: egret.Bitmap;
	private rightwall: egret.Bitmap;
	public static yourScore: number = 0;
	private badfloornum: number = 0;

	private theFirstNum: egret.Bitmap;
	private theSecondNum: egret.Bitmap;
	private theThirdNum: egret.Bitmap;
	private theFourthNum: egret.Bitmap;
	public sound: Sound = new Sound();
	public constructor() {
		super();
		this.showthem();

	}
	//创建地板 
	private makeFloor() {
		var rdder: number = Math.floor(Math.random() * 305) + 40;
		var rdtype: number = Math.floor(Math.random() * 5);
		var floor: Floors = new Floors(rdtype);
		this.floorList.push(floor);
		this.addChild(floor);

		floor.x = rdder;
		floor.y = 600;

	}
	//清除地板 
	private cleanFloor() {
		for (var i: number = 0; i < this.floorList.length; i++) {
			var myfloor: Floors = this.floorList[i];
			if (myfloor.y == 100) {
				if (myfloor && myfloor.parent) {
					this.floorList.shift();
					myfloor.parent.removeChild(myfloor);
				}
			}
		}

	}
	// 创建背景
	private makeBG() {
		var bg: BackGround = new BackGround();
		this.addChild(bg);
		bg.StageScrollStart();
	}

	// 创建左右按钮
	private makeLeftBtn() {
		this.addChild(this.lb);
		this.lb.x = 50;
		this.lb.y = 360;
		this.lb.touchEnabled = true;
		this.lb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveLeft, this.theperson);
		this.lb.addEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopLeft, this.theperson);

	}

	private makeRigthBtn() {

		this.addChild(this.rb);
		this.rb.x = 330;
		this.rb.y = 360;
		this.rb.touchEnabled = true;
        this.rb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveRight, this.theperson);
		this.rb.addEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopRight, this.theperson);
	}

	// 创建左右墙壁
	private makeLeftWall() {
		this.leftwall = Utils.createBitmapByName("Down_json.line");
		this.addChild(this.leftwall);
		this.leftwall.x = 25;
		this.leftwall.y = 65;
		this.leftwall.height = 550;
	}

	private makeRightWall() {
		this.rightwall = Utils.createBitmapByName("Down_json.line");
		this.addChild(this.rightwall);
		this.rightwall.x = 440;
		this.rightwall.y = 65;
		this.rightwall.height = 550;
	}

	// 创建血量
	private makeBlood() {
		this.addChild(this.blood);
		this.blood.x = 51;
		this.blood.y = 34;
	}

	// 创建天花板
	private makeCeil() {
		this.addChild(this.ceil);
	}

	// 创建人物
	private makePerson() {

		this.addChild(this.theperson);
		this.theperson.x = 240
		this.theperson.y = 100;


	}

	// 创建分数
	private showScore() {
		var thousand: number = Math.floor(GameStart.yourScore / 1000);
		var hundurd: number = Math.floor((GameStart.yourScore % 1000) / 100);
		var ten: number = Math.floor((GameStart.yourScore % 100) / 10);
		var one: number = Math.floor(GameStart.yourScore % 10);

		this.theFirstNum = Utils.createBitmapByName("Down_json." + thousand);
		this.theSecondNum = Utils.createBitmapByName("Down_json." + hundurd);
		this.theThirdNum = Utils.createBitmapByName("Down_json." + ten);
		this.theFourthNum = Utils.createBitmapByName("Down_json." + one);

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

	// 创建用于展示的默认分值
	private defaultScore() {

		this.showScore();
	}
	// 更新分数
	private updateScore() {
		this.countScore.addEventListener(egret.TimerEvent.TIMER, () => {
			GameStart.yourScore++;

			var thousand: number = Math.floor(GameStart.yourScore / 1000);
			var hundurd: number = Math.floor((GameStart.yourScore % 1000) / 100);
			var ten: number = Math.floor((GameStart.yourScore % 100) / 10);
			var one: number = Math.floor(GameStart.yourScore % 10);

			if (this.theFirstNum && this.theFirstNum.parent) {
				this.theFirstNum.parent.removeChild(this.theFirstNum);
			}
			if (this.theSecondNum && this.theSecondNum.parent) {
				this.theSecondNum.parent.removeChild(this.theSecondNum);
			}
			if (this.theThirdNum && this.theThirdNum.parent) {
				this.theThirdNum.parent.removeChild(this.theThirdNum);
			}
			if (this.theFourthNum && this.theFourthNum.parent) {
				this.theFourthNum.parent.removeChild(this.theFourthNum);
			}

			this.showScore();

		}, this)
		this.countScore.start();

	}
	//调用所有的展示方法 
	private showthem() {
		this.makeBG();
		this.makeLeftWall();
		this.makeRightWall();
		this.makeLeftBtn();
		this.makeRigthBtn();
		this.makePerson();



		this.createFloor.addEventListener(egret.TimerEvent.TIMER, this.makeFloor, this);
		this.createFloor.start();

		this.makeBlood();

		this.makeCeil();

		this.showScore();
		this.updateScore();

		this.addEventListener(egret.Event.ENTER_FRAME, this.cleanFloor, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.myFloorChecker, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.deadChecker, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.leftwallChecker, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.rightwallChecker, this);

	}
	// 人物受伤
	private beHurt() {

		if (this.theperson.ishurt == 0) {
			this.theperson.myblood -= 1;
			this.blood.width -= 32;
			this.theperson.ishurt = 1;
		}

	}
	// 左右墙不可穿越的碰撞检测
	private leftwallChecker() {

		if (this.hitTest(this.leftwall, this.theperson)) {
			this.theperson.x += 10;
		}

	}

	private rightwallChecker() {

		if (this.hitTest(this.rightwall, this.theperson)) {
			this.theperson.x -= 10;
		}

	}
	// 是否死亡的检测
	private deadChecker() {

		if (this.theperson.myblood == 0 || this.theperson.y <= 90 || this.theperson.y >= 600) {
			this.gameOver();
		}

	}
	// 人物与地板之间碰撞检测之后的操作
	private myFloorChecker() {

		for (var i: number = 0; i < this.floorList.length; i++) {
			var thisfloor: Floors = this.floorList[i];
			var leftLine: egret.DisplayObject = this.leftList[i];
			var rightLine: egret.DisplayObject = this.rightList[i];

			if (this.hitTest(thisfloor, this.theperson)) {
				switch (thisfloor.floortype) {
					case 0:
						this.theperson.standOn();
						this.theperson.ishurt = 0;
						this.sound.touch_S();
						break;

					case 1:
						this.theperson.standOn();
						this.theperson.ishurt = 0;
						if (thisfloor && thisfloor.parent) {
							thisfloor.parent.removeChild(thisfloor);
						}
						if (leftLine && leftLine.parent) {
							leftLine.parent.removeChild(leftLine);
						}
						if (rightLine && rightLine.parent) {
							rightLine.parent.removeChild(rightLine);
						}
						this.floorList.splice(i, 1);
						this.leftList.splice(i, 1);
						this.rightList.splice(i, 1);

						this.sound.dispear_S();
						break;
					case 2:
						this.theperson.standOn();
						this.theperson.x -= 5;
						this.theperson.ishurt = 0;
						this.sound.roll_S();

						break;
					case 3:
						this.theperson.y -= 30;
						this.theperson.ishurt = 0;
						this.sound.jump_S();
						break;
					case 4:
						this.theperson.standOn();
						this.beHurt();
						this.sound.hurt_S();
						break;
				}
			}
		}

	}
	// 碰撞检测的具体实现
	private hitTest(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {

        var rect2: egret.Rectangle = obj2.getBounds();

		rect2.x = obj2.x;
		rect2.y = obj2.y;

        return obj1.hitTestPoint(rect2.x + rect2.width / 2, rect2.y + rect2.height);
    }
	// 游戏结束移除所有监听 跳转至游戏结束页面
	private gameOver() {
		this.rb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveRight, this.theperson);
		this.rb.removeEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopRight, this.theperson);
		this.lb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveLeft, this.theperson);
		this.lb.removeEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopLeft, this.theperson);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.cleanFloor, this);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.myFloorChecker, this);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.deadChecker, this);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.leftwallChecker, this);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.rightwallChecker, this);

		if (this.theperson && this.theperson.parent) {
			this.theperson.parent.removeChild(this.theperson);
		}
		this.countScore.stop();
		this.createFloor.removeEventListener(egret.TimerEvent.TIMER, this.makeFloor, this);
		this.createFloor.stop();
		this.createFloor.removeEventListener(egret.TimerEvent.TIMER, this.makeFloor, this);

		var overPage: ShowYourScore = new ShowYourScore();

		if (this && this.parent) {
			this.parent.addChild(overPage);
			this.parent.removeChild(this);
		}
	}
}