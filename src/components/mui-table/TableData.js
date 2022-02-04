import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ButtonDelete, ButtonDownload ,ButtonAction} from './StyledTable';
import {MdOutlineDeleteForever} from "react-icons/md"
import {AiOutlineDownload} from "react-icons/ai"

const columns = [
  { field: 'id', headerName: 'Date', flex: 1 },
  { field: 'name', headerName: 'Name',flex: 1 },
  { field: 'company', headerName: 'Company name', flex: 1 },

  {
    field: 'Email',
    headerName: 'Email',
    flex: 1,
  },
];

const rows = [
  { id: "24/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com" },
  { id: "24/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
  { id: "24/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
  { id: "24/10/2021", name: 'Aki International',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
  { id: "24/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"},
  { id: "24/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"},
  { id: "24/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com" },
  { id: "24/10/2021", name: 'FrancAkins Internationales',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
  { id: "24/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
];

export default function DataTable() {
  return (
    <>
    
    
    <div style={{ height: 400, width: '100%', marginTop: 80 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <ButtonAction>
        <ButtonDelete>
          <MdOutlineDeleteForever/>
          <span>Delete</span>
        </ButtonDelete>
        <ButtonDownload>
          <AiOutlineDownload/>
          <span>Download</span>
        </ButtonDownload>
    </ButtonAction>
    </div>
    </>
  );
}
