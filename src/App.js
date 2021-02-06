import './App.css';
import  {useState} from 'react'
import Header from './Header';
import Mainboard from './Mainboard';
import Unsplash from './api/Unsplash'



function App() {

  const [pins, setNewPins] = useState([])



  const makeAPICall = (term) => {
   return Unsplash.get("https://api.unsplash.com/search/photos", {
    params: {query : term},
    });
  };

  const onSearchSubmit = (term) => {
    let promises = [];
    let searchedPins = [];
  promises.push(makeAPICall(term).then((res) => {
    let results = res.data.results
    results.map((pin) => {
      console.log(pin, "What is in pin")
      searchedPins.push(pin)
    })

  })
  );

   Promise.all(promises).then(() => {
    setNewPins(searchedPins)
  });
  } ;

 
  return (
    <div className="app">
    <div className="app-header">
      <Header onSubmit={onSearchSubmit}/>
      </div>
      <div className="app-body">
      <Mainboard />
      </div>
    </div>
   
  );
}

export default App;
