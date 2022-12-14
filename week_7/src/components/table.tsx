import { useRef, useState } from "react";
import Modal from "./modal";
import { checkWinner } from "../utils/checkWinner";

export default function GameTable(): JSX.Element {
  const [player, setPlayer] = useState<string>("player1");
  function checkItem(item: number) {
    canLandInit();
    const lastRow: number[] = [36, 37, 38, 39, 40, 41, 42];
    // check if the cell is clickable
    if (
      lastRow.indexOf(item) !== -1 ||
      (cellPlaces.current!.children[item + 6].children[0].classList.contains(
        "canLand"
      ) &&
        (cellPlaces.current!.children[item + 6].children[0].classList.contains(
          "player1"
        ) ||
          cellPlaces.current!.children[item + 6].children[0].classList.contains(
            "player2"
          )))
    ) {
      cellPlaces.current!.children[item - 1].children[0].classList.add(
        "canLand",
        player
      );
      player === "player2" ? setPlayer("player1") : setPlayer("player2");
      checkWinner(cellPlaces, player);
    }
  }

  const cellPlaces = useRef<HTMLHeadingElement>(null);

  // connect-4 7x6 (42) cells
  function matrix(): JSX.Element[] {
    const numbers: unknown[] = Array.from({ length: 42 });
    const listItems: JSX.Element[] = numbers.map(
      (item: unknown, i: number): JSX.Element => (
        <div className="container_cell" key={i}>
          <div
            className="container_cell_place"
            onClick={() => checkItem(i + 1)}
          >
            {i + 1}
          </div>
        </div>
      )
    );
    return listItems;
  }

  function canLandInit(): void {
    // add classes to last row: cells 35 to 41
    // eslint-disable-next-line array-callback-return
    [...Array(7)].map((x, i): void => {
      cellPlaces.current?.children[i + 35].children[0].classList.add("canLand");
    });
  }

  return (
    <>
      <div className="container" ref={cellPlaces}>
        {matrix()}
      </div>
      <div className="table"></div>
      <Modal />
    </>
  );
}
