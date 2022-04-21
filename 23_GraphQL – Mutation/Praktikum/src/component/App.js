import React, { useState } from "react";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import LoadingSvg from "components/LoadingSvg";

const GetTodo = gql`
  query MyQuery {
    todolist {
      id
      is_done
      title
      user_id
    }
  }
`;
const GetTodoLazy = gql`
  query MyQuery($id: Int) {
    todolist(where: { id: { _eq: $id } }) {
      id
      is_done
      title
      user_id
    }
  }
`;
const InsertTodos = gql`
  mutation InsertTodos($is_done: Boolean, $title: String, $user_id: Int) {
    insert_todolist(
      objects: { is_done: $is_done, title: $title, user_id: $user_id }
    ) {
      affected_rows
    }
  }
`;

const DeleteTodos = gql`
  mutation Delete($id: Int) {
    delete_todolist(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
        is_done
        title
        user_id
      }
    }
  }
`;
const updateTodos = gql`
  mutation MyMutation($_eq: Int, $id: Int) {
    update_todolist(where: { id: { _eq: $_eq } }, _set: { id: $id }) {
      affected_rows
      returning {
        id
        is_done
        title
        user_id
      }
    }
  }
`;

export default function App() {
  const { data: dataQuery, loading: loadingQuery } = useQuery(GetTodo);
  const [id, setId] = useState(1);
  const [idDelete, setIdDelete] = useState(1);
  const [idUpdate, setIdUpdate] = useState(1);
  const [dataTodos, setDataTodos] = useState("");
  const [getTodo, { data: dataLazy, loading: loadingLazy }] =
    useLazyQuery(GetTodoLazy);
  const [insertTodo, { loading: loadingisert }] = useMutation(InsertTodos, {
    refetchQueries: [GetTodo],
  });
  const [deleteTodo, { loading: loadingDelete }] = useMutation(DeleteTodos, {
    refetchQueries: [GetTodo],
  });
  const [updateTodo, { loading: loadingUpdate }] = useMutation(updateTodos, {
    refetchQueries: [GetTodo],
  });

  if (loadingLazy || loadingisert)
    return (
      <p>
        <LoadingSvg />
      </p>
    );
  console.info(dataQuery);
  const onChangeLazy = (e) => {
    setId(e.target.value);
  };
  const onClickLazy = () => {
    getTodo({ variables: { id: id } });
    console.log("lazy id = ", id);
  };
  const handleTodoChange = (e) => {
    setDataTodos(e.target.value);
    console.log("dataTodos = ", dataTodos);
  };
  const handleTodoSubmit = () => {
    insertTodo({ variables: { is_done: false, title: dataTodos, user_id: 2 } });
  };
  const handleChangeDelete = (e) => {
    setIdDelete(e.target.value);
  };
  const handleTodoDelete = (e) => {
    console.log(e);
    // deleteTodo({ variables: { id: idDelete } });
  };
  return (
    <div>
      App
      {dataQuery?.todolist.map((todo) => (
        <>
          <h3>{todo.id}</h3>
          <button
            onClick={() => {
              deleteTodo({ variables: { id: todo.id } });
            }}
          >
            Delete
          </button>
          <input
            onChange={(e) => {
              setIdUpdate(e.target.value);
            }}
            type="text"
            placeholder="input Update"
          ></input>
          <button
            onClick={() => {
              updateTodo({ variables: { _eq: todo.id, id: idUpdate } });
            }}
          >
            Update
          </button>

          <h3>{"==================================="}</h3>
        </>
      ))}
      <input onChange={onChangeLazy} type="text"></input>
      <button onClick={onClickLazy}>search</button>
      {dataLazy?.todolist.map((todo) => (
        <>
          <h3>id : </h3>
          <h3>{todo.id}</h3>
          <h3>{todo.title}</h3>
          <h3>{todo.is_done}</h3>
        </>
      ))}
      <input
        onChange={handleTodoChange}
        type="text"
        placeholder="input todos"
      ></input>
      <button onClick={handleTodoSubmit}>Submit</button>
      <input
        onChange={handleChangeDelete}
        type="text"
        placeholder="input Delete"
      ></input>
      <button onClick={handleTodoDelete}>Delete</button>
    </div>
  );
}
