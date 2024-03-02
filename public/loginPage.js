'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if (response.success) {
      location.reload();
      userForm.setLoginErrorMessage('Вход выполнен успешно');
    } else {
      userForm.setLoginErrorMessage(response.error);
    }
  });
};

userForm.registerFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if (response.success) {
      location.reload();
      userForm.setLoginErrorMessage('Регистрация прошла успешно');
    } else {
      userForm.setLoginErrorMessage(response.error);
    }
  });
};
