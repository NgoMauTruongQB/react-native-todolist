import { StyleSheet } from 'react-native'
import color from '../../contains/color'

const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 20,
        paddingHorizontal: 20
    },
    iconWrapper: {
        backgroundColor: color.primary,
        width: 44,
        height: 44,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: color.white,
        fontSize: 24
    }
})

export default styles
