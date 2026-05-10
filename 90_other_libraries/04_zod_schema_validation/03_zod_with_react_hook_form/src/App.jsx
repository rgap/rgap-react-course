import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './App.css';

// 1. Define the Zod Schema
const SignUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // This attaches the error to the confirmPassword field
});

function App() {
  // 2. Connect Zod to React Hook Form using zodResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data) => {
    alert("Form Submitted Successfully!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <p style={{ textAlign: 'center' }}>Validated by Zod + React Hook Form</p>
      
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        <div style={{ textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
          <input 
            {...register("username")} 
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }} 
          />
          {errors.username && <p style={{ color: 'red', margin: '0.25rem 0 0', fontSize: '0.875rem' }}>{errors.username.message}</p>}
        </div>

        <div style={{ textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input 
            type="email"
            {...register("email")} 
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }} 
          />
          {errors.email && <p style={{ color: 'red', margin: '0.25rem 0 0', fontSize: '0.875rem' }}>{errors.email.message}</p>}
        </div>

        <div style={{ textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input 
            type="password"
            {...register("password")} 
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }} 
          />
          {errors.password && <p style={{ color: 'red', margin: '0.25rem 0 0', fontSize: '0.875rem' }}>{errors.password.message}</p>}
        </div>

        <div style={{ textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Confirm Password</label>
          <input 
            type="password"
            {...register("confirmPassword")} 
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }} 
          />
          {errors.confirmPassword && <p style={{ color: 'red', margin: '0.25rem 0 0', fontSize: '0.875rem' }}>{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit" style={{ padding: '0.75rem', marginTop: '1rem', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
