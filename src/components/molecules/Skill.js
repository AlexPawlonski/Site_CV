import React from 'react';
import PannelSkill from './PannelSkill.js';
import Title from '../atoms/Title.js';
export const Skill = ({ data , ...props }) => {
return(
  <div className="lg:flex pb-7 justify-center w-full">
      <div className=" xl:w-2/6 ">
        <div className="bg-white rounded-lg p-4 pt-1 m-2">
            <div className="my-2">
                <Title type="h2" data={data.dataSkill.pannelSkill.titlesection}/>
            </div>
                <div>
                {data.dataSkill.pannelSkill.liste.map( data => <div className="pb-2">
                    <div className="my-1">
                        <Title type={"h3"} data={data.title}/>  
                    </div>
                    <div className=" border-t-2">
                        <p className="text-gray-700 font-semibold mt-1">{data.listeSkill}</p>
                    </div>
                </div> )}
            </div>
        </div>
         <PannelSkill data={data.dataSkill.pannelLvl[0]}/>
      </div>
      <div className="xl:w-2/6">
         <PannelSkill data={data.dataSkill.pannelLvl[1]}/> 
      </div>
     
  </div>
)
}
Skill.propTypes = {
 
};
Skill.defaultProps = {
  
};
export default Skill;