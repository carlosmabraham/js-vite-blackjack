
/**
 * Esta funcion me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de String
 * @returns {String} retorna una carta del deck
 */
export const pedirCarta = ( deck ) => {

    if( !deck )
        throw new Error( 'Se requiere tener un deck con barajas' )

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}