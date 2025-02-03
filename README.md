📖 README: Two-Step Form Application
🚀 Project Overview
This project is a two-step form built using Next.js, TypeScript, Zustand for state management, and Tailwind CSS for styling. The form includes:

Step 1: User inputs their first name and last name.
Step 2: User enters their phone number with a country code selector.
Validation: Client-side form validation ensures all required fields are filled correctly.
Accessibility (A11Y): ARIA attributes are implemented for better screen reader support.
🛠️ Setup and Running the App Locally
Follow these steps to set up and run the application on your local machine:

1️⃣ Prerequisites
Ensure you have the following installed:

Node.js (v16+ recommended)
npm (v7+) or yarn (v1.22+)
Git (to clone the repository)

2️⃣ Clone the Repository
git clone https://github.com/florianadoko/software-yard
cd two-step-form

3️⃣ Install Dependencies
Using npm: npm install

4️⃣ Run the Development Server
Start the local development server: npm run dev

🔎 Testing the Two-Step Form
You can test the form manually or by running automated tests.

✅ Manual Testing (ex. Step one of the form)
Follow these steps:

Step 1:
Enter valid First Name (e.g., "John").
Enter valid Last Name (e.g., "Doe").
Click Continue.

Step 2:
Click on the country code selector and select a code (e.g., +44).
Enter a valid phone number (7-15 digits, no special characters).
Click Continue.
Validation Checks:

First Name / Last Name Required: Leaving these fields empty should show an error.
Phone Number Required: Submitting without a phone number should show an error.
Phone Number Format: Entering fewer than 7 or more than 15 digits should show a format error.
