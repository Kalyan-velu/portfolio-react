import React from 'react'
import { NavLink as NaL ,Link as L} from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import './Link.css'
export const NavLink = ({title,className,to,children}) => {
  return (
    <NaL to={`${to}`}className={({isActive})=>isActive?`${className} active navlink`:`${className} navlink`} >
      <Tooltip title={title ||'Navlink'}>
        {/* <IconButton> */}
            {children}
        {/* </IconButton> */}
       </Tooltip>
    </NaL>
  )
}
 export const Link=({title,className,secClass,to,children})=>{
   return(
      <L to={`${to}`}className={`${className} ${secClass} navlink`}>
        {/* <Tooltip title={title||'Link'}> */}
            {children}        
        {/* </Tooltip> */}
      </L>
   )
 }

