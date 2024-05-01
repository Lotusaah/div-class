import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Sexualorientation = () => {
 
  const textObject = {
    definition: 'dsfs',
    whatLearned: 'dsfklsd',
    situation: 'sfsd',
    step1: 'ewre',
    step2: 'sdfsd',
    step3: 'sdfsdf',
    step4: 'sfsdf',
  };

  return (
    <div>
      <Dashboard />
      <Bodyoftext textData={textObject}/>
    </div>
  )
}