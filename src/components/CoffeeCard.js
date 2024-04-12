import {View, Text, Image, elevation} from 'react-native';
import React from 'react';
import {themeColors} from '../constants/theme';
import {PlusIcon, StarIcon} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function CoffeeCard({item}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: 'rgba(140, 83, 25, 0.9)',
        height: 280,
        width: 220,
      }}>
      <View
        style={{
          shadowColor: 'black',
          shadowRadius: 30,
          shadowOffset: {width: 0, height: 70},
          shadowOpacity: 0.8,
          // elevation: 5,
        }}
        className="flex-row justify-center -mt-14 ">
        <Image source={item.image} className="h-32 w-32" />
      </View>

      <View className="px-5 mt-3 space-y-2">
        <Text className="text-2xl text-white font-bold z-10">{item.name}</Text>
        <View
          style={{backgroundColor: 'rgba(255,255,255,0.2)'}}
          className="flex-row items-center rounded-3xl p-0.5 px-3 space-x-1 w-16">
          <StarIcon size="13" color="white" />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="flex-row space-x-1 z-10 mb-6 ">
          <Text className="text-base text-white font-semibold opacity-60">
            Volume
          </Text>
          <Text className="text-base text-white font-semibold ">
            {item.volume}
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: themeColors.bgDark,
            shadowColor: themeColors.bgDark,
            shadowRadius: 25,
            shadowOffset: {width: 0, height: 40},
            shadowOpacity: 0.8,
            // elevation: 16,
          }}
          className="flex-row justify-between items-center">
          <Text className="text-white font-bold text-lg">${item.price}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product', {...item})}
            style={{
              shadowColor: 'black',
              shadowRadius: 40,
              shadowOffset: {width: -20, height: -10},
              shadowOpacity: 1,
              elevation: 30,
            }}
            className="p-3 bg-white rounded-full">
            <PlusIcon size="23" strokeWidth={2} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
