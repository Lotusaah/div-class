import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Class = () => {
 
  const textObject = {
    definition: (
      <div>
 <div>
        Definition <span className="font-bold">Classism</span>: a belief that a person's social or economic station in society determines their value in that society.
        <span> </span><a className="text-blue-500" href="https://www.merriam-webster.com/dictionary/classism" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    ),
    whatLearned: (<div>We live in a capitalistic society where more skilled individuals have an economic gain over non-skilled individuals, or so we hope. The fact is that the majority of this world we live in has an economic structure of battling it out against your competitors on obtaining customers and this idea will not change any time soon. But there are key flaws in our system and those flaws are the lack of an individual's ability to move on the class levels. And it is mostly the lower class that see this discrimination. Classism is a big role as well in our society on how we interact with each other. We base our friends and people we interact with on, if they have the same economic class as me, and that is some form of classism. The most prevalent form of classism is belittling or insulting an individual who is lower class than you and I see this all the time. And of course, there is systematic classism when it comes to education, health care and public recourses. These systems prefer to help individuals with more money and have a higher class because it is these individuals who put the systems in place. When it comes to leadership classism is important to combat since your community has many different people from many different classes.<div className="relative pb-[56.25%] h-0 overflow-hidden">
    <iframe 
      className="pt-5 absolute top-0 left-0 w-full h-full rounded"
      src="https://www.youtube.com/embed/uOUOWLeyAbw?si=SrcJ1lptV4OZE1lI" 
      title="YouTube video player" 
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
</div></div>),
    situation: (<div>A kid was insulted about his clothes going to class in middle school.</div>),
    steps: (<div>
      <ul className="list-disc pl-5">
        <li>Do not single the kid out because it may seem hard not to give the little shit a piece of mind, you do need to keep in mind that he is just a kid and most likely doesn't know better. Rather address the group or class altogether.</li>
        <li>Make sure to get the point across that there is no discrimination of any class.</li>
        <li>The best part about this is that most of the students will know who you are talking about, and they will think less of the assaulter and come aid to the defender.</li>
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