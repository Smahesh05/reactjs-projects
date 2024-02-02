import { useState } from "react";

const LISTONEOBJ = [
  { title: "Item 1", checked: false },
  { title: "Item 2", checked: false },
  { title: "Item 3", checked: false },
];

const LISTTWOOBJ = [
  { title: "Item A", checked: false },
  { title: "Item B", checked: false },
  { title: "Item C", checked: false },
];

const App = () => {
  const [list1, setList1] = useState(LISTONEOBJ);
  const [list2, setList2] = useState(LISTTWOOBJ);

  const handleCheckBoxChange = (idx) => {
    const updatedList = [...list1];
    updatedList[idx].checked = !updatedList[idx].checked;
    setList1(updatedList);
  };

  const handleSwap = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];

    updatedList1.forEach((item, idx) => {
      if (item.checked) {
        const temp = updatedList1[idx].title;
        updatedList1[idx].title = updatedList2[idx].title;
        updatedList2[idx].title = temp;
      }
      item.checked = false;
    });
    setList1(updatedList1);
    setList2(updatedList2);
  };

  return (
    <div className="container">
      <div className="list-1">
        <h2>List 1</h2>
        <ul>
          {list1.map((item, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckBoxChange(idx)}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="btn-parent">
        <button onClick={handleSwap}>Swap</button>
      </div>
      <div className="list-2">
        <h2>List 2</h2>
        <ul>
          {list2.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
