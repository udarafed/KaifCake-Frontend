import React, { useState } from 'react';

import Modal from './Modal.jsx'; // Подставь правильный путь к компоненту Modal

// Привет, Дима

import './App.css';
import './index.css';

import logo from './images/logo.png';

import cake1 from './images/cake1.jpg'

import cake2 from './images/cake2.jpg'
import cake3 from './images/cake3.png'
import cake4 from './images/cake4.png'
import cake5 from './images/cake5.jpg'
import cake6 from './images/cake6.png'
import cake7 from './images/cake7.png'
import cake8 from './images/cake8.jpg'
import cake9 from './images/cake9.png'
import cake10 from './images/cake10.jpg'
import cake11 from './images/cake11.jpg'
import cake12 from './images/cake12.jpg'
import cake13 from './images/cake13.png'
import cake14 from './images/cake14.jpg'
import cake15 from './images/cake15.jpg'
import cake16 from './images/cake16.jpg'
import cake17 from './images/cake17.jpg'
import cake18 from './images/cake18.jpg'
import cake19 from './images/cake19.jpg'
import cake20 from './images/cake20.png'
import cake21 from './images/cake21.png'
import cake22 from './images/cake22.png'
import cake23 from './images/cake23.jpg'
import cake24 from './images/cake24.jpg'
import cake25 from './images/cake25.jpg'
import cake26 from './images/cake26.jpg'
import cake27 from './images/cake27.jpg'
import cake28 from './images/cake28.jpg'
import cake29 from './images/cake29.png'
import cake30 from './images/cake30.jpg'
import cake31 from './images/cake31.jpg'
import cake32 from './images/cake32.jpg'
import cake33 from './images/cake33.jpg'
import cake34 from './images/cake34.jpg'
import cake35 from './images/cake35.jpg'
import cake36 from './images/cake36.jpg'
import cake37 from './images/cake37.png'
import cake38 from './images/cake38.jpg'
import cake39 from './images/cake39.jpg'
import cake40 from './images/cake40.jpg'
import cake41 from './images/cake41.jpg'
import cake42 from './images/cake42.jpg'
import cake43 from './images/cake43.jpg'
import cake44 from './images/cake44.jpg'
import cake45 from './images/cake45.jpg'
import cake46 from './images/cake46.png'
import cake47 from './images/cake47.jpg'

function App() {

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = (product) => {
      setSelectedProduct(product);  
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedProduct(null);
      setIsModalOpen(false);
    };

  

  const brownies = [
      {
          image: cake2,
          alt: "Смородина миничиз",
          name: "Смородина миничиз",
          compound:"Состав: ванилин, яйцо, желатин, мука миндальная, крахмал кукурузный, " +
              "масло сливочное, смородина, итальянская мука твердых сортов, сливки натуральные, " +
              "сыр творожный натуральный, сахарозаменитель Prebio (инулин, сукралоза, эритрит), лимон  ",
          price: 1150,
      },

      {
          image: cake3,
          alt: "Муравейник",
          name: "Муравейник",
          compound: "Классический вкус Муравейника, но без сахара, без глютена и без яиц.\n" +
              "Состав: Мука рисовая, мука кукурузная, мука зеленой гречки, масло кокосовое, пюре яблочное, кокосовый сахар, разрыхлитель, сливки 33%, мак, сахарозаменитель. ",
          price: 1500,
      },

      {
          image: cake4,
          alt: "ШокШок mini",
          name: "ШокШок mini",
          compound: "Состав: Яйцо, тёмный шоколад без сахара, сливочное масло, какао порошок, " +
              "сахзам (инулин, эритрит, сукралоза), молоко, кофе в зёрнах, сливки 33%, кокосовый сахар (ГИ38)",
          price: 1600,
      },

      {
          image: cake5,
          alt: "Картошка",
          name: "Картошка",
          compound: "Состав: яйца, мука твердых сортов пшеницы, какао, \n" +
              "разрыхлитель, сахарозаменитель, масло сливочное, молоко, кокосовое масло, \n" +
              "сухое молоко, сливки 33%, шоколад горький, грецкий орех",
          price: 1300,
      },

      {
          image: cake6,
          alt: "Кокосовая тарталетка",
          name: "Кокосовая тарталетка",
          compound: "Состав: Миндальная мука, рисовая мука, кокосовая мука, кокосовое масло, " +
              "сироп топинамбура, малина, ежевика, сахарозаменитель, агар-агар, кокосовое масло.",
          price: 1350,
      },

      {
          image: cake7,
          alt: "Сникерс тарт",
          name: "Сникерс тарт",
          compound: "Состав: Яблочное пюре, Масло кокосовое, Псилум, Какао порошок, Мука рисовая, " +
              "Сахар кокосовый, Мука зеленой гречки, Какао тертое, Сироп топинамбура, Паста арахисовая," +
              " Сухое кокосовое молоко, Сливки кокосовые, Арахис соленый.",
          price: 1400,
      },

      {
          image: cake8,
          alt: "Эскимо Чиз",
          name: "Эскимо Чиз",
          compound: "Состав: яйца, сыр творожный, шоколад бельгийский, сливки 33%, чернослив, кокосовое масло, кукурузный крахмал, сахарозаменитель, ванилин " ,
          price: 1200,
      },

      {
          image: cake9,
          alt: "Эскимо Брауни" ,
          name: "Эскимо Брауни" ,
          compound: "Состав: яйца, масло Сливочное натуральное, шоколад темный бельгийский, сахарозаменитель, мука твердых сортов итальянская, Разрыхлитель, кокосовый сахар , Сливки 33% натуральные, Соль, желатин халяль, арахис соленный" ,
          price: 1100,
      },

      {
          image: cake10,
          alt: "Наполеон",
          name: "Наполеон",
          compound:"Состав: Мука Пшеничная из твердых сортов, Молоко 2,5%, Масло сливочное 82%, Сметана 20%, Яйцо Куриное, Ванилин, Крахмал кукурузный, Сахзам (инулин, сукралоза, эритрит)" ,
          price: 1200,
      },

      {
          image: cake11,
          alt: "Медовик" ,
          name: "Медовик",
          compound: "Состав: Мука из твердых сортов пшеницы, Яйцо, Сливочное масло, Мед натуральный, Сок лимона, Облепиха, Сливки натуральные, Крахмал кукурузный",
          price: 1100 ,
      },
  ];

  const cakes = [
        {
            image: cake12,
            alt: "ШокШок торт",
            name: "ШокШок торт",
            compound: "Состав: яйцо, тёмный шоколад без сахара, сливочное масло, какао порошок, сахзам (инулин, эритрит, сукралоза), молоко, кофе в зёрнах, сливки 33%, кокосовый сахар (ГИ38)",
            price: 13000,
        },

        {
            image: cake13,
            alt: "Наполеон торт",
            name: "Наполеон торт",
            compound: "Нежный и пропитанный в меру сладкий! Состав: Мука Пшеничная из твердых сортов, Молоко 2,5%, Масло сливочное 82%, Сметана 20%, Яйцо Куриное, Ванилин, Крахмал кукурузный, Сахзам (инулин, сукралоза, эритрит)",
            price: 9000,
        },

        {
            image: cake14,
            alt: "Медовик торт",
            name: "Медовик торт",
            compound: "Классический вкус медовика с приятной кислинкой облепихи. Состав: Мука из твердых сортов пшеницы, Яйцо, Сливочное масло, Мед натуральный, Сок лимона, Облепиха, Сливки натуральные, Крахмал кукурузный ",
            price: 8000,
        },

        {
            image: cake15,
            alt: "Джусии торт",
            name: "Джусии торт",
            compound: "Смородиновая кислинка в сочетании с шоколадным муссом на нежном шоколадном бисквите. Без сахара на твердых сортах пшеницы.Состав: яйцо, масло сливочное, мука твердых сортов пшеницы, сахарозаменитель Prebio (инулин, эритрит, сукралоза), какао, разрыхлитель, кокосовое масло, черная смородина, желатин, шоколад темный, молоко, сливки натуральные, творожный сыр, кокосовый сахар ",
            price: 18500,
        },

        {
            image: cake16,
            alt: "Мокко торт",
            name: "Мокко торт",
            compound: "Кофейно-шоколадный чизкейк на имбирном прянике, яркий вкус сочетаний кофейной горчинки и специй приготовленный без сахара. Состав: яйца, сахарозаменитель Prebio (инулин, эритрит, сукралоза), мука твердых сортов пшеницы, разрыхлитель, миндальная мука, сливки натуральные 33%, имбирь сухой, корица, сыр творожный, шоколад бельгийский молочный, кофе, сахар кокосовый",
            price: 8500,
        },

        {
            image: cake17,
            alt: "Муравейник торт",
            name: "Муравейник торт",
            compound: "Классический вкус Муравейника, но без сахара, без глютена и без яиц. Состав: Мука рисовая, мука кукурузная, мука зеленой гречки, масло кокосовое, пюре яблочное, кокосовый сахар, разрыхлитель, сливки 33%, мак, сахарозаменитель.  ",
            price: 9000,
        },

        {
            image: cake18,
            alt: "Черничный торт",
            name: "Черничный торт",
            compound: "Нарядный маковый торт, с прослойкой из ягодного конфи и творожным кремом украшенный ягодами и цветами. Без сахара на муке твердых сортах пшеницы. Состав: яйцо, масло сливочное, ванилин, масло кокосовое, кокосовый сахар, итальянская мука твердых сортов пшеницы, сода, разрыхлитель, мак, лимон, апельсин, черника, сахарозаменитель prebio (инулин, эритрит, сукралоза), кукурузный крахмал, творожный сыр, сливки натуральные, голубика.",
            price: 14500,
        },

        {
            image: cake19,
            alt: "ЧизСердце торт",
            name: "ЧизСердце торт",
            compound: "Очень эффектный подарочный торт без сахара. Основа песочное тесто сабле, послойно клубничный и ванильный чизкейк с шоколадный ганашем. Состав: сливочное  масло, сахарозаменитель Prebio, миндальная мука, мука твердых сортов пшеницы, яйцо, творожный сыр, крахмал кукурузный, сливки натуральные, сок лимона, ванилин, клубника, шоколад темный. ",
            price: 13500,
        },

        {
            image: cake20,
            alt: "Испанский чизкейк",
            name: "Испанский чизкейк",
            compound: "Сан Себастьян — необычный горелый чизкейк, с нежным сливочным вкусом напоминающим крем-брюле за счет хорошо запеченной корочки без муки, без глютена. Идеальный десерт даже к ужину. Состав: яйцо,  ️творожный сыр️, сливки️ 33%,  ванилин️,  крахмал кукурузный, сахарозаменитель Prebio (инулин, эритрит, сукралоза). ",
            price: 9500,
        },

        {
            image: cake21,
            alt: "Йогуртовый торт",
            name: "Йогуртовый торт",
            compound: "Нежный рисовый бисквит пропитанный легким  сливочно-клубничным кремом, торт без глютена и сахара.  Состав: молоко, яйца, сахарозаменитель Probio (инулин, эритрит, сукралоза), сухое молоко, кукурузный крахмал, рисовая мука, разрыхлитель без глютена, ванилин, клубника, йогурт натуральный, желатин говяжий, сливки натуральные, рикотта, творожный сыр",
            price: 12000,
        },

        {
            image: cake22,
            alt: "ЧизЧернослив торт" ,
            name: "ЧизЧернослив торт",
            compound: "Классический ванильный чизкейк в сочетании с со вкусом нежного пюре из чернослива на пряном морковном бисквите. Это топчик, этот десерт обожают все.Значки: БЕЗ САХАРА/ БЕЗ ТРАНСЖИРОВ/ТОЛЬКО ТВЕРДЫЕ СОРТА ПШЕНИЦЫ/НАТУРАЛЬНЫЙ ПРОДУКТ. Состав: творожный сыр, чернослив, кокосовый сахар, морковь, цедра апельсина, грецкий орех, мука твердых сортов пшеницы, сметана, кокосовое масло, кукурузный крахмал, сахарозаменитель prebio, ванилин, корица, разрыхлитель, яйца. ",
            price: 14000,
        },

        {
            image: cake23,
            alt: "Птичье молоко торт",
            name: "Птичье молоко торт",
            compound: "",
            price: 7200,
        },

        {
            image: cake24,
            alt: "торт эстерхази",
            name: "торт эстерхази",
            compound: "Для любителей выпечки с орехами, классический торт Эстерхази в ПП варианте.Без муки и белого сахара. Состав: миндаль,грецкий орех,яйцо куриное,крахмал кукурузный,Сахарозаменитель, эритрит, масло сливочное",
            price: 9500,
        },

        {
            image: cake25,
            alt: "наполеон торт с грушей и намелакой",
            name: "наполеон торт с грушей и намелакой",
            compound: "Классический наполеон с изюминкой, С карамелизированной грушей и прослойкой крема намелака из белого шоколада. Состав: масло сл.,яйцо куриное, сметана,мука ТС пшеницы, кукурузный крахмал,молоко, сах.заменитель,соль, ванилин,груша, кокос.сахар, белый шоколад, сливки,желатин,фисташки.",
            price: 8500,
        },
    ];

  const biscuits_biscuits = [
      {
          image: cake26,
          alt: "Овсянки",
          name: "Овсянки",
          compound: "Состав: Мука овсяная, хлопья овсяные, масло сливочное, сахарозаменитель, разрыхлитель, мед, изюм, чернослив, курага. ",
          price: 3600,
      },

      {
          image: cake27,
          alt: "Анзак австралийское печенье",
          name: "Анзак австралийское печенье",
          compound: "Состав: овсяные хлопья, кокосовая стружка, мука овсяная, сахарозаменитель, масло сливочное, мед, морковка, разрыхлитель, цедра апельсина, ванилин, соль.  ",
          price: 4000,
      },

      {
          image: cake28,
          alt: "Пряники полбяные с черносливом",
          name: "Пряники полбяные с черносливом",
          compound: "Пряный пряник с прослойкой пюре из чернослива. Эти пряники приготовлены без яиц, без глютена и без сахара в основе теста используется полбяная мука. Состав: Мед, сироп топинамбура, масло кокосовое, сода, пюре яблочное, мука полбяная, какао, имбирь сухой молотый, корица, мускатный орех, кардамон, гвоздика, перец, чернослив, сухое молоко, сахарозаменитель Prebio (инулин, эритрит, сукралоза)",
          price: 3700,
      },
  ];

  const biscuits_brownies = [
      {
          image: cake29,
          alt: "Баунти конфеты" ,
          name: "Баунти конфеты",
          compound: "Райское наслаждение. Без Глютена, без муки, только полезные жиры, можно диабетикам, без сахара, хорошо для Кетто диеты, низкое количество углеводов. Состав: кокосовая стружка, масло натуральное сливочное, молоко, сахарозаменитель, шоколад бельгийский без сахара.",
          price: 2350,
      },

      {
          image: cake30,
          alt: "Карамелька миничиз",
          name: "Карамелька миничиз",
          compound: "Состав: яйца, желатин, ванилин, сахарозаменитель probio, мука миндальная, крахмал кукурузный, цедра лимона, молоко натуральное, сливочное масло, орехи грецкий, сливки 33%, кокосовый сахар, масло сливочное, мука твердых сортов пшеницы, сыр творожный натуральный",
          price: 1350,
      },

      {
          image: cake31,
          alt: "Вишня миничиз",
          name: "Вишня миничиз",
          compound: "Состав: ванилин, яйцо, желатин, мука миндальная, крахмал кукурузный, масло сливочное, вишня, мука твердых сортов пшеницы, сливки 33%, сыр творожный, сахарозаменитель probio, цедра лимона ",
          price: 1150,
      },

      {
          image: cake32,
          alt: "Шоколад миничиз",
          name: "Шоколад миничиз",
          compound: "Состав: ванилин, мука миндальная, крахмал кукурузный, шоколад бельгийский без сахара, молоко, цедра лимона, масло кокосовое, масло сливочное натуральное, сливки 33%, мука твердых сортов пшеницы, яйца, творожный сыр ",
          price: 1350 ,
      },

      {
          image: cake33,
          alt: "Ягодный лайт мини",
          name: "Ягодный лайт мини",
          compound: "Без Муки/ Без сахара/ Без глютена/ Вкус: Минимальное количество углеводов, можно даже на ужин, большое количества белка. Помните, что творог лучше кушать до 20:00. Состав: Яйца, творог, сахарозаменитель Probio, кукурузный крахмал (30гр на весь рулет), сливки, творожный сыр, сезонные ягоды",
          price: 1200,
      },

      {
          image: cake34,
          alt: "Малина миничиз",
          name: "Малина миничиз",
          compound: "" ,
          price: 1150,
      },

      {
          image: cake35,
          alt: "Персиковый наркотик",
          name: "Персиковый наркотик",
          compound: "Песочная корзинка, в меру хрустящая, наполненная суфле с добавлением кусочков фруктов и  укрытое нежным одеялом из персиков доставит вам удовольствие и несомненно вызывает привыкание, условно наркотик) Без сахара, глютен присутствует. Состав: мука твердых сортов, масло сливочное, яйцо, сметана, сахарозаменитель Prebio, ванилин, разрыхлитель, персики, крахмал кукурузный, соль. ",
          price: 1400,
      },

      {
          image: cake36,
          alt: "Птичье Кайф",
          name: "Птичье Кайф",
          compound: "Настоящее нежное птичье молоко, вернет вас в приятные воспоминания детства. состав: молоко, молоко сухое, рисовая мука, кукурузный крахмал, соль, сливочное масло, разрыхлитель, ванилин, сливки 33%, эритрит, агар-агар, лимонная кислота, темный шоколад без сахара, яйцо куриное, изомальт, инулин, сукралоза. ",
          price: 1200,
      },
  ];

  const unsweetened_pastries = [
      {
          image: cake37,
          alt: "Самса курица + тыква",
          name: "Самса курица + тыква",
          compound: "Состав: Мука твердых сортов, масло сливочное натуральное, сметана, яйцо, куриная грудка, тыква, лук, кунжут, специи ",
          price: 900,
      },

      {
          image: cake38,
          alt: "Киш Жульен",
          name: "Киш Жульен",
          compound: "Киш жульен, обладает ярким вкусом грибов в сливочном соусе и курином филе, все это дополняет вкус песочного теста. Состав: куриное филе, грибы, сыр пармезан, сливки натуральные кондитерские, кокосовое масло, сливочное масло, мука твердых сортов пшеницы, яйцо, специи ",
          price: 10500,
      },

      {
          image: cake39,
          alt: "Сырники",
          name: "Сырники",
          compound: "Сырники из натурального творога, без глютена, без сахара. Готовые к употреблению, просто разогрей и можно наслаждаться. Вкусным и полезным завтраком или даже ужином. Состав: Творог 5%, яйцо, сахарозаменитель Prebio, соль, рисовая мука. ",
          price: 3000,
      },

      {
          image: cake40,
          alt: "киш Жульен малыш",
          name: "киш Жульен малыш",
          compound: "Состав: итальянская мука твердых сортов пшеницы, масло сливочное, сахарозаменитель, соль, вода, яйцо, сливки 20%, крахмал кукурузный, сыр Пармезан, куриное филе, шампиньоны. ",
          price: 1600,
      },

      {
          image: cake41,
          alt: "Киш семга брокколи",
          name: "Киш семга брокколи",
          compound: "" ,
          price: 1900,
      },
  ];

  const pies = [
      {
          image: cake42,
          alt: "Брауни вишня",
          name: "Брауни вишня",
          compound: "",
          price: 7000,
      },

      {
          image: cake43,
          alt: "тарт цитрусовый",
          name: "тарт цитрусовый",
          compound: "Для любителей цитрусовых ноток, Апельсиново-лимоный тарт с меренгой. Состав: масло сл.. яйцо, мука ТС, сметана,соль,апельсин,лимон,крахмал кукурузный,сах.заменитель,сахар кокосовый,эритрит. вес от 1.1 кг",
          price: 7000 ,
      },

      {
          image: cake44,
          alt: "персиковый рай" ,
          name:"персиковый рай" ,
          compound: "состав: мука твердых сортов пшеницы, сл.масло 82%,,подсластитель 'prebio'.яйцjo кур., разрыхлмтель, соль,. ванилин, сметана 20% , крахмал кукурузный , персики",
          price: 9000,
      },
  ];

  const custard_doughs = [
      {
          image: cake45,
          alt: "Шу булочка" ,
          name: "Шу булочка" ,
          compound:"Вкус:Небольшие пирожные из заварного теста в виде шариков с хрустящей песочной «верхушкой» и нежной сердцевиной из шелковистого сливочно-заварного крема.Состав: Итальянская мука твердых сортов, рисовая мука, молоко натуральное 2,5%, соль, сахарозаменитель, масло сливочное, яйцо куриное, мука миндальная, сливки 33%, крахмал кукурузный,  " ,
          price: 1900,
      },
  ];

  const rolls = [
      {
          image: cake46,
          alt: "Ягодный лайт рулет",
          name: "Ягодный лайт рулет",
          compound: "Без Муки/ Без сахара/ Без глютена/ Вкус: Минимальное количество углеводов, можно даже на ужин, большое количества белка. Помните, что творог лучше кушать до 20:00. Состав: Яйца, творог, сахарозаменитель Probio, кукурузный крахмал (30гр на весь рулет), сливки, творожный сыр, сезонные ягоды",
          price: 9000,
      },

      {
          image: cake47,
          alt: "штоллен творожный",
          name: "штоллен творожный",
          compound: "безглютеновый творожный штоллен .Для любителей национальной выпечки.Состав: творог 9%, яйцо куриное,мука рисовая, мука зеленой гречки,мука кукурузная,разрыхлитель,крахмал кукурузный, сах.заменитель,солдь.ванилин,масло сл.,сухофрукты,цедра и сок апельсина,пудра эритрита." ,
          price: 5000,
      },
  ];

  // const dopiks = [];
  // const bento_cakes = [];

  return (
    <div className="App">
        <header>
            <div className="header-inner-layer">
                <div className="logo-container">
                    <img src={logo} className="logo" />
                </div>

                <input type="search" className="search" />
            </div>
        </header>

        <main>
            <div className="advertise-container">
                <img src={cake1} className="advertise" />
            </div>

            <div className="product-header-container">
                <h1 className="product-header">Пирожное</h1>
            </div>

            <section className="products-grid">
                {brownies.map((brownie, index) => (
                    <div key={index}
                         className="product"
                    >
                        <div className="product-img-container">
                            <img className="product-img"
                                 src={brownie.image}
                                 alt={brownie.alt}
                                 onClick={() => openModal(brownie)}
                            />
                        </div>
                        <h2 className="product-name">{brownie.name}</h2>
                        <p className="product-description">{brownie.compound}</p>
                        <p className="product-price">{brownie.price.toLocaleString('ru-RU')} ₸</p>
                        {/*<button>Добавить в корзину</button>*/}
                    </div>
                ) )}
            </section>

            <div className="product-header-container">
                <h1 className="product-header">Торт</h1>
            </div>

            <section className="products-grid">
                {cakes.map((cake, index) => (
                    <div key={index}
                         className="product"
                    >
                        <div className="product-img-container">
                            <img className="product-img"
                                 src={cake.image}
                                 alt={cake.alt}
                                 onClick={() => openModal(cake)}
                            />
                        </div>
                        <h2 className="product-name">{cake.name}</h2>
                        <p className="product-description">{cake.compound}</p>
                        <p className="product-price">{cake.price.toLocaleString('ru-RU')} ₸</p>
                        {/*<button>Добавить в корзину</button>*/}
                    </div>
                ) )}
            </section>

            <div className="product-header-container">
                <h1 className="product-header">Печенье</h1>
            </div>

            <div className="product-header-container">
                <h1 className="product-header">Печенье</h1>
            </div>

            <section className="products-grid">
                {biscuits_biscuits.map((biscuits_biscuit, index) => (
                    <div key={index}
                         className="product"
                    >
                        <div className="product-img-container">
                            <img className="product-img"
                                 src={biscuits_biscuit.image}
                                 alt={biscuits_biscuit.alt}
                                 onClick={() => openModal(biscuits_biscuit)}
                            />
                        </div>
                        <h2 className="product-name">{biscuits_biscuit.name}</h2>
                        <p className="product-description">{biscuits_biscuit.compound}</p>
                        <p className="product-price">{biscuits_biscuit.price.toLocaleString('ru-RU')} ₸</p>
                        {/*<button>Добавить в корзину</button>*/}
                    </div>
                ) )}
            </section>

            <div className="product-header-container">
                <h1 className="product-header">Пирожное</h1>
            </div>

            <section className="products-grid">
                {biscuits_brownies.map((biscuits_brownie, index) => (
                    <div key={index}
                         className="product"
                    >
                        <div className="product-img-container">
                            <img className="product-img"
                                 src={biscuits_brownie.image}
                                 alt={biscuits_brownie.alt}
                                 onClick={() => openModal(biscuits_brownie)}
                            />
                        </div>
                        <h2 className="product-name">{biscuits_brownie.name}</h2>
                        <p className="product-description">{biscuits_brownie.compound}</p>
                        <p className="product-price">{biscuits_brownie.price.toLocaleString('ru-RU')} ₸</p>
                        {/*<button>Добавить в корзину</button>*/}
                    </div>
                ) )}
            </section>

            <div className="product-header-container">
                <h1 className="product-header">Несладкая выпечка</h1>
            </div>

            <section className="products-grid">
                {unsweetened_pastries.map((unsweetened_pastrie, index) => (
                    <div key={index}
                         className="product"
                    >
                        <div className="product-img-container">
                            <img className="product-img"
                                 src={unsweetened_pastrie.image}
                                 alt={unsweetened_pastrie.alt}
                                 onClick={() => openModal(unsweetened_pastrie)}
                            />
                        </div>
                        <h2 className="product-name">{unsweetened_pastrie.name}</h2>
                        <p className="product-description">{unsweetened_pastrie.compound}</p>
                        <p className="product-price">{unsweetened_pastrie.price.toLocaleString('ru-RU')} ₸</p>
                        {/*<button>Добавить в корзину</button>*/}
                    </div>
                ) )}
            </section>

            <div className="product-header-container">
                <h1 className="product-header">Пирог</h1>
            </div>

            <section className="products-grid">
                {pies.map((pie, index) => (
                    <div key={index}
                         className="product"
                    >
                        <div className="product-img-container">
                            <img className="product-img"
                                 src={pie.image}
                                 alt={pie.alt}
                                 onClick={() => openModal(pie)}
                            />
                        </div>
                        <h2 className="product-name">{pie.name}</h2>
                        <p className="product-description">{pie.compound}</p>
                        <p className="product-price">{pie.price.toLocaleString('ru-RU')} ₸</p>
                        {/*<button>Добавить в корзину</button>*/}
                    </div>
                ) )}
            </section>

            <div className="product-header-container">
                <h1 className="product-header">Заварное тесто</h1>
            </div>

            <section className="products-grid">
                {custard_doughs.map((custard_dough, index) => (
                    <div key={index}
                         className="product"
                    >
                        <div className="product-img-container">
                            <img className="product-img"
                                 src={custard_dough.image}
                                 alt={custard_dough.alt}
                                 onClick={() => openModal(custard_dough)}
                            />
                        </div>
                        <h2 className="product-name">{custard_dough.name}</h2>
                        <p className="product-description">{custard_dough.compound}</p>
                        <p className="product-price">{custard_dough.price.toLocaleString('ru-RU')} ₸</p>
                        {/*<button>Добавить в корзину</button>*/}
                    </div>
                ) )}
            </section>

            <div className="product-header-container">
                <h1 className="product-header">Рулет</h1>
            </div>

            <section className="products-grid">
                {rolls.map((roll, index) => (
                    <div key={index}
                         className="product"
                    >
                        <div className="product-img-container">
                            <img className="product-img"
                                 src={roll.image}
                                 alt={roll.alt}
                                 onClick={() => openModal(roll)}
                            />
                        </div>
                        <h2 className="product-name">{roll.name}</h2>
                        <p className="product-description">{roll.compound}</p>
                        <p className="product-price">{roll.price.toLocaleString('ru-RU')} ₸</p>
                        {/*<button>Добавить в корзину</button>*/}
                    </div>
                ) )}
            </section>

            <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct}/>

        </main>

        <footer>
            <p>&copy; 2023 КаифКейк</p>
        </footer>

    </div>
  );
}

export default App;
