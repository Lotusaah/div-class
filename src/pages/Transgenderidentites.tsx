import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Transgenderidentities = () => {
  
  
  const textObject = {
    definition: (
      <div>
       <div>
        Definition <span className="font-bold">Cissexism</span>: It is the belief that only cisgender people are seen as normal or right, and that transgender people are unnatural or dangerous.
        <span> </span><a className="text-blue-500" href="https://nonbinary.wiki/wiki/Cissexism" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
    ),
    whatLearned: (<div>For people who may not know and for my seventh-grade self, there is a difference between sexual orientation and gender identity. Similar to sexual orientation there are many different genders, and gender identity is different for each and every person. Philosopher and Author, Simone de Beauvoir, wrote “The Second Sex” in 1940s where it opened up the idea that there is a difference between gender and your assigned sex. Gayle Rubin, a renowned Anthropologist, put forth the idea that gender is grown into normalization with social pressure and is able to be cultivated into what you want without the influences around you. This piece of literature is crucial for the acceptance of trans gender identities because it publicized the idea to an imaginable sense. According to the leadership social change model (An Overview of the Social Change Model of Leadership Development) it is important to be a citizen in the community you are a part of, and today I do not see that happening to the best of its ability. There is always room for growth and the acceptance and normalization of transgender identities will improve every society today for the betterment of today and our future generations. <div className="relative pb-[56.25%] h-0 overflow-hidden">
    <iframe 
      className="pt-5 absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/MitqjSYtwrQ?si=p2gsORfwHHRJqRek" 
      title="YouTube video player" 
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
</div></div>),
    situation: (<div>Your coworker makes fun of a trans coworker when they are not around and calls them weird.</div>),
    steps: (<div> <ul className="list-disc pl-5">
    <li>First, I will identify what was being said and classify it on the scale of intensity of bigotry.</li>
    <li>I will then see who said it and think of a way to confront them. Would it be now or later depending on your comfortability, for this example it will be now.</li>
    <li>When confronting them I always think it is best to not ridicule them immediately and you must “take them to dinner” before, so to speak. I do this by asking them questions with the tone of speech that I already had and make sure it is open-ended so their thoughts can flow freely.</li>
    <li>With their responses always ask how they would feal if I attacked them in the same manner on something they care about.</li>
    <li>Remember it is not always the goal to have them admit they are wrong, of course in higher situations it is, but in this low social setting the main goal is to have them think about it and make them come up with the new beliefs on their own.</li>
  </ul></div>),
  };

  return (
    <div>
      <Dashboard />
      <Bodyoftext textData={textObject}/>
    </div>
  )
}