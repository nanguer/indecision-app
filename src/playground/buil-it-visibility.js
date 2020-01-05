//Visibility Toggle - render, constructor, handleToggleVisibility
//visibility - false
   
        



class Visibility extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
            visibility: !prevState.visibility
            }
    });
};

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                <p>{ this.state.visibility && ('Here are some details') }</p>
                </div>
        )
    }

}

ReactDOM.render(<Visibility />, document.getElementById("app"));

