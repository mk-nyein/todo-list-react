var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');

var ingredients = [{'id': 1, 'text': 'Learn React'}, {'id': 2, 'text': 'Learn Angular'}];
var List = createReactClass({
    render: function(){
        var listItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text} />;
        });
        
        return (
            <ul>{listItems}</ul>
        );
    }
});

module.exports = List;
