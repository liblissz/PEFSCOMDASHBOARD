import { io } from 'socket.io-client';

const socket = io('https://pefscom-backend.onrender.com', {
  transports: ['websocket'],
  withCredentials: true,
});

socket.on('connect', () => {
  console.log('✅ Socket connected:', socket.id);
});

export default socket;
