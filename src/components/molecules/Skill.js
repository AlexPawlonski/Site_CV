import React from 'react';
import PannelSkill from './PannelSkill.js';
import Title from '../atoms/Title.js'
export const Skill = ({ data , ...props }) => {
return(
  <div className="lg:flex justify-center w-full">
      <div className="bg-white rounded-lg p-4 m-2 lg:mr-0 lg:w-full">
          <Title type="h2" data={data.dataSkill.pannelSkill.titlesection}/>
              <div>
              {data.dataSkill.pannelSkill.liste.map( data => <div>
                  <div className="m-1">
                      <Title type={"h3"} data={data.title}/>  
                  </div>
                  <div className=" border-t-2">
                      <p>{data.listeSkill}</p>
                  </div>
              </div> )}
          </div>
      </div>
      <div className="flex-col  lg:w-8/12">
        {data.dataSkill.pannelLvl.map( data => <PannelSkill data={data}/>)}
      </div>  
  </div>
)
}
Skill.propTypes = {
 
};
Skill.defaultProps = {
  
};
export default Skill;