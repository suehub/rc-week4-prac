import styled from 'styled-components'; 
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TitleWrapper>
        <h1 className='title'>로그인 페이지</h1>
      </TitleWrapper>
      <ButtonWrapper>
        <Button primary>로그인</Button> {/* props 전달 */}
        <Button>회원가입</Button>
      </ButtonWrapper>
      
      <ButtonWrapper>
        <TomatoButton primary>로그인</TomatoButton>
        <TomatoButton>회원가입</TomatoButton>
        <Link to='/'>App.js</Link>
        <StyledLink to='/'>App.js</StyledLink>
        <Input defaultValue="inputColor 없음" type="text" />
        <Input defaultValue="inputColor 있음" inputColor="rebeccapurple" type="text" />
      </ButtonWrapper>      
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #333;
  margin-top: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;

const Button = styled.button` // props 전달받아 조건부 스타일링
  display: block;
  width: 320px;
  height: 54px;
  margin-bottom: 10px;
  padding: 0px 10px;
  border: ${props => props.primary ? "0px none" : "1px solid rgb(95, 0, 128)"}; 
  border-radius: 3px;
  background: ${props => props.primary ? "rgb(95, 0, 128)" : "#fff"}; 
  color: ${props => props.primary ? "#fff" : "rgb(95, 0, 128)"};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const TomatoButton = styled(Button)` // 기존 스타일드 컴포넌트 overriding하여 스타일링
  background: ${props => props.primary ? "tomato" : "#fff"}; 
  color: ${props => props.primary ? "#fff" : "tomato"};
  border: ${props => props.primary ? "0px none" : "1px solid tomato"}; 
`;

const StyledLink = styled(Link)`
  margin-top: 20px;
  color: tomato;
  font-weight: bold;
`;

const Input = styled.input` // props 전달 default 값 설정
  padding: 0.5em;
  margin-top: 10px;
  color: ${props => props.inputColor || "palevioletred"}; // props 값 없으면 
  background: #eee;
  border: none;
  border-radius: 3px;
`;

const TitleWrapper = styled.section` 
  padding: 2em;
  background: #eee;
  text-align: center;

  .tite{  // styled component 안에서 className, id, tagName 참조 가능
    font-size: 1.5em;
    color: #333;
    margin-top: 30p
  }
`;