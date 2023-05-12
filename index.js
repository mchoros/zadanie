const http = require('http'); //import modułu do tworzenia serwera http
const PORT = 8080; // port serwera
 
// funkcja zwracająca aktualną datę i czas 
function getCurrentDateAndTime() {
  return new Date().toISOString();
}
 
// funkcja wyświetlająca informacje o IP i dacie/godzinie dla klienta
function handleRequest(request, response) {
  const clientIP = request.socket.remoteAddress; //pobranie ip klienta
  const currentDateAndTime = getCurrentDateAndTime(); //pobranie biezacej daty i czasu
 
  //wyslanie odpowiedzi do klienta
  response.end(`Client IP address: ${clientIP}\nDate and time in client's timezone: ${currentDateAndTime}\n`);
}
 
// tworzenie serwera HTTP i nasłuchiwanie na określonym porcie
const server = http.createServer(handleRequest); //utworzenie serwera z obsluga zapytan
server.listen(PORT, () => { //uruchomienie i nasłuchiwanie na porcie
  console.log(`Server started on port ${PORT}`); //wypisanie w konsoli informacji o starcie
  console.log(`Author: Mariusz Choroś`); //to samo o autorze
  console.log(`Server started at ${getCurrentDateAndTime()}`); //to samo o czasie uruchomienia serwera
});