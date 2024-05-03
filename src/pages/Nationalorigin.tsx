import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Nationalorigin = () => {
  
 
  const textObject = {
    definition: (
      <div>
         <div>
        Definition <span className="font-bold">Xenophobia</span>: fear and hatred of strangers or foreigners or of anything that is strange or foreign.
        <span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/xenophobia" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    ),
    whatLearned: (<div>National origin plays a critical role in shaping an individual's identity, experiences, and how they are perceived and treated in society. Understanding the implications of this identity factor is crucial, especially in a diverse society where people with various backgrounds. One significant issue related to national origin is xenophobia, which manifests as an irrational fear or hatred of foreigners or anything that is perceived as foreign or different. This fear can lead to discrimination, exclusion, and acts of violence, which are fracturing to multicultural society. It's essential to recognize that such fears often stem from stereotypes. As a leader, it is vital to promote an environment that not only tolerates but celebrates differences in national origin. This can be achieved by encouraging cultural exchanges, fostering open dialogues about cultural diversity, and challenging the stereotypes and myths that fuel xenophobia. By educating ourselves and others, we can deconstruct prejudices and build more inclusive communities. Effective leadership also involves being aware of the systemic barriers that individuals from certain national origins may face. These can include struggles in access to opportunities, resources, and fair treatment. Leaders must advocate for policies and practices that ensure equity and justice for all, regardless of where they come from. <div className="relative pb-[56.25%] h-0 overflow-hidden">
    <iframe 
      className="pt-5 absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/4Aicki4a4uI?si=VOopRhrwTxamcQ0l" 
      title="YouTube video player" 
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
</div></div>),
    situation: (<div>A white female tells an immigrant to “go back to your country”.  </div>),
    steps: (<div>
      <ul className="list-disc pl-5">
        <li>First, I will analysis and understand the situation, which is a person pushing hate on a foreigner.</li>
        <li>There needs to be intervention since there is a certain discretion present.</li>
        <li>First pointing out what is wrong is a great start to the conversation.</li>
        <li>If they listen, point out the wrong and ask them to apologies.</li>
        <li>If they do, then you have succeeded congratulations.</li>
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