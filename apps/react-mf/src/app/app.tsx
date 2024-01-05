import NxWelcome from './nx-welcome';
import {
  Button,
  Stack,
  Typography,
  Checkbox,
  Avatar,
  TextField,
} from '@mui/material';
import { SignUpForm } from '@aeries/signup-form';
import { FormProvider, useForm } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function App() {
  const staffFormMethods = useForm<FormData>();
  const studentFormMethods = useForm<FormData>();
  const { handleSubmit: handleStaffSubmit } = staffFormMethods;
  const { handleSubmit: handleStudentSubmit } = studentFormMethods;

  const onStaffSubmit = (data: FormData) => {
    console.log('Staff SignUp Data', data);
    // You can handle form submission logic here
  };

  const onStudentSubmit = (data: FormData) => {
    console.log('Student SignUp Data', data);
    // You can handle form submission logic here
  };

  const StaffSignUpForm = () => (
    <form onSubmit={handleStaffSubmit(onStaffSubmit)}>
      <SignUpForm
        registerOptMeta={{
          firstName: {
            required: 'Staff First Name field is required',
          },
          lastName: {
            required: 'Staff Last Name field is required',
          },
          email: {
            required: 'Staff Email field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          },
          password: {
            required: 'Password field is required',
            minLength: {
              value: 5,
              message: 'Password must be at least 5 characters long',
            },
          },
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Staff Sign Up
      </Button>
    </form>
  );

  const StudentSignUpForm = () => (
    <form onSubmit={handleStudentSubmit(onStudentSubmit)}>
      <SignUpForm
        registerOptMeta={{
          firstName: {
            required: 'Student First Name field is required',
          },
          lastName: {
            required: 'Student Last Name field is required',
          },
          email: {},
          password: {
            required: 'Password field is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          },
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Student Sign Up
      </Button>
    </form>
  );

  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Typography variant="h5" sx={{ p: 2 }}>
        Adding few MUI component to check support with app-shell
      </Typography>
      <Stack flexDirection="row" sx={{ gap: 3, alignItems: 'center' }}>
        <Avatar
          sx={{ height: 100, width: 100 }}
          alt="Dog"
          src="https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
        />
        <Button variant="contained">MUI Button</Button>
        <Checkbox defaultChecked />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>
      <Stack flexDirection="row" columnGap={15}>
        <FormProvider {...staffFormMethods}>
          <StaffSignUpForm />
        </FormProvider>
        <FormProvider {...studentFormMethods}>
          <StudentSignUpForm />
        </FormProvider>
      </Stack>
      <NxWelcome title="react-mf" />
    </Stack>
  );
}

export default App;
