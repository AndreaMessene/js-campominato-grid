
function creazioneElementoHtml( tagHtml, classi, number ) {
    let elemento = document.createElement( tagHtml );
    elemento.className = classi;
    elemento.innerText = number;

    return elemento;
}

console.log(creazioneElementoHtml("div", "box", 1 ))



let griglia = document.querySelector(".griglia");

//creiamo un ciclo che ci permetterà di creare 100 quadrati per la nostra grliglia
for ( let i = 1; i <= 100; i++ ) {

    // creiamo una variabile della funziona per riutilizzarla in modo più pratico 
    let cella = creazioneElementoHtml( "div", "box", i)
    // cicliamo gli stili della cella all'interno della griglia 
    griglia.append(cella)


    cella.addEventListener("click", function() {
    
    //permettiamo il cambio di classe tramite click
    this.classList.toggle("bg-2");

    //far apparire in console il numero selezionato
    console.log(i)

    })
    
}
