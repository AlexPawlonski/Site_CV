import React from 'react';
import PropTypes from 'prop-types';
import Title from '../atoms/Title.js';
import Img from '../atoms/Img.js';

export const PannelProject = ({ data , fInfoPopUp, ...props }) => {
    console.log(data);
    let link = "#"+data.id
return(
    <a href={link}  onClick={() => fInfoPopUp(data)} style={{minWidth:"150px", maxWidth:"250px"}} className="m-2 rounded-lg transform hover:scale-105 duration-100 cursor-pointer">
        <div>
            <Img type="project" data={data.img}/>
        </div>
        <div className="bg-purple-600">
            <div className="ml-2 bg-purple-600 absolute transform -translate-y-5 arrow"></div>
            <div className="mx-1">
                <div>
                    <Title type="h2" data={data.title}/>
                </div>
                <div className="pb-1">
                   <Title type="h3" data={data.subTitle}/> 
                </div>
            </div>
        </div>
    </a>
)
}
PannelProject.propTypes = {
 
};
PannelProject.defaultProps = {
  
};
export default PannelProject;