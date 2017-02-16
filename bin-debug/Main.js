var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    var d = __define,c=Main,p=c.prototype;
    /**
     * 加载进度界面
     * loading process interface
     */
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        Common.stage = this.stage;
        var resM = new ResourceManager();
        resM.startLoad(this.startCreateScene);
    };
    p.startCreateScene = function () {
        var welcomepage = new Welcome();
        Common.stage.addChild(welcomepage);
    };
    return Main;
}(eui.UILayer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map