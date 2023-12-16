import React, { useState } from 'react';

import Modal from './Modal'; // Подставь правильный путь к компоненту Modal

import logo from './logo.svg';
import './App.css';
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const products = [
  {
    image: cake2, 
    alt: "Смородина миничиз",
    description:"Состав: ванилин, яйцо, желатин, мука миндальная, крахмал кукурузный, масло сливочное, смородина, итальянская мука твердых сортов, сливки натуральные, сыр творожный натуральный, сахарозаменитель Prebio (инулин, сукралоза, эритрит), лимон  ",
    KBGU: ""
  }
]

  return (
    <div className="App">
    <header>
        <h1>КаифКейк</h1>

    <nav>
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="about.html">О нас</a></li>
            <li><a href="contact.html">Контакты</a></li>
            <li><a href="cart.html">Корзина</a></li>
        </ul>
    </nav>
    
    </header>

    <main>

        <section>
            <h2>Контакты</h2>
            <p>Свяжитесь с нами для заказа тортов и ответов на ваши вопросы:</p>
            <p>Email: info@kaifcake.kz</p>
            <p>Телефон: +7 (XXX) XXX-XX-XX</p>
        </section>
       
        <div className="product" onClick={openModal}>
            <img src= {cake2} alt="Смородина миничиз"   />
            <h2>Смородина миничиз</h2>
            <p class="description">Состав: ванилин, яйцо, желатин, мука миндальная, крахмал кукурузный, масло сливочное, смородина, итальянская мука твердых сортов, сливки натуральные, сыр творожный натуральный, сахарозаменитель Prebio (инулин, сукралоза, эритрит), лимон  </p>
            <p class="price">Цена: 1150 Т</p>
            <Modal isOpen={isModalOpen} onClose={closeModal} cake2 = {cake2} />
            <button>Добавить в корзину</button>
        </div>

        <div class="product">
            <img src={cake3} alt="Муравейник"   />
            <h2>Муравейник</h2>
            <p class="description">Классический вкус Муравейника, но без сахара, без глютена и без яиц.
                Состав: Мука рисовая, мука кукурузная, мука зеленой гречки, масло кокосовое, пюре яблочное, кокосовый сахар, разрыхлитель, сливки 33%, мак, сахарозаменитель.   </p>
            <p class="price">Цена: 1500 Т</p>
            <button>Добавить в корзину</button>
        </div>

        <div class="product">
            <img src={cake4} alt="ШокШок mini"   />
            <h2>ШокШок mini</h2>
            <p class="description">яйцо, тёмный шоколад без сахара, сливочное масло, какао порошок, сахзам (инулин, эритрит, сукралоза), молоко, кофе в зёрнах, сливки 33%, кокосовый сахар (ГИ38)   </p>
            <p class="price">Цена: 1600 Т</p>
            <button>Добавить в корзину</button>
        </div>

        <div class="product">
            <img src={cake5} alt="Картошка"   />
            <h2>Картошка</h2>
            <p class="description">Состав: яйца, мука твердых сортов пшеницы, какао, разрыхлитель, сахарозаменитель, масло сливочное, молоко, кокосовое масло, сухое молоко, сливки 33%, шоколад горький, грецкий орех </p>
            <p class="price">Цена: 1300 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake6} alt="Кокосовая тарталетка
            "   />
            <h2>Кокосовая тарталетка</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1350 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake7} alt="Сникерс тарт
            "   />
            <h2>Сникерс тарт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1400 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake8} alt="Эскимо Чиз"   />
            <h2>Эскимо Чиз</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1100 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake9} alt="Эскимо Брауни"   />
            <h2>Эскимо Брауни</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1300 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake10} alt="Наполеон"   />
            <h2>Наполеон</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1200 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake11} alt="Медовик"   />
            <h2>Медовик</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1100 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake12} alt="ШокШок торт"   />
            <h2>ШокШок торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 13 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake13} alt="Наполеон торт"   />
            <h2>Наполеон торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 9 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake14} alt="Медовик торт"   />
            <h2>Медовик торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 8 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake15} alt="Джусии торт"   />
            <h2>Джусии торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 18 500 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake16} alt="Мокко торт"   />
            <h2>Мокко торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 8 500 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake17} alt="Муравейник торт"   />
            <h2>Муравейник торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 9 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake18} alt="Черничный торт"   />
            <h2>Черничный торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 14 500 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake19} alt="ЧизСердце торт"   />
            <h2>ЧизСердце торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 13 500 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake20} alt="Испанский чизкейк"   />
            <h2>Испанский чизкейк</h2>
            <p class="description"> </p>
            <p class="price">Цена: 9 500 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake21} alt="Йогуртовый торт"   />
            <h2>Йогуртовый торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 12 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake22} alt="ЧизЧернослив торт"   />
            <h2>ЧизЧернослив торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 14 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake23} alt="Птичье молоко торт"   />
            <h2>Птичье молоко торт</h2>
            <p class="description"> </p>
            <p class="price">Цена: 7 200 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake24} alt="торт эстерхази"   />
            <h2>торт эстерхази</h2>
            <p class="description"> </p>
            <p class="price">Цена: 9 500 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake25} alt="наполеон торт с грушей и намелакой"   />
            <h2>наполеон торт с грушей и намелакой</h2>
            <p class="description"> </p>
            <p class="price">Цена: 8 500 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake26} alt="Овсянки"   />
            <h2>Овсянки</h2>
            <p class="description"> </p>
            <p class="price">Цена: 3 600 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake27} alt="Анзак австралийское печенье"   />
            <h2>Анзак австралийское печенье</h2>
            <p class="description"> </p>
            <p class="price">Цена: 4 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake28} alt="Пряники полбяные с черносливом"   />
            <h2>КарПряники полбяные с черносливом</h2>
            <p class="description"> </p>
            <p class="price">Цена: 3 700 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake29} alt="Баунти конфеты"   />
            <h2>Баунти конфеты</h2>
            <p class="description"> </p>
            <p class="price">Цена: 2 350 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake30} alt="Карамелька миничиз"   />
            <h2>Карамелька миничиз</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 350 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake31} alt="Вишня миничиз"   />
            <h2>Вишня миничиз</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 150 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake32} alt="Шоколад миничиз"   />
            <h2>Шоколад миничиз</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 350 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake33} alt="Ягодный лайт мини"   />
            <h2>Ягодный лайт мини</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 200 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake34} alt="Малина миничиз"   />
            <h2>Малина миничиз</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 150 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake35} alt="Персиковый наркотик"   />
            <h2>Персиковый наркотик</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 400 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake36} alt="Птичье Кайф"   />
            <h2>Птичье Кайф</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 200 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake37} alt="Самса курица + тыква"   />
            <h2>Самса курица + тыква</h2>
            <p class="description"> </p>
            <p class="price">Цена: 900 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake38} alt="Киш Жульен"   />
            <h2>Киш Жульен</h2>
            <p class="description"> </p>
            <p class="price">Цена: 10 500 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake39} alt="Сырники"   />
            <h2>Сырники</h2>
            <p class="description"> </p>
            <p class="price">Цена: 3 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake40} alt="киш Жульен малыш"   />
            <h2>киш Жульен малыш</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 600 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake41} alt="Киш семга брокколи"   />
            <h2>Киш семга брокколи</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 900 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake42} alt="Брауни вишня"   />
            <h2>Брауни вишня</h2>
            <p class="description"> </p>
            <p class="price">Цена: 7 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake43} alt="тарт цитрусовый"   />
            <h2>тарт цитрусовый</h2>
            <p class="description"> </p>
            <p class="price">Цена: 7 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake44} alt="персиковый рай"   />
            <h2>персиковый рай</h2>
            <p class="description"> </p>
            <p class="price">Цена: 9 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake45} alt="Шу булочка"   />
            <h2>Шу булочка</h2>
            <p class="description"> </p>
            <p class="price">Цена: 1 900 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake46} alt="Ягодный лайт рулет"   />
            <h2>Ягодный лайт рулет</h2>
            <p class="description"> </p>
            <p class="price">Цена: 9 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
        <div class="product">
            <img src={cake47} alt="штоллен творожный"   />
            <h2>штоллен творожный</h2>
            <p class="description"> </p>
            <p class="price">Цена: 5 000 Т</p>
            <button>Добавить в корзину</button>
        </div>
    </main>

    <footer>
        <p>&copy; 2023 КаифКейк</p>
    </footer>

    <script src="script.js"></script>
    </div>
  );
}

export default App;
