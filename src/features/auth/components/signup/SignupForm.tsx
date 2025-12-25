import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Alert,
  CircularProgress,
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  Email, 
  Lock, 
  Person, 
  Google as GoogleIcon,
  Facebook as FacebookIcon 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useForm } from '@tanstack/react-form';
import { type SignupFormData, signupSchema } from '@app/features/auth/utils/validationSchemas';
import { signup } from '@app/features/auth/store/authThunk';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@app/app/store/store';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const SocialButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  padding: theme.spacing(1.5, 2),
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
    borderColor: theme.palette.secondary.main,
  },
}));

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    } as SignupFormData,
    validators: {
      onChange: signupSchema,
    },
    onSubmit: async ({ value }) => {
      setSubmitError('');
      setIsLoading(true);
      
      try {
        const signupData = {
          fullName: value.fullName,
          email: value.email,
          password: value.password
        };
        
        const result = await dispatch(signup(signupData));
        if (signup.fulfilled.match(result)) {
          navigate('/');
          toast.success('User created successfully!');
        } else {
          const errorMessage = result.error?.message || 'Signup failed. Please try again.';
          setSubmitError(errorMessage);
        }
      } catch (error) {
        console.error('Signup error:', error);
        setSubmitError('Failed to create account. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleSocialSignup = (provider: string) => {
    console.log(`${provider} signup clicked`);
    // TODO: Implement social signup
    alert(`${provider} signup to be implemented!`);
  };

  return (
    <Box component="form" onSubmit={(e) => {
      e.preventDefault();
      e.stopPropagation();
      form.handleSubmit();
    }} sx={{ width: '100%' }}>
      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      {/* Social Signup Buttons */}
      <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
        <SocialButton
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={() => handleSocialSignup('Google')}
          disabled={isLoading}
        >
          Google
        </SocialButton>
        <SocialButton
          fullWidth
          variant="outlined"
          startIcon={<FacebookIcon />}
          onClick={() => handleSocialSignup('Facebook')}
          disabled={isLoading}
        >
          Facebook
        </SocialButton>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
        Or continue with email
      </Typography>

      {/* Full Name Field */}
      <form.Field
        name="fullName"
        validators={{
          onBlur: signupSchema.shape.fullName,
        }}
      >
        {(field) => (
          <TextField
            fullWidth
            name={field.name}
            label="Full Name"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            margin="normal"
            required
            disabled={isLoading}
            error={!!field.state.meta.errors.length}
            helperText={field.state.meta.errors[0]?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ mt: 1 }}
          />
        )}
      </form.Field>

      {/* Email Field */}
      <form.Field
        name="email"
        validators={{
          onBlur: signupSchema.shape.email,
        }}
      >
        {(field) => (
          <TextField
            fullWidth
            name={field.name}
            label="Email Address"
            type="email"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            margin="normal"
            required
            disabled={isLoading}
            error={!!field.state.meta.errors.length}
            helperText={field.state.meta.errors[0]?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="action" />
                </InputAdornment>
              ),
            }}
          />
        )}
      </form.Field>

      {/* Password Field */}
      <form.Field
        name="password"
        validators={{
          onBlur: signupSchema.shape.password,
        }}
      >
        {(field) => (
          <TextField
            fullWidth
            name={field.name}
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            margin="normal"
            required
            disabled={isLoading}
            error={!!field.state.meta.errors.length}
            helperText={field.state.meta.errors.length > 0 ? field.state.meta.errors[0]?.message : 'Minimum 6 characters'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    disabled={isLoading}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      </form.Field>

      {/* Confirm Password Field */}
      <form.Field
        name="confirmPassword"
        validators={{
          onChangeListenTo: ['password'],
          onChange: ({ value, fieldApi }) => {
            if (!value) {
              return 'Please confirm your password';
            }
            const password = fieldApi.form.getFieldValue('password');
            if (value !== password) {
              return 'Passwords do not match';
            }
            return undefined;
          },
        }}
      >
        {(field) => (
          <TextField
            fullWidth
            name={field.name}
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            margin="normal"
            required
            disabled={isLoading}
            error={!!field.state.meta.errors.length}
            helperText={field.state.meta.errors.join(', ')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      </form.Field>

      {/* Terms Agreement Checkbox */}
      <form.Field
        name="agreeTerms"
        validators={{
          onBlur: signupSchema.shape.agreeTerms,
        }}
      >
        {(field) => (
          <FormControlLabel
            control={
              <Checkbox
                name={field.name}
                checked={field.state.value}
                onChange={(e) => field.handleChange(e.target.checked)}
                onBlur={field.handleBlur}
                required
                disabled={isLoading}
                size="small"
              />
            }
            label={
              <Typography variant="body2" color="text.secondary">
                I agree to the{' '}
                <Link 
                  href="/terms" 
                  color="secondary"
                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link 
                  href="/privacy" 
                  color="secondary"
                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Privacy Policy
                </Link>
                {field.state.meta.errors.length > 0 && (
                  <Typography variant="caption" color="error" display="block">
                    {field.state.meta.errors[0]?.message}
                  </Typography>
                )}
              </Typography>
            }
            sx={{ mt: 2, mb: 3 }}
          />
        )}
      </form.Field>

      {/* Submit Button */}
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={!canSubmit || isLoading}
            sx={{ 
              mb: 2,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 2,
              background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #FF5252 30%, #FF7043 90%)',
              },
              '&:disabled': {
                background: '#e0e0e0',
              }
            }}
          >
            {isLoading || isSubmitting ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={20} color="inherit" />
                Creating Account...
              </Box>
            ) : (
              'Create Account'
            )}
          </Button>
        )}
      </form.Subscribe>

      <Typography variant="body2" align="center" color="text.secondary">
        Already have an account?{' '}
        <Link 
          href="/login" 
          color="secondary"
          sx={{ 
            textDecoration: 'none', 
            fontWeight: 600,
            '&:hover': { textDecoration: 'underline' } 
          }}
        >
          Sign In
        </Link>
      </Typography>
    </Box>
  );
};

export default SignupForm;
