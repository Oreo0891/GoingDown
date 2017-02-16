var ShowYourScore = (function (_super) {
    __extends(ShowYourScore, _super);
    function ShowYourScore() {
        _super.call(this);
        this.skinName = "resource/assets/Skin/BG.exml";
        this.bgColor();
        this.showResult();
        this.makeBTN();
    }
    var d = __define,c=ShowYourScore,p=c.prototype;
    // 背景颜色
    p.bgColor = function () {
        var myshape = new egret.Shape();
        myshape.graphics.beginFill(0x000000, 0.5);
        myshape.graphics.drawRect(0, 0, 480, 720);
        myshape.graphics.endFill();
        this.addChild(myshape);
    };
    // 展示游戏结果
    p.showResult = function () {
        var result = new egret.TextField();
        var tip = new egret.TextField();
        var score = new egret.TextField();
        result.size = 40;
        result.textColor = 0xffffff;
        result.x = 170;
        result.y = 150;
        result.textAlign = egret.HorizontalAlign.CENTER;
        result.text = "游戏结束";
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
        score.text = parseInt(+GameStart.yourScore + "") + "层";
        this.addChild(result);
        this.addChild(tip);
        this.addChild(score);
    };
    // 创建重玩按钮
    p.makeBTN = function () {
        var _this = this;
        var mybtn = new eui.Button();
        var btntext = new egret.TextField();
        btntext.size = 32;
        btntext.textColor = 0xffffff;
        btntext.x = 215;
        btntext.y = 400;
        btntext.textAlign = egret.HorizontalAlign.CENTER;
        btntext.text = "重玩";
        mybtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            GameStart.yourScore = 0;
            if (_this && _this.parent) {
                var restart = new GameStart();
                _this.parent.addChild(restart);
                _this.parent.removeChild(_this);
            }
        }, this);
        this.addChild(mybtn);
        this.addChild(btntext);
        mybtn.x = 150;
        mybtn.y = 380;
        mybtn.width = 200;
        mybtn.height = 70;
    };
    return ShowYourScore;
}(eui.Component));
egret.registerClass(ShowYourScore,'ShowYourScore');
//# sourceMappingURL=ShowYourScore.js.map