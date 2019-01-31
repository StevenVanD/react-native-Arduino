import React from "react";
import { ActivityIndicator, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Colors } from "../../../../shared/utils";
import { Translations } from "../../utils";
import { Text, ListItem } from "../../components";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text center style={styles.lead}>
          hey
        </Text>
        <FlatList
          data={["dfgdfg", "zerzer", "sdffds"]}
          renderItem={({ item }) => <ListItem />}
        />
      </View>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;