import React from 'react';
import { Text, View , Image  } from 'react-native';

export default class TransactionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal',
    }
  }

  getCameraPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermissions: status === 'granted',
      buttonState:'clicked',
    })
  }
  render() {
    const hasCameraPermissions = this.state.hasCameraPermissions
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <Imagestyle styles={styles.imageIcon} source={{
            uri:
              'camera.jpg',
          }}
        />
        <Text style={styles.text}> 
        {hasCameraPermissions === true? this.state.scannedData:"requestCameraPermissions"}
        </Text>
        <TouchableOpacity onPress={this.getCameraPermissions} style={styles.ScanButton}><Text style={styles.text}>Scan QR code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = styleSheet.create({
  text:
  {
    textDecorationLine: 'underLine',

  },
  ScanButton:
  {
    backgroundColor: 'red',

  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },


});