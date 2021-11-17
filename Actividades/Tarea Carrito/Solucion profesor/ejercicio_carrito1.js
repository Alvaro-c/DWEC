// Definimos el carrito como un array
const carrito=[];
// Definimnos el tipo de objeto
// MÉTODO OBJECT CONSTRUCTOR
function producto(nombre, precio, stock, referencia){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock
    this.disponible=true;
    this.referencia=referencia
}

function buscarproducto(ref){
    for(let i=0;i<carrito.length;i++){
        if(ref==carrito[i].referencia) return(i);
    }
    return("noexiste");
}
function eliminar(ref){
    pos=buscarproducto(ref);
    if(pos!="noexiste"){
        carrito.splice(pos,1);
        console.log("Producto eliminado");
        console.table(carrito);
    }else{
        console.log("No se ha podido eliminar el producto");
    }
}

//Añadimos objetos al carrito
let mas="s";
while(mas=="s"){
    let nombre, precio, stock, refe;
    refe=prompt("Introduce la referencia");
    nombre=prompt("Introduce el nombre del producto",);
    precio=Number.parseFloat(prompt("Introduce el precio del producto",0));
    stock=Number.parseInt(prompt("Introduce el stock del producto",0));
    if(buscarproducto(refe)!="noexiste"){
        alert("Artículo duplicado");
    }else{
        let Nuevoproducto=new producto(nombre, precio, stock, refe);
        carrito.push(Nuevoproducto);
        console.log("añadido:",Nuevoproducto);
    }
    mas=prompt("Quieres continuar s/n",);
}
console.table(carrito);
mas=prompt("¿Quieres eliminar algún producto? S/N");
while (mas=="S"){
    var ref=prompt("Introduce la referencia del artículo a eliminar");
    eliminar(ref);
    mas=prompt("¿Quieres eliminar algún producto? S/N");
    
}
console.table(carrito);