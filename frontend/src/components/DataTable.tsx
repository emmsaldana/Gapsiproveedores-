import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_Row,
    createMRTColumnHelper,
  } from 'material-react-table';
  import { Box, Button } from '@mui/material';
  import FileDownloadIcon from '@mui/icons-material/FileDownload';
  
  import { data, type Proveedor } from '../services/makeData';
  
  const columnHelper = createMRTColumnHelper<Proveedor>();
  
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
      header: 'Nomrbe',
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
    }),
    
  ];
  
  const Example = () => {
   
  
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
  
  export default Example;
  