import axios from "./aixos"

// 提交占卜结果
const submitDivination = (data) => {
    return axios.get(`/bugua/qipan?code=${data}`)
        .then(res => res.data)
        .catch(err => err);
}



export {
    submitDivination
}