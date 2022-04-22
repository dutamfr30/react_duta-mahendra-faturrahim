import ListItem from './ListItem';
const ListPassenger = props => {
    
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Id</td>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {props.dataSubscription.daftar_pengunjung.map((item) => (
                    <ListItem
                        key={item.id}
                        data={item}
                        delete = {props.delete}
                        update = {props.update}
                        updateButton = {props.updateButton}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;