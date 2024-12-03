import React from "react";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';

// function App() {
//     return <h1>Hello, World</h1>;
//   }

const App = () => {
    const pageTitle = 'Welcome to My Website';

    return (
        <div className="App">
            <Header title={pageTitle}/>
            <header className="App-header">
                <h1>Hello, World</h1>
                <p>안녕하세요, 리액트 학습자 여러분</p>
            </header>
            <Counter/>
            <Footer/>
        </div>
    );
}

export default App;