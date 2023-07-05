# [DEMO](https://AnyaLyaLya.github.io/PassStrengthTester).

## Technologies Used
The application is built using the following technologies:

+ React: JavaScript library for building user interfaces
+ TypeScript: Superset of JavaScript that adds static typing
+ SCSS: CSS preprocessor for styling
+ react-icons: Library for including icons in React components
+ react-toastify: Library for displaying toast notifications

## Functionality
The application allows users to test the strength of a password. The following functionality is implemented:

1. Password Strength Calculation:

    + If the password contains only letters, digits, or symbols, it is considered easy.
    + If the password contains a combination of letters-symbols, letters-digits, or digits-symbols, it is considered medium.
    + If the password contains letters, symbols, and numbers, it is considered strong.

2. Real-time Strength Updates:

    + As the user types in the password field, the strength sections update in real time based on the password strength.

3. Password Strength Sections:

    + The application displays three sections to indicate the strength of the password.
    + The color of the sections varies depending on the strength of the password:
        + If the field is empty, all sections are gray.
        + If the field has less than 8 characters, all sections are red.
        + If the password is easy, the first section is red and the rest are gray.
        + If the password is medium, the first two sections are yellow and the last one is gray.
        + If the password is strong, all sections are green.

4. Password Visibility Toggle:

    + The application provides a button to toggle the visibility of the password in the input field.
    + Clicking the button changes the input type from "password" to "text" and vice versa, allowing the user to view or hide the entered password.

5. Notifications:

    + The application uses the react-toastify library to display toast notifications.
    + Toast notifications are triggered based on the strength of the entered password.
    + Three types of notifications are implemented:
    + Success Notification: If the password is strong, a success notification is displayed with the message "Great! Your password is strong     + and secure."
    + Warning Notification: If the password is medium, a warning notification is displayed with the message "Your password could be stronger.     + Consider adding more complexity."
    + Error Notification: If the password is easy, an error notification is displayed with the message "Your password is weak. Please choose a stronger password."
    + Notifications are shown for a brief period and then automatically dismissed.
    + The notification appearance can be customized using CSS styles and animations.

With the notification functionality, users receive immediate feedback about the strength of their password. They are informed whether their password is strong, medium, or weak, and can take appropriate action to enhance their password security.

## Feel free to explore the application and observe the notifications as you test different passwords!
