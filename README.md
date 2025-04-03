  Features Implemented
1.Sidebar Navigation
A vertical sidebar on the left provides navigation links (Dashboard, Portfolio, Notifications, etc.). It’s fixed and styled using plain CSS.

2.Top Profile Section with Dropdown
Displays the user's name and avatar in the top-right corner. Clicking the avatar opens a dropdown with profile-related actions (View Profile, Settings, Logout).

3.Tab Filter Component (Top Tabs)
A row of tabs (All, NPA, DM Order, etc.) allows the user to quickly filter table rows based on loan categories. It updates the state and re-filters the data dynamically.

4.Search Bar
A text input that allows filtering table rows by Loan ID in real-time. It uses toLowerCase() string matching.

5.Dropdown Filters (Zone & Loan Type)
Select dropdowns to filter data based on Zone (North/South/West) and Loan Type (Home Loan, Car Loan, etc.). These filters work independently and together.

6.Column Selector Dropdown
A dropdown that allows the user to toggle the visibility of specific columns in the table. All toggles are stored in component state and conditionally rendered.

7.Sortable Table Columns
All table headers are clickable — clicking a column sorts the data ascending/descending. The active sort column shows a 🔼 or 🔽 icon for feedback.

8.Responsive Design (Mobile Support)
The layout adapts for smaller screens:

9.Table becomes horizontally scrollable

10.Filters and controls stack vertically

11.Sidebar remains usable on all screen sizes

12.Scrollable Table with Overflow Handling
The table is wrapped in a responsive container (table-wrapper) with overflow-x: auto, preventing layout shifts and fixing right-side white space.

13."No Data" Message
If filters return no matches, a message is displayed within the table: “No matching records found.”
How it works?
This React-based dashboard fetches (mock) loan data and displays it in a customizable, sortable, and filterable table. All interactions (search, sort, filter, toggle columns) are managed via local component state. The UI mimics a professional loan portfolio dashboard and is fully mobile responsive. The design closely matches the provided assignment screenshot using only plain CSS and React components.



