  {
    let arrPositions: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    let positions: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let player1: (number| undefined)[][] = [[,,,],[,,,],[,,,]]
    let player2: (number| undefined)[][] = [[,,,],[,,,],[,,,]]
    let result: string[][] = [['','',''],['','',''],['','','']]
    let whichplayer: (number| undefined)[][]  = []
    let n: number = 0
    let player: number[][]| string
    let sign: string
    let gameEnds: boolean = false
    let picked: number
    let pickedArrElement: any[]
    console.log('************* GAME *************')
    console.log('array 2d:', arrPositions)
    console.log('positions:', positions)
    function playGame(): void {
      if (gameEnds || n>=9) return
      ++n
      // choose whichplayer
      if ( n%2 == 0) {
        whichplayer = player2
      } else {
        whichplayer = player1
      }
      console.log(`************* PLAY #${n} *************`)
      player = `${whichplayer===player1?'player 1':'player 2'}`
      sign = `${whichplayer===player1?'X':'O'}`
      console.log('turn of', player, 'sign', sign)
      picked = positions[Math.floor(Math.random() * positions.length)]
      console.log('picked number:', picked)
      positions = positions.filter(item => item !== picked)
      console.log('positions:', positions)

      pickedArrElement = arrPositions.map((arr, index) => {
        console.log('sub array:', arr, index)
        arr.find((element, index2) => {
          if (element === picked) {
            console.log('index1:', index, 'index2:', index2, 'value:', arrPositions[index][index2])
            //player table
            whichplayer[index][index2] = arrPositions[index][index2]
            //draw result
            result[index][index2] = sign
          }
        })
      })
      console.log(`${player} :`, whichplayer)
      console.log(result)
      check(result)
      view()
    }

    while (!gameEnds) {
      playGame()
    }

    function view(): void {
      // console.log('view:', data)
      // console.log(data)
      console.table(result)
    }

    function check(arr: string[][]) {
      console.log('###### Check who is winning ######')
      if (
          // 3 orizontal
          (arr[0][0] === sign &&
          arr[0][1] === sign &&
          arr[0][2] === sign) ||

          (arr[1][0] === sign &&
          arr[1][1] === sign &&
          arr[1][2] === sign) ||

          (arr[2][0] === sign &&
          arr[2][1] === sign &&
          arr[2][2] === sign) ||

          // 3 vertical
          (arr[0][0] === sign &&
          arr[1][0] === sign &&
          arr[2][0] === sign) ||

          (arr[0][1] === sign &&
          arr[1][1] === sign &&
          arr[2][1] === sign) ||

          (arr[0][2] === sign &&
          arr[1][2] === sign &&
          arr[2][2] === sign) ||

          // 2 diagonal
          (arr[0][0] === sign &&
          arr[1][1] === sign &&
          arr[2][2] === sign) ||

          (arr[0][2] === sign &&
          arr[1][1] === sign &&
          arr[2][0] === sign)
        ) {
            const msg = `${player} with the sign ${sign} wins in ${n} steps`
            console.log(msg)
            gameEnds = true
        } else {
            console.log('nobody is winning')
        }
    }
}
