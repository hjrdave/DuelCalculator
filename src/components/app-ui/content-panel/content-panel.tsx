import React from 'react';
import {Link} from 'react-router-dom';
import './_content-panel.scss';

interface Props {
    half?: boolean,
    header?: string,
    actions?: {
        link: string,
        icon: JSX.Element,
        color: 'red' | 'yellow' | 'blue' | 'green'
    }[],
    children: JSX.Element[] | JSX.Element
}

function ContentPanel(props: Props){
    //props variables
    const half = props.half;
    const header = props.header;
    const actions = props.actions;

    //handler functions
    const handleHeader = () => {
        let iconColor = (value: string) => {
            switch(value){
                case 'red': {
                    return 'text-danger';
                }
                case 'yellow': {
                    return 'text-warning';
                }
                case 'blue': {
                    return 'text-info';
                }
                case 'green': {
                    return 'text-success';
                }
                default: {
                    return null;
                }
            }
        }
        return(
            (header) ? 
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">{header}</h5>
                {
                    (actions) ?
                    <div className="d-flex">
                        {
                            actions.map(data => 
                                <p className={`mb-0 px-2 ${iconColor(data.color)}`}><Link to={data.link}>{data.icon}</Link></p>
                            )
                        }
                    </div> :
                    null
                }
            </div> :
            null
        )
    }
    

    return(
        <div className={`content-panel ${(half) ? 'col-6 pt-3' : 'col-12 pt-3'}`}>
            <div className='content-panel-container' style={{height: 100 + '%'}}>
                {handleHeader()}
                <div className="card-body" style={{height: 100 + '%'}}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ContentPanel;