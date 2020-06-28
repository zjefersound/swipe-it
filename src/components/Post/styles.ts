import { Dimensions, StyleSheet, Platform } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios'? 40 : 0,
        borderBottomColor: '#8888',
        borderBottomWidth: 1,
        backgroundColor: colors.secondary
    },
    header: {
        
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        backgroundColor: colors.secondary3
    }

});

export default styles;