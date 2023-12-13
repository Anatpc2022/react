import './App.css'
import FirstComponent from './components/FirstComponents';
import TemplateExpression from './components/TemplateExpression';
import MyComponents from './components/MyComponents';

function App() {

  return (    
      <div className='App'>
        <h1>Fundamentos do React</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponents/>
      </div>   
  )
}

export default App
