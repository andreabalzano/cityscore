# LifeQuality

Questo sito web ci permette di ricercare, tramite un apposito textbox, il nome di una città per scoprire i dati sulla sua abitabilità. <br>
Una volta inviato il form tramite l'apposito pulsante, compariranno a schermo una descrizione della città, il punteggio generale della città, il punteggio del mercato immobiliare, del costo della vita e delle startup. <br>

<h2>Linguaggi e risorse Utilizzati:</h2>
<ul>
 <li><a href="https://html.spec.whatwg.org/">HTML</a></li>
 <li><a href="https://sass-lang.com/">SASS</a></li>
 <li><a href="https://www.w3.org/TR/CSS/">CSS</a></li>
 <li><a href="developer.mozilla.org/it/docs/Web/JavaScript">JavaScript</a></li>
 <li><a href="https://github.com/axios/axios">Axios</a></li>
 <li><a href="https://webpack.js.org/">Webpack</a></li>
</ul>

<h2>Come Funziona:</h2>
Nel file app.js è contenuto il codice principale dell'applicazione. <br>
Nel file obj.js sono contenuti gli oggetti utilizzati e variabili. Poi esportati dove servono. <br>
Nel file progressbar.js è contenuto il codice delle progressbar utilizzate per visualizzare i dati. <br>
Nel file index.js sono importati tutti i file che servono per la configurazione di webpack. <br>
Quando l'utente invia il form, tramite un addEventListener viene chiamata la funzione findCity(). Questa funzione tramite Axios si collega con le api Teleport (tramite url specifico, che viene modificato col valore dell'input per cercare una città specifica). <br>
In .then, quindi in caso il link delle api sia funzionante i dati vengono immagazzinati in una variabile. Poi viene richiamata la funzione pageResults().<br>
La funzione pageResults() estrapola i dati che ci servono dal file fornito da axios e li immagazzina in un oggetto. Poi li visualizza sulla pagina modificando il codice html della sezione output, posizionata nel codice html sotto alla sezione input (dove c'è il fornm). Il secondo blocco della visualizzazione è dato dalle sideBar, che vengono importate da sidebar.js e in seguito viene richiamata la funzione. <br>
In .catch, quindi in caso di errore durante la ricerca delle api (404), quindi anche se viene inserito un input presente nella lista delle città. Viene visualizzato un messaggio di errore sotto al form di input. <br>
Infine è stato creato un bundle con webPack per l'oupload su server. I file sorgente sono contenuti nella cartella './src', mentre il bundle nel percorso './build'.<br>

<h2>Dove Utilizzarlo</h2>
Il codice sorgente di tutto il progetto è caricato in questa repository github.<br>
Per provare l'applicazione si può procedere a questo indirizzo: https://lifequality.vercel.app<br>
Una volta sulla pagina basterà scrivere il nome di una città (in inglese) nel textbox e premere il pulsante.