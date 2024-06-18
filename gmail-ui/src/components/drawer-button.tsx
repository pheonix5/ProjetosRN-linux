import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, View, Text } from "react-native";
import clsx from "clsx";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap

type DrawerButtonProps = PressableProps & {
  title: string ,
  isFocused?: boolean,
  isDivider?: boolean,
  iconName: IconNameProps,
  notifications?: number
}

export function DrawerButton({ title, isFocused, isDivider, notifications, iconName, ...rest }: DrawerButtonProps) {
  

  return (
    <Pressable className={clsx("py-2 w-full", {
      "border-b ml-10 border-gray-400": isDivider,
    })} {...rest}
    >
      <View className={
        clsx("flex-row items-center gap-4 h-14 px-6 -ml-2 w-full", {
          "-ml-12": isDivider,
          "bg-orange-800 rounded-r-full": isFocused
        })
      }>

        <MaterialIcons name={iconName} size={20} color={isFocused ? colors.orange[300] : colors.gray[400]} />
        <Text className={ "font-subtitle text-base flex-1"} style={{ color: isFocused ? '#F6AEA9' : "#FFF" }}>
          {title}
        </Text>

        <Text className={
          clsx("text-gray-400 text-sm font-body", {
            "text-orange-300": isFocused
          })
        }>
          {notifications}
        </Text>
      </View>
    </Pressable>
  )
}