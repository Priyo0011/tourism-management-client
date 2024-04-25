import { FaFacebook, FaGithub,FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
const SocialLogin = () => {
    const{githubLogin,facebookLogin,googleLogin} = useAuth();
  return (
    
      <div className="flex mt-8 gap-16 ml-[540px]">
        <button className="btn text-3xl rounded-lg"
        onClick={() => googleLogin()}
        >
          <FaGoogle />
          </button>
        <button
          onClick={() => facebookLogin()}  
          className="btn text-3xl rounded-lg "
        >
          <FaFacebook />
        </button>
        <button
          onClick={() => githubLogin()}
          className="btn  text-3xl rounded-lg "
        >
          <FaGithub />
        </button>
        
      </div>

  );
};

export default SocialLogin;