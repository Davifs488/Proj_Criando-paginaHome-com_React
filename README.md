
<h1>React + TypeScript + Vite</h1>
<h3>Projeto de criação de uma pagina de home com login</h3>
<p>Esse projeto tem o uso do TypeScript ,Vite, Tailwind CSS, React Router e Firebase </p>
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
<p>Criei pagina de Login, Inpt e redes Sociais</p>
<p>Fiz a configuração do db Firebase com minha pagina de login.</p>
<p>Criei o Header da aplicação de fiz a configuração da segurança do login</p>
<p>Foi criada uma pagina de configuaração de links</p>

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
