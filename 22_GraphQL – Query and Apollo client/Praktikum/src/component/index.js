import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { useState } from 'react';
// import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';

const GetTodo = gql`
query MyQuery {
  daftar_pengunjung {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;
const GetTodoLazy = gql`
query MyQuery($id: Int) {
  daftar_pengunjung(where: {id: {_eq: $id}}) {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;

function App() {
  const {data: dataQuery, loading: loadingQuery, error } = useQuery(GetTodo);
  const [id, setId] = useState(1);
  const [getTodo, {data: dataLazy, loading: loadingLazy}] = useLazyQuery (GetTodoLazy);

  if (error) return <p>Error {console.error(error)}</p>;
  if (loadingQuery || loadingLazy)
  return (
    <p>
      Loading
    </p>
  )
  console.info(dataQuery)
  const onChangeLazy = (e) => {
    setId(e.target.value);
  };
  const onClickLazy = (e) => {
    getTodo({ variables: { id: id } });
    console.log("lazy id =", id);
  }
  console.log(id)
  return (
    <div>
      <Header />
      <ListPassenger 
        data={dataQuery}
      />
      <input onChange={onChangeLazy} type="text" placeholder="Masukkan Id Pengunjung..." style={{width: 220, margin: "10px 0px"}}></input>
      <button onClick={onClickLazy}>submit</button>
      {dataLazy?.daftar_pengunjung.map((daftar) => (
        <div>
          <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
            <thead bgcolor="red">
              <td>Nama</td>
              <td>Umur</td>
              <td>Jenis Kelamin</td>
              <td bgcolor="white" className="removeBorder"></td>
            </thead>
            <tr>
                <td>{daftar.nama}</td>
                <td>{daftar.umur}</td>
                <td>{daftar.jenis_kelamin}</td>
                <td className="removeBorder">
                <button>Hapus</button></td>
            </tr> 
          </table>
      </div>
      ))}
    </div>
  );
}

export default App;
