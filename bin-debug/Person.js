var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        _super.call(this);
        this.myblood = 3;
        this.ishurt = 0;
        this.createItem();
        this.moveDown();
    }
    var d = __define,c=Person,p=c.prototype;
    // 创建人物形象的方法
    p.createItem = function () {
        var man = Utils.createBitmapByName("Down_json.person");
        this.addChild(man);
    };
    //人物左移方法 
    p.moveLeft = function () {
        var _this = this;
        this.goLeft = new egret.Timer(10, 0);
        this.goLeft.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.x -= 5;
        }, this);
        this.goLeft.start();
    };
    //人物右移方法 
    p.moveRight = function () {
        var _this = this;
        this.goRight = new egret.Timer(10, 0);
        this.goRight.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.x += 5;
        }, this);
        this.goRight.start();
    };
    // 按键结束停止左移
    p.stopLeft = function () {
        this.goLeft.stop();
    };
    // 按键结束停止右移
    p.stopRight = function () {
        this.goRight.stop();
    };
    // 自然下落的方法
    p.moveDown = function () {
        var _this = this;
        var godown = new egret.Timer(10, 0);
        godown.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.y += 2;
        }, this);
        godown.start();
    };
    // 立在板上的方法
    p.standOn = function () {
        this.y -= 8;
    };
    return Person;
}(egret.Sprite));
egret.registerClass(Person,'Person');
//# sourceMappingURL=Person.js.map