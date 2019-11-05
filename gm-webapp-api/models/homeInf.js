/**
 * model 数据层
 **/

module.exports = {

    /**
     * 获取订单列表
     * @returns {*[]}
     */
    getOrders(){

        let orderArr = 
            {
               "ico":[{"pic":"background-image: url(../../assets/images/home1.png)","word":"手机电脑"},
                      {"pic":"background-image: url(../../assets/images/home2.png)","word":"国美电器"},
                      {"pic":"background-image: url(../../assets/images/home3.png)","word":"国美超市"},
                      {"pic":"background-image: url(../../assets/images/home4.png)","word":"美店组团"},
                      {"pic":"background-image: url(../../assets/images/home5.png)","word":"分期购"},
                      {"pic":"background-image: url(../../assets/images/home6.png)","word":"充值服务"},
                      {"pic":"background-image: url(../../assets/images/home7.png)","word":"国美家装"},
                      {"pic":"background-image: url(../../assets/images/home8.png)","word":"领美豆"},
                      {"pic":"background-image: url(../../assets/images/home9.png)","word":"国美管家"},
                      {"pic":"background-image: url(../../assets/images/home10.png)","word":"我的"}],

                "footerinfo":[{"footpic":"background-image: url(../../assets/images/b1.png)","footword":"首页"},
                    {"footpic":"background-image: url(../../assets/images/b2.png)","footword":"分类"},
                    {"footpic":"background-image: url(../../assets/images/b3.png)","footword":"优选"},
                    {"footpic":"background-image: url(../../assets/images/b4.png)","footword":"购物车"},
                    {"footpic":"background-image: url(../../assets/images/b5.png)","footword":"我的"}],

                "lininfo":["background-image: url(../../assets/images/lin1.gif)","background-image: url(../../assets/images/lin2.gif)"],

                "slipinfo":["background-image: url(../../assets/images/new.jpg)",
                            "background-image: url(../../assets/images/new2.jpg)",
                            "background-image: url(../../assets/images/new3.jpg)"]
            }
        

        return orderArr;
    }
}
