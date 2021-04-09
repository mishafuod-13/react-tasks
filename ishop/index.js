
var propsgoods = [
  { balance: 234,
    cost: 152,
    description: "Kорнеудалитель, сталь, 1.25 кг",
    name: "Корнеудалитель Fiskars 1020125",
    url: "https://content2.onliner.by/catalog/device/large/932266e190fd7af017ef90495dcd2ffd.jpeg",
  },
  { balance: 222,
    cost: 48,
    description: "Мачете/пила ручная, сталь",
    name: "Мачете Truper 15893",
    url: "https://content2.onliner.by/catalog/device/header/f84267fbbb752cb47ffce0d9d53bf82c.jpeg",
  },
  {
    balance: 523,
    cost: 13.8,
    description: "Мачете/пила ручная, сталь",
    name: "Мачете Truper 13098",
    url: "https://content2.onliner.by/catalog/device/header/7d1194a7c54bb3a8964cbf42e797828e.jpeg",
  },
  {
    balance: 58,
    cost: 13.34,
    description: "Корнеудалитель, сталь",
    name: "Корнеудалитель Центроинструмент 0456-6",
    url: "https://content2.onliner.by/catalog/device/header/14413df6f5a6a5e30c4f8ceb1c0561dc.jpeg",
  },
  {
    balance: 13,
    cost: 6.74,
    description: "Проволока для подвязки",
    name: "Проволока для подвязки Truper Bimbo 12322",
    url: "https://content2.onliner.by/catalog/device/header/5afec2b735fd6a06f8ce9ca9987cf8d2.jpeg",
  },
  {
    balance: 111,
    cost: 117.74,
    description: "Tопор, сталь, 1.1 кг",
    name: "Топор Fiskars 1015640",
    url: "https://content2.onliner.by/catalog/device/header/d22f4f293ef0df0eae6fca16252f53f3.jpeg",
  },
  {
    balance: 55,
    cost: 47.1,
    description: "лопата штыковая остроконечная, сталь, 1.96 кг",
    name: "Лопата штыковая остроконечная Fiskars 1026686",
    url: "https://content2.onliner.by/catalog/device/header/29bd89541c8443cb24f921b6c739e01d.jpeg",
  },
];

ReactDOM.render ( 
    React.createElement(Ishop, {shopname: "Ishop", goods: propsgoods }), 
    document.querySelector(".container"),
);