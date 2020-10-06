import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Title } from './styles';

const OrderCreated: React.FC = () => {
  const { reset } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      reset({
        routes: [
          {
            name: 'Home',
          },
        ],
        index: 0,
      });
    }, 2000);
  }, [reset]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Pedido confirmado!</Title>
    </Container>
  );
};

export default OrderCreated;
