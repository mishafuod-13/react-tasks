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

      const lineBuild = (obj, classname, key) => (Object.entries(obj)).map (item =>  // returns an item "th", key is array index (0 - key in object, 1 - value)
        React.DOM.td ({className: classname, key: item.code}, item[key]),
      );

      const lineCell = (item, res, key, classname) => {                          //returns an item "tr", call function linebuild
        let line = lineBuild(item, classname, key);
        res.push (React.DOM.tr({className: "Ishop__line", key: item.code},
          line,
          )
        )
      };

      const buildCell = (arr,res, key, classname) => arr.forEach((item) => { // call function linecell for each elements in array 
        lineCell(item, res, key, classname);
      });

      var res = [];
        lineCell (this.props.goods[0], res, 0, "Ishop__cell"); //first line in table
        buildCell (this.props.goods, res, 1, "Ishop__cell"); // other lines
      
      return React.DOM.div({className:'Ishop'}, 
        React.DOM.h1({className: "Ishop__header"} , this.props.shopname ),
        React.DOM.table ({className: "Ishop__table"}, res )
      );
    },
  });