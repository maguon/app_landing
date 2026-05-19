import React,{useEffect, useState} from 'react';
import { AiFillWechat  } from "react-icons/ai";
import styles from '../styles/Global';
import { checkWechatRequest, getAppLink } from '../utils/Common';

const BtnWechat = ({ assetUrl, link }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(checkMobile());
  }, []);
  const checkMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log(userAgent);
    const isMobile = /android|avantgo|playbook|ipad|iphone|ipod|blackberry|iemobile|kindle|netfront|silk|windows phone/i.test(userAgent);
    console.log(isMobile);
    return isMobile;
  }
  return (
    <div>
       {mobile && 
        <div
            style={{padding:"1rem",borderRadius:"100%",backgroundColor:"#07c160"}}
            onClick={()=>{window.location.href = "weixin://dl/business/?appid=wx0117ec71f08ad34e&path=pages/live/index"}}
            >
            <div>
                <AiFillWechat  size="3rem" style={{color:"#fff"}}/>
            </div>
        </div>
       }
    </div>
    
  )
}

export default BtnWechat
