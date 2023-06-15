import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from '@mui/material';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16, // Adjust the gap value as per your requirement
  },
  submitButton: {
    marginTop: 16, // Adjust the marginTop value as per your requirement
  },
});

const countries = [
  { code: 'us', name: 'United States' },
  { code: 'ca', name: 'Canada' },
  { code: 'uk', name: 'United Kingdom' },
  // Add more countries as needed
];

const prefixes = [
  { code: '+1', name: 'USA (+1)' },
  { code: '+44', name: 'UK (+44)' },
  // Add more prefixes as needed
];

const RegistrationForm = () => {
  const classes = useStyles();
  const [country, setCountry] = useState('');
  const [prefix, setPrefix] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    setCountry(event.target.value);
  };

  const handlePrefixChange = (event: SelectChangeEvent<string>) => {
    setPrefix(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form submission or validation logic here
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          value={country}
          onChange={handleCountryChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {countries.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <FormControl>
        <InputLabel id="prefix-label">Prefix</InputLabel>
        <Select
          labelId="prefix-label"
          value={prefix}
          onChange={handlePrefixChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {prefixes.map((prefix) => (
            <MenuItem key={prefix.code} value={prefix.code}>
              {prefix.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Mobile"
        value={mobile}
        onChange={(event) => setMobile(event.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default RegistrationForm;
