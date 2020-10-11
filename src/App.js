import React from 'react';
import logo from './logo.svg';
import TopBar from './TopBar'
import Main from './Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component{

  constructor(props) {
    super(props);
    
  this.state = {
    recipes: [
      {
        title: 'Kimchi Jjigae',
        ingredients: [
          '1 pound kimchi',
          '2 cups anchovy broth',
          'firm  tofu',
          '1 tbs gochujung',
          '1 onion'
        ],
        steps: [
          'cut onion, put in large pot with kimchi, broth, gochujung',
          'cook 10 minutes, put cut tofu on top and cook for another 10 minute. Serves 4'
        ],
        id: 'kimchijjigae'
      },
      {
        title: 'Kimchi Fried Rice',
        ingredients: [
          '2 cups day old rice',
          '1 cup chopped kimchi',
          '1 tbs gochujung',
          '1 egg (optional)'
        ],
        steps: [
          'fry oil and saute kimchi and gochujung for 2 minutes',
          'Gradually add day old rice  and make sure well broken down',
          'Fry for 4 minutes or until well incorporated, top with egg'
        ],
        id: 'kimchifriedrice'
      },
    ],
    selectedRecipe: null
  }}




render() {
  return (
    <div className="App">
      <TopBar/>
      <Main/>
    </div>
  );
  }
  
}


export default App;
