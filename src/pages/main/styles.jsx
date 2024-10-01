import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
    },

    containerHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 40,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 10
    },

    containerHeaderText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500'
    }
})