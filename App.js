import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

class App extends Component {
  render(){
    return <WebView source={{ uri: 'https://onestreetshop.com/' }} />;
  }
};

export default App;
