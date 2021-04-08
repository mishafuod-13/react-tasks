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
      var res = [];

      const lineCell = (item, key) => { 
        res.push (React.DOM.tr ( {className: "Ishop__line", key: item.code},
          (Object.entries(item)).map( it => React.DOM.td ({className: "Ishop__cell", key: it.code}, it[key]),),
          ),
        )
      };

      const buildCell = (arr, key) => arr.forEach((item) => { // call function linecell for each elements in array 
        lineCell(item, key);
      });

        lineCell (this.props.goods[0], 0); //first line in table
        buildCell (this.props.goods, 1); // other lines
      
      return React.DOM.div({className:'Ishop'}, 
        React.DOM.table ({className: "Ishop__table"},
        React.DOM.caption({className: "Ishop__header"} , this.props.shopname ),
        res,
        )
      );
    },
  });