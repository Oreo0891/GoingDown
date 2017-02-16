var Floors = (function (_super) {
    __extends(Floors, _super);
    function Floors(type) {
        _super.call(this);
        this.createFloor(type);
        this.moveUp();
    }
    var d = __define,c=Floors,p=c.prototype;
    // 创建地板的方法(需要传入地板的类型)
    p.createFloor = function (type) {
        this.floortype = type;
        var floor = Utils.createBitmapByName("Down_json.floor" + this.floortype);
        this.addChild(floor);
    };
    // 地板上升的方法
    p.moveUp = function () {
        var _this = this;
        var goUp = new egret.Timer(10, 0);
        goUp.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.y -= 2;
        }, this);
        goUp.start();
    };
    return Floors;
}(egret.Sprite));
egret.registerClass(Floors,'Floors');
//# sourceMappingURL=Floor.js.map