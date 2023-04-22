import React from 'react';
import {StyleSheet} from 'react-native';
import Block from '../../../../AppChamSocThuCung/src/components/Block';
import Text from '../../../../AppChamSocThuCung/src/components/Text';
import {useNavigation} from '@react-navigation/native';
import MTIcon from 'react-native-vector-icons/MaterialIcons';

export default function Header({back, title, rightBtn, leftBtn}) {
  const navigation = useNavigation();

  return (
    <Block
      justifyCenter
      width={'100%'}
      height={50}
      paddingHorizontal={10}
      // backgroundColor={'#2296f3'}
      >
      <Button
        row
        justifyCenter={back ? false : true}
        alignCenter
        space={back && !leftBtn ? null :'between'}
        onPress={() => back ? navigation.goBack() : null}>
        {leftBtn ? leftBtn : (back ? (
          <MTIcon name={'chevron-left'} color={'#FFF'} size={25} />
        ) : rightBtn ? (
          <Block />
        ) : null)}
        <Text size={17} color={'black'} bold uppercase>
          {title}
        </Text>
        {rightBtn ?? null}
      </Button>
    </Block>
  );
}
