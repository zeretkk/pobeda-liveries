import fsxLogo from "../../assets/images/FSX_b.webp";
import p3dLogo from "../../assets/images/P3D_b.webp";
import xpnlogo from "../../assets/images/Xplane_b.webp";
import {NavLink} from "react-router-dom";

export default function SimSelect() {
    return (
    <div className="container py-5">
        <div className="row row-cols-md-3 justify-content-between py-5">
            <div className="col-md py-5">
                <NavLink to={'/liveries/fsx'}>
                    <img src={fsxLogo} alt="" className="img-fluid"/>
                </NavLink>
            </div>
            <div className="col-md py-5">
                <NavLink to={'/liveries/p3d'}>
                    <img src={p3dLogo} alt="" className="img-fluid"/>
                </NavLink>
            </div>
            <div className="col-md py-5">
                <NavLink to={'/liveries/xplane'}>
                    <img src={xpnlogo} alt="" className="img-fluid"/>
                </NavLink>
            </div>
        </div>
    </div>
    )
}