import { win } from "../data/winningCombinations";
export function checkWinner(dom: any, player: any) {
  check(win, player);

  function check(arr: any[], clss: string) {
    for (let i = 0; i < arr.length; i++) {
      const all = arr[i].every((element: any) => {
        if (
          dom.current?.children[element].children[0].classList.contains(clss)
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (all) {
        let col;
        player === "player1" ? (col = ".blue") : (col = ".red");
        // @ts-ignore: Object is possibly 'null'.
        document.querySelector(col).style.display = "block";
        // @ts-ignore: Object is possibly 'null'.
        return (document.querySelector(".modal").style.display = "block");
      }
    }
  }
}
