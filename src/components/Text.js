import React from 'react';
import {Text, StyleSheet, Animated} from 'react-native';
import {defaultColor, handlePadding, handleMargin, textColor} from './shared';

const Typography = ({
  width,
  uppercase,
  italic,
  flex,
  children,
  animated,
  medium,
  bold,
  light,
  size,
  color,
  center,
  right,
  justify,
  padding,
  margin,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  numberOfLines,
  underline,
  ellipsizeMode,
  style,
  ...props
}) => {
  const textStyle = [
    width && styles.width,
    uppercase && styles.uppercase,
    flex && {flex: 1},
    medium && styles.medium,
    light && styles.regular,
    italic && styles.italic,
    bold && styles.bold,
    !medium && !light && styles.regular,
    size && {fontSize: size},
    color && textColor[color],
    color && !defaultColor[color] && {color: color},
    !color && {color: defaultColor.text},
    center && styles.center,
    underline && styles.underline,
    right && styles.right,
    justify && styles.justify,
    padding && {...handlePadding(padding)},
    margin && {...handleMargin(margin)},
    paddingTop && {paddingTop: paddingTop},
    paddingRight && {paddingRight: paddingRight},
    paddingBottom && {paddingBottom: paddingBottom},
    paddingLeft && {paddingLeft: paddingLeft},
    marginBottom && {marginBottom: marginBottom},
    marginTop && {marginTop: marginTop},
    marginRight && {marginRight: marginRight},
    marginLeft && {marginLeft: marginLeft},
    paddingHorizontal && {paddingHorizontal: paddingHorizontal},
    paddingVertical && {paddingVertical: paddingVertical},
    marginHorizontal && {marginHorizontal: marginHorizontal},
    marginVertical && {marginVertical: marginVertical},
    style,
  ];
  if (animated) {
    return (
      <Animated.Text numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode} style={textStyle} {...props}>
        {children}
      </Animated.Text>
    );
  }
  return (
    <Text numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode} style={textStyle} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
const styles = StyleSheet.create({
  width: {
    width: '100%'
  },
  regular: {
   
  },
  uppercase:{
    textTransform: "uppercase",
  },

  italic:{
    fontStyle: 'italic'
  },
  bold: {
    fontWeight: 'bold'
  },
  medium: {
    
  },
  light: {
    
  },
  center: {
      textAlign : 'center'
  },
  right: {
   
  },
  justify: {
    textAlign: 'justify',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
