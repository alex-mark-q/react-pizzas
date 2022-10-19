import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: self-start;
  justify-content: space-between;
  height: 50vh;
`
export const List = styled.div`
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const Block = styled.div`
	display: flex;
	flex-direction: row;
	gap: 35px;
  flex-wrap: nowrap;
  height: 100%;
  align-items: center;
`
export const Size = styled.div`
	margin-top: 15px;
`
export const Image = styled.img`
  height: 90px;
  width: 90px;
`
export const Title = styled.div`
  text-transform: uppercase;
  font-size: 26px;
  text-align: left;
  margin: 15px 0 15px;
`
export const Cal = styled.span`
`
export const Price = styled.span`
  margin-left: 15px;
`
export const Info = styled.div`
`
export const Text = styled.span`
`
export const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
export const Hero = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`

export const DoughAndIngredients = styled.div`
  border-radius: 10px;
  text-align: center;
  width: 110px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  img {
    height: 75px;
    width: 75px;
  }
`

export const Dough = styled.div`
  text-align: center;
`
export const Scale = styled.div`
  background-color: #fff;
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius};
  text-align: center;
`
export const WrapperElement = styled.div`
  width: 180px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212428;
  border-radius: ${({ theme }) => theme.border.radius};
`

export const IngredientItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 180px;
  height: 60px;
  background-color: #212428;
  border-radius: ${({ theme }) => theme.border.radius};
`
export const WrapperIng = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 35px;
  border-radius: 10px;
  flex-wrap: wrap;
  width: inherit;
  width: 400px;
`
export const IngredientEmptyItem = styled.div`
`
export const IngredientWrapp = styled.div`
  background-color: #fff;
  width: 180px;
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius};
  text-align: center;
  img {
    width: 60px;
    height: 55px;
  }
`
export const IngredientItemClose = styled.div `
  cursor: pointer;
  background: #E53934;
  position: absolute;
  z-index: 2;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20px;
  flex: 0 0 20px;
  height: 27px;
  width: 27px;
  font-size: .70rem;
  top: -8px;
  border-radius: 100%;
  font-weight: 900;
  line-height: 155%;
  text-align: center;
  color: #fff;
  right: 12px;
  transform: translate(90%, 10%);
`
export const Link = styled.a`
  width: 32px;
  height: 32px;
  cursor: pointer;
  text-decoration: none;
  outline: 0;
  touch-action: manipulation;
  :before, :after {
    position: absolute;
    top: 4px;
    left: 13px;
    content: ' ';
    height: 18px;
    width: 2px;
    background-color: #333;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`