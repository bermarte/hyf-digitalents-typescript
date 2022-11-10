import { win } from "../data/winningCombinations";
export function checkWinner(dom: any) {
  check(win, "player1");

  function check(arr: any[], clss: string) {
    return checkSubarr(arr, clss);
  }

  function checkSubarr(arr: any[], clss: string) {
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
        console.log("player 1 wins");
      }
    }
  }
}
