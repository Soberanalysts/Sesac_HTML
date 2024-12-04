import Navbar from "./Navbar";
import Table from "./Table";
import Pagination from "./Pagination";
import ThemeSelector from "./ThemeContext";

const App = () => {
    return (
        <div>
            <ThemeSelector>
                <Navbar />
                <Table />
                <Pagination />
            </ThemeSelector>
        </div>
    );
}

export default App;