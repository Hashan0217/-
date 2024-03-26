import axios from "./aixos"


// 登录
const lgoinRequest = (data) => {
    const reqData = {
        phoneNumber: data.phone,
        password: data.password
    }
    return axios.post('/login', reqData)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 注册
const registerRequest = (data) => {
    const reqData = {
        phoneNumber: data.phone,
        password: data.password,
        "userType": "sys_user"
    }
    return axios.post('/register', reqData)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

//修改密码
const changePasswordRequest = (data) => {
    const reqData = {
        phonenumber: data.name,
        oldPassword: data.oldPassword,
        newPassword: data.newPassword
    }
    return axios.put('/system/user/profile/updatePwd', reqData)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}


//获取用户信息
const getUserInfoRequest = () => {
    return axios.get('/system/user/profile')
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })

}

// 上传图片
const uploadImage = (data) => {
    return axios.post('/file/img', { file: data })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 修改用户信息
const setUserInfoRequest = (data) => {
    const reqData = {
        avatar: data.avatar ? data.avatar : null,
        email: data.email ? data.email : null,
        userName: data.nickname ? data.nickname : null,
        phonenumber: data.mobilePhoneNumebr ? data.mobilePhoneNumebr : null,
        age: data.age ? data.age : null,
        sex: data.sex ? data.sex : null,
        address: data.area ? data.area : null,
        profession: data.work ? data.work : null,
        hobby: data.hobby ? data.hobby : null,
    }
    return axios.put('/system/user/profile', reqData)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })


}



// 获取我的商品
const getMyGoods = () => {
    return axios.get('/order/list?pageNum=1&pageSize=10')
        .then(res => {
            return res.data  // 这里我获取数据后 吧data返回了 
        })
        .catch(err => {
            return err
        })
}

// 获取我的订单
const getMyOrder = () => {
    return axios.get('/order/myOrder')
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 获取我的文章
const getMyArticle = () => {
    return axios.get('/article/list/my?pageNum=1&pageSize=10')
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 获取我的测算
const getMyCalculation = () => {
    return axios.get('/bugua/list/my')  // 这个是对的吧学委
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

export {
    getMyGoods,
    getMyOrder,
    getMyArticle,
    lgoinRequest,
    registerRequest,
    getUserInfoRequest,
    uploadImage,
    setUserInfoRequest,
    getMyCalculation,
    changePasswordRequest



}