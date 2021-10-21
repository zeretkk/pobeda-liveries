import fsxLogo from "../../assets/images/FSX_b.webp";
import p3dLogo from "../../assets/images/P3D_b.webp";
import xpnlogo from "../../assets/images/Xplane_b.webp";
import {NavLink} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
export default function SimSelect() {
    return (
    <Container py={'5'}>
        <Row md={'3'} className="justify-content-between py-5">
            <Col md className={'py-5'}>
                <NavLink to={'/liveries/fsx'}>
                    <img src={fsxLogo} alt="" className="img-fluid"/>
                </NavLink>
            </Col>
            <Col md className="py-5">
                <NavLink to={'/liveries/p3d'}>
                    <img src={p3dLogo} alt="" className="img-fluid"/>
                </NavLink>
            </Col>
            <Col md className="py-5">
                <NavLink to={'/liveries/xplane'}>
                    <img src={xpnlogo} alt="" className="img-fluid"/>
                </NavLink>
            </Col>
        </Row>
    </Container>
    )
}