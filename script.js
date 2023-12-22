function openModal(img,titolo) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modal_body').style.backgroundImage="url('./"+img+"')";
    document.getElementById('descrizione').innerHTML=descrizioni[img.split(".")[0]]
    document.getElementById('titolo-modal').innerHTML=titolo
  }

  // Funzione per chiudere il modal
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  // Chiudi il modal se si fa clic fuori dalla finestra modale
  window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
var classifica=[]
var isIPressed = false;
var isPPressed = false;
var descrizioni={}
const giochi_stat=[
  ['candy_stick.png','Candy Stick'],
  ['candy_straw.png','Candy Straw'],
  ['chopstick.png','Chopstick & Marshmallow'],
  ['paper_water.png','Paper & Water'],
  ['candles.png','Candles'],
  ['cards.png','Cards'],
  ['cookies.png','Cookies'],
  ['cup_ball.png','Cup & Ball'],
  ['cups_marshmallow.png','Cups & Marshmallows'],
  ['cups_sheets.png','Cups & Sheets'],
  ['dices.png','Dices on Wooden stick'],
  ['flour_egg.png','Egg on flour'],
  ['karaoke.png','Continue the song'],
  ['legs_ball.png','Legs & Balls'],
  ['nuts.png','Nuts & Straws'],
  ['twerk.png','Shake your pelvis']
]
var giochi=giochi_stat;
descrizioni["candy_stick"]="<p>Il gioco Candy Stick consiste nel</p>\
<p>trasportare più velocemente possibile delle</p>\
<p>caramelle a bastonico da un posto all'altro.</p>\
<p>L'unico modo per trasportarle è tramite un'altra</p>\
<p>caramella capovolta appesa al collo.</p>\
<p>Non è ammesso l'utilizzo di altre parti</p>\
<p>del corpo per agganciare le caramelle da trasportare.</p>\
<p>Chi impiegherà meno tempo guadagnerà 1 punto.</p>";
descrizioni["candy_straw"]="<p>Il gioco Candy Straw consiste nel</p>\
<p>trasferire più velocemente possibile delle</p>\
<p>palline di cioccolata da un posto all'altro.</p>\
<p>L'unico modo per trasportarle è tramite una cannuccia</p>\
<p>con la quale potrete spostare le palline aspirando dalla cannuccia.</p>\
<p>Non è ammesso l'utilizzo di altre parti</p>\
<p>del corpo per agevolarsi nello spostare le palline.</p>\
<p>Chi impiegherà meno tempo guadagnerà 1 punto.</p>"
descrizioni["chopstick"]="<p>Il gioco Chopstick & Marshmallow consiste</p>\
<p>nell'impilare più marshmallows possibile</p>\
<p>avendo a disposizione 1 minuto di tempo.</p>\
<p>L'unico modo per spostare i marshmallows è attraverso</p>\
<p>due bastoncini, uno in una mano e uno nell'altra.</p>\
<p>Il punteggio di ogni concorrente corrisponde al massimo</p>\
<p>numero di marshmallow impilati nel tempo disponibile.</p>\
<p>Chi ne impila di più guadagna 1 punto.</p>"
descrizioni["paper_water"]="<p>Il gioco Paper & Water consiste</p>\
<p>nel trasportare un bicchiere pieno d'acqua</p>\
<p>riallotolando un rotolo di carta igenica.</p>\
<p>Il rotolo viene srotolato e il bicchiere viene</p>\
<p>posizionato alla sua estremità.</p>\
<p>Il concorrente riavvolgendo il rotolo dovrà avvivinare il</p>\
<p>più possibile il bicchiere a se senza che la carta si strappi</p>\
<p>a causa dell'acqua uscita dal bicchiere durante il movimento.</p>\
<p>Chi avvicina di più il bicchiere a se guadagna 1 punto.</p>"
descrizioni["candles"]="<p>Il gioco Candles consiste</p>\
<p>nello spegnere più candele possibili pronunciando frase.</p>\
<p>Le candele vengono accese e disposte in fila indiana.</p>\
<p>Viene scelta una frase, e ogni concorrente dovrà</p>\
<p>pronunciare questa frase a ridosso delle candele spegnendone</p>\
<p>il più possibile.</p>\
<p>Chi spegne il maggior numero di candele guadagna 1 punto.</p>\
<p>Si consiglia di non fare questo gioco con un calabrese.</p>"
descrizioni["cards"]="<p>Il gioco Cards consiste</p>\
<p>nel posizionare un mazzo di carte su un bicchiere.</p>\
<p>A turno ognuno dovrà soffiare sul mazzo facendo cadere</p>\
<p>almeno una carta.</p>\
<p>L'ordine con il quale si susseguiranno i partecipanti</p>\
<p>è a partire dall'ultimo in classifica fino al primo.</p>\
<p>In caso di parità di punteggio ha precedenza chi si prenota per primo.</p>\
<p>Guadagnano tutti 1 punto tranne chi fa cadere l'ultima carta.</p>"
descrizioni["cookies"]="<p>Il gioco Cookies consiste</p>\
<p>nel mangiare un biscotto senza usare le mani.</p>\
<p>Il concorrete deve stare seduto. Successivamente gli</p>\
<p>viene posizionato un biscotto sulla sua fronte.</p>\
<p>L'obiettivo è riuscire a portarlo alla bocca e mangiarlo</p>\
<p>senza l'ausilio di altre parti del corpo oltre al viso.</p>\
<p>Chi riesce a mangiare il biscotto nel minor tempo possibile guadagna 1 punto.</p>"
descrizioni["cup_ball"]="<p>Il gioco Cup & Ball consiste</p>\
<p>nel far canestro nel bicchiere con una pallina legata ad esso.</p>\
<p>Viene fissato un bicchiere con appesa una pallina</p>\
<p>al bacino del concorrente. L'obiettivo è far entrare la pallina</p>\
<p>nel bicchiere compiendo solo movimenti di bacino.</p>\
<p>Non è ammesso far muovere la pallina in altri modi.</p>\
<p>Chi fa canestro nel minor tempo possibile guadagna 1 punto.</p>"
descrizioni["cups_marshmallow"]="<p>Il gioco Cups & Marshmallows consiste</p>\
<p>nel raccogliere più marshmallows possibili.</p>\
<p>Ogni concorrente deve infilare le proprie mani in dei bicchieri di carta.</p>\
<p>Viene posizionato un mucchio di marshmallows al centro del tavolo.</p>\
<p>Tutti i concorrenti si posizionano intorno al tavolo.</p>\
<p>Al via possono iniziare a raccoglierli con le mani nei bicchieri finchè non finiscono.</p>\
<p>Chi ne raccoglie di più guadagna 1 punto.</p>"
descrizioni["cups_sheets"]="<p>Il gioco Cups & Shettes consiste</p>\
<p>nel far cadere meno bicchieri possibile.</p>\
<p>Vengono impilati dei bicchieri di carta frapponendo</p>\
<p>tra loro un foglio di carta.</p>\
<p>L'obiettivo è sfilare con un movimento deciso un foglio</p>\
<p>alla volta senza far cadere i bicchieri.</p>\
<p>Chi ne fa cadere di meno guadagna 1 punto.</p>"
descrizioni["dices"]="<p>Il gioco Dices on Wooden stick consiste</p>\
<p>nell'impilare più dadi possibile.</p>\
<p>I dadi vanno impilati su un abbassalingua</p>\
<p>che il concorrente deve tenere in equilibrio con la bocca.</p>\
<p>I dadi vanno posizionati uno alla volta.</p>\
<p>Dopo che un dado è stato posizionato non è più possibile modificarne la posizione.</p>\
<p>Chi impila più dadi guadagna 1 punto.</p>"
descrizioni["flour_egg"]="<p>Il gioco Egg on Flour consiste</p>\
<p>nello spostare della farina senza far cadere l'uovo.</p>\
<p>Viene posizionata su una superfice una collinetta compatta di farina.</p>\
<p>Gli viene posizionato sopra un uovo e a turno ogni concorrente dovrà</p>\
<p>togliere della farina dalla collina con una tessera senza far cadere l'uovo.</p>\
<p>L'ordine con il quale si susseguiranno i partecipanti</p>\
<p>è a partire dall'ultimo in classifica fino al primo.</p>\
<p>In caso di parità di punteggio ha precedenza chi si prenota per primo.</p>\
<p>Guadagnao tutti 1 punto tranne chi fa cadere l'uovo.</p>"
descrizioni["karaoke"]="<p>Il gioco Continue the song consiste</p>\
<p>nel continuare il testo di una canzone.</p>\
<p>Viene scelta una playlist di canzoni della storia italiana.</p>\
<p>Non sono ammesse canzoni straniere perchè questa non è una democrazia.</p>\
<p>A ogni concorrente viene sottoposto casualmente un brano della playlist.</p>\
<p>In un certo momento la musicà si fermerà e il concorrente dovrà continuare il testo.</p>\
<p>Chiunque riesce a dire almeno le prime 10 parole giuste da quando</p>\
<p>viene fermata la musica quadagna 1 punto.</p>"
descrizioni["legs_ball"]="<p>Il gioco Legs & Balls consiste</p>\
<p>nel dover trasportare delle palline posizionate tra le gambe.</p>\
<p>Si decide il punto di partenza e di arrivo.</p>\
<p>Ogni concorrente dovrà trasportare il numero di palline prefissato</p>\
<p>lungo il percorso stabilito nel minor tempo possibile.</p>\
<p>Se cade la pallina si deve ricominciare dal punto di partenza.</p>\
<p>Chi impiega meno tempo a trasportare tutte le palline guadagna 1 punto.</p>"
descrizioni["nuts"]="<p>Il gioco Nuts & Stick consiste</p>\
<p>nel dover impilare dei dadi per bulloni.</p>\
<p>I dadi vengono infilati in un'asticella di legno.</p>\
<p>Il concorrente dovrà impilare un dado alla volta facendo scivolare</p>\
<p>i dadi dall'asticella. Dopo che il dado è stato sfilato dall'asticella</p>\
<p>non è più possibile modificarne la posizione.</p>\
<p>Chi impila il maggior numero di dadi guadagna 1 punto.</p>"
descrizioni["twerk"]="<p>Il gioco Shake your pelvis consiste</p>\
<p>nel dover svuotare una scatola piena di palline.</p>\
<p>A ogni concorrente viene legata una scatola contenente delle</p>\
<p>palline all'altezza del bacino sul lato posteriore.</p>\
<p>Al via il concorrente dovrà cercare di far uscire più palline possibile</p>\
<p>dalla scatola esclusivamente muovendo il bacino.</p>\
<p>Chi svuota la scatola più velocemente guadagna 1 punto.</p>"
document.addEventListener('keydown', function(event) {
    if (event.key === 'i' || event.key === 'I') {
        if (isIPressed) {
            isIPressed = false;
            isPPressed = false;
        }
        else{
          isIPressed=true
          isPPressed = false;
        }
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'p' || event.key === 'P') {
        if (isPPressed) {
            isPPressed = false;
            isIPressed = false;
        }
        else{
          isPPressed=true
          isIPressed=false;
        }
    }
});


function onclick_classifica() {
    var elements = document.getElementsByClassName('trapezioIs');

    for (var i = 0; i < elements.length; i++) {
        elements[i].id = i;
        elements[i].setAttribute("onclick","gestisci_class("+i+")")
    }
}

function gestisci_class(id) {
    if (isIPressed) {
        inserisci(id)
    }
    else if(isPPressed){
      aggiungi_punto(id)
    }
  }
  function inserisci(id){
    let elem=document.getElementById(id);
    let nome=prompt("Inserisci il nome");
    child=elem.getElementsByClassName("class")[0]
    child.innerHTML=nome+" 0pt";
    new_el=[nome,0]
    classifica.push(new_el)
    sessionStorage['classifica']=JSON.stringify(classifica)
    //for(i=0;i<classifica.length;i++) console.log(classifica[i])
  }

function aggiungi_punto(id){
  let elem=document.getElementById(id);
  child=elem.getElementsByClassName("class")[0]
  string=child.innerHTML;
  nome=string.split(" ")[0]
  for(i=0;i<classifica.length;i++) {
    if(classifica[i][0]==nome) classifica[i][1]++
  }
  sessionStorage['classifica']=JSON.stringify(classifica)
  aggiorna_class()
  }
function aggiorna_class(){
  for(el in classifica) console.log(el)
  classifica=classifica.sort(function(a, b) {
                              return b[1] - a[1];
                            });
  for(el in classifica) console.log(el)
    for(i=0;i<classifica.length;i++){
      let elem=document.getElementById(i);
      child=elem.getElementsByClassName("class")[0]
      child.innerHTML=classifica[i][0]+" "+classifica[i][1]+"pt";
    }
}

function seleziona_gioco(){
  if(giochi.length==0){
    alert("I giochi sono finiti, proclamate il vincitore!")
  }
  else{
    var indice=Math.floor(Math.random()*giochi.length)
    console.log("eletto "+indice)
    var gioco=giochi[indice]
    giochi.splice(indice,1)
    sessionStorage['giochi']=JSON.stringify(giochi)
    //giochi.forEach((el)=>{console.log(el)})
    document.getElementById('counter').innerHTML=(giochi_stat.length-giochi.length)+"/16 GIOCHI FATTI"
    openModal(gioco[0],gioco[1])
  }
}

function onload(){
  if(sessionStorage['classifica']!=undefined){
    classifica=JSON.parse(sessionStorage['classifica']);
    aggiorna_class()
  }
  else{
    sessionStorage['classifica']=JSON.stringify(classifica)
  }
  if(sessionStorage['giochi']!=undefined){
    giochi=JSON.parse(sessionStorage['giochi']);
  }
  else{
    sessionStorage['giochi']=JSON.stringify(giochi)
  }
  document.getElementById('counter').innerHTML=(giochi_stat.length-giochi.length).toString()+"/16 GIOCHI FATTI"
}

function reset(){
  sessionStorage.removeItem('classifica');
  sessionStorage.removeItem('giochi');
  giochi=giochi_stat
  window.open("./",'_self')
}