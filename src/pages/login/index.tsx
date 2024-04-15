import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { FormEvent, useState } from "react";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Preencha com 'davi@dev.com' e senha '123123'  ");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("LOGADO COM SUCESSO !");
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        console.log(
          "ERRO AO FAZER LOGIN :Preencha com 'davi@dev.com' e senha '123123'"
        );
        console.log(error);
      });

    // console.log({
    //   email: email,
    //   password: password,
    // });
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-4xl ">
          Dev
          <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col px-4"
      >
        <Input
          placeholder="Digite o seu email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="*********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="h-9 bg-blue-700 rounded border-0 text-lg text-white font-medium"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
