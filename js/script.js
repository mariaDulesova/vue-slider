var app = new Vue(
    {
        el: "#root",
        data:{
            imagesLn:[
                "img/london-1.png",
                "img/london-2.png",
                "img/london-3.png",
                "img/london-4.png",
            ],
            imagesNy: [
                "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2019/10/b-C1_GettyImages-1065697748_16783DB8796_5328346-1024x827.jpg?v=352311",
                "https://www.alpha59.it/img/thu/800x450/pZtUSb8AHgOS1zro/new46york46city.jpg",
                "https://image.newyorkcity.it/wp-content/uploads/2012/09/Times-Square-in-New-York.jpg"
            ],
            imageIndexLn: 0,
            imageIndexNy: 0,
            timer:null
        },
        
        mounted: function () {
            this.startRotation();
            },
            
        methods: {
            prevImgLn: function () {
                this.imageIndexLn--;
                if(this.imageIndexLn == -1){
                    this.imageIndexLn = this.imagesLn.length - 1;
                }
            },
            nextImgLn: function () {
                this.imageIndexLn++;
                if(this.imageIndexLn == this.imagesLn.length) {
                    this.imageIndexLn = 0;
                }
            },
            prevImgNy: function () {
                this.imageIndexNy--;
                if(this.imageIndexNy == -1){
                    this.imageIndexNy = this.imagesNy.length - 1;
                }
            },
            nextImgNy: function () {
                this.imageIndexNy++;
                if(this.imageIndexNy == this.imagesNy.length) {
                    this.imageIndexNy = 0;
                }
            },
            startRotation: function() {
                this.timer = setInterval(this.nextImgLn, 3000);
            },
            stopRotation: function() {
                clearTimeout(this.timer);
                this.timer = null;
                },
            

        }
       
    }
)