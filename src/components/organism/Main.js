import React from 'react';
import Pannel from '../molecules/Pannel.js'
import Title from '../atoms/Title.js'
export const Main = ({ data , ...props }) => {
  const Data = data;
  return(
    <div id="main" className="flex flex-col w-full self-center px-3 pt-4">
       {Data.map(data =>
          <section className="h-screen w-full" style={{minHeight: "500px"}} id={data.value}>
              <div className="w-full border-gray-300 border-b-4 text-2xl">
                <Title type="h2" data={data.title}/>
              </div>
              <Pannel data={data}/>
          </section>
       )}
    </div>
  )
};

Main.propTypes = {
 
};
Main.defaultProps = {
  
};
export default Main; 