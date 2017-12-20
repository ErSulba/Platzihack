// ==UserScript==
// @name         PlatziHack (I)
// @namespace    Platzi
// @version      1.0
// @description  Script para saber la cantidad de videos y minutos aproximados que dura un curso en Platzi
// @author       @jjyepez & @ersulba
// @match        https://platzi.com/clases/*/
// @grant        none
// ==/UserScript==

(function(window) {
    'use strict';
    
    let t = [''];
    document.querySelectorAll( '.MaterialContent-duration' ).forEach( el => t.push( el.textContent ) );

    const tN = t.map( el => { let acum = parseInt( '0'+el.split(':')[0] ); return parseInt('0'+acum ); } );
    const tt = String( ( tN.reduce( ( acum, el ) => { acum += parseInt( 1*el ); return 1*acum; } ) / 60 ).toFixed(2) ).split('.');
    const d = `${tt[0]} hs` + ( tt[1] ? ` ${~~(tt[1]*60/100)} min` : '' );

    const html = document
    .querySelector( '.CourseBanner-title' )
    .textContent + `<small style='color:darkred;font-weight:normal'><br>Duración apróx.: <b>${d}</b><br>Cant. de videos : <b>${t.length}</b></small>`;

    document.querySelector( '.CourseBanner span' ).innerHTML = html;

})();
