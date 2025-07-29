import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
return (
  <footer className="fixed bottom-0 w-full bg-gray-950 border-t text-white py-2 flex flex-col items-center justify-center z-10">
		<div className="flex gap-4 text-2xl">
			<a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer">
				<FaGithub className="hover:text-orange-400" size={20} />
			</a>
			<a href="https://www.linkedin.com/in/jcesar206"  target="_blank" rel="noopener noreferrer">
				<FaLinkedin className="hover:text-lime-400" size={20} />
			</a>
			<a href="mailto:jcesar206@hotmail.com">
				<FaEnvelope className="hover:text-rose-400" size={20} />
			</a>
		</div>
		<p className="text-sm font-semibold">&copy; {new Date().getFullYear()} Personal Diary V 1.0 JulyDevops. Todos los derechos reservados.</p>
	</footer>
	);
}

export default Footer;