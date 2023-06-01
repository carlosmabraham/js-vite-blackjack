
/**
 * Esta funcion genera el valor de una carta
 * 
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */
export const valorCarta = ( carta ) => {

    if( !carta )
        throw new Error( 'Es necesario resivir una carta para continuar con la operacion' )

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}