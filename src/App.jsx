import { useState } from "react";

function App() {
    // state라고 하는 특수 변수를 만들때 useState()
    // const[앞으로 사용할 변수, 그 변수의 값을 변경할 변수명] = useState(초기값)
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            {/*
            태그의 속성을 적어줄때 그 안에 javascript를 작성을 해야 된다.
        */}
            <div>
                <button
                    onClick={() => {
                        setCount(count - 1);
                    }}>
                    -
                </button>
                <button
                    onClick={() => {
                        setCount(0);
                    }}>
                    Reset
                </button>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}>
                    +
                </button>
            </div>
        </div>
    );
}

export default App;
