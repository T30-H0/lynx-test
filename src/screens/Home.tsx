import Container from '../components/Container.tsx';
import '../App.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Home = () => {
  const nav = useNavigate();
  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  console.log(count);

  return (
    <Container>
      <view>
        <text className="Subtitle" bindtap={() => nav('/')}>
          Back
        </text>
        <text className="Title">Home</text>
      </view>

      <view className="content">
        <view className="counterBtn" bindtap={onPlus}>
          <text className="title">+</text>
        </view>

        <text className="title">{count}</text>

        <view className="counterBtn" bindtap={onMinus}>
          <text className="title">-</text>
        </view>
      </view>
    </Container>
  );
};

export default Home;
