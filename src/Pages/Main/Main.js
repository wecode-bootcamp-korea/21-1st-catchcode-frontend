import React from 'react';
import MainProductItem from '../../Components/MainProductItem/MainProuctItem';
import Banner from '../../Components/Banner/Banner';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prodcut: [],
    };
  }
  render() {
    return (
      <>
        <Banner />
        <main className="productArea">
          <MainProductItem />
        </main>
      </>
    );
  }
}

export default Main;
