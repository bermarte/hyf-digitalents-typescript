export default function Modal(): JSX.Element {
  function reset(): void {
    // @ts-ignore: Object is possibly 'null'.
    document.querySelector(".blue").style.display = "none";
    // @ts-ignore: Object is possibly 'null'.
    document.querySelector(".red").style.display = "none";
    // @ts-ignore: Object is possibly 'null'.
    document.querySelector(".modal").style.display = "none";
    const dom = document.querySelectorAll(".container_cell_place");
    dom.forEach((cell: Element) => {
      cell.classList.remove("canLand");
      cell.classList.remove("player1");
      cell.classList.remove("player2");
      cell.classList.remove("winning");
      cell.classList.remove("disabled");
    });
  }
  return (
    <div className="modal">
      <div className="modal_container">
        <h1>
          <span className="blue">Blue wins</span>
          <span className="red">Red wins</span>
        </h1>
        <div>
          <button className="modal_container_btn" onClick={() => reset()}>
            <h2>Play Again</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
