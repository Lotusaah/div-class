import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Religion = () => {
 
  
  const textObject = {
    definition: (
      <div>
        <div>
        Definition <span className="font-bold">Antisemitism</span>: discrimination or prejudice against non-heterosexual people based on the belief that heterosexuality is the only normal and natural expression of sexuality.
        <span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/anti-Semitism" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
        <div>
        Definition <span className="font-bold">Islamophobia</span>: irrational fear of, aversion to, or discrimination against Islam or people who practice Islam.
        <span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/Islamophobia" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    ),
    whatLearned: (<div>Religion is often a core aspect of an individual's identity, deeply influencing their morals and beliefs. In a leadership role, understanding and respecting religious diversity is crucial to fostering an inclusive environment where everyone is respected. One major issue is antisemitism, which is not just historical but present today, often subtly issued into societal narratives and biases. It's essential to challenge these narratives and educate others about the contributions and history of Jewish people to counteract this deeply ingrained prejudice. Similarly, Islamophobia is a significant problem, characterized by irrational fear and hostility towards Muslims. This often stems from stereotypes perpetuated by media and popular culture. As a leader, it's important to challenge these stereotypes and promote a more nuanced understanding of Islam and its followers. Effective leadership involves creating spaces where religious discussions can occur without fear of discrimination or hostility. This means actively listening, encouraging dialogue among different religious groups, and addressing any signs of religious intolerance decisively.</div>),
    situation: (<div>You overhear a coworker making jokes about another coworker's religion.</div>),
    steps: (<div>
      <ul className="list-disc pl-5">
        <li>You ask them to explain themselves.</li>
        <li>Then you make the same joke about their religion and see what they respond with.</li>
        <li>You point out that it was hurtful to them, and it is the same for the other person.</li>
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