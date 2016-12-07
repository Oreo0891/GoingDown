class Person extends egret.Sprite{
	public moveTime1:egret.Timer;
	public moveTime2:egret.Timer;
	private goRight:egret.Timer;
	private goLeft:egret.Timer;
	public myblood:number = 3;
	public ishurt:number = 0;

	

	private man:egret.Bitmap = Main.createBitmapByName("person_png");
	public constructor() {
		super();
		this.createItem();
		this.moveDown();
	}

	private createItem(){
		this.addChild(this.man);
	}

	public moveLeft(){
		this.goLeft = new egret.Timer(10,0);
		this.goLeft.addEventListener(egret.TimerEvent.TIMER,()=>{
			this.x -= 5;
		},this)
		this.goLeft.start();
    }

	public moveRight(){
		this.goRight = new egret.Timer(10,0);
		this.goRight.addEventListener(egret.TimerEvent.TIMER,()=>{
			this.x += 5;
		},this);
		this.goRight.start();
	}

	public stopLeft() {
		this.goLeft.stop();
	}

	public stopRight() {
		this.goRight.stop();
	}

	public moveDown(){
		var godown:egret.Timer = new egret.Timer(10,0);
		godown.addEventListener(egret.TimerEvent.TIMER,()=>{
			this.y += 2;
		},this);
		godown.start();
	}

	public standOn(){
		this.y -= 9.5;
	}
	
}