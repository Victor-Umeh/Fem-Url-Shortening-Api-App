import image from "../assets/images/illustration-working.svg";
import logo from "../assets/images/logo.svg";

const HeroSection = () => {
  return (
    <>
      <nav className="w-[88%] flex items-center justify-between py-6 mx-auto overflow-x-hidden">
        <img className="w-[118px]" src={logo} alt="" />

        <ul className="w-[88%] max-w-[380px] flex flex-col gap-6 py-9 px-6 absolute top-[5rem] left-[200%] hidden bg-darkViolet font-bold text-lg text-center text-white rounded-xl">
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          {/* <span className="block w-full h-[1px] bg-gray-400 md:none"></span> */}
          <li className="relative mt-4 before:content-[''] before:bg-gray-400 before:w-full before:h-[1px] before:absolute before:left-0 before:-top-4">
            <button>Login</button>
          </li>
          <li>
            <button className="w-full bg-cyan py-3 rounded-full md:bg-transparent md:rounded-none md:py-0 ">
              Sign Up
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="w-[27px] space-y-[6px] md:hidden">
          <span className="block h-[3px] bg-femGray"></span>
          <span className="block h-[3px] bg-femGray"></span>
          <span className="block h-[3px] bg-femGray"></span>
        </div>
      </nav>
      <section className="w-[100%] mx-auto">
        <div className="pl-4 overflow-x-hidden">
          <img className="max-w-[142%]" src={image} alt="" />
        </div>

        <article className="w-[88%] mx-auto text-center pt-12 flex flex-col items-center gap-3">
          <h1 className="w-[12ch] text-4xl font-bold mx-auto text-veryDarkViolet">
            More than just shorter links
          </h1>
          <p className="text-[16px] text-grayishViolet">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="bg-cyan text-[18px] text-white font-bold py-3 px-10 mt-4 rounded-full">
            Get Started
          </button>
        </article>
      </section>
    </>
  );
};

export default HeroSection;
