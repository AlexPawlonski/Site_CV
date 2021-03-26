import React from 'react';
import Title from '../atoms/Title.js';
import Img from '../atoms/Img.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons/';
export const Contact = ({ data , ...props }) => {
 console.log(data.data.dataContact.data.mail);
return(
  <div className="md:flex">
    <div className="md:border-r-2 p-2">
      <div className="m-1">
         <Title type="h2" data={data.data.dataLink.title}/>
      </div>
      <ul>
        {data.data.dataLink.data.map( data => <li className="flex items-center"><Img type="logo" data={data.logo}/> <a target="_blank" className="hover:text-red-500 font-bold" href={data.link.url}>{data.link.value}</a></li>)}
      </ul>
    </div>
    <div className="p-2 md:border-none border-t-2">
      <div className="m-1">
         <Title type="h2" data={data.data.dataContact.title}/>
      </div>
      <ul>
        <li className="flex items-center mb-2"> <FontAwesomeIcon icon={faMailBulk} className="m-1"/><a href={`mailto:`+data.data.dataContact.data.mail}>{data.data.dataContact.data.mail}</a></li>
        <li className="flex items-center mt-2"> <FontAwesomeIcon icon={faPhone} className="m-1"/><a href={`tel:`+data.data.dataContact.data.phone}>{data.data.dataContact.data.phone}</a></li>
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