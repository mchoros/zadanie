Zadania dodatkowe:

Polecenie do budowy obrazu linux/amd64:
	docker build --platform linux/amd64 --progress=plain -t zadanie:amd64 .

Polecenie do budowy obrazu linux/arm/v7:
	docker build --platform linux/arm/v7 --progress=plain -t zadanie:armv7 .

Polecenie do budowy obrazu linux/arm64/v8:
	docker build --platform linux/arm64/v8 --progress=plain -t zadanie:armv8 .
