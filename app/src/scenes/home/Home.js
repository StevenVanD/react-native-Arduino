import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import { Text, ListItem } from "../../components";

class Home extends React.Component {
  renderListItem = () => {
    return (<ListItem />);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text center style={styles.lead}>
          hey
        </Text>
        <FlatList
          data={["dfgdfg", "zerzer", "sdffds"]}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;