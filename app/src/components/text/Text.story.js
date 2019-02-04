import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { View } from 'react-native';
import { Text } from './Text';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (<Text>A simple text.</Text>))
  .add('style', () => (<View>
    <Text>A simple text.</Text>
    <Text italic>A simple text. italic</Text>
    <Text bold>A simple text. bold</Text>
  </View>))
  .add('color', () => (<View>
    <Text>A simple text.</Text>
    <Text black>A simple text. black</Text>
    <Text white>A simple text. white</Text>
    <Text lightGrey>A simple text. lightGrey</Text>
    <Text primary>A simple text. primary</Text>
    <Text error>A simple text. error</Text>
    <Text light>A simple text. light</Text>
  </View>))
  .add('size', () => (<View>
    <Text>A simple text.</Text>
    <Text xxxsmall>A simple text. xxxsmall</Text>
    <Text xxsmall>A simple text. xxsmall</Text>
    <Text xsmall>A simple text. xsmall</Text>
    <Text small>A simple text. small</Text>
    <Text medium>A simple text. medium</Text>
    <Text large>A simple text. large</Text>
    <Text xlarge>A simple text. xlarge</Text>
    <Text xxlarge>A simple text. xxlarge</Text>
  </View>))
  .add('alignment', () => (<View>
    <Text>A simple text.</Text>
    <Text left>A simple text. left</Text>
    <Text right>A simple text. right</Text>
    <Text center>A simple text. center</Text>
  </View>))
  .add('uppercase', () => (<Text uppercase>A simple text. uppercase</Text>));
