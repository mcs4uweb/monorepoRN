import React from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { FormControl, InputLabel, Input, FormHelperText, Container } from '@mui/material';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FormProps {
  registerOptMeta?: Record<keyof SignUpFormData, RegisterOptions>
}

export const SignUpForm: React.FC<FormProps> = (props) => {
  const { registerOptMeta: {firstName: firstNameRules, lastName: lastNameRules, email: emailRules, password: passwordRules} = {} } = props;
  const { control, formState: { errors } } = useFormContext<SignUpFormData>();

  return (
    <Container maxWidth="sm">
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={firstNameRules}
            render={({ field }) => <Input {...field} />}
          />
          <FormHelperText error>{errors.firstName && errors.firstName.message}</FormHelperText>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={lastNameRules}
            render={({ field }) => <Input {...field} />}
          />
          <FormHelperText error>{errors.lastName && errors.lastName.message}</FormHelperText>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={emailRules}
            render={({ field }) => <Input {...field} />}
          />
          <FormHelperText error>{errors.email && errors.email.message}</FormHelperText>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={passwordRules}
            render={({ field }) => <Input type="password" {...field} />}
          />
          <FormHelperText error>{errors.password && errors.password.message}</FormHelperText>
        </FormControl>
    </Container>
  );
};

export default SignUpForm;
