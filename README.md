# EmployeeManagement_Assign
A React-based Admin Dashboard for Employee Management that supports CRUD operations, live success notifications, profile previews, search &amp; filtering, and a polished modern UI, while keeping all logic simple, functional, and extendable.
Employee Management System (React App)

1. Authentication:
    Login page with username/password validation (admin / 1234).
    Full-screen, attractive, modern design.
    Error handling for invalid credentials.

2. Dashboard:

Lists all employees with:

Name, Employee ID, Profile picture, Gender, DOB, State, Status.
Actions: Edit, Delete, Print.
Supports toggling Active/Inactive status.
Success popup shows when a new employee is added.
Total employee count displayed above the table.
Full-screen layout with centered title.

3. Employee Management:

Create Employee form:
Fields: Name, Employee ID, Profile image (with preview), Gender, DOB, State, Active status.
Form validation: required fields enforced.
On submit: Adds employee to dashboard and shows success message.
Edit Employee feature in dashboard table.
5. Delete employee with confirmation.

4. Extra Features:

Image preview before saving employee profile.
Print individual employee details in a new window.
Search/filter employees by Name, Gender, and Status.
4. Responsive, visually appealing UI with consistent colors and hover effects.


 Features:-

Login Authentication: Admin login with validation.

Dashboard: Full-screen view with employee table, total count, and action buttons.

CRUD Operations: Create, Edit, Delete employees.

Profile Preview: Live preview of uploaded profile image.

Search & Filter: Filter employees by name, gender, and status.

Print Option: Print employee details in a clean format.

Success Notifications: Popup confirmation for successful operations.

  FLOW:-
    [Login Page] → [Dashboard Table with Employee List] → [Create Employee Form]

  Steps to Run Locally:-
 1.Clone the repository
  git clone https://github.com/yourusername/employee-management.git
  npm create vite@latest my-react-app.
  cd reactapp
2. Install dependencies
   npm install
3. Start the development server
   npm run or npm run dev
4.Open in Browser
   Navigate to http://localhost:3000
   Login with:
    Username: admin
    Password: 1234

src/
├─ Components/
│   ├─ Login.jsx
│   ├─ Dashboard.jsx
│   └─ CreateForm.jsx
├─ Pages/
│   └─ CreateEmployee.jsx  <-- New page for create employee form
├─ App.jsx
├─ main.jsx
├─ index.css

Auth Folder is in src/ .




