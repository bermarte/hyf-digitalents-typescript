import { win } from "../data/winningCombinations";

export function checkWinner(
  dom: React.RefObject<HTMLHeadingElement>,
  player: string
): void {
  check(win, player);

  function check(arr: number[][], clss: string): void {
    for (let i = 0; i < arr.length; i++) {
      const all = arr[i].every((element: number): boolean => {
        if (
          dom?.current?.children[element].children[0].classList.contains(clss)
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (all) {
        let col: string;
        player === "player1" ? (col = ".blue") : (col = ".red");
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector(col).style.display = "block";
        // @ts-ignore: Object is possibly 'null'.
        return (document.querySelector(".modal").style.display = "block");
      }
    }
  }
}
