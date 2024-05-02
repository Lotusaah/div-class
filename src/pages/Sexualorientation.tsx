import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Sexualorientation = () => {
 
  const textObject = {
    definition: (
      <div>
        <div>
        Definition <span className="font-bold">Heterosexism</span>:  discrimination or prejudice against non-heterosexual people based on the belief that heterosexuality is the only normal and natural expression of sexuality.
        <span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/heterosexism" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    ),
    whatLearned: (<div>I learned that sexual orientation is open-ended for many people and when it comes to individuals it is very confusing and only pretrains to themselves. For the longest time I have been absent from any type of sexual orientation conversation on what is right and what is wrong. I held a strong view on letting the person be who they want. On the basis of leadership, it is the utmost important to understand every signal one and take part in their community. Like I said before, leaders serve their community and must be a part of it. By saying apart, I don't necessarily mean being an individual with that sexual orientation, I mean recognizing and becoming involved in that community like having friends, volunteering, or even joining activism. For sexual orientation I learned many different classes of them allowing me to be more aware as a leader. Discrimination against homosexuality has decreased the most when it comes to sexual orientation biases over the decades and there are still hate crimes being committed against them to this day. This should point to the question, what is happening to the underrepresented orientations that are not viewed as real or are seen as temporary? This correlates with the need for diversity, no matter who a person is they have a difference compared to another person and that difference needs to be viewed as an addition rather than a burden on society. Leaders need to push this forward encouraging diversity and inclusivity. With these ideas in place in a community people from all sexual orientations new and old will be able to intermingle without any biases at all.</div>),
    situation: (<div>Your friend says the F**** word when we walk past a man that is wearing a crop top.</div>),
    steps: (<div>
      <ul className="list-disc pl-5">
        <li>I would first analysis the remark or action done by the aggressor and in this situation, any slur is frowned upon and needs to be intervened.</li>
        <li>Now the intervention begins, you need to be calm cool and collected since any outburst deems your words as irrational to the aggressor.</li>
        <li>Try to engage the aggressor to think on their actions, simply condemning them for their actions will not help an arrogant ass whole.</li>
        <li>When they begin to think ask them to view the other individual's perspective and how he would believe they would react. This is where you correct and stereotypes.</li>
        <li>I believe this is the most effective way to get a person to become a better human being, brute force will never work and encouraging them to come up with the solution themselves cements it into their ideologies.</li>
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