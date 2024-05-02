import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Gender = () => {
 
  const textObject = {
    definition: (
      <div>
        <div>
        Definition <span className="font-bold">Sexism</span>: prejudice or discrimination based on sex.
        <span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/sexism" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    ),
    whatLearned: (<div>The wage gap is still strong to this day even though our society has been passing generational barriers when it comes to gender equality in society and the workplace for decades. This means that there are places we need to improve and gender equality is still prevalent but may seem hidden to the naked eye. I learned that overall women are paid 84 percent of a man wage in the Unites States today. <a className="text-blue-500" href="https://blog.dol.gov/2024/03/12/what-you-need-to-know-about-the-gender-wage-gap" target="_blank" rel="noopener noreferrer">Source</a> This stems from sexist males in the work force having a thought that women are not capable to compete with men when it comes to producing profits for companies. In reality women are just as capable as men when it comes to working, there is no scientific study that says women are less cognitive to complete tasks compared to men. Of course, there is research that men are more physically capable compared to women, but that should not influence that fact that women are able to compete and provide the same outputs as men. If a women can match the same quality output as a man, there should not be any wage gap. And this is happening in the real world, Women have been closing the wage gap for decades not for just arguing but rather proving their outcomes are the same as men and their bosses only have their sexist ideas to back up the sexist wages. As a leader it is important to call out these injustices according to the SALT Model. This is the most effective way to combat these problems for the best improvement. </div>),
    situation: (<div>Your friend says that women are dumb.</div>),
    steps: (<div>
      <ul className="list-disc pl-5">
        <li>First assess the situation and the outcomes of the response to fixing it. For example, the statement said is blatantly sexist and needs to be intervened, but do you want to intervein and what would happen if you did.</li>
        <li>Accepting the outcome of the intervention no matter what. This may seem scary to most and can only be justified to the point that you are doing a disservice to the individuals that are going to interact with your friend.</li>
        <li>Confronting the remark. Ask the individual to think about what he said and why he said it. Point out emotions a female would receive from hearing this statement. At this point the individual should come to their senses and agree but if they don't then you need to point out what exactly they did wrong.</li>
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