class ShowYourScore extends eui.Component{
	public constructor() {
		super();

		this.bgColor();
		this.showResult();
		this.makeBTN();
	}

	private bgColor() {
		var myshape:egret.Shape = new egret.Shape();
		myshape.graphics.beginFill(0x000000,0.5);
		myshape.graphics.drawRect(0,0,480,720);
        myshape.graphics.endFill();

		this.addChild(myshape);
	}

	private showResult(){
		var result:egret.TextField=new egret.TextField();
		var tip:egret.TextField=new egret.TextField();
		var score:egret.TextField=new egret.TextField();

		result.size = 40;
		result.textColor = 0xffffff;
		result.x = 170;
		result.y = 150;
		result.textAlign = egret.HorizontalAlign.CENTER;
		result.text="游戏结束";

		tip.size = 40;
		tip.textColor = 0xffffff;
		tip.x = 210;
		tip.y = 230;
		tip.textAlign = egret.HorizontalAlign.CENTER;
		tip.text = "分数";

		score.size = 40;
		score.textColor = 0xffffff;
		score.x = 220;
		score.y = 310;
		score.textAlign = egret.HorizontalAlign.CENTER;		
		score.text=parseInt(+GameStart.yourScore+"")+"层";
		this.addChild(result);
		this.addChild(tip);
		this.addChild(score);
	}

	private makeBTN() {
		var mybtn:eui.Button = new eui.Button();
		var btntext:egret.TextField=new egret.TextField();
		btntext.size = 32;
		btntext.textColor = 0xffffff;
		btntext.x = 215;
		btntext.y = 400;
		btntext.textAlign = egret.HorizontalAlign.CENTER;
		btntext.text = "重玩";

		mybtn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			GameStart.yourScore = 0;
			
			if(this&&this.parent){
				var restart:GameStart = new GameStart();
				this.parent.addChild(restart)
				this.parent.removeChild(this);
			}
		},this);
		this.addChild(mybtn);
		this.addChild(btntext)
		mybtn.x = 150;
		mybtn.y = 380;
		mybtn.width = 200;
		mybtn.height = 70;

	}
}