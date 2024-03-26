import axios from "./aixos"

// 获取分类
const getShopCategory = () => {
    return axios.get('/category/list?pageNum=1&pageSize=10')
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })

}

//获取商品列表
const getShopList = (data) => {
    return axios.get(`/product/list?pageNum=${data.num}&pageSize=${data.size}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 创建订单
const createOrder = (data) => {
    return axios.post(`/order`, data)
        .then(res => {
            return res.data
        })
        .catch(err => { return err })
}

//支付
const payOrder = (id) => {
    return axios.put(`/order/pay/${id}`)
        .then(res => {
            return res.data
        })
        .catch(err => { return err })

}


export {
    getShopCategory,
    getShopList,
    createOrder,
    payOrder
}