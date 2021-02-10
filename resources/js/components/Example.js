import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card text-center">
                    <div className="card-header"><h2>React Component in Laravel</h2></div>
                    <div className="card-body">I'm tiny React component in Laravel app!</div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('campaign-list')) {
    ReactDOM.render(<Example />, document.getElementById('campaign-list'));
}
