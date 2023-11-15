export const checkWechatRequest = () =>{
    const userAgentInfo = navigator.userAgent.toLowerCase();
        
    const androidAgent = 'android';
    const wechatAgent = 'micromessenger';
    if(userAgentInfo.indexOf(wechatAgent)>0){
        return true
    }else {
        return false
    }
}

export const getAppLink = (deviceType) => {
    const url = `http://api.yepin.co:88/api/public/app?deviceType=${deviceType}&pageNumber=1&pageSize=1`
    return fetch( url, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((result) => {
        return result
    }).catch((error) => {
        return error
    })
}