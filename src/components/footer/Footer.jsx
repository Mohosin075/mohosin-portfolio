import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/5 pt-8">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-xl">
          <a
            className="p-2 rounded-md bg-white/3 hover:bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] transition"
            href="https://github.com/Mohosin075"
          >
            <FaGithub />
          </a>
          <a
            className="p-2 rounded-md bg-white/3 hover:bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] transition"
            href="https://www.linkedin.com/in/md-mohosin-5b34a0278/"
          >
            <FaLinkedin />
          </a>
          <a
            className="p-2 rounded-md bg-white/3 hover:bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] transition"
            href="https://www.facebook.com/profile.php?id=100054670421189"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Md Mohosin Ali — Built with care
        </div>
      </div>
    </footer>
  );
};

export default Footer;
