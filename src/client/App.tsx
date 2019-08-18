import * as React from 'react';
import './scss/app';
import employees from '../server/db/employees';

class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            employees:[]
        };
    }

    async componentWillMount() {
    
            let r = await fetch('/api/employees');
            let employees = await r.json();
            this.setState({ employees });
        }
    render() {
        return (
            <main className="container">
                <h1 className="covalence-blue">My Employees </h1>
                <ul className="list-group">
                {this.state.employees.map(employee=>{

                return <li className="list-group-item"> {employee.name} <br></br> {employee.location}</li>           
                })}
              
            
               </ul>       
           
            </main>
        )
    }
}

export interface IAppProps { }

export interface IAppState {
    employees: Array<{name: string,location:string}>;
}

export default App;