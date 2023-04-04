import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Posts from './components/Posts';
import { Route, Routes } from 'react-router'; 
import {Provider} from 'react-redux'
import store from './utils/store'


function App() {
  return (
    <Provider store = {store}>
    <Header/>
    <Routes>
    <Route path='/contest' element = {<Posts/>}/>
    <Route path = 'contest/item/:id' element = {<Details/>}/>
    </Routes>
    </Provider>
  )
}

export default App;
