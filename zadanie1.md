Polecenie do zbudowania opracowanego obrazu kontenera:
    docker build -t zadanie .

Polecenie do uruchomienia kontenera na podstawie zbudowanego obrazu:
    docker run -p 8080:8080 --name zadanie zadanie

Polecenie do uzyskania informacji które wygenerował serwer:
    docker logs zadanie

Polecenie do sprawdzenia ile warstw posiada zbudowany obraz:
    docker history zadanie

W załączonym screenie znajduje się dowód na to że obraz nie uzyskuje oceny CVSS powyżej 7.0. 
Polecenie które użyłem:
    docker scout cves zadanie
    