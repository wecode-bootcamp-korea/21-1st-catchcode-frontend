import react from 'react';
import { withRouter } from 'react-router-dom';
import './FilterProducts.scss';

class FilterProducts extends react.Component {
  changeDeciaml = price => {
    const numPrice = Number(price);
    return Number(numPrice.toFixed()).toLocaleString('ko-KR');
  };

  removeTitleUnderBar = name => {
    return name.slice(name.indexOf('_') + 1, name.length);
  };

  // componentDidMount() {
  //   fetch(
  //     `http://10.58.6.177:8000/products/search?${this.props.match.params.id}`
  //   )
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // }

  render() {
    const { productListInfo } = this.props;
    return (
      <div className="products">
        {productListInfo.map((data, idx) => {
          return (
            <div className="item" key={idx}>
              <div className="image">
                <img alt="원단사진입니다" src={data.thumbNail} />
              </div>
              <div className="itemContext">
                <div className="title">
                  {this.removeTitleUnderBar(data.name)}
                </div>
                <div className="price">{this.changeDeciaml(data.price)}</div>
                {!data.catchCode && <div className="detail">캐치구매</div>}
                {!data.stock && <div className="soldout">SOLD OUT</div>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(FilterProducts);
