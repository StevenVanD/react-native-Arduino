import React from "react";
import { View } from "react-native";
// import PropTypes from "prop-types";
import { Text } from "../text/Text";

class ListItem extends React.PureComponent {
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

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;