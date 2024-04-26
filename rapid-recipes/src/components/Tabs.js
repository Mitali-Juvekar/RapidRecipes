import React,{useState,useEffect} from 'react'
import {CiPizza} from 'react-icons/ci'
import {GiNoodles,GiFruitBowl,GiCheckMark} from 'react-icons/gi'
import {MdOutlineIcecream} from 'react-icons/md'
import {fetchTabData} from '../service'

function Tabs() {
    const [active,setActive] = useState('Pizza')
    const [tabData,setTabData] = useState('')
    const [tabLabel,setTabLabel] = useState([
        {
            name: 'Pizza',
            icon: <CiPizza/>,
            id: '1b25671a32284038b57ad8b49c44af68'
        },
        {
            name: 'Noodles',
            icon: <GiNoodles/>,
            id: 'b2a6ba8505c4cd4cb2958b1a467153bf'
        },
        {
            name: 'Desert',
            icon: <GiFruitBowl/>,
            id: 'e887295dd0db4c4fadf55a2a147c8dee'
        },
        {
            name: 'Ice cream',
            icon: <MdOutlineIcecream/>,
            id: '7c5a5ced83523b4dc49adbc78471cc38'
        },
    ])

    const handleClick = (name,id) => {
        setActive(name)
        fetchTabData(id).then((response)=> {
            setTabData(response);
        })
    }

    useEffect(()=> {
        fetchTabData(tabLabel[0].id).then((response)=> {
            setTabData(response);
        })

    },[])

    return (
        <div className="container">
        <h1 className='recipeHeading'>What would you like to have!</h1>
        <div className="tabs">
                {tabLabel.map((item,index)=> (
                    <div onClick={()=> handleClick(item.name, item.id)} key={index} className={`tablist ${active === item.name ?'active': ""}`}>
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                ))}
            
        </div>
        <div className='recipe_banner'>
            {tabData !== '' && <>
                <div className="left-col">
                    <span className='badge'>{tabData.recipe.cuisineType[0]}</span>
                    <h1>White Pizza</h1>
                    <p><strong>Recipe by:</strong><small>Food52</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt="" />
                    </div>
                </div>
            
            </>}
        </div>
    </div>
    )

}

export default Tabs