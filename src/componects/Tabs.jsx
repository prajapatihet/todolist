import React, { useState } from 'react'
import { tabs } from '../Data/tabs'

export default function Tabs() {

    let [activeTab, setActiveTab] = useState(0);
    let [activeContent, setActiveContent] = useState(tabs[0]);

    let changeData = (index) => {
        setActiveTab(index);
        setActiveContent(tabs[index]);
    }
    return (
        <div className='tabsOuter'>
            <h1 style={{ textAlign: 'left' }}>
                Let's Learn About Some Databases
            </h1>
            <ul>
                {tabs.map((tabItems, index) => {
                    return (
                        <li>
                            <button onClick={() => changeData(index)} className={activeTab === index ? 'activeButton' : ''}>{tabItems.title}</button>
                        </li>
                    )
                })}
            </ul>
            {
                activeContent !== undefined ?
                    <p>
                        {activeContent.briefDescription}
                    </p>
                    :
                    ''
            }
        </div>
    )
}
