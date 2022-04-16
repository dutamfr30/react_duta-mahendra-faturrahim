import Image from '../assets/img/ReactHookWeb.png';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";

export default function ReactHook() {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <h1>React Hook</h1>
            <p className="deskripsi">React Hook merupakan materi yang mempelajari tentang menggunakan state dan fitur pada ReactJS yang lain tanpa perlu menulis sebuah kelas. Pada materi ini, kami berlatih memanggil Hooks dari komponen fungsi React dan custom Hooks.</p>
            <div className="card container" style={{width: "55rem", alignItems: "center"}}>
                <img src={Image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <a href="/react-hook-index" className="btn btn-warning">Click Here To Go Website</a>
                </div>
            </div>
        </div>
        
    )
}