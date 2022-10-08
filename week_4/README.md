#1 Assessment 1: What’s inside the box

Create a program that allows us to store objects in boxes.

There are two types of boxes: a small box (SmallBox) and a big box (BigBox). A small box can only hold small objects. A big box can hold big objects. At any given point there is only one small box and one big box.


You should be able to add an item to a box, remove an item or empty the entire box. 

Items are stacked in the box, if you remove an item you can only remove the item on top of the stack. 

The small box can only hold a total of 100 gram worth of items, the big box can hold 30 kilogram worth of items. Adding additional items when the box reaches its maximum capacity should not be possible.

Requirements

Pay attention to using strict types
Use at least one Generic in your solution.


Small Objects

|Paper|
______
|Size |Enum {A4, A5, A6, A7}|
Weight (in gram)
number



Pencil
Weight (in gram)
number



----

Big Objects

TV
Type
Enum {LCD, OLED}
Weight (in gram)
number



Speaker
Capacity (in Watts)
number
Weight (in gram)
number




Sample output

                BOXES

Small Box
—-------
empty
—-------

Big Box
—-------
empty
—-------

With which box do you want to interact? (1) Small Box, (2) Big Box
1

What do you want to do? (1) add an item, (2) remove an item, (3) empty the box
2

The box is currently empty!

Small Box
—-------
empty
—-------

Big Box
—-------
empty
—-------

With which box do you want to interact? (1) Small Box, (2) Big Box
1

What do you want to do? (1) add an item, (2) remove an item, (3) empty the box
1

What item do you want to add? (1) Paper, (2) Pencil
1

What is the size?
A4

What is the weight? 
1

Small Box
—-------
paper - a4 - 1g
—-------

Big Box
—-------
empty
—-------

With which box do you want to interact? (1) Small Box, (2) Big Box
1

What do you want to do? (1) add an item, (2) remove an item, (3) empty the box
2

Small Box
—-------
empty
—-------

Big Box
—-------
empty
—-------

