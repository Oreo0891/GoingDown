var BackGround = (function (_super) {
    __extends(BackGround, _super);
    function BackGround() {
        _super.call(this);
        //场景滚动速度
        this.StageScrollSpeed = 1.5;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame_StageScroll, this);
    }
    var d = __define,c=BackGround,p=c.prototype;
    p.onAddToStage = function (event) {
        //移除进入场景事件函数
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.createGameScene();
    };
    p.createGameScene = function () {
        //初始场景参数
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        //读取场景图片
        this.ScrollImgTexture = RES.getRes("Main_png");
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
            var img = Main.createBitmapByName("Main_png");
            //
            img.y = this.stageH * i;
            //
            this.addChild(img);
            this.arrScrollImg.push(img);
        }
    };
    //事件函数
    p.enterFrame_StageScroll = function (event) {
        //加载数组图片
        for (var i = 0; i < this.imgCount; i++) {
            var img1 = this.arrScrollImg[i];
            img1.cacheAsBitmap = true;
            img1.y -= this.StageScrollSpeed;
            // //判断超出屏幕后，回到队首，这样来实现循环反复
            if (img1.y < (-this.ScrollImgTextureHeight)) {
                img1.y = this.stageH;
                this.arrScrollImg.shift();
                this.arrScrollImg.push(img1);
            }
        }
        //End Function
    };
    /*游戏背景开始滚动*/
    p.StageScrollStart = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame_StageScroll, this);
        //注册运动事件
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame_StageScroll, this);
        //End Function
    };
    return BackGround;
}(egret.DisplayObjectContainer));
egret.registerClass(BackGround,'BackGround');
//# sourceMappingURL=BackGround.js.map