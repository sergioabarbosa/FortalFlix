import styled from "styled-components";

export const BodyS = styled.body`
  align-items: center;
  background-image: ${(props) => props.backgrounded ? 'red' : ''};
  border-radius: 3px;
  display: flex;
  height: 100%;
  text-align: center;


`;

export const HeaderS = styled.header`
  background-color: ${(props) => props.painted ? 'grey' : ''};
  border-radius: 3px;
  color: white;
  height: 100px;
  text-align: center;


`;

export const FooterS = styled.footer`
  background-color: ${(props) => props.background};
  /* background-color: red; */
  border-top: 1px solid #333;
  bottom: 0;
  left: 0;
  height: 40px;
  position: fixed;
  width: 100%;

`;

export const InputS = styled.input`
  background-color: ${(props) => props.background};
  border-radius: 3px;
  color: red;
  display: flex;
  margin: auto;
  text-align: center;

`;

export const ButtonInputS = styled.button`
  background-color: ${(props) => props.background};
  border-radius: 3px;
  color: red;
  display: flex;
  margin: auto;
  text-align: center;

`;

