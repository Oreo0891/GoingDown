class Sound extends egret.DisplayObjectContainer{
	public hurt:egret.Sound;
	public jump:egret.Sound;
	public roll:egret.Sound;
	public touch:egret.Sound;
	public dispear:egret.Sound;

	public constructor() {
		super();
	}
	public hurt_S():void {
        this.hurt = new egret.Sound();
        this.hurt.load("resource/assets/MySound/sound_hurt.mp3");
        this.hurt.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);      
    }
	public jump_S():void {
        this.jump = new egret.Sound();
        this.jump.load("resource/assets/MySound/sound_jump.mp3");
        this.jump.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);      
    }
	public roll_S():void {
        this.roll = new egret.Sound();
        this.roll.load("resource/assets/MySound/sound_roll.mp3");
        this.roll.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);      
    }
	public touch_S():void {
        this.touch = new egret.Sound();
        this.touch.load("resource/assets/MySound/sound_touch.mp3");
        this.touch.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);      
    }
	public dispear_S():void {
		this.dispear = new egret.Sound();
        this.dispear.load("resource/assets/MySound/sound_dispear.mp3");
        this.dispear.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);      
		
	}
    private onLoadComplete(event:egret.Event):void {
        var sound:egret.Sound = <egret.Sound>event.target;
        var channel:egret.SoundChannel = sound.play(0,1);
    }
}