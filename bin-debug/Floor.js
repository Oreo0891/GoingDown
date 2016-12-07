var Floors = (function (_super) {
    __extends(Floors, _super);
    function Floors(type) {
        _super.call(this);
        this.createFloor(type);
    }
    var d = __define,c=Floors,p=c.prototype;
    p.createFloor = function (type) {
        this.floortype = type;
        var floor = Main.createBitmapByName("floor" + this.floortype + "_png");
        this.addChild(floor);
    };
    return Floors;
}(egret.Sprite));
egret.registerClass(Floors,'Floors');
//# sourceMappingURL=Floor.js.map