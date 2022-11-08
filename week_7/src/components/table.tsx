/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";

export default function GameTable() {
  function checkItem(item: any) {
    console.log(item);
    canLandInit();
    const lastRow = [36, 37, 38, 39, 40, 41, 42];

    // check if you can click the cell
    if (
      lastRow.indexOf(item) !== -1 ||
      (cellPlaces.current!.children[item + 6].children[0].classList.contains(
        "canLand"
      ) &&
        cellPlaces.current!.children[item + 6].children[0].classList.contains(
          "player1"
        ))
    ) {
      cellPlaces.current!.children[item - 1].children[0].classList.add(
        "canLand",
        "player1"
      );
    }
  }

  const cellPlaces = useRef<HTMLHeadingElement>(null);

  // connect-4 7x6 (42) cells
  function matrix() {
    const numbers = Array.from({ length: 42 });
    const listItems = numbers.map((item: any, i: any) => (
      <div className="container_cell" key={i}>
        <div className="container_cell_place" onClick={() => checkItem(i + 1)}>
          {i + 1}
        </div>
      </div>
    ));
    return listItems;
  }

  function canLandInit() {
    // add class to last row: cells 35 to 41
    [...Array(7)].map((x, i) => {
      cellPlaces.current?.children[i + 35].children[0].classList.add("canLand");
    });
  }

  return (
    <>
      <div className="container" ref={cellPlaces}>
        {matrix()}
      </div>
    </>
  );
}
