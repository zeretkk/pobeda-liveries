import {useContext} from "react";
import {mainContext} from "../../context";

export default function NFpage() {
    const {lang} = useContext(mainContext)
    return (
                <div className="row justify-content-center py-5">
                    <div className="col py-5 text-light">
                        <p className="fs-1 text-center py-5">{lang==='RU'?'Данный раздел находиться в разработке'
                                                             :'Work in progress'}</p>
                    </div>
                </div>
    )
}