import Image from '../assets/img/ReactFundamentalWeb.png';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";

export default function ReactFundamental() {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <h1>React Fundamental</h1>
            <p className="deskripsi">React Fundamental merupakan materi yang mempelajari dasar-dasar pada ReactJS. Pada materi ini, kami berlatih membuat komponen, pengkondisian, struktur direktori, dan styling pada React.</p>
            <div className="card container" style={{width: "55rem", alignItems: "center"}}>
                <img src={Image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <a href="/react-fundamental-index" className="btn btn-warning">Click Here To Go Website</a>
                </div>
            </div>
        </div>
        
    )
}