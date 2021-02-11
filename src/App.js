import './App.css';
import Header from './components/organism/Header.js';
import MenuNav from './components/organism/MenuNav.js';
import imgF from './img/bg-homepage.PNG';
import imgP from './img/PhotoDeProfile.PNG';
function App() {
  return (
    <div id="wrapper" className="App flex flex-col my-0 mx-auto">

      <Header data={{
        name: "Pawlonski",
        surname: "Alex",
        bgImg: imgF,
        ProfilImg: {
          src: imgP,
          alt: 'photoProfil',
        },
      }} />

      <MenuNav data={[
        {
          name:"Accueil",
          value:"home"
        },
        {
          name:"Présentation",
          value:"info"
        },
        {
          name:"Compétence",
          value:"skill"
        },
        {
          name:"Objectif",
          value:"goal"
        },
        {
          name:"Contact",
          value:"contact"
        },
      ]} />

    </div>
  );
}
export default App;
