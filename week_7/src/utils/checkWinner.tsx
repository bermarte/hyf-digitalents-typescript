import { win } from "../data/winningCombinations";

export function checkWinner(
  dom: React.RefObject<HTMLHeadingElement>,
  player: string
): void {
  check(win, player);

  function check(arr: number[][], clss: string): void {
    for (let i = 0; i < arr.length; i++) {
      const winningNums: any[] = [];
      const all = arr[i].every((element: number): boolean => {
        if (
          dom?.current?.children[element].children[0].classList.contains(clss)
        ) {
          winningNums.push(arr[i]);
          return true;
        } else {
          return false;
        }
      });
      if (all) {
        console.log(winningNums[0]);
        winningNums[0].forEach((x: number) =>
          dom?.current?.children[x].children[0].classList.add("winning")
        );
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
