import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class LoopTextClass extends PureComponent {
  state = {
    count: 0
  };
  animationValue = new Animated.Value(0);
  componentDidMount() {
    this.fadeInOut();
  }
  fadeInOut = () => {
    const { delay, duration, textArray } = this.props;
    Animated.sequence([
      Animated.timing(this.animationValue, {
        delay: 200,
        duration: duration,
        toValue: 0.5,
        useNativeDriver: true,
      }),
      Animated.timing(this.animationValue, {
        delay: delay,
        duration: duration,
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.setState(prevState => ({
        count: prevState.count + 1 < textArray.length ?
          prevState.count + 1 : 0
      }))
      this.animationValue.setValue(0);
      this.fadeInOut();
    });
  };
  render() {
    const { style, textArray } = this.props;
    const { count } = this.state;

    return (
      <Animated.Text style={[
        style,
        {
          opacity: this.animationValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0],
          }),
          transform: [
            {
              translateY: this.animationValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [-20, 0, 20],
              }),
            },
          ],
        },
      ]}
      >
        {textArray[count]}
      </Animated.Text>
    );
  }
}

LoopTextClass.defaultProps = {
  delay: 4000,
  duration: 1000,
  style: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  }
};
LoopTextClass.propTypes = {
  textArray: PropTypes.array.isRequired,
  style: PropTypes.any,
  delay: PropTypes.number,
  duration: PropTypes.number,
};
export default LoopTextClass;
