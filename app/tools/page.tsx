export const metadata = {
  title: 'Uses cases',
  description:
    "These are the things that I currently use and enjoy producing.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Tools I use</h1>
      <p className="text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, and doing basically everything.
      </p>
      <div className="prose prose-invert">
        <h3 id="dev-tools">Developer Tools</h3>
        <ul>
          <li>IDEs: VS Code, Neovim, Emacs, Intellij</li>
          <li>AI Support: ChatGpt, GitHub CoPilot</li>
          <li>Design: Figma, Canva</li>
        </ul>
        <h3 id="devops">DevOps</h3>
        <ul>
          <li>CI/CD: GitHub Actions, GitLab, </li>
          <li>Build and Deploy: Vercel</li>
          <li>Version Control: Git</li>
          <li>Container Tools: Docker</li>
        </ul>
        <h3 id="pm">Project Management</h3>
        <ul>
          <li>ClickUp, Trello, Notion</li>
        </ul>
        <h3 id="mad">Mobile App Dev</h3>
        <ul>
          <li>For Everything: Flutter and Dart</li>
          <li>Backend: Firebase, Supabase, Perosnal Servers</li>
        </ul>
        <h3 id="dad">Desktop App Dev</h3>
        <ul>
          <li>C++: Qt</li>
          <li>Python: PyQT and Flet (Fluter-like Design)</li>
          <li>Flutter</li>
        </ul>
        <h3 id="wad">Web App Dev</h3>
        <ul>
          <li>FrontEnd: JavaScript-TypeScript/React (NextJs-GatsbyJs)</li>
          <li>Backend: JavaScript, Python</li>
          <li>Database: PlanetScale (Serverless), Firebase, MySql</li>
        </ul>
        <h3 id="cab">Cloud and Backend</h3>
        <ul>
          <li>Python, Rust (in the future 😉 for backend and for everything)</li>
          <li>JavaScript and TypeScript</li>
        </ul>
        <h3 id="dvb">Data Visualisation and BI</h3>
        <ul>
          <li>Python: Matplotlib, Seaborn</li>
          <li>Tableau: I am using it for more serious projects since Tableau can give me a Data-Story</li>
          <li>R: ggplot, Rayshader (using it to generate 3D Visualisations of locations)</li>
        </ul>
        <h3 id="ds">Data Science</h3>
        <ul>
          <li>Python: Pandas, Numpy, Scikit Learn, XGBoost, Matplotlib, Seaborn</li>
          <li>R: ggplot</li>
        </ul>
        <h3 id="ml">Artificial Intelligence</h3>
        <ul>
          <li>Only Python, no R no C++ 😁</li>
          <li>ML: Pandas, Numpy, Scikit Learn, XGBoost</li>
          <li>DL: Pytorch, Tensorflow</li>
          <li>Data Augmentation: Albumentation</li>
        </ul>
        <h3 id="bchain">BlockChain and Web3 Dev</h3>
        <ul>
          <li>Primarily JavaScript and sometimes TypeScript</li>
          <li>EthereumVM: Solidity (smart contracts), JavaScript, Go</li>
          <li>Ethereum IDE: Remix IDE</li>
          <li>IPFS (Interplanetary File System) and Pinata</li>
          <li>Zero Knowledge: tbh, a little bit Circom 2</li>
        </ul>
        <h3 id="opt">Optimization</h3>
        <ul>
          <li>Softwares: GAMS</li>
          <li>Python:Grobi, Google OR-Tools</li>
        </ul>
        <h3 id="languages">Langues.</h3>
        <h5 id="computer-office">- Well I also speak, dough 🙄.</h5>
        <ul>
          <li>Turkish</li>
          <li>English</li>
          <li>Spanish</li>
          <li>Very little Arabic and Persian too</li>
        </ul>
        <h3 id="coding">Programming Languages</h3>
        <h5 id="computer-office">- Well I also speak with machines, dough 🙄.</h5>
        <li>Python, C++, C, Dart (of course for only Flutter), JavaScript and TypeScript (I don't count HTML CSS), R, SQL (idk whether we can count it), Shell, Solidity</li>
        <li>Well, a little bit Rust and Go too</li>

        {/* <ul>
          <li>
            Editor: VSCode (
            <a href="https://gist.github.com/leerob/e7883ab35d900b8cbb684ac77e7c4703">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: One Dark Pro</li>
          <li>Terminal: Hyper / zsh</li>
        </ul> */}
      </div>
    </section>
  );
}
