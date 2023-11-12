import { StyleSheet } from 'react-native'
import color from './contains/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    body: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 18
    },
    header: {
        fontSize: 32,
        color: color.primary,
        fontWeight: '600',
        marginBottom: 20
    }
})

export default styles