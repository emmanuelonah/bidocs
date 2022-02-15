import styled from 'styled-components';

const Container = styled.div`
  min-width: ${(props) => props.theme.size.pageMinWidth};
  max-width: ${(props) => props.theme.size.pageMaxWidth};
  margin: 0 auto;
`;

export { Container };
