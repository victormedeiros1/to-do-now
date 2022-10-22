import { ContainerStyles } from './styles';

const Container = ({ children, className }) => {
  return <ContainerStyles className={className}>{children}</ContainerStyles>;
};

export default Container;
