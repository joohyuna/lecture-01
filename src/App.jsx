import { useState } from "react";

function App() {
    // state라고 하는 특수변수를 만들때 useState()
    // const[앞으로 사용할 변수명, 그 변수의 값을 변경할 수 있는 변수명] = useState(초기값)
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            {/*
            태그의 속성을 적어줄 때 그 안에 javascript를 작성을 해야된면,
            ""로 써주는 게 아니라 {}로 써줘야함
            ==> 컴포넌트의 return 문 앞에 작성하는 {} 이안에 javascript를 쓰겠다는 의미
         */}
            <div>
                <button
                    onClick={() => {
                        // count 라고 하는 변수에 지금 현재 count의 값 -1개 저장 되면 됨
                        // 일반 변수 라면 , count = count -1;
                        // 변경된 값만 다시 변경시벼주는 것임 화면 전체가 아니라 react가 값지
                        setCount(count - 1);
                    }}>-</button>
                <button onClick={() => {
                    setCount(0);
                }}>React</button>
                <button onClick={() => {
                    setCount(count + 1);
                }}>+</button>
            </div>
        </div>
    );
}

export default App;
