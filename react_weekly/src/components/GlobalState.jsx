import Image from '../assets/img/GlobalStateWeb.png';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";

export default function EventHandling() {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <h1>Global State</h1>
            <p className="deskripsi">Event Handling merupakan materi yang mempelajari penanganan sebuah event/aksi yang diberikan oleh pengguna kepada suatu komponen dalam ReactJS. Pada materi ini, kami berlatih membuat event pada halaman web misalnya onChange, onSubmit, dan onClick. Selain itu, pada Event Handling juga mempelajari tentang State atau data private sebuah komponen yang dimana data ini hanya tersedia untuk komponen tersebut dan tidak bisa diakses dari komponen lain.</p>
            <div className="card container" style={{width: "55rem", alignItems: "center"}}>
                <img src={Image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <a href="/global-state-index" className="btn btn-warning">Click Here To Go Website</a>
                </div>
            </div>
        </div>
        
    )
}