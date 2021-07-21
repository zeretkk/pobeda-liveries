
import SimSelect from "../components/SimSelector/SimSelect";
import {Route} from "react-router-dom";
import LiveriesView from "../components/LiveriesView/LiveriesView";

export default function LiveryLayout() {
    return (
        <div>
            <div className={`container-fluid py-5`}>
                <Route exact path={'/liveries'}>
                    <SimSelect/>
                </Route>
                <Route exact path={'/liveries/:sim'} component={LiveriesView}/>
            </div>

        </div>
    )
}