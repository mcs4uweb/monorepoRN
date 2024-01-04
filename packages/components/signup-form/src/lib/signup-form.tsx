import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, FormControl, InputLabel, Input, FormHelperText, Container } from '@mui/material';

interface AddressFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const AddressForm: React.FC = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<AddressFormData>();

  const onSubmit = (data: AddressFormData) => {
    console.log(data);
    // You can handle form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{
              required: 'This field is required',
            }}
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
            rules={{
              required: 'This field is required',
            }}
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
            rules={{
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            }}
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
            rules={{
              required: 'This field is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            }}
            render={({ field }) => <Input type="password" {...field} />}
          />
          <FormHelperText error>{errors.password && errors.password.message}</FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default AddressForm;
