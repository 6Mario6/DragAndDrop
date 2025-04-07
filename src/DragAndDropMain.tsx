import { useState } from "react";
import { DragAndDrop } from "./DragAndDrop";
import "./DragAndDropMain.css";

export const DragAndDropMain = () => {
  const [options, setOptions] = useState([
    "dungeon_master.exe",
    "map_1.dat",
    "map_2.dat",
    "character1.txt",
    "character2.txt",
    "shell32.dll",
    "README.txt",
    "knight.bmp",
    "dragon.bmp",
    "brick.bmp",
    "moss.bmp",
  ]);
  const [target1, setTarget1] = useState<string[]>([]);
  const [target2, setTarget2] = useState<string[]>([]);

  const handleOnChange = (id: string, items: string[]) => {
    if (id === "source") {
      setOptions((prev) => [...prev, ...items]);
    } else if (id === "target1") {
      setTarget1((prev) => [...prev, ...items]);
    } else if (id === "target2") {
      setTarget2((prev) => [...prev, ...items]);
    }
  };
  return (
    <div className="grid-container">
      <section className="column left">
        <DragAndDrop id="source" options={options} onChange={handleOnChange} />
      </section>
      <section className="column right">
        <div className="right-dnd-column">
          <div className="dnd-wrapper blue-bg">
            <DragAndDrop
              id="target1"
              options={target1}
              onChange={handleOnChange}
            />
          </div>
          <div className="dnd-wrapper red-bg">
            <DragAndDrop
              id="target2"
              options={target2}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
