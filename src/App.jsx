import { useState } from "react";

function App() {
    // 사용자가 입력할 input의 값을 저장하기 위해서 state
    // input 태그의 입력된 값은 무조건 string
    // input에 사용자가 입력한 값을 todo라는 state에 저장할 건데, 그럼 언제 저장해?
    // 사용자가 키보드를 입력할 때마다 todo에 저장
    // 이 인풋에서 일어나는 일은, 인풋에게 맡기자
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    const onChange = event => {
        // console.log(event);
        // 저 todo라는 state에 input에 입력받은 값을 지정시켜야 함
        // event라고 하는, Javascript엔진이 분석한 사건 내용을 가지고 보니
        // event.target.value 하는 값이 input에 입력된 값이 들어 있드라
        // 덮어쓰기
        setTodo(event.target.value);
    };
    const onSubmit = event => {
        // chrome 값은 웹브라우저는 기본적으로, onSubmit이 내정되어 있는 기능이 미미 존재함
        // 무슨 기능이냐면, input의 내용물을 전송하고 새로고침하는 기능
        // 그래서 이 기능을 무효화 시킬 필요가 있음 ->  event.preventDefault();
        // 새로고침은 이 페이지를 다시 불러오겠다는 것이기 때문에 무효화 해야 함 않그러면 이 페이지 내용이 몽땅 없어짐
        event.preventDefault(); // 무료화 선언

        if (todo === "") {
            return;
        }

        // 1. todo에 저장되어 있는 값을 list로 옯기고
        // list = [...list, "abc"] => 스프레드 문법(...) : 배열이나 객체의 내부요소를 나열시키는 문법
        // list = [...["123"], "abc"]
        // list = ["123", "abc"];
        setList([...list, todo]);
        // 2. todo의 값을 삭제하고
        setTodo("");
        // 3. input에 입력된 값도 삭제해야함 -> input이라고 하는 태그의 value 속성을 비워줘야 되는 일
    };
    const deleteTodo = (index) => {
        // 우리가 삭제해야 되는 것은 index로 접근할 수 있음. 훨씬 위에 있는 list에서
        // 우리가 삭제하려는, bottuon 걸린  인텍스 : index, filter를
        setList(
            list.filter((v, i) => {
                return i !== index;
            }),
        );
    };
    return (
        <div>
            <h1>My ToDo ({list.length})</h1>
            {/*
            form 태그 내부의 input에서 엔터를 치거나, button (정확히는 button의 type이 "submit"인 button)을 누르면,
            form의 onSubmit  속성을 실행해줌
            */}
            <form onSubmit={onSubmit}>
                {/*
                input에 입력이 일어날 때마다 실행하는 속성 : onChange
                    입력이 일어난 "사건(이벤트)"이고,
                    그에 대해서 함수를 실행할 때, 매개변수 자리에
                    Javascript 엔진이 그사건을 분석해서 전달해줌
                 */}
                <input
                    placeholder={"Write your to do..."}
                    onChange={onChange}
                    value={todo}
                    // 1. input에서 엔터를 치면, onSubmit이 발동이 되고
                    // 2. ouSubmit안에 있는 setTodo를 실행시켜서 todo의 값을 "" (빈 스트링)으로 바꾸고
                    // 3. 리액트 엔진이 todo가 사용되고 있는 input의 value값을 다시그리고
                    // 4. input의 valuer가 ""의 상태로 화면에 출력된
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {/*
                list라고 하는 array가 갖고 있는 요소의 갯수 만큼
                <li> 태그가 찍히면서, 그 안에 요소(string)의 내용을 출력해주면 됨 => .map() 메소드
                .map(함수) : 오소를 순회하면서 return 안의 내용을 반환함
                .map((value, index, array) => {})
                .map 메소드를 사용한다면, 반환되는 return에 나오는 최상단 태그에 key라는 이름의 속성을 부여하고
                            그 값은 이 map이 반환하는 태그들 사이에 겿치지 않는 유일값을 넣어 줘야함
                            .map 안에서 유일함 값
                */}
                {list.map((value, index) => {
                    // map 내장 합수 그래서 import 하지 않았다
                    return (
                        <li key={index}>
                            {value}{" "}
                            <button
                                onClick={() => deleteTodo(index)}>
                                ❌
                            </button>
                        </li>
                    );
                })}
                {/*
                     <li key={index}>"abc"</li>,
                     <li key={index}>"def"</li>,
                     <li key={index}>"ghi"</li>
                     이 내용이 map에 들어간것이다. 배열이 원래 들어가야 함
                 */}
            </ul>
        </div>
    );
}

export default App;
