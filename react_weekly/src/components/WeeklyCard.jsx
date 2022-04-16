

export default function WeeklyCard ({weekly}) {

return (
    <div className="col-lg-4">
        <div className="card container d-flex justify-content-center mb-3 border-3 col-lg-11 col-md-10 col-sm-10" >
            <img src={weekly.img} className="card-img-top" alt=""/>
            <div className="card-body">
                <a href={weekly.href} className="btn btn-warning">{weekly.btn}</a>
            </div>
        </div>
    </div>
)
}