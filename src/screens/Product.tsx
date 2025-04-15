import Container from '../components/Container.tsx';
import '../App.css';
import { useNavigate } from 'react-router';

const Product = () => {
  const nav = useNavigate();

  return (
    <Container>
      <view>
        <text className="Subtitle" bindtap={() => nav('/')}>
          Back
        </text>
        <text className="Title">Product</text>
      </view>
    </Container>
  );
};

export default Product;
