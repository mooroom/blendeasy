import donghae from "../img/product_donghae.png";
import mojito from "../img/product_mojito.png";
import sunrise from "../img/product_sunrise.png";
import moscow from "../img/product_moscow.png";
import martini from "../img/product_martini.png";
import whitelady from "../img/product_whitelady.png";
import nonalcohol from "../img/product_nonalcohol.png";

import donghae2 from "../img/mobile_donghae.png";
import mojito2 from "../img/mobile_mojito.png";
import sunrise2 from "../img/mobile_sunrise.png";
import moscow2 from "../img/mobile_moscow.png";
import martini2 from "../img/mobile_martini.png";
import whitelady2 from "../img/mobile_whitelady.png";
import nonalcohol2 from "../img/mobile_nonalcohol.png";

const getABV = (value) => `주류도수 / ${value}`;
const getRecipe = (value) => `원액 + 주류 ${value / 30}oz(${value}ml)`;

const products = [
  {
    id: 1,
    img: donghae,
    img2: donghae2,
    name: "동해",
    ename: "Donghae",
    alias: "donghae",
    price: "6900원",
    best: true,
    color: "#1A4475",
    info: {
      abv: getABV(3),
      rcmndBase: "소주, 럼, 럼팟",
      recipe: getRecipe(45),
    },
    story:
      "동해는 푸르고 깊은 동해를 표현한 칵테일 입니다. 우리나라의 동해, 그 레시피의 원조는 잘 알려져 있지 않습니다. 그럼에도 불구하고 달달하면서 청량한 동해의 맛은 많은 사람에게 사랑받고 있습니다.",
  },
  {
    id: 2,
    img: mojito,
    img2: mojito2,
    name: "모히토",
    ename: "Mojito",
    alias: "mojito",
    price: "6900원",
    best: false,
    color: "#73a039",
    info: {
      abv: getABV(3),
      rcmndBase: "소주, 보드카, 럼팟",
      recipe: getRecipe(30),
    },
    story:
      '모히토라는 이름은 마법의 부적이라는 의미의 스페인어 MOJO에서 유래했습니다. 모히토는 작가 어니스트 헤밍웨이가 좋아한 칵테일로 유명합니다. 헤밍웨이는 "나의 모히토는 라 보데기타 델 메디오(La Bodeuita del Medio)에 있다"는 말을 남겨, 이곳은 유명지가 되었다고합니다. 모히토를 마시면 쿠바의 정취를 함께 느낄 수 있습니다.',
  },
  {
    id: 3,
    img: sunrise,
    img2: sunrise2,
    name: "선라이즈",
    ename: "Sunrise",
    alias: "sunrise",
    price: "6900원",
    best: false,
    color: "#bf422a",
    info: {
      abv: getABV(3),
      rcmndBase: "소주, 데킬라, 보드카",
      recipe: getRecipe(45),
    },
    story:
      "선라이즈는 아름다운 멕시코의 일출을 표현한 칵테일로 1960년대에 만들어졌습니다. 1972년, 당대 대중음악을 휩쓸던 롤링스톤즈의 보컬 믹 재거가 투어에서 멕시코의 일출을 맛 보았습니다. 선라이즈에 푹 빠진 맥 지거는 뉴욕에 이 칵테일을 널리 알렸고, 선라이즈는 지금 여러분의 곁에 찾아왔습니다.",
  },
  {
    id: 4,
    img: moscow,
    img2: moscow2,
    name: "모스코뮬",
    ename: "Moscow mule",
    alias: "moscow",
    price: "6900원",
    best: false,
    color: "#5c5342",
    info: {
      abv: getABV(3),
      rcmndBase: "소주, 럼, 데킬라, 보드카",
      recipe: getRecipe(45),
    },
    story:
      "미국의 광산에서 개발된 모스코뮬은 광산에 어울리는 구리잔에 나가는 것이 일반적입니다. 칵테일을 서빙하기 위해 산 머그잔에 노새 그림이 있어서 모스크바의 노새, 즉 모스코 뮬이라고 불렸다고 하는데, 보드카 대신 럼을 넣으면 다크앤스토미, 데킬라를 넣으면 멕시칸뮬이라고 불립니다.",
  },
  {
    id: 5,
    img: martini,
    img2: martini2,
    name: "후르츠 마티니",
    ename: "Fruits Martini",
    alias: "martini",
    price: "6900원",
    best: false,
    color: "#a12245",
    info: {
      abv: getABV(2),
      rcmndBase: "소주, 보드카, 럼팟",
      recipe: getRecipe(135),
    },
    story:
      '마티니는 칵테일의 왕이라고 불리는 아주 유명하고 클래식한 칵테일입니다. 보드카를 이용한 칵테일은 제임스 본드의 이름을 따서 본드 마티니라고 부르기도 합니다. "Vodka martini, shaken, not stirred. (보드카 마티니, 젓지 말고 흔들어서.)" 이는 007영화 속 제임스 본드를 널리 알리며 마티니를 칵테일의 왕으로 만들었습니다.',
  },
  {
    id: 6,
    img: whitelady,
    img2: whitelady2,
    name: "화이트 레이디",
    ename: "White Lady",
    alias: "whitelady",
    price: "6900원",
    best: false,
    color: "#eee934",
    info: {
      abv: getABV(2),
      rcmndBase: "소주, 꼬냑, 데킬라, 진, 럼",
      recipe: getRecipe(135),
    },
    story:
      "2차 칵테일 붐을 일으킨 화이트 레이디는 영어로 불행을 다가올 것을 예견하는 유령 혹은 하얀 옷을 입은 귀부인 이라는 뜻이 있습니다. 화이트레이디는 1925년 등장해서 오랜 역사 동안 다양한 베리에이션이 만들어졌습니다. 보드카가 들어간다면 카미카제 혹은 발랄라이카, 데킬라가 들어가면 마가리타, 브랜디가 들어가면 사이드카, 럼이 들어가면 XYZ 등으로 불립니다.",
  },
  {
    id: 7,
    img: nonalcohol,
    img2: nonalcohol2,
    name: "무알콜(선택가능)",
    ename: "Non-alcohol",
    alias: "nonalcohol",
    price: "6900원",
    best: false,
    color: "#000",
    info: {
      abv: getABV(3),
      rcmndBase: "소주, 보드카, 럼팟",
      recipe: getRecipe(30),
    },
    story: "",
  },
];

export default products;
