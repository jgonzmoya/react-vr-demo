import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

export default class react_vr_demo extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        {/* <Pano source={asset('snow.jpg')} /> */}
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, 0, -3] }],
          }}
        >
          Fundacion Juanjo torrejon
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('react_vr_demo', () => react_vr_demo);
