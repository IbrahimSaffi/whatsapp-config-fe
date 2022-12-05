import { useState } from 'react';
import './App.css';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

function App() {
  let [screen,setScreen] =useState(0)
  let [description,setDescription] = useState(0)
 let descriptions = ["We are looking for a Software Engineer to manage activities ranging from automated traffic control systems to complicated industrial processes. You will play a critical role in creating software that gives practical solutions.\n You will be expected to handle the complete software development lifecycle, which includes analysing needs, designing, testing, and developing software to fulfil those needs.","We are looking for a DevOps Engineer. You will be in charge of releasing product updates, diagnosing production issues, and building integrations that suit the demands of our clients. As shown below, you will play a key role in bridging the gap between development, quality assurance, and IT operations.\n You will aim to combine the everyday duties required in software development, quality control, deployment, and integration into a single, continuous set of operations.","We are seeking an Accounting Manager to supervise our organisation's financial reporting tasks.\n You will be responsible for ensuring accurate reporting. The manager will define principles with the CFO and oversee the department to ensure proper processes are followed.\n You will be expected to work with department heads throughout the organisation to discuss budgets and cost-cutting measures. You will collaborate closely with the controller and the finance director to enhance workflow and explore new initiatives."]
  function pageSwitch(action){
    console.log(action)
    action==="next"?setScreen(1):setScreen(0)
  }
  function descriptionSwitch(num){
    setDescription(num)
  }
  return (
    <div className="App">
     {screen?<ScreenTwo pageSwitch={pageSwitch} descriptions={descriptions} descriptionSwitch={descriptionSwitch} currDescription={description} />:<ScreenOne pageSwitch={pageSwitch}/>}
    </div>
  );
}

export default App;
