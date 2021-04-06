import React from 'react';
import Img from '../atoms/Img.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Title from '../atoms/Title.js';
export const PannelSkill = ({ data , ...props }) => {
    function funcLvl(lvl){
        var lvlTab=[];
        for (let index = 0; index < 10; index++) {
            if (lvl > index) {
                
                lvlTab.push(true);
            }else{
                lvlTab.push(false);
            }
        }
        return lvlTab;
    }

    return(
        <div className="bg-white rounded-lg p-4 pt-1 m-2 pb-6" >
            <div className="flex align-baseline my-2">
               <Title type="h2" data={data.titlesection}/> 
            </div>
            <div>
                {data.skillLevel.map( data => <div>
                    <div className="flex w-full">
                        <div className="m-2">
                        { <Img type="skill" data={data.imgSkill} />}  
                        </div>
                        <div className="w-full pt-3 flex flex-col ml-2 justify-center">
                            <div className="border-gray-300 border-b-2 pb-2">
                               <Title type="h3" data={data.title}/> 
                            </div>
                            <div className="flex w-10/12 items-center justify-between m pt-1 mt-1 ml-auto mr-auto">
                                {funcLvl(data.lvl).map( data => {
                                    if(data){
                                        return(
                                            <div className="text-red-500">
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        )
                                    }else{
                                        return(
                                            <div className="text-gray-400">
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        )
                                    }
                                })}
                            </div>      
                        </div>
                    </div>
                </div>)}
            </div>
        </div> 
    )
    
}
PannelSkill.propTypes = {
 
};
PannelSkill.defaultProps = {
  
};
export default PannelSkill;