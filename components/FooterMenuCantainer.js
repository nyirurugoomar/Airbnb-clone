"use client"
import {useState} from 'react'
import All from './All'
import Art from './Art'
import OutDoors from './OutDoors'
import Tab from './FooterMenu'
import FooterMenu from './FooterMenu'
import Mountain from './TabPage/Mountain'
import Beach from './TabPage/Beach'
import UniqueStays from './TabPage/UniqueStays'


function FooterMenuCantainer() {
    const FooterMenu =[
        {label:'Popular',id:1},
        {label:'Arts & culture',id:2},
        {label:'OutDoors',id:3},
        {label:'Mountain',id:4},
        {label:'Beach',id:5},
        {label:'Unique stays',id:6},
        {label:'Categories',id:7},
        {label:'Things to do',id:8},
        {label:'Airbnb-friendly apartments',id:9},
        
    ]
    const [activeTab, setActiveTab] = useState(FooterMenu[0].id);
    const handleTabClick = (id) =>{
        setActiveTab(id)
    }
  return (
    <>
    
    <div className=" border-gray-200 rounded-lg ">
        <div className="flex">
          {FooterMenu.map((FooterMenu) => (
            <Tab
              key={FooterMenu.id}
              label={FooterMenu.label}
              active={activeTab === FooterMenu.id}
              onClick={() => handleTabClick(FooterMenu.id)}
            />
          ))}
        </div>
        <div className=''>
          {activeTab === 1 && <div><All/></div>}
          {activeTab === 2 && <div><Art/></div>}
          {activeTab === 3 && <div><OutDoors/></div>}
          {activeTab === 4 && <div><Mountain/></div>}
          {activeTab === 5 && <div><Beach/></div>}
          {activeTab === 5 && <div><UniqueStays/></div>}
          
          
        </div>
        
      </div>
    
    
    </>
  )
}

export default FooterMenuCantainer