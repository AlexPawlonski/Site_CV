import React, {useState} from 'react';
import PannelProject from './PannelProject.js';
import InfoProject from '../molecules/InfoProject.js';
export const Portfolio = ({ data , ...props }) => {
  const [info, setData] = useState()

  function infoPopUp(data){
    setData(data)
  }
  function closePopUp(){
    setData(null)
  }

return(
  <div className="flex flex-col justify-center pb-6">
    <div className="w-full">
      <InfoProject data={info} fClosePopUp={closePopUp}/>
    </div>
    <div className="flex justify-center flex-wrap">
        {data.pannelProject.map( data => <PannelProject data={data} fInfoPopUp={infoPopUp} />)}  
    </div>
  </div>
  
  ) 
}
Portfolio.propTypes = {
 
};
Portfolio.defaultProps = {
  
};
export default Portfolio;