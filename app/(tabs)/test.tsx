import { ScrollView, Text, View } from "react-native";

export default function TestScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <View className="p-6">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          NativeWind 예시
        </Text>
        <Text className="text-base text-gray-600 dark:text-gray-400 mb-6">
          Tailwind 클래스로 스타일링한 간단한 예시입니다.
        </Text>

        {/* 카드 예시 */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg mb-4">
          <Text className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
            카드 1
          </Text>
          <Text className="text-gray-700 dark:text-gray-300">
            flex, padding, rounded, shadow 등 Tailwind 유틸리티를 그대로 사용할
            수 있습니다.
          </Text>
        </View>

        <View className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg mb-4">
          <Text className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            카드 2
          </Text>
          <Text className="text-gray-700 dark:text-gray-300">
            dark: 접두사로 다크 모드 색상을 따로 지정할 수 있습니다.
          </Text>
        </View>

        {/* 버튼 느낌의 박스 */}
        <View className="flex-row gap-3 mt-2">
          <View className="flex-1 bg-purple-500 rounded-xl py-3 items-center">
            <Text className="text-white font-semibold">Primary</Text>
          </View>
          <View className="flex-1 bg-gray-300 dark:bg-gray-600 rounded-xl py-3 items-center">
            <Text className="text-gray-800 dark:text-gray-200 font-semibold">
              Secondary
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
