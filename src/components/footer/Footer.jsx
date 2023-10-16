import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="my-6 pb-10 w-10/12 mx-auto ">
        <ul className="flex space-x-8">
            <li><a href="https://github.com/Mohosin075"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/md-mohosin-5b34a0278/"><FaLinkedin /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100054670421189"><FaFacebook /></a></li>
            <li><a href="https://twitter.com/Mohosin075"><FaTwitter /></a></li>
        </ul>
    </div>
    );
};

export default Footer;