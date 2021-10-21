import classes from './footer.module.css'
import {Link as ScrollLink} from 'react-scroll'
import {useContext} from "react";
import {mainContext} from "../../context";
import {Col, Container, Row} from "react-bootstrap";
export default function Footer() {
    const {lang} = useContext(mainContext)
    return (
        <footer className={`footer ${classes.wrapper}`}>
            <Container fluid className={`text-light py-1`}>
                <Row className="justify-content-between">
                    <Col>
                        <span>&copy;2021 <a className={classes.copyLink} href="https://pbd-va.ru/">VA Pobeda</a></span>
                    </Col>
                    <Col className="text-end"><ScrollLink className={'toTop'} to={'top'} smooth={true} duration={500} isDynamic={true}
                    >{lang==='RU'?'Вверх':'Back To Top'} <i className="bi bi-arrow-up"/></ScrollLink></Col>
                </Row>
            </Container>
        </footer>
    )
}