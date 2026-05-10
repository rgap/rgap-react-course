import { redirect } from "react-router-dom";

// The Action function receives the Request object containing the form data
export const contactAction = async ({ request }) => {
  console.log("Action triggered!");

  // 1. Extract the FormData from the request
  const formData = await request.formData();

  // 2. We can read individual inputs using their "name" attribute!
  const email = formData.get("email");
  const message = formData.get("message");

  console.log(`Sending email to backend: ${email}`);
  console.log(`Message: ${message}`);

  // 3. Fake API call
  await new Promise(res => setTimeout(res, 2000));
  console.log("Message sent successfully!");

  // 4. In actions, it is extremely common to redirect the user 
  // away from the form once the submission is complete.
  // React Router provides a `redirect()` utility specifically for this!
  return redirect("/?success=true");
};
