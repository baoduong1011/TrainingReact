import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () =>{
        alert('Hello CyberSoft FE54');
    }

    showInfo = (info) => {
        alert(info);
    }
    render() {
        const title = 'FE54';
        return (
            <div>
               <div className="container">
                    <h3>Handle Events</h3>
                    <button onClick={this.showMess}>CLICK</button>
                    {/* khi muốn click vào thì gọi thì không để dấu ngoặc (), khi để dấu ngoặc thì tự động gọi */}

                    <button onClick={() => {

                        alert(`hello ${title}`);
                    
                    }}>Click Now</button>


                    <button onClick={() => {

                        this.showInfo('Hello Info');
                    }}>
                        Show Info
                    </button>

                    <button onClick={this.showInfo.bind(this,'Hello Cách Info 2')}>Show Info Cách 2</button>
               </div>
            </div>
        )
    }
}
