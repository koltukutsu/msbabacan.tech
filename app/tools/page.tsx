export const metadata = {
  title: "Uses cases",
  description: "These are the things that I currently use and enjoy producing.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Tools I use</h1>
      <p className="text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, and doing basically
        everything 😁
      </p>
      <div className="prose prose-invert">
        <h3 className="font-serif" id="dev-tools">
          Developer Tools
        </h3>
        <ul>
          <li>
            <strong>IDEs:</strong> VS Code, Neovim, Emacs, Intellij
          </li>
          <li>
            <strong>AI Support:</strong> ChatGpt, GitHub CoPilot
          </li>
          <li>
            <strong>Design:</strong> Figma, Canva
          </li>
        </ul>
        <h3 className="font-serif" id="devops">
          DevOps
        </h3>
        <ul>
          <li>
            <strong>CI/CD:</strong> GitHub Actions, GitLab,{" "}
          </li>
          <li>
            <strong>Build and Deploy:</strong> Vercel
          </li>
          <li>
            <strong>Version Control:</strong> Git
          </li>
          <li>
            <strong>Container Tools:</strong> Docker
          </li>
        </ul>
        <h3 className="font-serif" id="pm">
          Project Management
        </h3>
        <ul>
          <li>
            <strong>Softwares:</strong> ClickUp, Trello, Notion
          </li>
        </ul>
        <h3 className="font-serif" id="mad">
          Mobile App Dev
        </h3>
        <ul>
          <li>
            <strong>For Everything:</strong> Flutter and Dart
          </li>
          <li>
            <strong>Backend:</strong> Firebase, Supabase, My Servers
          </li>
        </ul>
        <h3 className="font-serif" id="dad">
          Desktop App Dev
        </h3>
        <ul>
          <li>
            <strong>C++:</strong> Qt
          </li>
          <li>
            <strong>Python:</strong> PyQT and Flet (Fluter-like Design)
          </li>
          <li>Flutter</li>
        </ul>
        <h3 className="font-serif" id="wad">
          Web App Dev
        </h3>
        <ul>
          <li>
            <strong>FrontEnd:</strong> JavaScript-TypeScript/React
            (NextJs-GatsbyJs)
          </li>
          <li>
            <strong>Backend:</strong> JavaScript, Python
          </li>
          <li>
            <strong>Database:</strong> PlanetScale (Serverless), Firebase, MySql
          </li>
        </ul>
        <h3 className="font-serif" id="cab">
          Cloud and Backend
        </h3>
        <ul>
          <li>
            Python, Rust (in the future 😉 for backend and for everything)
          </li>
          <li>JavaScript and TypeScript</li>
        </ul>
        <h3 className="font-serif" id="dvb">
          Data Visualisation and BI
        </h3>
        <ul>
          <li>
            <strong>Python:</strong> Matplotlib, Seaborn
          </li>
          <li>
            <strong>Tableau:</strong> I am using it for more serious projects
            since Tableau can give me a Data-Story
          </li>
          <li>
            <strong>R:</strong> ggplot, Rayshader (using it to generate 3D
            Visualisations of locations)
          </li>
        </ul>
        <h3 className="font-serif" id="ds">
          Data Science
        </h3>
        <ul>
          <li>
            <strong>Python:</strong> Pandas, Numpy, Scikit Learn, XGBoost,
            Matplotlib, Seaborn
          </li>
          <li>
            <strong>R:</strong> ggplot
          </li>
        </ul>
        <h3 className="font-serif" id="ml">
          Artificial Intelligence
        </h3>
        <ul>
          <li>Only Python, no R no C++ 😁</li>
          <li>
            <strong>ML:</strong> Pandas, Numpy, Scikit Learn, XGBoost
          </li>
          <li>
            <strong>DL:</strong> Pytorch, Tensorflow
          </li>
          <li>
            <strong>Data Augmentation:</strong> Albumentation
          </li>
        </ul>
        <h3 className="font-serif" id="bchain">
          BlockChain and Web3 Dev
        </h3>
        <ul>
          <li>Primarily JavaScript and sometimes TypeScript</li>
          <li>
            <strong>EthereumVM:</strong> Solidity (smart contracts), JavaScript,
            Go
          </li>
          <li>
            <strong>Ethereum IDE:</strong> Remix IDE
          </li>
          <li>IPFS (Interplanetary File System) and Pinata</li>
          <li>
            <strong>Zero Knowledge:</strong> tbh, a little bit Circom 2
          </li>
        </ul>
        <h3 className="font-serif" id="opt">
          Optimization
        </h3>
        <ul>
          <li>
            <strong>Softwares:</strong> GAMS
          </li>
          <li>
            <strong>Python:</strong> Grobi, Google OR-Tools
          </li>
        </ul>
        <h3 className="font-serif" id="languages">
          Langues.
        </h3>
        <h5 className="font-serif" id="computer-office">
        ➡️ Well I also speak, dough 🙄.
        </h5>
        <ul>
          <li>Turkish</li>
          <li>English</li>
          <li>Spanish</li>
          <li>Very little Arabic and Persian too</li>
        </ul>
        <h3 className="font-serif" id="coding">
          Programming Languages
        </h3>
        <h5 className="font-serif"id="computer-office">➡️ Well I also speak with machines 😁.</h5>
        <ul>
          <li>
            Python, C++, C, Dart (of course for only Flutter), JavaScript and
            TypeScript (I don't count HTML CSS), R, SQL (idk whether we can
            count it), Shell, Solidity
          </li>
          <li>Well, a little bit Rust and Go too</li>
        </ul>

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
