Applicazione Cielo

📌 Panoramica

Applicazione Cielo è un'applicazione web progettata per visualizzare informazioni sui voli in partenza e sulle compagnie aeree, fornendo un'interfaccia moderna e intuitiva. Il progetto utilizza React per il frontend, Flask per il backend e PostgreSQL come database.

🛠️ Tecnologie Utilizzate

Frontend

React.js con Vite per la gestione dell'interfaccia utente

CSS per il design e lo stile del sito

React Router per la navigazione tra le pagine

Backend

Python con Flask per la gestione delle API

Flask-CORS per abilitare la comunicazione con il frontend

Psycopg2 per interagire con PostgreSQL

Database

PostgreSQL per la gestione dei dati sui voli e le compagnie aeree

JSON per dati statici in caso di assenza di connessione al database

🏗️ Struttura del Progetto

Applicazione_Cielo/
│── Backend/
│   ├── server.py  # Backend Flask
│   ├── dbclient.py  # Gestione della connessione al database
│   ├── myjson.py  # Lettura dati da file JSON
│
│── Json/
│   ├── compagnie.json  # Dati statici sulle compagnie aeree
│   ├── voliInpartenza.json  # Dati statici sui voli
│
│── src/
│   ├── App.jsx  # Componente principale React
│   ├── main.jsx  # Punto di ingresso React
│   ├── components/
│   │   ├── NavBar.jsx  # Navigazione
│   │   ├── Footer.jsx  # Footer
│   │   ├── Hero.jsx  # Sezione introduttiva
│   ├── pages/
│   │   ├── VoliInPartenza.jsx  # Visualizzazione voli
│   │   ├── Compagnie.jsx  # Visualizzazione compagnie
│   ├── assets/  # Immagini e icone
│
│── public/
│   ├── index.html  # Pagina principale
│
│── package.json  # Configurazione dipendenze frontend
│── vite.config.js  # Configurazione di Vite
│── README.md  # Documentazione del progetto

🔗 Comunicazione tra Frontend e Backend

Il frontend utilizza fetch API per recuperare i dati dal backend e visualizzarli nelle pagine.

Esempio di chiamata API nel frontend:

fetch("http://localhost:5000/voli")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Errore nel recupero dei voli:", error));

🚀 Installazione e Configurazione

1️⃣ Clonare il Repository

git clone https://github.com/NOME-REPOSITORY.git
cd Applicazione_Cielo

2️⃣ Configurare il Backend (Flask + PostgreSQL)

cd Backend
python -m venv venv  # Creazione ambiente virtuale
source venv/bin/activate  # Attivazione (Mac/Linux)
venv\Scripts\activate  # Attivazione (Windows)
pip install -r requirements.txt  # Installazione dipendenze

🔹 Configurare il database:

Creare un database PostgreSQL chiamato Cielo

Aggiornare config.py con le credenziali del database:

DB_HOST=localhost
DB_NAME=Cielo
DB_USER=tuo_username
DB_PASSWORD=tuo_password
DB_PORT=5432

🔹 Avviare il backend:

python server.py

✅ Il backend sarà disponibile su http://localhost:5000

3️⃣ Configurare il Frontend (React + Vite)

cd src
npm install  # Installazione dipendenze
npm run dev  # Avvio del server di sviluppo

✅ Il frontend sarà disponibile su http://localhost:5173

🛠️ Dipendenze Principali

Backend (Python + Flask)

Flask (pip install flask)

Flask-CORS (pip install flask-cors)

Psycopg2 (pip install psycopg2)

Frontend (React + Vite)

React (npm install react)

React Router (npm install react-router-dom)

📌 Funzionalità Principali

✅ Visualizzazione voli in partenza con dati aggiornati dal database.
✅ Elenco compagnie aeree disponibili su Fly Scanner.
✅ Design responsivo con supporto per dispositivi mobili.
✅ Gestione dinamica dei dati grazie all'integrazione con PostgreSQL e Flask.