const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageIn');
const messageContainer = document.querySelector(".container");

const names = prompt("Enter your name to join");
socket.emit('new-user-joined', names);