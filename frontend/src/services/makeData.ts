export type Proveedor = {
  id: number;
  nombre: string;
  razon_social: string;
  direccion: string;
  fecha: string;
  usuario: string;
};

export async function datas(): Promise<Proveedor[]> {
  try {
    const respuesta = await fetch('http://localhost:8000/proveedor/3');

    if (!respuesta.ok) {
      throw new Error('Error al obtener los datos de proveedores');
    }

    const result = await respuesta.json();
    
  
    if (result && result.proveedor) {
      return [result.proveedor] as Proveedor[];
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}