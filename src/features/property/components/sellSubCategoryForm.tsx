
import { FormControl, FormHelperText, FormLabel, Grid, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useForm } from '@tanstack/react-form';
import { useValidation } from '@app/hooks/useValidation';
import { carFormValidation } from '@app/features/property/validation/sellCarFormValidation';


const SellSubCategoryForm = () => {
  const validation = useValidation(carFormValidation);
  const form = useForm({
    defaultValues: {
      brand: '',
      year: '',
      fuelType: '',
      transmission: '',
      kilometers: '',
      owner: '',
      title: '',
    },
    onSubmit: async ({ value }) => {
      const formValidation = validation.validateForm(value);
      if (formValidation.isValid) {
        console.log('Form submitted:', value);
      } else {
        console.log('Form has validation errors:', formValidation.results);
      }
    },
  });

  const carBrands = [
    { id: 1, name: 'Maruti' },
    { id: 2, name: 'Hyundai' },
    { id: 3, name: 'Honda' },
    { id: 4, name: 'Toyota' },
    { id: 5, name: 'Tata' },
    { id: 6, name: 'Mahindra' },
    { id: 7, name: 'Ford' },
    { id: 8, name: 'Volkswagen' },
    { id: 9, name: 'Renault' },
    { id: 10, name: 'Kia' },
    { id: 11, name: 'Nissan' },
    { id: 12, name: 'Skoda' },
    { id: 13, name: 'MG' },
    { id: 14, name: 'Jeep' },
    { id: 15, name: 'Mercedes-Benz' },
    { id: 16, name: 'BMW' },
    { id: 17, name: 'Audi' },
    { id: 18, name: 'Others' }
  ];

  const fuelTypes = [
    { id: 1, name: 'CNG & Hybrids' },
    { id: 2, name: 'Diesel' },
    { id: 3, name: 'Electric' },
    { id: 4, name: 'Petrol' }
  ];

  const transmissions = ['automatic', 'manual'];

  const owners = [
    { id: 1, name: '1st Owner' },
    { id: 2, name: '2nd Owner' },
    { id: 3, name: '3rd Owner' },
    { id: 4, name: '4th Owner' },
    { id: 5, name: '5+ Owners' }
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      autoComplete="off"
    >
      <Grid container spacing={3} alignItems="flex-start">
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <form.Field
            name="brand"
            validators={{
              onChange: ({ value }) => {
                const result = validation.validateField('brand', value);
                return result.errors[0];
              },
            }}
            children={(field) => (
              <FormControl fullWidth required>
                <InputLabel id="brand-label">Brand</InputLabel>
                <Select
                  labelId="brand-label"
                  value={field.state.value}
                  label="Brand"
                  required
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  error={validation.hasFieldError('brand')}
                >
                  {carBrands.map((b) => (
                    <MenuItem key={b.id} value={b.name}>{b.name}</MenuItem>
                  ))}
                </Select>
                {validation.hasFieldError('brand') && (
                  <FormHelperText error>{validation.getFieldError('brand')}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <form.Field
            name="year"
            validators={{
              onChange: ({ value }) => {
                const result = validation.validateField('year', value);
                return result.errors[0];
              },
            }}
            children={(field) => (
              <TextField
                label="Year"
                type="number"
                inputMode="numeric"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value.replace(/[^0-9]/g, '').slice(0, 4))}
                onBlur={field.handleBlur}
                required
                fullWidth
                error={validation.hasFieldError('year')}
                helperText={validation.hasFieldError('year') ? validation.getFieldError('year') : `${field.state.value.length}/4`}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <form.Field
            name="fuelType"
            validators={{
              onChange: ({ value }) => {
                const result = validation.validateField('fuelType', value);
                return result.errors[0];
              },
            }}
            children={(field) => (
              <FormControl required fullWidth>
                <FormLabel sx={{ mb: 1 }}>Fuel Type</FormLabel>
                <ToggleButtonGroup
                  color="primary"
                  exclusive
                  value={field.state.value}
                  onChange={(_, val) => field.handleChange(val || '')}
                  sx={{ flexWrap: 'wrap' }}
                >
                  {fuelTypes.map((type) => (
                    <ToggleButton key={type.id} value={type.name} sx={{ minWidth: 120 }}>
                      {type.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
                {validation.hasFieldError('fuelType') && (
                  <FormHelperText error>{validation.getFieldError('fuelType')}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <form.Field
            name="transmission"
            validators={{
              onChange: ({ value }) => {
                const result = validation.validateField('transmission', value);
                return result.errors[0];
              },
            }}
            children={(field) => (
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 1 }}>Transmission</FormLabel>
                <ToggleButtonGroup
                  color="primary"
                  exclusive
                  value={field.state.value}
                  onChange={(_, val) => field.handleChange(val || '')}
                  sx={{ flexWrap: 'wrap' }}
                >
                  {transmissions.map((type) => (
                    <ToggleButton key={type} value={type} sx={{ m: 0.5, minWidth: 160 }}>
                      {type}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
                {validation.hasFieldError('transmission') && (
                  <FormHelperText error>{validation.getFieldError('transmission')}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <form.Field
            name="kilometers"
            validators={{
              onChange: ({ value }) => {
                const result = validation.validateField('kilometers', value);
                return result.errors[0];
              },
            }}
            children={(field) => (
              <TextField
                label="Kilometers Driven"
                type="number"
                inputMode="numeric"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                onBlur={field.handleBlur}
                required
                fullWidth
                error={validation.hasFieldError('kilometers')}
                helperText={validation.hasFieldError('kilometers') ? validation.getFieldError('kilometers') : `${field.state.value.length}/6`}
              />
            )}
          />
        </Grid>

        <Grid {...{ item: true, xs: 12, sm: 6, md: 6 }}>
          <form.Field
            name="owner"
            validators={{
              onChange: ({ value }) => {
                const result = validation.validateField('owner', value);
                return result.errors[0];
              },
            }}
            children={(field) => (
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 1 }}>Number of Previous Owners</FormLabel>
                <ToggleButtonGroup
                  color="primary"
                  exclusive
                  value={field.state.value}
                  onChange={(_, val) => field.handleChange(val || '')}
                  sx={{ flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
                >
                  {owners.map((o, idx) => (
                    <ToggleButton
                      key={o.id}
                      value={o.name}
                      sx={{
                        minWidth: 110,
                        whiteSpace: 'nowrap',
                        flex: 1,
                        maxWidth: '100%',
                        ...(idx !== 0 && { ml: 0 })
                      }}
                    >
                      {o.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
                {validation.hasFieldError('owner') && (
                  <FormHelperText error>{validation.getFieldError('owner')}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <form.Field
            name="title"
            validators={{
              onChange: ({ value }) => {
                const result = validation.validateField('title', value);
                return result.errors[0];
              },
            }}
            children={(field) => (
              <FormControl fullWidth required>
                <FormLabel sx={{ mb: 1 }}>
                  Advertisement Title
                  <Typography component="span" sx={{ color: 'primary.main', ml: 2, fontSize: 14, cursor: 'pointer' }}>
                    Get title suggestions
                  </Typography>
                </FormLabel>
                <TextField
                  placeholder="Write a catchy title for your car"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  error={validation.hasFieldError('title')}
                  helperText={validation.hasFieldError('title') ? validation.getFieldError('title') : ''}
                />
              </FormControl>
            )}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SellSubCategoryForm;