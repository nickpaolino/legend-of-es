## Overview

Legend of Es is a pacman-style action game written in Vanilla JS that features
randomly generated maps. A player's goal is to get the character from the left
side of the board to the right side without colliding into the moving monsters.
All of the spaces with trees are obstacles that cannot be passed. A new map is
randomly generated each time the player reaches the other side of the board. The
maps contain increasingly more obstacles as the player moves to the next one.
There is no definable end to the game because our random generation algorithm
ensures that there's always space for the player to move to the other side.

## Map Generation Algorithm

Each time a map is generated, there's a series of steps. The program determines
the number of obstacles that need to be placed. It generates a random
representation of the board as an array of arrays with numbers representing the
type of object to be placed. Knowing the start and end point of the character by
default, an algorithm checks to see if there is space for the character to move
unimpeded through the map. If there isn't, a new map is generated. However, if
there is space, the map is placed on the board. The algorithm judging where the
monsters moved is randomly generated and is enacted on a JavaScript interval
timer. All of the logic governing movements and collisions happens numerically
via the representation of the map as an array of arrays.

## Style / Design

The style and layout is created in custom CSS. The board is an HTML table and
each cell is represented programmatically as part of an array of arrays. Every
time a map is generated via an array of arrays, the JavaScript checks to see
which number is in each cell and replaces it with the appropriate image.
Depending on the movement of the character and monsters, a positionally oriented
image is shown.
