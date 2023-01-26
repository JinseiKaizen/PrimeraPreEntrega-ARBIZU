/* calcular el precio de 3 tipos de productos ofrecidos en mi pagina web, siendo desarrollo web, diseño e ilustracion y Diseño e impresion 3D. teniendo este ultimo la impresion 3D costos de envio incluido salvo que el importe supere los $6000 */
let Compras = prompt ("Que productos desea comprar. Pasar concluir ingrese CERRAR");
let Costos = 0;
let costoDeEnvio = 2000;
while (Compras !== CERRAR || Compras !== Cerrar) 
  switch (Compras) {
    case "Diseño Web":
    case "Diseño e Ilustracion":
    case "Diseño 3D":
        Costos = 5000;
        break;

    case "Desarrollo web":
        Costos = 20000;
        break;
    
    case "Impresion 3D":
        Costos = 3000;
        if (Costos < 18000)
            Costos + costoDeEnvio;
        break;
  }
console.log (" El costo de todos los productos es $" + Costos);