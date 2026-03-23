import React from 'react';
import { AiFillApple } from "react-icons/ai";
import styles from '../styles/Global';
import { checkWechatRequest, getAppLink } from '../utils/Common';

const BtnIOS = ({ assetUrl, link }) => {
  return (
    <div 
      className={styles.btnBlack}
      style={{minWidth:'30%'}}
      onClick={async() => {
        const  wechatFlag = checkWechatRequest()
        if(wechatFlag){
          document.getElementById("guideDiv").style.display="block"
        }else{
          const res = await getAppLink(2)
          if(res&&res.success && res.data && res.data.list.length>0){
            window.location.href = res.data.list[0].url
            //window.open(res.data.list[0].url, "_blank")
          }else{
            alert('暂不正式的IOS版本下载');
          }
          
        }
      }}
    >
      <div>
        <AiFillApple size="3rem" style={{color:"#ffffff"}}/>
      </div>
      <div className="flex flex-col justify-center ml-4" style={{flexGrow:1}}>
        <div className={`${styles.btnText} font-normal text-xs`} style={{textAlign:"center"}}>IOS</div>
        <div className={`${styles.btnText} font-bold text-sm`}  style={{textAlign:"center"}}>下载</div>
      </div>
    </div>
  )
}

export default BtnIOS