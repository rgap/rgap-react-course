export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  // We create an object to hold our validation errors
  const errors = {};

  // Form Validation Logic
  if (!username || username.length < 4) {
    errors.username = "Username must be at least 4 characters long.";
  }

  if (!password || password.length < 7) {
    errors.password = "Password must be at least 7 characters long.";
  }

  // If there are any errors, we RETURN them to the component!
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // Simulate hitting an API
  await new Promise(res => setTimeout(res, 1000));

  // Simulate a bad password from the server
  if (username !== "admin" || password !== "password123") {
    return { error: "Invalid username or password. (Hint: use admin / password123)" };
  }

  // Success!
  return { success: true };
};
