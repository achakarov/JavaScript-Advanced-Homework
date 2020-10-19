function solve() {

    const inputAreaElement = document.getElementById('chat_input');
    const sendButton = document.getElementById('send');
    const divMessages = document.getElementById('chat_messages');

    sendButton.addEventListener('click', () => {
    
        let newDiv = document.createElement('div');
        newDiv.classList.add('message', 'my-message');
        newDiv.textContent = inputAreaElement.value;
        divMessages.appendChild(newDiv);

        inputAreaElement.value = '';
    });
}


