import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Do you want to learn
        <span className="bg-gradient-to-r from-sky-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          data analytics?
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Meet vikas jain. If you want to make your career in data analytics or want to achieve a mastery result then follow vksanalytics. If you are confused about your career then please contact vksanalytics.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://www.simplilearn.com/skillup-free-online-courses" // Updated href attribute
          className="bg-gradient-to-r from-sky-800 to-red-800 py-3 px-4 mx-3 rounded-md"
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Security feature
        >
          Start for free
        </a>
        <a
          href="https://www.simplilearn.com/certifications/generative-ai-courses?utm_source=google&utm_medium=cpc&utm_term=simplilearn%20ai%20course&utm_content=13231839320-169842056851-704513432280&utm_device=c&utm_campaign=Search-Brand-Phrase-IN-AllDevice-adgroup-Brand-GenAI-Cat-Gen-AI&gad_source=1&gclid=Cj0KCQjwiOy1BhDCARIsADGvQnBVox6M-4QcQupb2QdQOuEdwzXw2z9jhxn39IVwQIPWNct_OcHeXfIaArfpEALw_wcB" 
          className="py-3 px-4 mx-3 rounded-md border"
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Security feature
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-700 shadow-sm shadow-red-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-700 shadow-sm shadow-red-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
