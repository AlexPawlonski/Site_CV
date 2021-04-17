import React from 'react';
import Title from '../atoms/Title.js';
import Img from '../atoms/Img.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons/';
export const Contact = ({ data , ...props }) => {

return(
  <div className="sm:flex pb-4 text-center">
    <div className="sm:border-r-2 p-2 pr-10 w-72">
      <div className="mb-4">
         <Title type="h2-w" data={data.data.dataLink.title}/>
      </div>
      <ul>
        {data.data.dataLink.data.map( data => <li className="flex items-center transform hover:scale-105 duration-100"><Img type="logo" data={data.logo}/> <a target="_blank" className="font-bold" href={data.link.url}>{data.link.value}</a></li>)}
      </ul>
    </div>
    <div className="p-2 sm:border-none border-t-2 md:pl-10 w-72">
      <div className="mb-8">
         <Title type="h2-w" data={data.data.dataContact.title}/>
      </div>
      <ul>
        <li className="flex items-center bg-white text-black font-bold p-1 my-4 rounded-lg transform hover:scale-105 duration-100"> <FontAwesomeIcon icon={faMailBulk} className="m-1"/><a href={`mailto:`+data.data.dataContact.data.mail}>{data.data.dataContact.data.mail}</a></li>
        <li className="flex items-center bg-white text-black font-bold p-1 my-4 rounded-lg transform hover:scale-105 duration-100"> <FontAwesomeIcon icon={faPhone} className="m-1"/><a href={`tel:`+data.data.dataContact.data.phone}>{data.data.dataContact.data.phone}</a></li>
      </ul>
    </div>
  </div>
)
}
Contact.propTypes = {
 
};
Contact.defaultProps = {
  
};
export default Contact; 