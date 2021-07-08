import styled from 'styled-components';

export const Headersection = styled.div`
  position: fixed;
  height: 50px;
  width: 1989px;
  border-bottom: 1px solid lightgray;
  display: flex;
  background-color: white;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
`;

export const Headerleft = styled.div`
  font-size: 20px;
  margin-left: 150px;
`;

export const Headermiddle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 200px;
  font-size: 13px;
  padding: 3px;
  color: #9e9e9e;
  border: 1px solid #eeeeee;
  background-color: #fafafa;
`;

export const Headermiddleinput = styled.div`
  border: none;
  width: 70px;

  text-align: center;
  align-items: center;
`;

export const Headerright = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 200px;
`;
