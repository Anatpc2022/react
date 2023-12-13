import './App.css'
import FirstComponent from './components/FirstComponents';
import TemplateExpression from './components/TemplateExpression';
import MyComponents from './components/MyComponents';
import Events from './components/Events';

function App() {

  return (    
      <div className='App'>
        <h1>Fundamentos do React</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponents/>
        <Events/>
      </div>   
  )
}

export default App
