import Image from '../assets/img/ReactFormWeb.png';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";

export default function ReactForm() {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <h1>React Form</h1>
            <p className="deskripsi">React Form merupakan materi yang mempelajari tentang membuat form dalam ReactJS. Pada materi ini, kami berlatih melakukan penanganan pada inputan, validasi inputan, dan membuat submit pada form.</p>
            <div className="card container" style={{width: "55rem", alignItems: "center"}}>
                <img src={Image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <a href="/react-form-index" className="btn btn-warning">Click Here To Go Website</a>
                </div>
            </div>
        </div>
        
    )
}