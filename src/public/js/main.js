const socket = io();

const cmd = document.querySelector("#server_command");


// Socket stuff
socket.on('server', (message) => {
    console.log(message);
});

// Page stuff
cmd.addEventListener('keydown', (key_event) => {
    if (key_event.key != 'Enter')
        return;

    let command = cmd.value;
    cmd.value = "";   
    console.log(command);
    
    socket.emit('command', command);
});