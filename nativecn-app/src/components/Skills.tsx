import { View } from "react-native";
import { Title } from "@/components/Title";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./Badge";

export function Skills(){
  return (
      <View className="w-full">

        <Title>Skills</Title>

        <View className="flex-row w-full flex-wrap gap-3">
          {
            SKILLS.map((skill, index) => (
                <Badge key={skill.name} label={skill.name} icon={skill.icon}/>
              ))
          }
        </View>
      </View>
    )
}