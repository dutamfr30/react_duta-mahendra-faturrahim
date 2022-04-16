import Image from '../assets/img/ReactRoutingWeb.png';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";

export default function ReactRouting() {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <h1>React Routing</h1>
            <p className="deskripsi">React Routing merupakan materi yang mempelajari tentang routing pada ReactJS. Pada materi ini, kami berlatih melakukan routing atau proses navigasi pada SPA(Single Page Aplication).</p>
            <div className="card container" style={{width: "55rem", alignItems: "center"}}>
                <img src={Image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <a href="/react-routing-index" className="btn btn-warning">Click Here To Go Website</a>
                </div>
            </div>
        </div>
        
    )
}