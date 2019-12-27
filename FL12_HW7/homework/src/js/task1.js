let email = prompt('Pleace enter your email');
let fiveSymbols = 4;
let sixSymbols = 5;

if (email === '' || email === null) {
  alert('Canceled.');
} else if (email.length < fiveSymbols) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  const password = prompt('Pleace enter your password');
  let oldPassword = password;
  if (password === '' || password === null) {
    alert('Canceled.');
  } else if (
    email === 'user@gmail.com' && password === 'UserPass' ||
    email === 'admin@gmail.com' && password === 'AdminPass'
  ) {
    let changePassword = confirm('Do you want to change your password?');
    switch (changePassword) {
      default:
        alert('You have failed the change.');
        break;
      case true:
        
        oldPassword = prompt('Pleace enter your current password');
        if (
          email === 'user@gmail.com' && oldPassword === 'UserPass' ||
          email === 'admin@gmail.com' && oldPassword === 'AdminPass'
        ) {
          let newPassword = prompt('Pleace enter a new password');
          if (newPassword.length < sixSymbols) {
            alert("It's too short password. Sorry.");
          } else if (newPassword.length >= sixSymbols) {
            let confirmNewPassword = prompt(
              'Pleace enter your new password again, to confirm changes'
            );
            if (newPassword === confirmNewPassword) {
              alert('You have succsessfully changed your password');
            } else {
              alert('You wrote the wrong password.');
              confirmNewPassword;
            }
          } else {
            alert('Canceled.');
          }
        }
        break;
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}

// regex for email  ---   /^[^\s@]+@[^\s@]+\.[^\s@]+$/
