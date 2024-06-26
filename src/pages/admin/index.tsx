import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { useState } from "react";
import { FiTrash } from "react-icons/fi";

export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#121212");

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
        <label className="text-white font-medium mt-2">Nome do Link</label>
        <Input
          placeholder="Digite o nome do link"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="text-white font-medium mt-2">Url do Link</label>
        <Input
          type="url"
          placeholder="Digite a url..."
          value={nameInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex gap-4">
            <label className="text-white font-medium mt-2 mb-2">
              Cor do Link
            </label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <label className="text-white font-medium mt-2 mb-2">
              Fundo do Link
            </label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/20 border rounded-md">
            <label className="text-white font-medium mt-2 mb-3">
              Veja como está ficando
            </label>
            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundColorInput,
              }}
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button
          type="submit"
          className="mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="font-bold text-white mb-4 text-2x1">Meus Links</h2>

      <article
        className="flex items-center justify-between w-11/12 max-w-x1 rounded py-3 mb-2 select-none"
        style={{ backgroundColor: "#2563eb*", color: "#fff" }}
      >
        <p>Canal do Yotube</p>
        <div>
          <button className="border border-dashed p-1 rounded bg-neutral-900 ">
            <FiTrash size={18} color="#fff" />
          </button>
        </div>
      </article>
    </div>
  );
}
