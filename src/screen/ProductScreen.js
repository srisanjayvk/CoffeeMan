import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  elevation,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ShoppingBag} from 'react-native-feather';

import {
  ArrowLeftCircleIcon,
  MinusIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';

import {useNavigation} from '@react-navigation/native';
import {HeartIcon, StarIcon} from 'react-native-heroicons/solid';
import {themeColors} from '../constants/theme';

export default function ProductScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [size, setSize] = useState('small');

  return (
    <ScrollView>
      <View className="flex-1">
        <StatusBar style="light" />
        <Image
          source={require('../../assets/images/beansBackgroundtwo.jpg')}
          style={{
            height: 230,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
          className="w-full absolute"
        />
        <SafeAreaView className="space-y-4">
          <View className="mx-3 mt-2 flex-row justify-between items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftCircleIcon size="40" strokeWidth={1.2} color="white" />
            </TouchableOpacity>

            <TouchableOpacity className="rounded-full border-2 border-white p-2">
              <HeartIcon size="20" color="white" />
            </TouchableOpacity>
          </View>

          <View
            className="flex-row justify-center"
            style={{
              shadowColor: themeColors.bgDark,
              shadowRadius: 30,
              shadowOffset: {width: 0, height: 30},
              shadowOpacity: 0.9,
              elevation: 5,
            }}>
            <Image source={item.image} className="h-52 w-52" />
          </View>
          <View
            style={{backgroundColor: themeColors.bgLight}}
            className="flex-row items-center mx-4 rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90">
            <StarIcon size="15" color="white" />
            <Text className="text-base font-semibold text-white">
              {item.stars}
            </Text>
          </View>

          <View className="mx-4 flex-row justify-between items-center">
            <Text
              style={{color: themeColors.text}}
              className="text-2xl font-semibold underline-offset-1">
              {item.name}
            </Text>
            <Text
              style={{color: themeColors.text}}
              className="text-base font-semibold">
              $ {item.price}
            </Text>
          </View>

          <View className="mx-4 space-y-2">
            <Text
              style={{color: themeColors.text}}
              className="text-base font-bold">
              Coffee Size
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => setSize('small')}
                className="p-2 px-6 rounded-full"
                style={{
                  backgroundColor:
                    size == 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
                }}>
                <Text
                  className={size == 'small' ? 'text-white' : 'text-gray-700'}>
                  Small
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSize('medium')}
                className="p-2 px-6 rounded-full"
                style={{
                  backgroundColor:
                    size == 'medium' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
                }}>
                <Text
                  className={size == 'medium' ? 'text-white' : 'text-gray-700'}>
                  Medium
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSize('large')}
                className="p-2 px-6 rounded-full"
                style={{
                  backgroundColor:
                    size == 'large' ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
                }}>
                <Text
                  className={size == 'large' ? 'text-white' : 'text-gray-700'}>
                  Large
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mx-4 space-y-2 h-24">
            <Text
              style={{color: themeColors.text}}
              className="text-base font-bold">
              About
            </Text>
            <Text className="text-gray-600 text-left"> {item.desc} </Text>
          </View>

          <View className="flex-row justify-between items-center mx-4 mb-2">
            <View className="flex-row items-center space-x-1">
              <Text className="text-base text-gray-700 font-semibold opacity-60">
                Volume
              </Text>
              <Text className="text-base text-black font-semibold">
                {item.volume}
              </Text>
            </View>

            <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
              <TouchableOpacity>
                <MinusIcon size="18" strokeWidth={2} color={themeColors.text} />
              </TouchableOpacity>
              <Text
                className="font-extrabold text-lg"
                style={{color: themeColors.text}}>
                2
              </Text>
              <TouchableOpacity>
                <PlusIcon size="18" strokeWidth={3} color={themeColors.text} />
              </TouchableOpacity>
            </View>
          </View>

          {/* buy now button */}
          <View className="flex-row justify-between px-4 pb-4">
            <TouchableOpacity className="p-4 rounded-full border border-gray-400">
              <ShoppingBag size="30" color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: themeColors.bgLight}}
              className="p-4 rounded-full flex-1 ml-4">
              <Text className="text-center text-white text-base font-semibold">
                Buy now
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}
