import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import './Panel.css'
import { Icon } from '@iconify/react';
import calenderIcon from '@iconify/icons-uil/calender';


const Panel = (props) => {
    return (
        <div className="container">
            <div className="d-flex flex-row">
                <div className="col-md-4 mx-auto">
                    <div className="panel">                        
                        <label id="date-switch" className="switch">
                            <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate}/>
                            <span className="slider round"></span>
                        </label>
                        <label className="panel-switch-text" htmlFor="date-switch">
                        <Icon icon={calenderIcon} height="48px"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

Panel.defaultProps = {
    dateOn: true,
    toggleDate: () => {},
};

Panel.propTypes = {
    dateOn: PropTypes.bool,
    toggleDate: PropTypes.func
};

export default Panel;