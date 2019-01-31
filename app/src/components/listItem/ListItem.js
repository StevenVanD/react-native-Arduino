import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Text } from "./../index";

class ComponentName extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>
          hey
        </Text>
      </View>
    );
  }
}

ComponentName.propTypes = {};

ComponentName.defaultProps = {};

export default ComponentName;