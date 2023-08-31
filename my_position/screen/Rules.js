import { View, Text } from 'react-native';
import i18n from '../i18n.js';
export default function Rules() {
  return (
    <View style={{margin: 20}}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>{i18n('rulesTitle')} :</Text>
      <Text>
        {i18n('rules')}
      </Text>
    </View>
  )
};
