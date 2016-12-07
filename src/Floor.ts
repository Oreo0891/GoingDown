class Floors extends egret.Sprite{
	public floorx:number;
	public floory:number;
	public floortype:number; 
	public constructor(type:number) {
		super();
		this.createFloor(type);
	}

	private createFloor(type){
		this.floortype = type;
		var floor:egret.Bitmap = Main.createBitmapByName("floor" + this.floortype + "_png");
		this.addChild(floor);
	}

}