import React from 'react';
import { ImgProfil } from '../components/atoms/ImgProfil.js';
import imgP from '../img/PhotoDeProfile.PNG'

export default {
  title: 'Atoms/ImgProfil',
  component: ImgProfil,
};

const Template = (args) => <ImgProfil {...args} />;

export const imgProfil = Template.bind({});
imgProfil.args = {
  PImg: {
    src: imgP,
    alt: 'photoProfil',
  },
};
