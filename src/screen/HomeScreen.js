import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {
  BellIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid';
import {themeColors} from '../constants/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {categories, coffeeItems} from '../constants';
import Carousel from 'react-native-reanimated-carousel';
import CoffeeCard from '../components/CoffeeCard';

const {height, width} = Dimensions.get('window');

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require('../../assets/images/beansBackgroundone.jpg')}
        className="w-full absolute -top-5 opacity-10"
        style={{height: 130}}
      />
      <SafeAreaView className="flex-1 pt-2">
        {/* avatar amd bell icon */}

        <View className="px-4 flex-row justify-between items-center">
          {/* <Image
            source={require('../../assets/images/avatar.png')}
            className="h-7 w-7 rounded-full"
          /> */}
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className="text-base font-semibold">New York, NYC</Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>

        {/* search bar */}

        <View className="mx-5 mt-10">
          <View className="flex-row justify-center items-center rounded-full p-0.5 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-2 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{backgroundColor: themeColors.bgLight}}>
              <MagnifyingGlassIcon size="20" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* categories */}

        <View className="px-5 mt-4">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            className="overflow-visible"
            renderItem={({item}) => {
              isActive = item.id == activeCategory;
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : 'rgba(0,0,0,0.07)',
                  }}
                  className="p-3 px-5 mr-2 rounded-full ">
                  <Text className={'font-semibold ' + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* coffee cards */}

        <View className="mt-14 py-2 ">
          <Carousel
            loop={true}
            width={width}
            height={300}
            autoPlay={true}
            data={coffeeItems}
            renderItem={({item}) => <CoffeeCard item={item} />}
            scrollAnimationDuration={1000}
            style={{
              overflow: 'visible',
              marginLeft: width / 5,
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
