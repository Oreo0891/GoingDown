var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        _super.call(this);
        this.skinName = "resource/assets/Skins/GameBG.exml";
        this.makeBlood();
        this.showScore();
        this.makeCeil();
        this.makeHelp();
        this.makeTittle();
        this.makeHint();
        this.makeButton();
    }
    var d = __define,c=Welcome,p=c.prototype;
    p.makeHint = function () {
        var txtInfo = new egret.TextField;
        this.addChild(txtInfo);
        txtInfo.size = 32;
        txtInfo.x = 50;
        txtInfo.y = 380;
        txtInfo.textAlign = egret.HorizontalAlign.CENTER;
        txtInfo.textColor = 0xffffff;
        txtInfo.text = "轻触屏幕左右按钮移动小人";
    };
    p.makeButton = function () {
        var btn1 = Main.createBitmapByName("start1_png");
        var btn2 = Main.createBitmapByName("start2_png");
        this.addChild(btn1);
        this.addChild(btn2);
        btn1.touchEnabled = true;
        btn2.touchEnabled = true;
        btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, btn1);
        btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, btn1);
        btn1.x = 145;
        btn1.y = 460;
        btn2.x = 150;
        btn2.y = 470;
    };
    p.startGame = function () {
        var gameBG = new GameStart();
        if (this && this.parent) {
            this.parent.addChild(gameBG);
            this.parent.removeChild(this);
        }
    };
    p.makeTittle = function () {
        var tittle = Main.createBitmapByName("tittle_png");
        this.addChild(tittle);
        tittle.x = 45;
        tittle.y = 120;
    };
    p.makeHelp = function () {
        var helper1 = Main.createBitmapByName("help1_png");
        var helper2 = Main.createBitmapByName("help2_png");
        this.addChild(helper1);
        this.addChild(helper2);
        helper2.x = 130;
        helper2.y = 240;
        helper1.x = 300;
        helper1.y = 240;
    };
    p.makeCeil = function () {
        var ceil = Main.createBitmapByName("ceil_png");
        this.addChild(ceil);
    };
    p.makeBlood = function () {
        var blood = Main.createBitmapByName("blood_png");
        this.addChild(blood);
        blood.x = 51;
        blood.y = 34;
    };
    p.showScore = function () {
        var yourScore = 0;
        var thousand = Math.floor(yourScore / 1000);
        var hundurd = Math.floor((yourScore % 1000) / 100);
        var ten = Math.floor((yourScore % 100) / 10);
        var one = Math.floor(yourScore % 10);
        var theFirstNum = Main.createBitmapByName(thousand + "_png");
        var theSecondNum = Main.createBitmapByName(hundurd + "_png");
        var theThirdNum = Main.createBitmapByName(ten + "_png");
        var theFourthNum = Main.createBitmapByName(one + "_png");
        this.addChild(theFirstNum);
        this.addChild(theSecondNum);
        this.addChild(theThirdNum);
        this.addChild(theFourthNum);
        theFirstNum.x = 280;
        theFirstNum.y = 20;
        theSecondNum.x = 310;
        theSecondNum.y = 20;
        theThirdNum.x = 340;
        theThirdNum.y = 20;
        theFourthNum.x = 370;
        theFourthNum.y = 20;
    };
    return Welcome;
}(eui.Component));
egret.registerClass(Welcome,'Welcome');
//# sourceMappingURL=Welcome.js.map