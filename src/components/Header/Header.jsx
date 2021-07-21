import logo from '../../assets/images/Pobeda_liveries.svg'
import classes  from './header.module.css'
export default function Header() {
    return (
        <div className={`container-fluid ${classes.wrapper} py-1 px-5`}>
            <div className="row">
                <div className="col-md-2 col-sm-6">
                    <img className={classes.brandImage} src={logo} alt=""/>
                </div>
                <div className="col-md-5 offset-md-5 justify-content-end">
                    <nav className={`${classes.navLinks} d-flex justify-content-end `}>
                        <a className={classes.navLinksItem} href="">Home</a>
                        <a className={classes.navLinksItem} href="">Rules</a>
                        <a className={classes.navLinksItem} href="">Staff</a>
                        <a className={classes.navLinksItem} href="">Pilots</a>
                        <a className={classes.navLinksItem} href="">Routes</a>
                        <a className={classes.navLinksItem} href="">Profile</a>
                    </nav>

                </div>
            </div>
        </div>
    )
}