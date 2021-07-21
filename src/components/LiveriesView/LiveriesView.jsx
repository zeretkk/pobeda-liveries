import {xplane, fsx} from "./allLiveries";
import classes from './liveriesview.module.css'
import {NavLink} from "react-router-dom";
export default function LiveriesView(props) {
    console.log(props)
    return (
        <div>
            <div className={`container ${classes.wrapper}`}>
                <NavLink className={`${classes.backLink} mt-5`} to={'/liveries'}>Back</NavLink>
                    {props.match.params.sim==='xplane'?
                        <div className="row justify-content-center py-5">
                            <div className="col-md-5 py-5">
                                <div className={`${classes.planeHeading} px-3 py-1`}>
                                    <p>B737-800 Zibo</p>
                                </div>
                                {xplane.zibbo.map((e,i)=>{
                                        return (
                                            <div className={`${classes.planeInfo} px-3 py-1`}>
                                            <span className={classes.planeInfoReg}>
                                                <a rel='noreferrer' target='_blank' href={e.radar}>{e.reg}</a>
                                            </span>
                                                <span className={classes.planeInfoLink}>
                                                    {e.download!=='/'?<a rel='noreferrer' target='_blank' href={e.download}>Download</a>
                                                        :null
                                                    }
                                            </span>
                                            </div>
                                        )
                                })}

                            </div>
                            <div className="col-md-5 py-5">
                                <div className={`${classes.planeHeading} px-3 py-1`}>
                                    <p>A321 Toliss</p>
                                </div>
                                {xplane.tollis.map((e,i)=>{
                                        return (
                                            <div className={`${classes.planeInfo} px-3 py-1`}>
                                            <span className={classes.planeInfoReg}>
                                                <a rel='noreferrer' target='_blank' href={e.radar}>{e.reg}</a>
                                            </span>
                                                <span className={classes.planeInfoLink}>
                                                {e.download==='/'?null:
                                                    <a rel='noreferrer' target='_blank' href={e.download}>Download</a>}
                                            </span>
                                            </div>
                                        )
                                })}
                            </div>
                        </div>:null
                    }
                {props.match.params.sim === 'fsx'?
                    <div className="row justify-content-center py-5">
                        <div className="col-md-5 py-5">
                            <div className={`${classes.planeHeading} px-3 py-1`}>
                                <p>B737-800 PMDG</p>
                            </div>
                            {fsx.pmdg.map((e,i)=>{
                                return(
                                    <div className={`${classes.planeInfo} px-3 py-1`}>
                                        <span className={classes.planeInfoReg}>
                                            <a rel='noreferrer' target='_blank' href={e.radar}>{e.reg}</a>
                                        </span>
                                        <span className={classes.planeInfoLink}>
                                                {e.download==='/'?null:
                                                    <a rel='noreferrer' target='_blank' href={e.download}>Download</a>}
                                        </span>
                                    </div>
                                )
                            })}

                        </div>
                    </div>:null
                }
            </div>
        </div>
    )
}