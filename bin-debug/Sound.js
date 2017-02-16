var Sound = (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        _super.call(this);
    }
    var d = __define,c=Sound,p=c.prototype;
    // 受伤的声音
    p.hurt_S = function () {
        this.hurt = new egret.Sound();
        this.hurt.load("resource/assets/MySound/sound_hurt.mp3");
        this.hurt.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    // 跳板的声音
    p.jump_S = function () {
        this.jump = new egret.Sound();
        this.jump.load("resource/assets/MySound/sound_jump.mp3");
        this.jump.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    // 滚轮的声音
    p.roll_S = function () {
        this.roll = new egret.Sound();
        this.roll.load("resource/assets/MySound/sound_roll.mp3");
        this.roll.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    // 正常地板的声音
    p.touch_S = function () {
        this.touch = new egret.Sound();
        this.touch.load("resource/assets/MySound/sound_touch.mp3");
        this.touch.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    // 假板的声音
    p.dispear_S = function () {
        this.dispear = new egret.Sound();
        this.dispear.load("resource/assets/MySound/sound_dispear.mp3");
        this.dispear.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    // 加载和初始化
    p.onLoadComplete = function (event) {
        var sound = event.target;
        var channel = sound.play(0, 1);
    };
    return Sound;
}(egret.DisplayObjectContainer));
egret.registerClass(Sound,'Sound');
//# sourceMappingURL=Sound.js.map