import Image from '../assets/img/IntroductionReactWeb.png';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";

export default function IntroductionReact() {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <h1>Introduction React</h1>
            <p className="deskripsi">Introduction React merupakan tahap awal dalam mempelajari ReactJS. Pada materi ini, kami berlatih mengubah script file HTML ke dalam React hingga dapat menampilkan halaman yang sama persis dengan halaman yang dibuat menggunakan HTML. </p>
            <div className="card container d-flex justify-content-center col-sm-12" style={{width: "55rem", alignItems: "center"}}>
                <img src={Image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <a href="/introduction-react-index" className="btn btn-warning">Click Here To Go Website</a>
                </div>
            </div>
        </div>
        
    )
}