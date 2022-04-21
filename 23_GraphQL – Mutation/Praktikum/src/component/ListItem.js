import "./Home.css"
const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data
    

    return (
        <tr>
            <td>{id}</td>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenis_kelamin}</td>
            <td className="removeBorder" onClick={() => props.delete(id)}><button>Hapus</button></td>
            <td className="removeBorder" ><input type="text" onChange={props.update} placeholder="Ubah Id Pengunjung..."></input>
            <button onClick= {() => props.updateButton(props.data.id)}>Edit</button></td>

        </tr>
    )
}

export default ListItem;