var Ishop = React.createClass({

    displayName: 'Ishop',

    propTypes: {
      shopname: React.PropTypes.string.isRequired,
      goods: React.PropTypes.arrayOf (
        React.PropTypes.shape ({
          name: React.PropTypes.string.isRequired,
          cost: React.PropTypes.number.isRequired,
          url: React.PropTypes.string.isRequired,
          description: React.PropTypes.string.isRequired,
          balance : React.PropTypes.number.isRequired,
        })
      )
    },
  
    render: function() {
     console.log (this.props) 
      
  
      return React.DOM.div({className:'Ishop'}, 
        React.DOM.h1({className: "Ishop__header"} , this.props.shopname ),
        React.DOM.table ({className: "Ishop__table"}, )
      );
    },
  
  });