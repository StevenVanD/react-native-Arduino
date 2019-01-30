import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.styles';
import { Colors } from '../../../../shared/utils';
import { Translations } from '../../utils';
import { Text, TouchableFeedback } from '../../components';

class Home extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <Text center style={styles.lead}  >hey</Text>
      </View>
    );
  }
}

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
