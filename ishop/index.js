
var propsName = ["name", "cost", "url", "description", "balance" ];
var propsVal = [
    ["Корнеудалитель Fiskars 1020125", 152, "https://content2.onliner.by/catalog/device/large/932266e190fd7af017ef90495dcd2ffd.jpeg", "Kорнеудалитель, сталь, 1.25 кг", 234 ],
    ["Мачете Truper 15893", 48, "https://content2.onliner.by/catalog/device/header/f84267fbbb752cb47ffce0d9d53bf82c.jpeg", "Мачете/пила ручная, сталь", 222],
    ["Мачете Truper 13098", 13.80 , "https://content2.onliner.by/catalog/device/header/7d1194a7c54bb3a8964cbf42e797828e.jpeg", "Мачете/пила ручная, сталь", 523],
    ["Корнеудалитель Центроинструмент 0456-6", 13.34, "https://content2.onliner.by/catalog/device/header/14413df6f5a6a5e30c4f8ceb1c0561dc.jpeg", "Корнеудалитель, сталь", 58],
    ["Проволока для подвязки Truper Bimbo 12322", 6.74, "https://content2.onliner.by/catalog/device/header/5afec2b735fd6a06f8ce9ca9987cf8d2.jpeg", "Проволока для подвязки", 13],
    ["Топор Fiskars 1015640", 117.74, "https://content2.onliner.by/catalog/device/header/d22f4f293ef0df0eae6fca16252f53f3.jpeg", "Tопор, сталь, 1.1 кг", 111],
    ["Лопата штыковая остроконечная Fiskars 1026686", 47.10, "https://content2.onliner.by/catalog/device/header/29bd89541c8443cb24f921b6c739e01d.jpeg", "лопата штыковая остроконечная, сталь, 1.96 кг", 55]
]

var propsGoods = propsVal.map ((val) => {
  let res = {};
    propsName.forEach((it,ind) => {
    res[it] = val[ind]
    });
  return res;
  }
);

ReactDOM.render ( 
    React.createElement(Ishop, {shopname: "Ishop", goods: propsGoods }), 
    document.querySelector(".container"),
);