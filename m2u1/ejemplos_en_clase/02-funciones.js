function calcularDescuento(precio,descuento){

    const desc = (precio * descuento) / 100;

    const preciocondescuento = precio - desc;

    return preciocondescuento

}

const precioprenda = 10500;

const descuentohoy = 35;

const preciofinal = calcularDescuento(precioprenda,descuentohoy)

console.log(preciofinal)