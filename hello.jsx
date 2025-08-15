const { useState } = React;
import SomeComponent from './components/someComponent'
import './styles/styles.js'; 
const HelloWorld = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello World from React!</h1>
            <p>This React app is running from CDN without any build process.</p>
            <SomeComponent count={count} />
            <div style={{ marginTop: '20px' }}>
                <button 
                    onClick={() => setCount(count + 1)}
                    className="click-button"
                >
                    Clicked {count} times
                </button>
            </div>
            <div style={{ marginTop: '20px', color: '#666' }}>
                <small>React {React.version} loaded from CDN</small>
            </div>
        </div>
    );
}

export default HelloWorld;
