import { Login } from './pages/login/Login';
import { HomePage } from './pages/home/HomePage';
import { BrowserRouter as Router , Route ,Routes} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app/store';





function App() {
  return (
   
  <Provider store={store}>

    <div className="App">

 <Router>


<Routes >
<Route exact path='/' element={<Login/>}/>
    <Route exact path='/home' element={<HomePage/>}/>

</Routes >

    


 </Router>

     
    </div>
    </Provider>

  );
}

export default App;
