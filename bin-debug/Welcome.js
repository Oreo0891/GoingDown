var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        _super.call(this);
        this.skinName = "resource/assets/Skin/BG.exml";
        this.makeBlood();
        this.showScore();
        this.makeCeil();
        this.makeHelp();
        this.makeTittle();
        this.makeHint();
        this.makeButton();
    }
    var d = __define,c=Welcome,p=c.prototype;
    // 创建提示
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
    // 创建按钮
    p.makeButton = function () {
        var btn1 = Utils.createBitmapByName("Down_json.start1");
        var btn2 = Utils.createBitmapByName("Down_json.start2");
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
    // 开始游戏的跳转方法
    p.startGame = function () {
        var gameBG = new GameStart();
        if (this.parent && this.parent.parent) {
            this.parent.parent.addChild(gameBG);
            this.parent.parent.removeChild(this.parent);
        }
    };
    // 创建标题
    p.makeTittle = function () {
        var tittle = Utils.createBitmapByName("Down_json.tittle");
        this.addChild(tittle);
        tittle.x = 45;
        tittle.y = 120;
    };
    // 创建帮助图片
    p.makeHelp = function () {
        var helper1 = Utils.createBitmapByName("Down_json.help");
        var helper2 = Utils.createBitmapByName("Down_json.help2");
        this.addChild(helper1);
        this.addChild(helper2);
        helper2.x = 130;
        helper2.y = 240;
        helper1.x = 300;
        helper1.y = 240;
    };
    // 创建场景
    p.makeCeil = function () {
        var ceil = Utils.createBitmapByName("Down_json.img_ui");
        this.addChild(ceil);
    };
    // 创建血量
    p.makeBlood = function () {
        var blood = Utils.createBitmapByName("Down_json.blood");
        this.addChild(blood);
        blood.x = 51;
        blood.y = 34;
    };
    // 展示分数
    p.showScore = function () {
        var yourScore = 0;
        var thousand = Math.floor(yourScore / 1000);
        var hundurd = Math.floor((yourScore % 1000) / 100);
        var ten = Math.floor((yourScore % 100) / 10);
        var one = Math.floor(yourScore % 10);
        var theFirstNum = Utils.createBitmapByName("Down_json." + thousand);
        var theSecondNum = Utils.createBitmapByName("Down_json." + hundurd);
        var theThirdNum = Utils.createBitmapByName("Down_json." + ten);
        var theFourthNum = Utils.createBitmapByName("Down_json." + one);
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