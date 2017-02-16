
class Main extends eui.UILayer {
    /**
     * 加载进度界面
     * loading process interface
     */
    
    protected createChildren(): void {
        super.createChildren();
        Common.stage = this.stage;
        var resM:ResourceManager = new ResourceManager();
        resM.startLoad(this.startCreateScene);
    }

    protected startCreateScene(): void {
       var welcomepage:Welcome = new Welcome();
       Common.stage.addChild(welcomepage);
    }
}
