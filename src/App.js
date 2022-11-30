import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Telephone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=819&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Headphone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Keyboard',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Mouse',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'LED Light',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1532007271951-c487760934ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Camera',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Shoes',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1669671943625-e20799ee5f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Keyboard',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1669723008504-42e4df83fce5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Camera 2M',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Bottel',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1669697743047-de61a182711c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Moter Bike',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1669654666982-89abeb45b041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Gameing Stand',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1669741042768-e4dada6058a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Car',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1669665465818-51a667863853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Bicycle',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1669058793907-79bd07b3cdc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Bed',
          qty: 1,
          img: 'https://plus.unsplash.com/premium_photo-1668651148000-fc6c6eb12aa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Chair',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1639384375285-55891b4ea5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Glass',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1588867702719-969c8ac733d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Books',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Pen',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Ring',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'T-shirt',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 1
        },
        {
          price: 400,
          title: 'Jacket men',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
          id: 1
        },
        {
          price: 899,
          title: 'Jacket Women',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1662418288094-311bb2957d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
          id: 1
        },
        {
          price: 3000,
          title: 'Jacket And Jens Women',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1662418269439-6b9e7633ca93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
          id: 1
        },
        {
          price: 599,
          title: 'CD',
          qty: 1,
          img: 'https://plus.unsplash.com/premium_photo-1663045454409-1373d1aed56c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1
        },
        {
          price: 599,
          title: 'Radio',
          qty: 1,
          img: 'https://plus.unsplash.com/premium_photo-1664049362628-db965d6b7fc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Sound',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1504904126298-3fde501c9b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1
        },
        {
          price: 199,
          title: 'Toy Kidds',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1610019080778-471083eb5965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Jeep Toy Kidds',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1447931958677-954446df5f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1
        },
        {
          price: 299,
          title: 'Ring Women',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1611146942956-d6be598e13cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  
  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;

    });

    return cartTotal;

  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} 
        
        />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
