/**
 * 这是一个工具类，暴露出一些方法，供我们组件调用
 * 在这个工具类中，主要是操作localStorage,来对我们的商品数据进行
 * 增删改查
 */

const key = "goodslist"

export function addGoods(goodsObj) {
    //1.先取出原有的数据，并且转成数组
    var goodsArray = JSON.parse(localStorage.getItem(key) || '[]')

    //2.将刚刚传递进来的goodsObj，push到数组的最后一个
    goodsArray.push(goodsObj)

    //3.先把所有的数据转成字符串，然后全部覆写回去
    localStorage.setItem(key, JSON.stringify(goodsArray))
}

//获取我们商品的总数量
export function getGoodsTotalCount() {
    //1.先取出原有的数据，并且转成数组
    var goodsArray = JSON.parse(localStorage.getItem(key) || '[]')

    //循环添加拼接我们的数量
    var totalCount = 0
    for (var i = 0; i < goodsArray.length; i++) {
        totalCount += parseInt(goodsArray[i].count || '0')
    }

    return totalCount
}

//获取商品名字
export function getGoodsArray() {
    return JSON.parse(localStorage.getItem(key) || '[]')
}

//根据商品id，删除localstorage中对应的值
/**
 * [{"goodsId":"87","count":1}, //0
    {"goodsId":"88","count":2}, //1
    {"goodsId":"87","count":2}] //2
 */
export function deleteGoodsById(goodsId) {
    //1.先取出原有的数据，并且转成数组
    var goodsArray = JSON.parse(localStorage.getItem(key) || '[]')

    //2.删除符合要求的所有的商品的数量
    // for(var i = 0 ;i<goodsArray.length;i++){
    //     if(goodsId==goodsArray[i].goodsId){
    //         goodsArray.splice(i,1)
    //         i--
    //     }
    // }
    for (var i = goodsArray.length - 1; i >= 0; i--) {
        if (goodsId == goodsArray[i].goodsId) {
            goodsArray.splice(i, 1)
        }
    }

    //3.先把所有的数据转成字符串，然后全部覆写回去
    localStorage.setItem(key, JSON.stringify(goodsArray))
}