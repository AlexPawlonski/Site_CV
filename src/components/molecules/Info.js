import React from 'react';
export const Info = ({ data , ...props }) => {
return(
  <div className="w-full flex justify-center items-center h-full">
    <div className="w-3/4 flex flex-col lg:flex-row items-center justify-center">
      <img style={{minWidth:"200px", maxWidth:"300px"}}className="w-1/4 rounded-full p-4" src={data.dataSlide.imgSlide}/>
      <div className="flex flex-col items-center justify-center font-bold text-lg">
        {data.dataSlide.textSlide.map( p => <p>{p}</p>)}
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