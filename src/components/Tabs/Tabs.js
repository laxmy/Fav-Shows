import React,{ useState } from 'react'
import Tab from './Tab'
import './Tabs.Module.css'

const Tabs = ({children}) => {

    const[activeTab, setActiveTab]=useState(children[0].props.label)
    const onClickTabItem = tab=> setActiveTab(tab)

    return (
        <div className="tabs">
          <ol className="tab-list">
            {children.map((child) => {
              const { label } = child.props;
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })}
          </ol>
          <div className="tab-content">
            {children.map((tabComponent) => {
              if (tabComponent.props.label !== activeTab) return undefined;
              return tabComponent.props.children;
            })}
          </div>
        </div>
      );
}

export default Tabs