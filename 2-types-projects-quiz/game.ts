{
    /**
     * Let's make a game 🕹
     */
    const position = {
        x: 0,
        y: 0,
    }

    type Command = 'up' | 'down' | 'left' | 'right';

    function move2(command: Command) {
        switch(command) {
            case 'up': {
                return position.y++;
            }
            case 'down': {
                return position.y--;
            }
            case 'left': {
                return position.x--;
            }
            case 'right': {
                return position.x++;
            }
            default: {
                throw new Error('Move Error');
            }
        }
    }

    console.log(position); // { x: 0, y: 0}
    move2('up');
    console.log(position); // { x: 0, y: 1}
    move2('down');
    console.log(position); // { x: 0, y: 0}
    move2('left');
    console.log(position); // { x: -1, y: 0}
    move2('right');
    console.log(position); // { x: 0, y: 0}
}