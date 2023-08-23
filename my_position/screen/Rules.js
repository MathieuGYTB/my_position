import { View, Text } from 'react-native';

export  default function Rules() {
  return (
    <View style={{margin: 20}}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>{i18n.t('rulesTitle')} :</Text>
      <Text>
        {i18n.t('rules')}
      </Text>
    </View>
  )
};
