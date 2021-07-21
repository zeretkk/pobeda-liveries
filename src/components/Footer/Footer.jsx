import classes from './footer.module.css'
import {Link as ScrollLink} from 'react-scroll'
import {useContext} from "react";
import {mainContext} from "../../context";
export default function Footer() {
    const {lang} = useContext(mainContext)
    return (
        <footer className={`container-fluid ${classes.wrapper} text-light py-1`}>
            <div className="row justify-content-between">
                <div className="col">
                    <span>&copy;2021 <a className={classes.copyLink} href="https://pbd-va.ru/">VA Pobeda</a></span>
                </div>
                <div className="col text-end"><ScrollLink className={'toTop'} to={'top'} smooth={true} duration={500} isDynamic={true}
                >{lang==='RU'?'Вверх':'Back To Top'} <i className="bi bi-arrow-up"></i></ScrollLink></div>
            </div>
        </footer>
    )
}