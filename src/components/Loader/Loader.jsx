import { ThreeCircles } from 'react-loader-spinner';
import { Container } from 'components/Container/Container.styled';

export const Loader = () => {
  return (
    <Container>
      <ThreeCircles
        height="100"
        width="100"
        color="#4e67f0"
        wrapperStyle={{
          justifyContent: 'center',
          marginTop: 'auto',
          marginLeft: 'auto',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Container>
  );
};
