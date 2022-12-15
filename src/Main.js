import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { cartNumState } from './recoil/cart';
import styled from 'styled-components'; 

export default function Cart() {
  return (
    <ParentWrapper>
        <Child1 />
        <Child2/>
    </ParentWrapper>
  );
};

const Child1 = () => {

    const [num, setNum] = useRecoilState(cartNumState);
    const [name, setName] = useState('');

    return(
        <Wrapper>
            <h1>Child1</h1>
            <div>
              <button onClick={() => setNum(num -1)}>-</button>
              <span>{num}</span>
              <button onClick={() => setNum(num +1)}>+</button>
            </div>
        </Wrapper>
    );
};

const Child2 = () => {

  const [num, setNum] = useRecoilState(cartNumState);
  const [name, setName] = useState('');

  return(
      <Wrapper>
          <h1>Child2</h1>
          <div>     
            <span>{num}</span>
          </div>
      </Wrapper>
  );
};



const Wrapper = styled.div` 
  border: 1px solid red;
  background-color: white;
  text-align: center;

  h1{  // styled component 안에서 className, id, tagName 참조 가능
    font-size: 1.5em;
    color: palevioletred;
    margin-top: 30px;
  }
`;

const ParentWrapper = styled(Wrapper)`
  background-color: palevioletred;
  padding: 16px;
`;