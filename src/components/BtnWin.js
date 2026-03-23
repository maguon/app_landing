import React from 'react';
import { AiFillWindows } from "react-icons/ai";
import styles from '../styles/Global';
import { checkWechatRequest, getAppLink } from '../utils/Common';

const BtnWin = ({ assetUrl, link }) => {
  return (
    <div 
      className={styles.btnBlack}
      style={{minWidth:'30%'}}
      onClick={async() => {
      
        const  wechatFlag = checkWechatRequest()
        if(wechatFlag){
          document.getElementById("guideDiv").style.display="block"
        }else{
          const res = await getAppLink(3)
          if(res&&res.success && res.data && res.data.list.length>0){
            window.open(res.data.list[0].url, "_blank")
          }else{
            alert('Windows企业桌面版本正在上线审核中!');
          }
          
        }
      }}
    >
      {/* <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} /> */}
      <div>
        <AiFillWindows size="3rem" style={{color:"#ffffff"}}/>
      </div>
      <div className="flex flex-col justify-center ml-4"  style={{flexGrow:1}}>
        <div className={`${styles.btnText} font-normal text-xs`} style={{textAlign:"center"}}>Windows</div>
        <div className={`${styles.btnText} font-bold text-sm`}  style={{textAlign:"center"}}>下载</div>
      </div>
    </div>
  )
}

export default BtnWin