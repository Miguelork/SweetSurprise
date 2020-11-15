export interface Product {
    $key?:string;
    nombre:string;
    categoria:string;
    descripcion:string;
    precio:number;
    stock:number;
    fabricante:string;
    img1:File;
    img2:File;
    img3:File;
}
