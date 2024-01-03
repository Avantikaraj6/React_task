
import "./Storebar.css";
const Storebar = ({data}) => {
  return (
    <div className="item-2">
      {data.map((item) => (
        <div className="item-box">
        <img src={item.image} className="product-img"/>
        <h6>{item.title}</h6>
        <p>$ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Storebar;
