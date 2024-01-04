import NxWelcome from './nx-welcome';
import {Button, Stack, Typography, Checkbox, Avatar, TextField} from '@mui/material';
import {AddressForm} from '@aeries/signup-form';

function App() {
  return (
    <Stack sx={{alignItems: "center"}}>
      <Typography variant="h5" sx={{p: 2}}>Adding few MUI component to check support with app-shell</Typography>
      <Stack flexDirection="row" sx={{gap: 3, alignItems: 'center'}}>
      <Avatar sx={{height: 100, width: 100}} alt="Dog" src="https://png2.cleanpng.com/sh/7a5ee2185ca53be976172b56f3857741/L0KzQYm3VcEzN5ZofZH0aYP2gLBuTgJmaZR5RdxqdnH2c8PwkQQudJpnitN7eT3qecXvlfIuPZJrT6JuM3O4c4i6hMUvPWM4UaMBNEi0RYO9UcQxPGg7S6kDNz7zfri=/kisspng-react-javascript-library-github-5af70e3c5c73d5.5239164815261404763787.png" />
      <Button variant="contained">MUI Button</Button>
      <Checkbox defaultChecked />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>
      <AddressForm/>
      <NxWelcome title="react-mf" />
    </Stack>
  );
}

export default App;
