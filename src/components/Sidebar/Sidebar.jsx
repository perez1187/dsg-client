import React from 'react'
import './Sidebar.css'
// import Logo from '../../imgs/logo.png'
import { UilSignOutAlt } from "@iconscout/react-unicons";

// local Data
import { SidebarData } from '../../data/data'

// using context
import {useAuth} from '../../hooks/useAuth'


const Sidebar = () => {

    // ktore menu active, 0 oznacza index
    // const [selected,setSelected] = useState(0)
    const {selected, setSelected} =useAuth()


  return (
    <div className="Sidebar">

        {/* menu */}
        <div className="me!nu">
            {
                SidebarData.map((item,index) => {
                    return(
                        <div 
                        // className="menuItem active" // to zamiienamy na:
                        className={selected===index?'menuItem active':'menuItem'}
                        key={index} 
                        onClick={()=>setSelected(index)} // zmiana active
                        >
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                }
                )
            }
            {/* additionaly logout icon */}
            {/* <div className="menuItem">
                <UilSignOutAlt/>
            </div> */}
        </div>
    </div>    
  )
}

export default Sidebar