import logo from '../../assets/images/Pobeda_liveries.svg'
import classes  from './header.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useContext, useState} from "react";
import {mainContext} from "../../context";

function LangSwitcher(){
    const {lang, setLang} = useContext(mainContext)
    const switchlang =()=>{
        if(lang==='RU') {
            setLang('EN')
            return localStorage.setItem('lang', 'EN')
        }else {
            setLang('RU')
            return localStorage.setItem('lang', 'RU')
        }
    }
    return(
        <div onClick={()=>switchlang()} className={`switcher ${classes.langSwitcher}`}>
            <i className={`bi bi-globe2`}/>
        </div>

    )
}


function DropDown() {
    // const {lang, setLang} = useContext(mainContext)
    const [vis, setvis] = useState(false)
    const {lang} = useContext(mainContext)

    return(
        <div className={classes.dropdown}>
            <div className={classes.dropdownIcon} onClick={()=>{setvis(!vis)}}><FontAwesomeIcon icon={faBars}/></div>
            <nav style={{display:vis?"block":"none"}} className={`${classes.dropdownLinks}`}>
                <NavLink className={`${classes.dropdownLinksItem}`} to="/home">    {lang==='RU'?"Главная":"Home"}     </NavLink>
                <NavLink className={`${classes.dropdownLinksItem}`} to="/rules">   {lang==='RU'?'Правила':'Rules'}    </NavLink>
                <NavLink className={`${classes.dropdownLinksItem}`} to="/staff">   {lang==='RU'?'Руководство':'Staff'}</NavLink>
                <NavLink className={`${classes.dropdownLinksItem}`} to="/pilots">  {lang==='RU'?'Пилоты':'Pilots'}    </NavLink>
                <NavLink className={`${classes.dropdownLinksItem}`} to="/routes">  {lang==='RU'?'Маршруты':'Routes'}  </NavLink>
                <NavLink className={`${classes.dropdownLinksItem}`} to="/liveries">{lang==='RU'?'Ливреи':'Liveries'}  </NavLink>
            </nav>
        </div>
    )

}
export default function Header() {
    const {lang} = useContext(mainContext)
    return (
        <div className={`container-fluid ${classes.wrapper} py-1 px-5`}>
            <div className="row">
                <div className="col">
                    <NavLink to ={'/liveries'}>
                        <img className={classes.brandImage} src={logo} alt=""/>
                    </NavLink>
                </div>
                <div className="col">
                    <DropDown/>
                    <nav className={`${classes.navLinks} d-flex justify-content-end `}>
                        <NavLink className={`${classes.navLinksItem}`} to="/home">  {lang==='RU'?"Главная":"Home"}     </NavLink>
                        <NavLink className={`${classes.navLinksItem}`} to="/rules"> {lang==='RU'?'Правила':'Rules'}    </NavLink>
                        <NavLink className={`${classes.navLinksItem}`} to="/staff"> {lang==='RU'?'Руководство':'Staff'} </NavLink>
                        <NavLink className={`${classes.navLinksItem}`} to="/pilots">{lang==='RU'?'Пилоты':'Pilots'}     </NavLink>
                        <NavLink className={`${classes.navLinksItem}`} to="/routes">{lang==='RU'?'Маршруты':'Routes'}   </NavLink>
                        <NavLink className={`${classes.navLinksItem}`} to="/liveries">{lang==='RU'?'Ливреи':'Liveries'}   </NavLink>
                        <LangSwitcher/>
                    </nav>

                </div>
            </div>
        </div>
    )
}