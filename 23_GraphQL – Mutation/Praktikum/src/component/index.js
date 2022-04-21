import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { useState } from 'react';
import ListPassenger from './ListPassenger';
import Header from './Header';

const GetPengunjung = gql`
query MyQuery {
  daftar_pengunjung {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;
const GetPengunjungLazy = gql`
query MyQuery($id: Int) {
  daftar_pengunjung(where: {id: {_eq: $id}}) {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;
const InsertPengunjung = gql`
mutation InsertPengunjung($jenis_kelamin: String, $nama: String, $umur: Int) {
  insert_daftar_pengunjung(objects: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
    affected_rows
  }
}
`;
const DeletePengunjung = gql`
mutation DeletePengunjung($id: Int) {
  delete_daftar_pengunjung(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      id
      jenis_kelamin
      nama
      umur
    }
  }
}
`;
const UpdatePengunjung = gql`
mutation MyMutation($_eq: Int, $id: Int) {
  update_daftar_pengunjung(where: {id: {_eq: $_eq}}, _set: {id: $id}) {
    affected_rows
    returning {
      id
      jenis_kelamin
      nama
      umur
    }
  }
}
`;

function App() {
  const {data: dataQuery, loading: loadingQuery, error } = useQuery(GetPengunjung);
  const [id, setId] = useState(1);
  const [idDelete, setIdDelete] = useState(1);
  const [idUpdate, setIdUpdate] = useState(1);
  const [dataPengunjung, setDataPengunjung] = useState({
    nama: "",
    umur: "",
    jenis_kelamin: "Pria",
    editing: true,
  });
  const [getPengunjung, {data: dataLazy, loading: loadingLazy}] = useLazyQuery (GetPengunjungLazy);
  const [insertPengunjung, { loading: loadingInsert }] = useMutation(InsertPengunjung, {
    refetchQueries: [GetPengunjung],
  });
  const [deletePengunjung, { loading: loadingDelete }] = useMutation(DeletePengunjung, {
    refetchQueries: [GetPengunjung],
  });
  const [updatePengunjung, { loading: loadingUpdate }] = useMutation(UpdatePengunjung, {
    refetchQueries: [GetPengunjung],
  });

  if (error) return <p>Error {console.error(error)}</p>;
  if (loadingQuery)
  return (
    <p>
      Loading
    </p>
  )
  if (loadingLazy || loadingInsert)
  return (
    <p>
      Loading
    </p>
  )
  // console.info(dataQuery)
  const onChangeLazy = (e) => {
    setId(e.target.value);
  };
  const onClickLazy = () => {
    getPengunjung({ variables: { id: id } });
    // console.log("lazy id =", id);
  };
  const handleChangePengunjung = (e) => {
    setDataPengunjung({
      ...dataPengunjung,
      [e.target.name]: e.target.value,
    })
  };
  const handleSubmitPengunjung = () => {
    if (dataPengunjung.nama.trim() && dataPengunjung.umur && dataPengunjung.jenis_kelamin) {
      const umur = dataPengunjung.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        const newData = {
          nama: dataPengunjung.nama,
          umur: dataPengunjung.umur,
          jenis_kelamin: dataPengunjung.jenis_kelamin,
        }
        insertPengunjung({ variables: newData})
        setDataPengunjung({
          ...dataPengunjung,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        })
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  };
  const handleDelete = (id) => {
    if (id) {
      deletePengunjung({ variables: { id: id }
      });
      setIdDelete("");
    } else {
      alert("Pilih data yang akan dihapus")
    }
  };
  const update = (e) => {
    setIdUpdate(e.target.value);
  };
  const handleUpdate = (id) => {
    if (id) {
      updatePengunjung({ variables: { _eq: id, id: idUpdate }
      });
      setIdUpdate("");
    } else {
      alert("Pilih data yang akan diupdate")
    }
  }; 
  const handleBukaInput = () => {
    setDataPengunjung({
      ...dataPengunjung,
      editing: false,
    })
  };
  const handleTutupInput = () => {
    setDataPengunjung({
      ...dataPengunjung,
      editing: true,
    })
  };
  let viewMode = {}
  let editMode = {}

  if (dataPengunjung.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }
  return (
    <div>
      <Header />
      <ListPassenger 
        data={dataQuery}
        delete = {handleDelete}
        update = {update}
        updateButton = {handleUpdate}
        dataPengunjung = {dataPengunjung}
      />
      <div>
      <h2>Tambah Pengunjung</h2>
      <div onSubmit={handleSubmitPengunjung} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={dataPengunjung.nama} name="nama" onChange={handleChangePengunjung} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={dataPengunjung.umur} name="umur" onChange={handleChangePengunjung} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={handleChangePengunjung} name="jenis_kelamin">
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmitPengunjung}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button style={editMode} onClick={handleBukaInput}>
        Masukkan Nama Pengunjung
      </button>
      </div>
      <h2>Cari Id Pengunjung</h2>
      <input onChange={onChangeLazy} type="text" placeholder="Masukkan Id Pengunjung..." style={{width: 220, margin: "10px 0px"}} required></input>
      <button onClick={onClickLazy}>Cari</button>
      {dataLazy?.daftar_pengunjung.map((daftar) => (
      <div>
        <table cellPadding="5px" cellSpacing="0"style={{margin: "auto"}}>
          <thead bgcolor="red">
            <td>Id</td>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor="white"className="removeBorder"></td>
            <td bgcolor="white"className="removeBorder"></td>
          </thead>
          <tr>
              <td>{daftar.id}</td>
              <td>{daftar.nama}</td>
              <td>{daftar.umur}</td>
              <td>{daftar.jenis_kelamin}</td>
              <td className="removeBorder">
                <button onClick={() => handleDelete(daftar.id)}>Hapus</button>
              </td>
              <td className="removeBorder">
                <input onChange={update} type="text" placeholder="Ubah Id Pengunjung..." style={{width: 167}} required></input>
                <button onClick={() => handleUpdate(daftar.id)}>Edit</button>
              </td>
          </tr> 
        </table>
      </div>
      ))}
    </div>
  );
}

export default App;
