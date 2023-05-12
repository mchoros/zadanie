#Budowanie aplikacji

#wykorzystanie obrazu bazowego alpine
FROM node:16-alpine AS builder

#ustawienie katalogu jako roboczy
WORKDIR /zadanie

#kopiowanie do kontenera
COPY package*.json ./

#instalacja zależności
RUN npm install
COPY . .
 
#Uruchomienie aplikacji
#wykorzystanie obrazu bazowego
FROM node:16-alpine

#ustawienie katalogu jako roboczy
WORKDIR /zadanie

#kopiowanie do kontenera
COPY --from=builder /zadanie/package*.json ./
COPY --from=builder /zadanie/ .
 
#implementacja healthchecka
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/ || exit 1
 
#otwarcie portu 8080
EXPOSE 8080

#uruchomienie aplikacji
CMD [ "npm", "start" ]

#zawarcie informacji o autorze wg polecenia
LABEL author="Mariusz Choroś"