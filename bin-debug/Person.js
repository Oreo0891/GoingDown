var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        _super.call(this);
        this.myblood = 3;
        this.ishurt = 0;
        this.man = Main.createBitmapByName("person_png");
        this.createItem();
        this.moveDown();
    }
    var d = __define,c=Person,p=c.prototype;
    p.createItem = function () {
        this.addChild(this.man);
    };
    p.moveLeft = function () {
        var _this = this;
        this.goLeft = new egret.Timer(10, 0);
        this.goLeft.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.x -= 5;
        }, this);
        this.goLeft.start();
    };
    p.moveRight = function () {
        var _this = this;
        this.goRight = new egret.Timer(10, 0);
        this.goRight.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.x += 5;
        }, this);
        this.goRight.start();
    };
    p.stopLeft = function () {
        this.goLeft.stop();
    };
    p.stopRight = function () {
        this.goRight.stop();
    };
    p.moveDown = function () {
        var _this = this;
        var godown = new egret.Timer(10, 0);
        godown.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.y += 2;
        }, this);
        godown.start();
    };
    p.standOn = function () {
        this.y -= 8.2;
    };
    return Person;
}(egret.Sprite));
egret.registerClass(Person,'Person');
//# sourceMappingURL=Person.js.map