import React from 'react';
import Title from '../atoms/Title.js';
export const Info = ({ data , ...props }) => {
  console.log(data);
return(
  <div className="w-full flex justify-center items-center h-full">
    <div className="w-3/4 flex flex-col items-center justify-center">
      <img style={{minWidth:"200px", maxWidth:"300px"}}className="w-1/4 rounded-full p-4" src={data.dataSlide.imgSlide}/>
      <div className="flex justify-center font-bold text-lg">
        {data.dataSlide.textSlide.map( data => 
          <div className="m-7">
            <Title type="h3-w" data={data.title}/>
            <div>
              <p>{data.text}</p>
            </div>
          </div>
          )}
      </div>
    </div>
   
  </div>
)
}
Info.propTypes = {
 
};
Info.defaultProps = {
  
};
export default Info; 