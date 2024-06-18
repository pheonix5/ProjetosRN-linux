import { Button as ButtonBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonBase
      w="full"
      h={16}
      bg="green.700"
      _pressed={{
        bg: "green.800"
      }}

      {...rest}
    >
      <Text
      color="white"
      fontSize="md"
      >
        {title}
      </Text>
    </ButtonBase>
  );
}