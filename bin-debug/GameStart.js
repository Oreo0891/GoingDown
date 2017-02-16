var GameStart = (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        _super.call(this);
        this.floorList = [];
        this.leftList = [];
        this.rightList = [];
        this.theperson = new Person();
        this.blood = Utils.createBitmapByName("Down_json.blood");
        this.ceil = Utils.createBitmapByName("Down_json.img_ui");
        this.lb = Utils.createBitmapByName("Down_json.btn01");
        this.rb = Utils.createBitmapByName("Down_json.btn02");
        this.createFloor = new egret.Timer(800, 0);
        this.countScore = new egret.Timer(1000, 0);
        this.badfloornum = 0;
        this.sound = new Sound();
        this.showthem();
    }
    var d = __define,c=GameStart,p=c.prototype;
    //创建地板 
    p.makeFloor = function () {
        var rdder = Math.floor(Math.random() * 305) + 40;
        var rdtype = Math.floor(Math.random() * 5);
        var floor = new Floors(rdtype);
        this.floorList.push(floor);
        this.addChild(floor);
        floor.x = rdder;
        floor.y = 600;
    };
    //清除地板 
    p.cleanFloor = function () {
        for (var i = 0; i < this.floorList.length; i++) {
            var myfloor = this.floorList[i];
            if (myfloor.y == 100) {
                if (myfloor && myfloor.parent) {
                    this.floorList.shift();
                    myfloor.parent.removeChild(myfloor);
                }
            }
        }
    };
    // 创建背景
    p.makeBG = function () {
        var bg = new BackGround();
        this.addChild(bg);
        bg.StageScrollStart();
    };
    // 创建左右按钮
    p.makeLeftBtn = function () {
        this.addChild(this.lb);
        this.lb.x = 50;
        this.lb.y = 360;
        this.lb.touchEnabled = true;
        this.lb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveLeft, this.theperson);
        this.lb.addEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopLeft, this.theperson);
    };
    p.makeRigthBtn = function () {
        this.addChild(this.rb);
        this.rb.x = 330;
        this.rb.y = 360;
        this.rb.touchEnabled = true;
        this.rb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveRight, this.theperson);
        this.rb.addEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopRight, this.theperson);
    };
    // 创建左右墙壁
    p.makeLeftWall = function () {
        this.leftwall = Utils.createBitmapByName("Down_json.line");
        this.addChild(this.leftwall);
        this.leftwall.x = 25;
        this.leftwall.y = 65;
        this.leftwall.height = 550;
    };
    p.makeRightWall = function () {
        this.rightwall = Utils.createBitmapByName("Down_json.line");
        this.addChild(this.rightwall);
        this.rightwall.x = 440;
        this.rightwall.y = 65;
        this.rightwall.height = 550;
    };
    // 创建血量
    p.makeBlood = function () {
        this.addChild(this.blood);
        this.blood.x = 51;
        this.blood.y = 34;
    };
    // 创建天花板
    p.makeCeil = function () {
        this.addChild(this.ceil);
    };
    // 创建人物
    p.makePerson = function () {
        this.addChild(this.theperson);
        this.theperson.x = 240;
        this.theperson.y = 100;
    };
    // 创建分数
    p.showScore = function () {
        var thousand = Math.floor(GameStart.yourScore / 1000);
        var hundurd = Math.floor((GameStart.yourScore % 1000) / 100);
        var ten = Math.floor((GameStart.yourScore % 100) / 10);
        var one = Math.floor(GameStart.yourScore % 10);
        this.theFirstNum = Utils.createBitmapByName("Down_json." + thousand);
        this.theSecondNum = Utils.createBitmapByName("Down_json." + hundurd);
        this.theThirdNum = Utils.createBitmapByName("Down_json." + ten);
        this.theFourthNum = Utils.createBitmapByName("Down_json." + one);
        this.addChild(this.theFirstNum);
        this.addChild(this.theSecondNum);
        this.addChild(this.theThirdNum);
        this.addChild(this.theFourthNum);
        this.theFirstNum.x = 280;
        this.theFirstNum.y = 20;
        this.theSecondNum.x = 310;
        this.theSecondNum.y = 20;
        this.theThirdNum.x = 340;
        this.theThirdNum.y = 20;
        this.theFourthNum.x = 370;
        this.theFourthNum.y = 20;
    };
    // 创建用于展示的默认分值
    p.defaultScore = function () {
        this.showScore();
    };
    // 更新分数
    p.updateScore = function () {
        var _this = this;
        this.countScore.addEventListener(egret.TimerEvent.TIMER, function () {
            GameStart.yourScore++;
            var thousand = Math.floor(GameStart.yourScore / 1000);
            var hundurd = Math.floor((GameStart.yourScore % 1000) / 100);
            var ten = Math.floor((GameStart.yourScore % 100) / 10);
            var one = Math.floor(GameStart.yourScore % 10);
            if (_this.theFirstNum && _this.theFirstNum.parent) {
                _this.theFirstNum.parent.removeChild(_this.theFirstNum);
            }
            if (_this.theSecondNum && _this.theSecondNum.parent) {
                _this.theSecondNum.parent.removeChild(_this.theSecondNum);
            }
            if (_this.theThirdNum && _this.theThirdNum.parent) {
                _this.theThirdNum.parent.removeChild(_this.theThirdNum);
            }
            if (_this.theFourthNum && _this.theFourthNum.parent) {
                _this.theFourthNum.parent.removeChild(_this.theFourthNum);
            }
            _this.showScore();
        }, this);
        this.countScore.start();
    };
    //调用所有的展示方法 
    p.showthem = function () {
        this.makeBG();
        this.makeLeftWall();
        this.makeRightWall();
        this.makeLeftBtn();
        this.makeRigthBtn();
        this.makePerson();
        this.createFloor.addEventListener(egret.TimerEvent.TIMER, this.makeFloor, this);
        this.createFloor.start();
        this.makeBlood();
        this.makeCeil();
        this.showScore();
        this.updateScore();
        this.addEventListener(egret.Event.ENTER_FRAME, this.cleanFloor, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.myFloorChecker, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.deadChecker, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.leftwallChecker, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.rightwallChecker, this);
    };
    // 人物受伤
    p.beHurt = function () {
        if (this.theperson.ishurt == 0) {
            this.theperson.myblood -= 1;
            this.blood.width -= 32;
            this.theperson.ishurt = 1;
        }
    };
    // 左右墙不可穿越的碰撞检测
    p.leftwallChecker = function () {
        if (this.hitTest(this.leftwall, this.theperson)) {
            this.theperson.x += 10;
        }
    };
    p.rightwallChecker = function () {
        if (this.hitTest(this.rightwall, this.theperson)) {
            this.theperson.x -= 10;
        }
    };
    // 是否死亡的检测
    p.deadChecker = function () {
        if (this.theperson.myblood == 0 || this.theperson.y <= 90 || this.theperson.y >= 600) {
            this.gameOver();
        }
    };
    // 人物与地板之间碰撞检测之后的操作
    p.myFloorChecker = function () {
        for (var i = 0; i < this.floorList.length; i++) {
            var thisfloor = this.floorList[i];
            var leftLine = this.leftList[i];
            var rightLine = this.rightList[i];
            if (this.hitTest(thisfloor, this.theperson)) {
                switch (thisfloor.floortype) {
                    case 0:
                        this.theperson.standOn();
                        this.theperson.ishurt = 0;
                        this.sound.touch_S();
                        break;
                    case 1:
                        this.theperson.standOn();
                        this.theperson.ishurt = 0;
                        if (thisfloor && thisfloor.parent) {
                            thisfloor.parent.removeChild(thisfloor);
                        }
                        if (leftLine && leftLine.parent) {
                            leftLine.parent.removeChild(leftLine);
                        }
                        if (rightLine && rightLine.parent) {
                            rightLine.parent.removeChild(rightLine);
                        }
                        this.floorList.splice(i, 1);
                        this.leftList.splice(i, 1);
                        this.rightList.splice(i, 1);
                        this.sound.dispear_S();
                        break;
                    case 2:
                        this.theperson.standOn();
                        this.theperson.x -= 5;
                        this.theperson.ishurt = 0;
                        this.sound.roll_S();
                        break;
                    case 3:
                        this.theperson.y -= 30;
                        this.theperson.ishurt = 0;
                        this.sound.jump_S();
                        break;
                    case 4:
                        this.theperson.standOn();
                        this.beHurt();
                        this.sound.hurt_S();
                        break;
                }
            }
        }
    };
    // 碰撞检测的具体实现
    p.hitTest = function (obj1, obj2) {
        var rect2 = obj2.getBounds();
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return obj1.hitTestPoint(rect2.x + rect2.width / 2, rect2.y + rect2.height);
    };
    // 游戏结束移除所有监听 跳转至游戏结束页面
    p.gameOver = function () {
        this.rb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveRight, this.theperson);
        this.rb.removeEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopRight, this.theperson);
        this.lb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveLeft, this.theperson);
        this.lb.removeEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopLeft, this.theperson);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.cleanFloor, this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.myFloorChecker, this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.deadChecker, this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.leftwallChecker, this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.rightwallChecker, this);
        if (this.theperson && this.theperson.parent) {
            this.theperson.parent.removeChild(this.theperson);
        }
        this.countScore.stop();
        this.createFloor.removeEventListener(egret.TimerEvent.TIMER, this.makeFloor, this);
        this.createFloor.stop();
        this.createFloor.removeEventListener(egret.TimerEvent.TIMER, this.makeFloor, this);
        var overPage = new ShowYourScore();
        if (this && this.parent) {
            this.parent.addChild(overPage);
            this.parent.removeChild(this);
        }
    };
    GameStart.yourScore = 0;
    return GameStart;
}(egret.Sprite));
egret.registerClass(GameStart,'GameStart');
//# sourceMappingURL=GameStart.js.map