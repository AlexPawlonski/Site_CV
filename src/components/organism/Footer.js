import React from 'react';
import Img from '../atoms/Img.js'
import Title from '../atoms/Title.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk, faMap } from '@fortawesome/free-solid-svg-icons/';
export const footer = ({ data , ...props }) => {

  return (
    <footer  className=" bg-gray-700">
      <div className="flex justify-end">
        <Img type="logo" data={data.logo}/>
      </div>
      <div className="bg-gray-500 ">
          <div className=" ml-auto mr-auto w-10/12 md:flex justify-between">
            <div className="p-3">
              <Title type="h2" data={data.info.title} />
              {data.info.text}
            </div>
            <div className="p-3">
              <ul className="">
                <li className="my-2"><Title type="h3" data={data.name}/></li>
                <li className="flex items-center "> <FontAwesomeIcon icon={faMap} className="mr-2"/><a href={`mailto:`+data.location}>{data.location}</a></li>
                <li className="flex items-center "> <FontAwesomeIcon icon={faMailBulk} className="mr-2"/><a href={`mailto:`+data.mail}>{data.mail}</a></li>
                <li className="flex items-center "> <FontAwesomeIcon icon={faPhone} className="mr-2"/><a href={`tel:`+data.phone}>{data.phone}</a></li>
              </ul>
            </div>  
          </div>
      </div>
      <div className="flex justify-end">
        <div className="m-2">
          <Title type="h3" data={data.name}/>
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