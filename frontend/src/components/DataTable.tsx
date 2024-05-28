import React, { useEffect, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_Row,
    createMRTColumnHelper,
  } from 'material-react-table';
  import { Box, Button } from '@mui/material';
  import FileDownloadIcon from '@mui/icons-material/FileDownload';
  import {  datas, Proveedor } from '../services/makeData';
  const columnHelper = createMRTColumnHelper<Proveedor>()
  
  const columns = [
    /*columnHelper.accessor('estatus', {
      header: 'Estatus',
      size: 40,
    }),*///esto se agrega si se necesita el estatus

    columnHelper.accessor('id', {
      header: 'Id',
      size: 40,
    }),
    columnHelper.accessor('nombre', {
      header: 'Nombre',
      size: 40,
    }),
    columnHelper.accessor('razon_social', {
      header: 'Razon social',
      size: 120,
    }),
    columnHelper.accessor('direccion', {
      header: 'Direccion',
      size: 120,
    }),
    columnHelper.accessor('fecha', {
      header: 'Fecha',
      size: 300,
    }),
    columnHelper.accessor('usuario', {
      header: 'Usuario',
    })
    
  ];
const example2 = () =>{

  const [data, setData] = useState<Proveedor[]>([]);
  console.log("response_data" + data)
  useEffect(() =>{
cargaDatosProvedores();

  },[]);
const cargaDatosProvedores = async () =>{

  try{
    const provedoresData = await  datas();
    
    setData(provedoresData);
  } catch (error){
    console.error('Error al cargar los datos de proveedores:', error);

  }
  
}

    const table = useMaterialReactTable({
      columns,
      data,
      enableRowSelection: true,
      columnFilterDisplayMode: 'popover',
      paginationDisplayMode: 'pages',
      positionToolbarAlertBanner: 'bottom',
      renderTopToolbarCustomActions: ({ table }) => (
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            padding: '8px',
            flexWrap: 'wrap',
          }}
        >
          
          
         
        </Box>
      ),
    });
  
    return <MaterialReactTable table={table} />;
  };
  
  export default example2;
  