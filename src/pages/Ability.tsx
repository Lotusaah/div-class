import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Ability = () => {
  
  const textObject = {
    definition: (
      <div>
        <div>
        Definition <span className="font-bold">Ableism</span>: discrimination or prejudice against individuals with disabilities.
        <span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/ableism" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    ),
    whatLearned: (<div> People all around the world work in unisons to have societies and economies constantly flowing, so how do disable individuals fit into this system. Short answer they fit in just fine. As Stella Young said they are normal people and not an inspiration. There is a stigma that being disabled hinders the ability to work all together and they need to be taken care of. Of course they have their limits as well as most able body individuals. As a leader inclusivity is important due to community values from the Social Change Model, and without every single person there cannot be a complete community. So how do you connect with these individuals with disabilities? It is simple talk to them, of course, the community needs to come to their aid to provide the support for them to commit their daily lives like automatic doors, elevators, cross walks, sidewalk bumps and more. As a leader, treating these people as normal individuals rather than as less of a person that needs to be taken care of, will promote the idea of equals and diminish ableism.</div>),
    situation: (<div>You witness an elementary teacher leave out a student that is wheelchair bound from a play.</div>),
    steps: (<div>
      <ul className="list-disc pl-5">
        <li>I will notice what is going on in the play and analysis if the student wants to take part, what is being done for the student, or what are the other parents' responses.</li>
        <li>If there needs to be intervention, you can take two routes. Get up and talk to the teacher right away and have the student immediately take part or wait for it to be over and confront the teacher.</li>
        <li>While getting up and putting the student in the play seems a far stretch for most people it will be the most ideal for the student's well-being if done right. Honestly a very skilled individual that can handle a situation like this will be able to do this. But I am not skilled.</li>
        <li>Waiting to confront the teacher after words will not provide comfort for the student that day, but rather for the future going forward the student will be treated better.</li>
        <li>As adults in this situation, it is important that both sides know what was wrong and if that is so then just scolding and correcting the teacher is good enough. But if the teacher does not know then they shouldn’t be a teacher.</li>
      </ul>
    </div>),
  };
  
  return (
    <div>
      <Dashboard />
      <Bodyoftext textData={textObject}/>
    </div>
  )
}