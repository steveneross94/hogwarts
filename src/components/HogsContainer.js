import React from 'react'
import Hog from './Hog'


function HogsContainer(props) {
    console.log(props.filtered, props.hogs)
    let filteredHogs = props.hogs.filter(hog => props.filtered ?  hog.greased : hog)
    
    return (
        <div>
            <div className='ui grid container'>
                {filteredHogs.map((hog, index) => {
                    let hogImageName = hog.name.split(' ').join('_')
                    // console.log(hogImageName);
                    return (
                        <Hog hogImageName={hogImageName} key={index} hog={hog}/>
                    )
                })}
            </div>
            <button onClick={() => props.greasedHogs()}>Greased?</button><br/>
        </div>
    )
}

export default HogsContainer

