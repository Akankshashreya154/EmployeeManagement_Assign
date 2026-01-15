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
  -npm create vite@latest my-react-app.
  -cd reactapp
2. Install dependencies
   -npm install
3. Start the development server
   -npm run or npm run dev
4.Open in Browser
   Navigate to http://localhost:3000 or localhost:5173
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


# LOGIN FLOW-
<img width="1752" height="962" alt="image" src="https://github.com/user-attachments/assets/2e8b1a3f-9d93-4d25-940b-8a1490018cb3" />

# EMPLOYEE DATA MANAGEMENT_DASHBOARD
ADD,EDIT,DELETE,PRINT ACTIONS CAN BE DONE

<img width="1910" height="947" alt="image" src="https://github.com/user-attachments/assets/cdf4c3fb-c516-4014-b412-bf3c87be055f" />

# EDIT
<img width="1897" height="952" alt="image" src="https://github.com/user-attachments/assets/f98da94a-f520-4412-ac74-3b170b62de6f" />

# PRINT
<img width="1733" height="887" alt="image" src="https://github.com/user-attachments/assets/77deb888-4cd9-494d-a3b9-e22623614fd6" />

# DELETE
Checking by deleing last name-Priym
<img width="1911" height="1005" alt="image" src="https://github.com/user-attachments/assets/6837b9e2-201f-46f6-95cf-d11d2d99c9cb" />

# SEARCH AND FILTER FUNCTIONALITY COMBINE WORKING TOGETHER
<img width="1907" height="865" alt="image" src="https://github.com/user-attachments/assets/6f18d875-2338-494f-9cb9-4dcccd59b47b" />
<img width="1835" height="772" alt="image" src="https://github.com/user-attachments/assets/8882c79c-7f90-4cb9-a782-8f7c79ede88a" />




# CREATE NEW EMPLOYEE DETAILS BY CLICKING ON CREATE BUTTON
Route to a Form Page
<img width="1900" height="946" alt="image" src="https://github.com/user-attachments/assets/89cf35d9-d6db-4607-8ed1-499129315563" />
<img width="1876" height="1017" alt="image" src="https://github.com/user-attachments/assets/31830029-99aa-4e63-9a2b-5a99d58edc99" />
















