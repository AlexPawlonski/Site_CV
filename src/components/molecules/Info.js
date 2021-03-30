import React from 'react';
import Title from '../atoms/Title.js';
export const Info = ({ data , ...props }) => {
  console.log(data);
return(
  <div className="w-full flex justify-center items-center text-center lg:min-h-screen">
    <div className="mx-4 flex flex-col items-center justify-center">
      <div className="bg-white rounded-full">
        <img style={{minWidth:"200px", maxWidth:"200px"}}className="w-1/4 rounded-full p-4" src={data.dataSlide.imgSlide}/>
      </div>
       <div className="flex flex-col md:flex-row justify-center font-bold text-lg">
        {data.dataSlide.textSlide.map( data => 
          <div className="m-5 xl:w-1/3">
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