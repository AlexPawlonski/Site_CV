import React from 'react';
import Title from '../atoms/Title.js'
import Date from '../atoms/Date.js'
import Img from '../atoms/Img.js';
import Description from './Description.js';
import Localisation from '../atoms/Localisation.js';


export const Course = ({ data , ...props }) => {
  console.log(data.dataSection);
  let xp = data.dataSection.xp;
return(
  <div className="lg:flex flex-wrap justify-center">
    {xp.map( data => <div className="bg-white rounded-lg p-4 pt-1 m-2 lg:w-5/12 h-full ">
      <div className="mb-2">
        <Title type="h2-b" data={data.type}/>
      </div>
      <div className="flex">
        <a className="cursor-pointer" href={data.link} target="_blank"><Img  type="xp" data={data.imgXp}/></a>
        <div className="ml-3">
          <Title type="h2" data={data.title}/>
          <div>
            <Date data={data.date}/>
            <Localisation data={data.map}/>                                                   
          </div>
        </div>
      </div>
      <Description data={data.desc} view={data.view}/> 
    </div>)}
  </div>
)
}
Course.propTypes = {
 
};
Course.defaultProps = {
  
};
export default Course; 