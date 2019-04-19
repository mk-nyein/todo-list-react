var React = require('react');
var createReactClass = require('create-react-class');
var List = require('./List.jsx');

var ListManager = createReactClass({
    getInitialState: function(){
        return {items: [], newItemText: ''};
    },
    handleSubmit: function(e){
        e.preventDefault();

        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ""});
    },
    onChange: function(e){
        this.setState({newItemText: e.target.value});
    },
    render: function(){
        var divStyle = {
            marginTop: 10
        }
        var panelStyle = {
            padding: 20
        }
        var headingStyle = {}
        if(this.props.headingColor){
            headingStyle.background = this.props.headingColor;
        }
        return (
            <div style={divStyle} >
                <div className="panel panel-primary">
                    <div style={panelStyle} style={headingStyle}  className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div style={panelStyle} className="panel-body">
                        <form onSubmit={this.handleSubmit} className="form-group">
                            <div className="row">
                                <div className="col-sm-8">
                                    <input onChange={this.onChange} value={this.state.newItemText} className="form-control"/>
                                </div>
                                <div className="col-sm-2">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <List items={this.state.items} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;