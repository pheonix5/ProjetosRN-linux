import { VStack, Heading, Center } from 'native-base';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { useForm, Controller } from 'react-hook-form'

type FormDataProps = {
  name: string;
  email: String;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object ({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup.string().required("Informe a senha").min(6, "A senha deve ter no mínimo 6 caracteres"),
  password_confirm: yup.string().oneOf([yup.ref('password')], "As senhas não coincidem").required("Confirme a senha")
});

export function SingUp() {


  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver<FormDataProps>(signUpSchema)
  });

  function handleSignUp(data: FormDataProps) {
    console.log(data);

  }


  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={24} >
          Crie sua conta
        </Heading>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <Input
              placeholder='Nome'
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder='E-mail'
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input
              placeholder='Senha'
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange } }) => (
            <Input
              placeholder='Confirme a senha'
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />

        <Button title='Cadastrar' onPress={handleSubmit(handleSignUp)} />
      </Center>
    </VStack>
  );
}