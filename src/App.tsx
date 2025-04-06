import Explorer from "./features/explorer/Explorer";
import ExamplePage from "./shared/components/ExamplePage";

function App() {
    return (
        <div className="flex flex-row">
            <Explorer />
            <ExamplePage />
        </div>
    );
}

export default App;
