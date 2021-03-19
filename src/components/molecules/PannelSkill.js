import React from 'react';
import ImgSkill from '../atoms/ImgSkill.js';
import InfoBulleSkill from '../atoms/InfoBulleSkill.js';
import Title from '../atoms/Title.js';

export const PannelSkill = ({ data , ...props }) => {
    function liste(data){
        
        if (data.liste) { 
            console.log(data.liste);
            data.liste.map( function(data){
                console.log(data.title);
                return(
                    <div>
                        <p>{data.title}</p>
                    </div>
                )
            })    
        } 
    }
return(
    <div className="bg-white rounded-lg p-4 pt-1 my-2">
        <Title type="h2" data={data.titlesection}/>
        <div>
            {liste(data)} 
        </div>
    </div>
)
}
PannelSkill.propTypes = {
 
};
PannelSkill.defaultProps = {
  
};
export default PannelSkill;