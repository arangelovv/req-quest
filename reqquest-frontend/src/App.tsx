import Explorer from "./features/explorer/Explorer";
import { WelcomePage } from "./shared/components/WelcomePage";

function App() {
    return (
        <div className="flex flex-row">
            <Explorer />
            <WelcomePage />
        </div>
    );
}

export default App;
