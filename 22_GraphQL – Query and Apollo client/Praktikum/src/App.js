import './App.css';
import Home from './component/Home';
import { gql, useQuery, useLazyQuery } from "@apollo/client";

const GetTodo = gql`
query MyQuery {
  anggota {
    id
    nama
  }
}
`;

function App() {
  const {data: dataQuery, loading, error } = useQuery(GetTodo);
  if (error) return <p>Error {console.error(error)}</p>;
  if (loading)
  return (
    <p>
      Loading
    </p>
  )
  console.info(dataQuery)
  return (
    <div className="App">
      <Home />
      {dataQuery.anggota.map((todo) => (
        <h3>{todo.id}</h3>
      ))}
    </div>
  );
}

export default App;
