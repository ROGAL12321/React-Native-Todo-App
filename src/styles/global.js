import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {width} = Dimensions.get('window');
const PADDING = 20;

export default EStyleSheet.build({
  $workableScreen: width - PADDING * 2,
  $mainAccent: 'tomato',
});
