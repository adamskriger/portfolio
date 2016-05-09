import AltContainer from 'alt-container';
import React from 'react';
import Website from './Website'
import Heading from './Heading'
import { Link } from 'react-router';
import Exhibit from './Exhibit'
import Nav from './Nav'



//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class App extends React.Component {


  render() {


    var website = {

      fontSize: '1.5rem'
    }
    return (
<div className="container">
        <div className="row">
                <div className="fixed twelve columns">

                 <Nav />

                 </div>
        </div>
        <div className="row">

                <Heading />
         </div>

         <div className="row">


                <div className="frontButtons twelve columns ">
                  <div><button>React.js</button><button>JavaScript</button><button>Ruby-on-Rails</button> <button>HTML5</button><button>CSS3</button><button>JQuery</button><button>Node.js</button><button>SQL</button> <button>Amazon Web Services</button><button>Git</button> </div>
                </div>
        </div>
                <div className="row">

                <div className="frontImage twelve columns"><Link to='popstar'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/popstar.png" alt=""/></Link></div>



                <div className="frontImage twelve columns"><Link to='prolificcapital'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/prolificcapital.png" alt=""/></Link></div>

                <div className="frontImage twelve columns"><Link to='abcapparel'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/abcapparel.png" alt=""/></Link></div>

              <div className="frontImage twelve columns"><Link to='youtube'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/youtube.png" alt=""/></Link></div>

                <div className="frontImage twelve columns"><Link to='plantee'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/plantee.png" alt=""/></Link></div>

                <div className="frontImage twelve columns"><Link to='theinformationstation'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/informationstation.png" alt=""/></Link></div>

                </div>

      </div>
    );
  }

}
