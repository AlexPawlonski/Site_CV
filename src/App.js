import './App.css';
import Header from './components/organism/Header.js';
import Navbar from './components/organism/Navbar';
import imgF from './img/bg-homepage.PNG';
import imgP from './img/PhotoDeProfile.PNG';
import imgPP from './img/PhotoDeProfile_Blank.PNG';
import fondImg from './img/fondRose.jpg';
import Main from './components/organism/Main.js';
import Footer from './components/organism/Footer.js';
function App() {

  var sectionStyle = {
    backgroundImage: `url(${fondImg})`,
  };

  return (
    <div id="wrapper" style={sectionStyle} className="App flex flex-col my-0 mx-auto bg-fixed bg-cover">

      <Header data={{
        name: "Alex Pawlonski",
        subTitle: "Développeur WEB",
        bgImg: imgF,
        ProfilImg: {
          src: imgPP,
          alt: 'photoProfil',
        },
      }} />

      <Navbar data={[
        {
          name:"Accueil",
          value:"home"
        },
        {
          name:"Présentation",
          value:"info"
        },
        {
          name:"Mon Parcours et expérience",
          value:"course"
        },
        {
          name:"Compétence",
          value:"skill"
        },
        {
          name:"Mes réalisation",
          value:"portfolio"
        },
        {
          name:"Contact",
          value:"contact"
        },
      ]} />

      <Main data={[
        {
          title:"Présentation",
          value:"info",
          color: "red",
          id: 0,
          dataSlide:{
            imgSlide: imgP,
            textSlide:[
              {
                title: 'lorem fds free fzre',
                text: 'drgtrzgtrg zrtg rtge trgrzetgrtg rtgertg ertg rtg rettg erth rethth tuy tze(yt rtuyrt'
              },
              {
                title: 'lorem fds free',
                text: 'drgtrzgtrg zrtg rtge trgertg ertg rtg rettg erth rethth tuy tze(yt rtuyrt'
              }, 
              {
                title: 'lorem fds',
                text: 'drgtrzgtrg zrtg rtge trgg ertg rtg rettg erth rethth tuy tze(yt rtuyrt'
              } 
            ]
          } 
        },
        {
          title:"Mon Parcours et expérience",
          value:"course",
          id: 1,
          dataSection:{
            xp:[{ 
              imgXp: {
                src: imgP, 
                alt:"exemple alt"
              },
              type: "Formation / Experience",
              title: "title xp",
              date: "2020",
              map: " 6 rue des map 49220 Angers",
              desc: "description fdg rd gfd gfd sgfdsg gtyr e tyrteyr tyry ",
              link: "https//// th trhe htr ehtr ehtr ert",
            },{ 
              imgXp: {
                src: imgP, 
                alt:"exemple alt"
              },
              type: "Formation",
              title: "title xp",
              date: "2021",
              map: " 6 rue des map 49220 Angers",
              desc: "description fdg rd gfd  e tyrteyr tyry ",
              link: "https//// th trhe htr ehtr ehtr ert",
            },
          ]
          }
        },
        {
          title:"Compétence",
          value:"skill",
          color: "blue",
          id: 2,
          dataSkill:{
             pannelSkill :{
               titlesection: "Domaines de compétences",
               liste: [
                 {
                   title: "gestion  projet",
                   listeSkill: "test, vlabla, reza , re rez e, etretzerztre, treztrez ,ert ertertertz",
                 },
                 {
                   title: " de projet",
                   listeSkill: "test, vlabla, reza , re rez e, treztrez ,ert ertertertz",
                 },
                 {
                   title: "gestion de ",
                   listeSkill: "test, vlabla, , etretzerztre, treztrez ,ert ertertertz",
                 }
               ]
             },
             pannelLvl: [{
              titlesection: "Compétence en développement",
              skillLevel: [
                {
                  title: "js react",
                  imgSkill: {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  lvl : 4, 
                },
                {
                  title: "js ajax",
                  imgSkill: {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  lvl : 3, 
                },
                {
                  title: "js html",
                  imgSkill: {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  lvl : 6, 
                },
              ]
             },{
              titlesection: "Compétences en conception graphique",
              skillLevel: [
                {
                  title: "photoshop",
                  imgSkill: {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  lvl : 5, 
                },
                {
                  title: "première pro",
                  imgSkill: {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  lvl : 8, 
                },
                {
                  title: "clip studio paint",
                  imgSkill: {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  lvl : 6, 
                },
              ]
             },
             ]
            }
        },
        {
          title:"Mes Réalisation",
          value:"portfolio",
          id: 3,
          pannelProject:[
            {
              title: "name Project",
              subTitle: "type",
              img: {
                src: imgP, 
                alt:"exemple alt"
              },
              dataProject: {
                carouselImg: [
                  {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                ],
                author: "Alex Pawlonski",
                client: "entreprise",
                date:"date",
                desc: "vfz vfr vfrz dvfr zrfvfvefvzefsvnfdkfdzjkfjr ",
                skill: ["css", "html", "JS"],
                framWork: ["react", "Meteor"],
                tabWork: ['traveaux 1','traveaux 1','traveaux 1','traveaux 1',],
                link: {
                  linkWebSite: {
                    value:"lien site web", 
                    src: "https:",
                  },
                  linkAuthor: {
                    value:"lien site web", 
                    src: "https:",
                  },
              }
              }
            },
            {
              title: "name ",
              subTitle: "type",
              img: {
                src: imgP, 
                alt:"exempl"
              },
              dataProject: {
                carouselImg: [
                  {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                  {
                    src: imgP, 
                    alt:"exemple alt"
                  },
                ],
                author: "Alex Pawlonski",
                client: "entreprise",
                date:"date",
                desc: "vfz v dvfr zrfvfvefvzefsvnfdkfdzjkfjr ",
                skill: ["css", "html", "JS"],
                cms: ["css", "html", "JS"],
                framWork: ["react", "Meteor"],
                tabWork: [' 1','traveaux 1','traveaux 1','traveaux 1',],
                link: {
                    linkWebSite: {
                      value:"lien site web", 
                      src: "https:",
                    },
                    linkAuthor: {
                      value:"lien site web", 
                      src: "https:",
                    },
                }
              }
            },
          ],
        },
        {
          title:"Contact",
          value:"contact",
          color: "white",
          id: 4,
          dataSlide:{
            imgSlide: imgP,
            textSlide: "glfdgdfgfdgfdgfddgsertgt trehtrel trh letrhlrehletrlhrthl trhlrtl lhj thrltehrtl lt"
          }
        },
      ]}/>
      <Footer />
    </div>
  );
}
export default App;
