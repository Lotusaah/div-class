import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Race = () => {


  const textObject = {
    definition: (
      <div>
        <div>
        Definition <span className="font-bold">Racism</span>: a belief that race is a fundamental determinant of human traits and capacities and that racial differences produce an inherent superiority of a particular race.
        <span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/racism" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
        <div>
        Definition <span className="font-bold">Colorism</span>: prejudice or discrimination especially within a racial or ethnic group favoring people with lighter skin over those with darker skin. <span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/colorism" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
        <div>
        Definition <span className="font-bold">Linguicism</span>: is discrimination based on language or dialect.<span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/colorism" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    ),
    whatLearned: (<div>
      <div>
      Race is important to think about when talking about leadership. Being able to lead individuals requires comfort on your end as well as their end. In order for this comfort to exist the neutrality of respect needs to be created, which race is a big focal point that hinders this respect. Many people view race as bluntly affecting an individual's ability to communicate, think, and act, which is called racism. This idea of how to think destroys that neutral respect for both sides. On the racist side they cannot work with a person that they believe is different than them, crumpling their bridge of respect. As well, the receiver of the racism recognizes the views of the individual and is hurt, disturbed and maybe aggravated, causing destruction to his bridge. But there is one solution to this problem that plagues this society. Destroying the racist belief, racist people have developed their way of thinking by the influences around them including media and people. The great thing about this is that they were not born with these ideas, which means they had to learn them, and they can easily unlearn them. Like in “Is it really about race?” I do notice there are many types of racisms, there is hatred racism, which explains itself, there is belittlement racism which looks down on individuals and thinks lesser of them and there is pity racism which is overindulging individuals for the sorrows of receiving hatred racism.
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
      <iframe 
        className="pt-5 absolute top-0 left-0 w-full h-full rounded"
        src="https://www.youtube.com/embed/VnfKgffCZ7U?si=q1uJV9RX9z0Ok2lj" 
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
</div>
      </div>
    </div>),
    situation: (<div>Your boss calls a meeting and gives your coworkers assignments, but you noticed your African American and Mexican American coworkers received minor task even though they have the same job title as you with more experience. </div>),
    steps: (<div><ul className="list-disc pl-5">
    <li>First assess the situation with all the possible reasons you can think of. For example, in this situation the boss can be nice and give coincidently these people easy tasks, or these people asked for the easy task, or the boss gave easy tasks to these individuals on purpose.</li>
    <li>Always talk to the defender first to see their take on the situation. Make sure they are comfortable so you can get an honest response. For example, in this situation you can ask them how they got the easier tasks. If they responded they asked for it then this situation is over, but if they don't know and don't want to know you can encourage them to question why they got their task. If they dont know and want to know you can encourage them to confront the aggressor with them.</li>
    <li>Intervein with the aggressor, is always necessary. This intervention can be done in private or public depending on if you want witnesses. First you relay their actions to them and point out what is wrong. For example, in this situation, you point out the small task given to the minorities. The boss can respond by saying there is no reason or that he wanted to be nice. He can also say that he wants to lighten the load of struggling individuals.</li>
    <li>Confront the actions. For example, in this situation, you can point out their trend and ask them to explain it or just say your peace on the situation, like the individuals you gave easy tasks to are more than capable of working the same work as me and their race or ethnicity does not affect their ability to work.</li>
  </ul></div>),
  };

  return (
    <div>
      <Dashboard />
      <Bodyoftext textData={textObject}/>
    </div>
  )
}