import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ButtonDelete, ButtonDownload ,ButtonAction} from './StyledTable';
import {MdOutlineDeleteForever} from "react-icons/md"
import {AiOutlineDownload} from "react-icons/ai"

const rows = [
  { id: "21/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com" },
  { id: "22/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
  { id: "23/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
  { id: "24/10/2021", name: 'Aki International',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
  { id: "25/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"},
  { id: "26/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"},
  { id: "27/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com" },
  { id: "28/10/2021", name: 'FrancAkins Internationales',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
  { id: "29/10/2021", name: 'Akins International',company: "Akins Internation", Email: "akinInternation@gmail.com"  },
];

export default function DataTable(props) {
  const [selectionModel, setSelectionModel] = React.useState([]);
  console.log(selectionModel)
  return (
    <>
      <div style={{ height: 400, width: '100%', marginTop: 80 }}>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection.selectionModel);
        }}
        selectionModel={selectionModel}
        // {...data}
        />
        
      </div>
    </>
  );
}
