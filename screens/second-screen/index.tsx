import React from 'react'
import {
    View,
    Text,
    Image,
    Button
} from 'react-native'

import randomImage from '../../assets/image.jpg';

export const ShowSomething2 = ({ navigation }: any) => {
    return (
        <>
            <Button title='go to second screen' onPress={() => navigation.navigate('Home')} />

            <Image resizeMethod='resize' resizeMode='contain' source={randomImage} style={{ width: 50, height: 50 }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Second screen here
                </Text>
            </View>
        </>
    )
}


