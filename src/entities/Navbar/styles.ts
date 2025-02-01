import styled from 'styled-components';

type IconProps = {
  as: React.ElementType;
};

export const Nav = styled.div`
  width: 100%;
  height: 63px;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  padding: 20px 50px;
  font-size: 12px;
  color: #aeaeae;
  background-color: rgba(248, 248, 250, 0.411);
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -8px;
  position: relative;
  transition: color 0.3s ease;
  &:hover {
    color: #777777;
  }
`;

export const Icon = styled.div<IconProps>`
  font-size: 24px;
`;

export const Span = styled.span<{ left: string }>`
  display: block;
  position: absolute;
  left: ${(props) => props.left};
  margin-top: 1px;
`;
