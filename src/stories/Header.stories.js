import React from 'react';
import { Header } from '../components/organism/Header.js';
import imgF from '../img/bg-homepage.PNG'
import imgP from '../img/PhotoDeProfile.PNG'

export default {
  title: 'Organism/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {
  data: {
    name: "Pawlonski",
    surname: "Alex",
    bgImg: imgF,
    ProfilImg: {
      src: imgP,
      alt: 'photoProfil',
    },
  }
};
