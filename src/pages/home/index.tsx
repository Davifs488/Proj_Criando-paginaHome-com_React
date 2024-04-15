import { Social } from "../../components/Social";
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4x1 text-3xl font-bold text-white mt-20 ">
        Desenvolvedor dev_davi
      </h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a>
            <p className="text-base md:text-lg">Canal no Youtube</p>
          </a>
        </section>

        <footer className="flex justify-center gap-3 my-4">
          {/* <Social url="http://youtube.com/sujeitoprogramador"> */}
          <Social url="https://github.com/Davifs488">
            <FaGithub size={35} color="#fff" />
          </Social>

          <Social url="https://www.instagram.com/dev_davi.web/?hl=pt_BR">
            <FaInstagram size={35} color="#fff" />
          </Social>

          <Social url="https://www.linkedin.com/in/davi-ferreira-da-silva-915a891a4/">
            <FaLinkedin size={35} color="#fff" />
          </Social>

          <Social url="http://youtube.com/sujeitoprogramador">
            <FaYoutube size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
