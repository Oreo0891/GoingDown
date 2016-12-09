var GameStart = (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        _super.call(this);
        this.floorList = [];
        this.theperson = new Person();
        this.blood = Main.createBitmapByName("blood_png");
        this.ceil = Main.createBitmapByName("ceil_png");
        this.lb = Main.createBitmapByName("left_png");
        this.rb = Main.createBitmapByName("right_png");
        this.createFloor = new egret.Timer(800, 0);
        this.countScore = new egret.Timer(1000, 0);
        this.badfloornum = 0;
        this.sound = new Sound();
        this.showthem();
    }
    var d = __define,c=GameStart,p=c.prototype;
    p.makeFloor = function () {
        var _this = this;
        var rdder = Math.floor(Math.random() * 305) + 40;
        var rdtype = Math.floor(Math.random() * 5);
        var floor = new Floors(rdtype);
        // for(var i:number = 0; i<this.floorList.length ;i++){
        // if(floor.floortype == 4){
        // 	this.badfloornum += 1;
        // }
        // // }
        // if(this.badfloornum <=2){
        this.floorList.push(floor);
        this.addChild(floor);
        // }
        floor.x = rdder;
        floor.y = 600;
        egret.Tween.get(floor).to({ y: 100 }, 4000).call(function () {
            if (floor && floor.parent) {
                _this.floorList.shift();
                floor.parent.removeChild(floor);
            }
        }, Floors, [floor]);
    };
    p.makeBG = function () {
        var bg = new BackGround();
        this.addChild(bg);
        bg.StageScrollStart();
    };
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
    p.makeLeftWall = function () {
        this.leftwall = Main.createBitmapByName("wall_png");
        this.addChild(this.leftwall);
        this.leftwall.x = 25;
        this.leftwall.y = 65;
        this.leftwall.height = 550;
    };
    p.makeRightWall = function () {
        this.rightwall = Main.createBitmapByName("wall_png");
        this.addChild(this.rightwall);
        this.rightwall.x = 440;
        this.rightwall.y = 65;
        this.rightwall.height = 550;
    };
    p.makeBlood = function () {
        this.addChild(this.blood);
        this.blood.x = 51;
        this.blood.y = 34;
    };
    p.makeCeil = function () {
        this.addChild(this.ceil);
    };
    p.makePerson = function () {
        this.addChild(this.theperson);
        this.theperson.x = 240;
        this.theperson.y = 100;
    };
    p.showScore = function () {
        var thousand = Math.floor(GameStart.yourScore / 1000);
        var hundurd = Math.floor((GameStart.yourScore % 1000) / 100);
        var ten = Math.floor((GameStart.yourScore % 100) / 10);
        var one = Math.floor(GameStart.yourScore % 10);
        this.theFirstNum = Main.createBitmapByName(thousand + "_png");
        this.theSecondNum = Main.createBitmapByName(hundurd + "_png");
        this.theThirdNum = Main.createBitmapByName(ten + "_png");
        this.theFourthNum = Main.createBitmapByName(one + "_png");
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
    p.defaultScore = function () {
        this.showScore();
    };
    p.updateScore = function () {
        var _this = this;
        this.countScore.addEventListener(egret.TimerEvent.TIMER, function () {
            GameStart.yourScore++;
            var thousand = Math.floor(GameStart.yourScore / 1000);
            var hundurd = Math.floor((GameStart.yourScore % 1000) / 100);
            var ten = Math.floor((GameStart.yourScore % 100) / 10);
            var one = Math.floor(GameStart.yourScore % 10);
            if (_this.theFirstNum && _this.theFirstNum) {
                _this.theFirstNum.parent.removeChild(_this.theFirstNum);
            }
            if (_this.theSecondNum && _this.theSecondNum) {
                _this.theSecondNum.parent.removeChild(_this.theSecondNum);
            }
            if (_this.theThirdNum && _this.theThirdNum) {
                _this.theThirdNum.parent.removeChild(_this.theThirdNum);
            }
            if (_this.theFourthNum && _this.theFourthNum) {
                _this.theFourthNum.parent.removeChild(_this.theFourthNum);
            }
            _this.showScore();
        }, this);
        this.countScore.start();
    };
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
        this.addEventListener(egret.Event.ENTER_FRAME, this.myFloorChecker, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.deadChecker, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.leftwallChecker, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.rightwallChecker, this);
    };
    p.myFloorChecker = function () {
        for (var i = 0; i < this.floorList.length; i++) {
            var thisfloor = this.floorList[i];
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
                        this.floorList.splice(i, 1);
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
    p.beHurt = function () {
        if (this.theperson.ishurt == 0) {
            this.theperson.myblood -= 1;
            this.blood.width -= 32;
            this.theperson.ishurt = 1;
        }
    };
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
    p.deadChecker = function () {
        if (this.theperson.myblood == 0 || this.theperson.y <= 90 || this.theperson.y >= 600) {
            this.gameOver();
        }
    };
    p.hitTest = function (obj1, obj2) {
        var rect1 = obj1.getBounds();
        var rect2 = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    };
    p.gameOver = function () {
        this.rb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveRight, this.theperson);
        this.rb.removeEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopRight, this.theperson);
        this.lb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.theperson.moveLeft, this.theperson);
        this.lb.removeEventListener(egret.TouchEvent.TOUCH_END, this.theperson.stopLeft, this.theperson);
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
}(eui.Component));
egret.registerClass(GameStart,'GameStart');
//# sourceMappingURL=GameStart.js.map