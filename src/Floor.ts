class Floors extends egret.Sprite {
	public floortype: number;
	public constructor(type: number) {
		super();
		this.createFloor(type);
		this.moveUp();
	}
	// 创建地板的方法(需要传入地板的类型)
	private createFloor(type) {
		this.floortype = type;
		var floor: egret.Bitmap = Utils.createBitmapByName("Down_json.floor" + this.floortype);
		this.addChild(floor);
	}
	// 地板上升的方法
	public moveUp() {
		var goUp: egret.Timer = new egret.Timer(10, 0);
		goUp.addEventListener(egret.TimerEvent.TIMER, () => {
			this.y -= 2;
		}, this);
		goUp.start();
	}

}