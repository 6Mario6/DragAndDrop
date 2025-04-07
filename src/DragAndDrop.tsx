import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { useEffect } from "react";

import "./DragAndDrop.css";

export const DragAndDrop = ({
  id,
  options,
  onChange,
}: {
  id: string;
  options: string[];
  onChange: (id: string, items: string[]) => void;
}) => {
  const [source, items, setItems] = useDragAndDrop<HTMLUListElement, string>(
    options,
    {
      group: "todoList",
      handleEnd: (data) => {
        console.log(data);
        console.log("currentParent", data.currentParent);

        console.log("id", id);
        if (data.currentParent.el.id !== data.initialParent.el.id) {
          const newItem = data.activeState?.node.data.value
            ? [data.activeState.node.data.value]
            : [];
          onChange(data.currentParent.el.id, newItem);
        }
      },
      // performTransfer: (data) => {
      //   console.log("performTransfer", data);
      // },
    }
  );

  useEffect(() => {
    // Set the initial items in the list
    console.log("Setting items:", options);
    setItems(options);
  }, [options]);

  return (
    <ul id={id} className="dragAndDropContainer" ref={source}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
