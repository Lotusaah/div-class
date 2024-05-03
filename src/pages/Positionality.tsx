import {Dashboard} from '../components/Dashboard';
import {Bodyoftext} from '../components/Bodyoftext';

export const Positionality = () => {
  return (
    <div>
      <Dashboard />
      <div className='flex flex-row w-full body-of-text'>
      <div className='hidden md:block md:w-1/6 bg-accent'></div>
      <div className='flex w-full md:w-2/3 bg-accent'>
      <div className=" bg-white w-full p-4 shadow rounded-lg">
        <div>
          <h1 className="font-bold text-xl mb-4">Personal Description:</h1>
          <div className="space-y-4">
            <div className="p-4 border border-gray-300 rounded hover:shadow-lg transition-all duration-700">Hi, I'm Victor, a freshman at The Ohio State University studying Mechanical Engineering. </div>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="font-bold text-xl mb-4">My Identity:</h1>
          <div className="space-y-4">
            <div className="p-4 border border-gray-300 rounded hover:shadow-lg transition-all duration-700">I am heterosexual and use he/him pronouns, I am Roman Catholic. I am Mexican American. I am Mixed Race. I am a College Student. I am Middle Class. </div>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="font-bold text-xl mb-4">Identity Personal Influence:</h1>
          <div className="space-y-4">
            <div className="p-4 border border-gray-300 rounded hover:shadow-lg transition-all duration-700">These identities have a huge impact on how I view the world. I mostly believe by default the people around me have the same traits and experiences as I have. My assumption of these traits is not in a way as judgment but in a way, that it is the most comfortable way for me to think since they are my traits. But once I notice the actions of individuals, I become more aware of who they are while not changing my likeness towards them. I notice this in every aspect of my life.</div>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="font-bold text-xl mb-4">I am quite Priviliged:</h1>
          <div className="space-y-4">
            <div className="p-4 border border-gray-300 rounded hover:shadow-lg transition-all duration-700">
              <ul className="list-disc pl-5">
                <li>Being a man in this world gives me many advantages, not on paper but in this society a man is viewed as a more capable person when it comes to difficult task. That is why as a man I am more privileged than any female in the Engineering Program. </li>
                <li>Being Heterosexual is seen as the norm due to a majority of society being heterosexual. This majority gives me everyday privilege over any person that is not Heterosexual.</li>
                <li>Catholics are a part of Christianity as a whole where in the United States Christan's are the majority. This gives me privilege over any person that is not Christan in my society.</li>
                <li>My class is my biggest privilege, being able to go to college and be an educated citizen is not giving to everyone. It was given to me by my parents who wanted to provide for me, not everyone has parents that are middle class.</li>
              </ul>
           </div>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="font-bold text-xl mb-4">I am Marginalized:</h1>
          <div className="space-y-4">
            <div className="p-4 border border-gray-300 rounded hover:shadow-lg transition-all duration-700">I am Mexican. The stereotype is so strong that for any person in America that is Hispanic, they are seen as Mexican over any other South/Central American nationality. Specifically, Mexicans are seen as dumb and lazy to the American eye for only not being able speaking English. I am mostly marginalized in the education system, while sometimes in everyday society. My Grandmother, who was a native-born Mexican living in a border town in Texas was forced to be in an elementary school as teenager for not being able to speak English. </div>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="font-bold text-xl mb-4">My identity growth:</h1>
          <div className="space-y-4">
            <div className="p-4 border border-gray-300 hover:shadow-lg transition-all duration-700">I have been more intuitive when it comes to viewing the situations I am in from different perspectives. I am constantly identifying my biases and diminishing them. And I have been more accepting of others and my own identity.</div>
          </div>
        </div>
      </div>
      </div>
      <div className='hidden md:block md:w-1/6 bg-accent'></div>
    </div>
  </div>
   
  )
}