import { StyleSheet } from 'react-native'
import color from '../../contains/color'

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: color.white,
        marginBottom: 16,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderLeftWidth: 3,
        borderLeftColor: color.primary,
        display: 'flex',
        alignItems: 'center'
    },
    square: {
        height: 56,
        width: 56,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    even: {
        backgroundColor: color.primary
    },
    odd: {
        backgroundColor: color.red
    },
    number: {
        fontSize: 16,
        fontWeight: '700',
        color: color.white
    },
    content: {
        width: '74%',
        fontSize: 16,
        paddingVertical: 20,
        paddingHorizontal: 16
    }
})

export default styles