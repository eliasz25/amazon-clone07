import React from 'react'
import './Home.css'
import Products from '../Products/Products';

function Home() {
    return (
    <div className="home">
    <div className="home_container">
             <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Movie/SYLV_2020_GWBleedingHero_1500x600_POST_Final_noLocale_PVD6240_SylviesLove._CB416257388_.jpg"
          alt=""
        />
        <div className="home_row">
            <Products 
            id="12321341"
            title="The Promised Land. – November 17, 2020"
            price={23.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg"
          />                             
        <Products
        id="49538094"
        title="Believe It: My Journey of Success, Failure, and Overcoming the Odds"
        price={18.99}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/51eft7hWamL._SX329_BO1,204,203,200_.jpg"
      />
      <Products
      id="12321341"
      title="Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy"
      price={14.52}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/514043DnLLL._SX322_BO1,204,203,200_.jpg"
    />
        </div>
        <div className="home_row">
          <Products
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
          <Products
          id="23445930"
          title="I'm just here for The Injera Habesha Ethiopian T-Shirt"
          price={18.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71xtSjK8+JL._AC_UL320_.jpg"
        />
        <Products
        id=" 79733N-0002"
        title="Bowflex SelectTech Adjustable Bench Series"
        price={329.75}
        rating={4}
        image="https://m.media-amazon.com/images/I/8104o354qFL._AC_UL320_.jpg"
      />
          <Products
          id=" 79733N-0002"
          title="Tudor Heritage Black Bay Yellow Gold and Stainless Steel 41mm Men's Watch)"
          price={4875.05}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61IFU1uALVL._AC_UL400_SR300,400_.jpg"
        />
        </div>
        <div className="home_row">
          <Products
          id="90829332"
          title="SAVADECK Carbon Road Bike, Warwinds3.0 700C Carbon Fiber Racing Bicycle with SORA 18 Speed Derailleur System and Double V Brak"
          price={1749.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71PnxEJ0kSL._AC_UY218_.jpg"
        />
        </div>
        <div className="home_row">
           <Products
           id="234459303"
           title="Chess Set, Large Metal Deluxe Chess Retro Copper Plated Alloy Chess Adult Set Board Game Portable Wooden Box Storage Folding Chess Set"
           price={71.99}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/41IIC%2BHGdQL._AC_SY400_.jpg"
         />
          <Products
          id="B0090NYRAW"
          title="Ray-Ban Men's Rb3498 Metal Rectangular Sunglasses"
          price={130.90}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51vOK6d19yL._AC_SY120_.jpg"
        />
        <Products
        id="4903850"
        title="HOKA ONE ONE Men's Bondi 6 Running"
        price={213.68}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/41QfGy-owfL._AC_SY300_.jpg"
      />
      <Products
      id=" 72733N-542"
      title="VIOTEK GNV34CB 34-Inch Ultrawide Curved Gaming Monitor"
      price={299.99}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/71D7HFJ006L._AC_SY240_.jpg"
    />
    </div>
      
    </div>
    </div>
    );
}

export default Home
