import React from 'react'
import './Tabs.Module.css'

const Tab = ({activeTab, label, onClick}) =>{

    return (
        <li onClick={()=> onClick(label)} className={activeTab===label? `tab-list-item active-tab`:`tab-list-item`}>
          {label}
        </li>
      );
}

export default Tab