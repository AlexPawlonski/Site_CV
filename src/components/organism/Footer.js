import React from 'react';
import Img from '../atoms/Img.js'
import Title from '../atoms/Title.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk, faMap } from '@fortawesome/free-solid-svg-icons/';
export const footer = ({ data , ...props }) => {
  return (
    <footer  className="bg-gray-900">
      <div className="flex justify-end">
        <Img type="logo" data={data.logo}/>
      </div>
      <div className="bg-gray-800">
          <div className=" ml-auto mr-auto w-10/12 md:flex justify-between">
            <div className="p-3 flex flex-col justify-center">
              <Title type="h2" data={data.info.title} />
              {data.info.text.map(data => <p className="text-white py-2">{data}</p>)}
            </div>
            <div className="px-3 md:py-3 md:pl-4 md:border-l-2 border-gray-400 my-2">
              <ul className="py-2 text-white">
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
          <Title type="copyright" data={data.name}/>
        </div>
      </div>
    </footer>
  );
};

footer.propTypes = {
 
};
footer.defaultProps = {
  
};
export default footer; 