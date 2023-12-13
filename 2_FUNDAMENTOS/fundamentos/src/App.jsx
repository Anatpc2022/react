import './App.css'
import FirstComponent from './components/FirstComponents';
import TemplateExpression from './components/TemplateExpression';
import MyComponents from './components/MyComponents';
import Events from './components/Events';
import Data from './components/data';

function App() {

  return (    
      <div className='App' style={{paddingBottom:"500px"}}>
        <h1>Fundamentos do React</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponents/>
        <Events/>
        <Data/>
      </div>   
  )
}

export default App
