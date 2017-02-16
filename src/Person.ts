class Person extends egret.Sprite {
	// public moveTime1: egret.Timer;
	// public moveTime2: egret.Timer;
	private goRight: egret.Timer;
	private goLeft: egret.Timer;
	public myblood: number = 3;
	public ishurt: number = 0;

	public constructor() {
		super();
		this.createItem();
		this.moveDown();
	}

	// 创建人物形象的方法
	private createItem() {
		var man: egret.Bitmap = Utils.createBitmapByName("Down_json.person");
		this.addChild(man);
	}

	//人物左移方法 
	public moveLeft() {
		this.goLeft = new egret.Timer(10, 0);
		this.goLeft.addEventListener(egret.TimerEvent.TIMER, () => {
			this.x -= 5;
		}, this)
		this.goLeft.start();
    }

	//人物右移方法 
	public moveRight() {
		this.goRight = new egret.Timer(10, 0);
		this.goRight.addEventListener(egret.TimerEvent.TIMER, () => {
			this.x += 5;
		}, this);
		this.goRight.start();
	}

	// 按键结束停止左移
	public stopLeft() {
		this.goLeft.stop();
	}

	// 按键结束停止右移
	public stopRight() {
		this.goRight.stop();
	}

	// 自然下落的方法
	public moveDown() {
		var godown: egret.Timer = new egret.Timer(10, 0);
		godown.addEventListener(egret.TimerEvent.TIMER, () => {
			this.y += 2;
		}, this);
		godown.start();
	}

	// 立在板上的方法
	public standOn() {
		this.y -= 8;
	}

}