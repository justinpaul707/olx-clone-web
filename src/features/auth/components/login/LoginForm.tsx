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
  Google as GoogleIcon,
  Facebook as FacebookIcon 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useForm } from '@tanstack/react-form';
import { useDispatch, useSelector } from "react-redux";
import { login } from '@app/features/auth/store/authThunk';
import type { AppDispatch, RootState } from '@app/app/store/store';
import { loginSchema, type LoginFormData } from '@app/features/auth/utils/validationSchemas';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  padding: theme.spacing(1.5, 2),
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
    borderColor: theme.palette.primary.main,
  },
}));

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading: loading, error } = useSelector((state: RootState) => state.auth);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    } as LoginFormData,
    validators: {
      onChange: loginSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const result = await dispatch(login(value));
        if (login.fulfilled.match(result)) {
          navigate('/');
          toast.success('Logged in successfully!');
        }
      } catch (err) {
        console.error('Login error:', err);
      }
    },
  });

  const handleSocialLogin = (provider: string) => {
    alert(`${provider} login to be implemented!`);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error.message || 'Login failed. Please try again.'}
        </Alert>
      )}

      <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
        <SocialButton
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={() => handleSocialLogin('Google')}
          disabled={loading}
        >
          Google
        </SocialButton>
        <SocialButton
          fullWidth
          variant="outlined"
          startIcon={<FacebookIcon />}
          onClick={() => handleSocialLogin('Facebook')}
          disabled={loading}
        >
          Facebook
        </SocialButton>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
        Or continue with email
      </Typography>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="email"
          validators={{
            onBlur: loginSchema.shape.email,
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
              disabled={loading}
              error={!!field.state.meta.errors.length}
              helperText={field.state.meta.errors[0]?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ mt: 1 }}
            />
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onBlur: loginSchema.shape.password,
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
              disabled={loading}
              error={!!field.state.meta.errors.length}
              helperText={field.state.meta.errors[0]?.message}
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
                      disabled={loading}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        </form.Field>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mt: 1,
          mb: 2 
        }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loading}
                size="small"
              />
            }
            label={
              <Typography variant="body2" color="text.secondary">
                Remember me
              </Typography>
            }
          />
          <Link 
            href="#" 
            variant="body2" 
            color="primary"
            sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Forgot Password?
          </Link>
        </Box>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={!canSubmit || isSubmitting || loading}
              sx={{ 
                mb: 2,
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)',
                },
                '&:disabled': {
                  background: '#e0e0e0',
                }
              }}
            >
              {(isSubmitting) ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  Signing in...
                </Box>
              ) : (
                'Sign In'
              )}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <Typography variant="body2" align="center" color="text.secondary">
        Don't have an account?{' '}
        <Link 
          href="/auth/signup" 
          color="primary"
          sx={{ 
            textDecoration: 'none', 
            fontWeight: 600,
            '&:hover': { textDecoration: 'underline' } 
          }}
        >
          Create one now
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
