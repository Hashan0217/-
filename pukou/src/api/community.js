import axios from "./aixos"

/**
 * @description 社区接口
 */


//获取社区列表
const getCommunityList = (data) => {
    return axios.get(`/article/list?pageNum=${data.num}&pageSize=${data.size}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 获取社区详情
const getCommunityDetail = (id) => {
    return axios.get(`/article/${id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

//新增文章
const addArticle = (data) => {
    return axios.post('/article', data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 修改文章
const updateArticle = (data) => {
    return axios.put('/article', data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 删除文章
const deleteArticle = (id) => {
    return axios.delete(`/article/${id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}


// 点赞文章
const likeArticle = (id) => {
    return axios.post(`thumb/${id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 文章父评论
const addComment = (data) => {
    return axios.post('comments/root', data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 获取文章父评论
const getComment = (id) => {
    return axios.get(`/comments/root?pageNum=1&pageSize=10&articleId=${id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}

// 获取子评论
const getSubComment = (id) => {
    return axios.get(`/comments/reply/${id}`)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}


//提交子评论
const addSubComment = (data) => {
    return axios.post('comments/reply', data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
}



export {
    getCommunityList,
    getCommunityDetail,
    addArticle,
    updateArticle,
    deleteArticle,
    likeArticle,
    addComment,
    getComment,
    getSubComment,
    addSubComment


}