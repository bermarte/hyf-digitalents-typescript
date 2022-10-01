# Assessment 1: Tic-Tac-Toe

The game is to be played between two people (in this program between HUMAN and COMPUTER).

One of the player chooses ‘O’ and the other ‘X’ to mark their respective cells.


The game starts with one of the players and the game ends when one of the players has one whole row/ column/ diagonal filled with his/her respective character (‘O’ or ‘X’).
If no one wins, then the game is said to be a draw.

Implementation


In our program the moves taken by the computer are chosen randomly from all available moves.

```

                Tic-Tac-Toe

Choose a cell numbered from 1 to 9 as below and play

              1 | 2  | 3  
            --------------
              4 | 5  | 6  
            --------------
              7 | 8  | 9  

-    -    -    -    -    -    -    -    -    -

COMPUTER has put a O in cell 6


                |    |    
            --------------
                |    | O  
            --------------
                |    |    

Please input a cell number:
7
HUMAN has put a X in cell 7


                |    |    
            --------------
                |    | O  
            --------------
              X |    |    

COMPUTER has put a O in cell 5


                |    |    
            --------------
                | O  | O  
            --------------
              X |    |    

Please input a cell number:
1
HUMAN has put a X in cell 1


              X |    |    
            --------------
                | O  | O  
            --------------
              X |    |    

COMPUTER has put a O in cell 9


              X |    |    
            --------------
                | O  | O  
            --------------
              X |    | O  

Please input a cell number:
8
HUMAN has put a X in cell 8


              X |    |    
            --------------
                | O  | O  
            --------------
              X | X  | O  

COMPUTER has put a O in cell 4


              X |    |    
            --------------
              O | O  | O  
            --------------
              X | X  | O  

COMPUTER has won

```


Requirements

- Following an Object oriented approach to solving this problem.
- Pay attention to using strict types

