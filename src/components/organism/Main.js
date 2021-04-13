import React from 'react';
import Pannel from '../molecules/Pannel.js';
import Title from '../atoms/Title.js';

export const Main = ({ data , ...props }) => {
  const Data = data;
  return(
    <div id="main" className="flex flex-col w-full self-center pt-4">
       {Data.map(function(data){  
         var sectionStyle = null;
          switch (data.color) {
            case 'red':
              sectionStyle={backgroundColor: 'rgba(239, 68, 68)'}
              break;
            case 'blue':
              sectionStyle={backgroundColor: ' rgba(139, 92, 246)'}
              break;
            case 'white':
              sectionStyle={backgroundColor: '#fff'}
              break;
          
            default:
              break;
          }

          return (
            <section className=" w-full flex flex-col items-center transform -skew-y-5 mb-5" style={sectionStyle}>
                <div className="transform skew-y-5 flex flex-col items-center w-full">
                    <div id={data.value} className="px-4 mb-10 text-center bg-white p-1 transform -translate-y-4 z-0 rounded-md">
                      <Title type="h2-b" data={data.title}/>
                    </div>
                  <Pannel data={data}/>
                </div>
            </section>
          )
        } 
       )}
    </div>
  )
};

Main.propTypes = {
 
};
Main.defaultProps = {
  
};
export default Main; 