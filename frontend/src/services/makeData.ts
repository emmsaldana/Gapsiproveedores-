export type Proveedor = {
  id: number;
  nombre: string;
  razon_social: string;
  direccion: string;
  fecha: string;
  usuario: string;
};
  
  export const data = [
    {
      id:1,
      nombre: "social medicals",
      razon_social: "los latinos atacan srl",
      direccion: 'avenida der los huisaches junto al macdonals ',
      fecha: '23/05/2005',
      usuario: 'German'
    
    },
    {
      id:2,
      nombre: "social medicals",
      razon_social: "los latinos atacan srl",
      direccion: 'avenida der los huisaches junto al macdonals ',
      fecha: '23/05/2005',
      usuario: 'German'
    
    }
    
  ] as Proveedor[];