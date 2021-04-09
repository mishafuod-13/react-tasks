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

      const buildCell = (arr) => arr.map((it, ind) => {
      return  React.DOM.tr ({className: "Ishop__line", key: ind},
                React.DOM.td ({className: "Ishop__cell",key:ind+it.name}, it.name),
                React.DOM.td ({className: "Ishop__cell",key: ind+it.cost}, it.cost),
                React.DOM.td ({className: "Ishop__cell",key: ind+it.url}, it.url),
                React.DOM.td ({className: "Ishop__cell", key: ind+it.description}, it.description),
                React.DOM.td ({className: "Ishop__cell",key: ind+it.balance}, it.balance),
              );
      });

      return React.DOM.div({className:'Ishop'}, 
        React.DOM.table ({className: "Ishop__table"},
          React.DOM.caption({className: "Ishop__header"} , this.props.shopname ),
          React.DOM.tbody ({className: "Ishop__table"}, buildCell (this.props.goods)),
        )
      );
    },
});