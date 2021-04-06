import React from 'react';
import Img from '../atoms/Img.js'
import Title from '../atoms/Title.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk, faMap } from '@fortawesome/free-solid-svg-icons/';
import { Parallax } from 'react-scroll-parallax';
export const footer = ({ data , ...props }) => {

  return (
    <Parallax y={[50,-80]}>
      <footer  className="bg-gray-900">
        <div className="flex justify-end">
          <Img type="logo" data={data.logo}/>
        </div>
        <div className="bg-gray-800">
            <div className=" ml-auto mr-auto w-10/12 md:flex justify-between">
              <div className="p-3">
                <Title type="h2" data={data.info.title} />
                <p className="text-white">{data.info.text}</p>
              </div>
              <div className="p-3 pl-4 border-l-2 border-gray-400 my-2">
                <ul className="py-4 text-white">
                  <li className="my-2"><Title type="h2" data={data.name}/></li>
                  <li className="flex items-center "> <FontAwesomeIcon icon={faMap} className="mr-2"/><a href={`mailto:`+data.location}>{data.location}</a></li>
                  <li className="flex items-center "> <FontAwesomeIcon icon={faMailBulk} className="mr-2"/><a href={`mailto:`+data.mail}>{data.mail}</a></li>
                  <li className="flex items-center "> <FontAwesomeIcon icon={faPhone} className="mr-2"/><a href={`tel:`+data.phone}>{data.phone}</a></li>
                </ul>
              </div>  
            </div>
        </div>
        <div className="flex justify-end">
          <div className="m-2">
            <Title type="h3-w" data={data.name}/>
          </div>
        </div>
      </footer>
    </Parallax>
    
  );
};

footer.propTypes = {
 
};
footer.defaultProps = {
  
};
export default footer; 