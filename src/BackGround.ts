class BackGround extends egret.DisplayObjectContainer {

    //场景宽与高
    public stageW: number;
    public stageH: number;
    //场景图片
    private ScrollImgTexture: egret.Texture;
    //场景图片高与宽
    private ScrollImgTextureWidth: number;
    private ScrollImgTextureHeight: number;
    /**图片数量*/
    private imgCount: number;
    //图片引用
    private arrScrollImg: egret.Bitmap[];
    //场景滚动速度
    private StageScrollSpeed: number = 1.5;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame_StageScroll, this);

    }

    private onAddToStage(event: egret.Event) {
        //移除进入场景事件函数
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.createGameScene();
    }

    private createGameScene(): void {
        //初始场景参数
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;

        //读取场景图片
        this.ScrollImgTexture = RES.getRes("Down_json.Main");
        //记录原始场景图片的高度，用于循环背景
        this.ScrollImgTextureWidth = this.ScrollImgTexture.textureWidth;
        this.ScrollImgTextureHeight = this.ScrollImgTexture.textureHeight;
        //计算在当前场景要多少张背景图
        //Math.ceil [静态] 返回指定数字或表达式的上限值，最接近且大于等于参数 val 的整数。
        this.imgCount = Math.ceil(this.stageH / this.ScrollImgTextureHeight) + 1;
        //初始图片引用数组
        this.arrScrollImg = [];
        //创建背景图片，并将它们拼接起来。
        //单图
        for (var i = 0; i < this.imgCount; i++) {
            var img: egret.Bitmap = Utils.createBitmapByName("Down_json.Main");
            //
            img.y = this.stageH * i;
            //
            this.addChild(img);

            this.arrScrollImg.push(img);
            //
        }

    }

    //事件函数
    private enterFrame_StageScroll(event: egret.Event): void {
        //加载数组图片
        for (var i = 0; i < this.imgCount; i++) {
            var img1: egret.Bitmap = this.arrScrollImg[i];
            img1.cacheAsBitmap = true;
            img1.y -= this.StageScrollSpeed;
            // //判断超出屏幕后，回到队首，这样来实现循环反复
            if (img1.y < (-this.ScrollImgTextureHeight)) {
                img1.y = this.stageH;
                this.arrScrollImg.shift();
                this.arrScrollImg.push(img1);
            }
            //End For
        }

        //End Function
    }

    /*游戏背景开始滚动*/
    public StageScrollStart(): void {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame_StageScroll, this)
        //注册运动事件
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame_StageScroll, this)
        //End Function
    }


}
