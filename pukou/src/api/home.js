import axios from "./aixos"


// 获取卦象简介
const getGuaXiang = () => {
    return axios.get('/index/notice')
        .then(res => res.data)
        .catch(err => console.log(err))
}

// 获取今日运势
const getTodayFortune = (data) => {
    const dataTime = data || {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
    }
    return axios.get(`index/luck/${dataTime.year}/${dataTime.month}/${dataTime.day}`)
        .then(res => res.data)
        .catch(err => console.log(err))
}


export {
    getGuaXiang,
    getTodayFortune
}