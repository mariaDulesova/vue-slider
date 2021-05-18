var app = new Vue(
    {
        el: "#root",
        data:{
            imagesLn:[
                "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A",
                "https://i1.wp.com/alessandrosicurocomunication.com/wp-content/uploads/2020/10/https___www.history.com_.image_MTYyNDg1MjE3MTI1Mjc5Mzk4_topic-london-gettyimages-760251843-promo.jpg?fit=1920%2C1080&ssl=1",
                "https://www.londonstayuk.com/wp-content/uploads/2019/12/Public-Transport-London.jpg",
                "https://www.londra.today/wp-content/uploads/2019/06/london-eye-1.jpeg"
            ],
            imagesNy: [
                "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2019/10/b-C1_GettyImages-1065697748_16783DB8796_5328346-1024x827.jpg?v=352311",
                "https://www.alpha59.it/img/thu/800x450/pZtUSb8AHgOS1zro/new46york46city.jpg",
                "https://image.newyorkcity.it/wp-content/uploads/2012/09/Times-Square-in-New-York.jpg"
            ],
            imageIndexLn: 0,
            imageIndexNy: 0
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
            // changeImg(imageIndexLn) {
            //     this.imageIndexLn = imageIndexLn;
            // }
        }
    }
)