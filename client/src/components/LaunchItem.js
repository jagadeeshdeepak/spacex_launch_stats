// rcf tab for easily creating functional component using vscode plugin
import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

// remember the router is rendering to Launch component for /launch/:flight_number
// use Link to link the path to the component that it should render
// instead of a tag with href, Link and Route works hand in hand
export default function LaunchItem({ launch: {flight_number, mission_name, launch_date_local, launch_success } }) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: <span className= {classNames({
            'text-success': launch_success,
            'text-danger': !launch_success
          })}>{mission_name}</span></h4>
          <p>Date: <Moment format="YYYY-MM-DD HH-mm">{ launch_date_local }</Moment></p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Launch Details</Link>
        </div>
      </div>
    </div>
  )
}
