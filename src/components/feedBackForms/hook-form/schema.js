import * as Yup from 'yup';

export const createFormSchema = ({
  includeFullName = false,
  includeContactPerson = false,
  includePhoneNumber = false,
  includeEmail = false,
  includeEndDate = false,
  includePassword = false,
  includeConfirmPassword = false,
  includeCheckbox = false,
  includeMultiCheckbox = false,
  includeSingleSelect = false,
  includeMultiSelect = false,
  includeSwitch = false,
  includeRadioGroup = false,
  includeTaxNumber = false,
  includeCompany = false,
  includeObjectInfo = false,
} = {}) => {
  const schemaFields = {};

  if (includeFullName) {
    schemaFields.fullName = Yup.string()
      .required('Имя обязательно для заполнения')
      .min(2, 'Минимум 2 символа')
      .max(32, 'Максимум 32 символа');
  }

  if (includeContactPerson) {
    schemaFields.contactPerson = Yup.string()
      .required('Контактное лицо обязательно для заполнения');
  }

  if (includePhoneNumber) {
    schemaFields.phoneNumber = Yup.string().required('Телефон обязателен для заполнения');
  }

  if (includeEmail) {
    schemaFields.email = Yup.string()
      .required('Email обязателен для заполнения')
      .email('Email должен быть действительным адресом электронной почты');
  }

  if (includeEndDate) {
    schemaFields.endDate = Yup.date()
      .min(Yup.ref('startDate'), 'Дата окончания должна быть позже даты начала')
      .required('Дата окончания обязательна');
  }

  if (includePassword) {
    schemaFields.password = Yup.string()
      .required('Пароль обязателен')
      .min(6, 'Пароль должен содержать не менее 6 символов');
  }

  if (includeConfirmPassword) {
    schemaFields.confirmPassword = Yup.string()
      .required('Подтверждение пароля обязательно')
      .oneOf([Yup.ref('password')], 'Пароли не совпадают');
  }

  if (includeCheckbox) {
    schemaFields.checkbox = Yup.boolean().oneOf([true], 'Чекбокс обязателен');
  }

  if (includeMultiCheckbox) {
    schemaFields.multiCheckbox = Yup.array().min(1, 'Выберите хотя бы 1 вариант');
  }

  if (includeSingleSelect) {
    schemaFields.singleSelect = Yup.string().required('Необходимо выбрать один вариант');
  }

  if (includeMultiSelect) {
    schemaFields.multiSelect = Yup.array().min(1, 'Необходимо выбрать хотя бы 1 вариант');
  }

  if (includeSwitch) {
    schemaFields.switch = Yup.boolean().oneOf([true], 'Переключатель обязателен');
  }

  if (includeRadioGroup) {
    schemaFields.radioGroup = Yup.string().required('Выберите хотя бы один вариант');
  }

  if (includeCompany) {
    schemaFields.company = Yup.string().required('Название компании обязательно');
  }

  if (includeTaxNumber) {
    schemaFields.taxNumber = Yup.string().required('ИНН обязателен');
  }

  if (includeObjectInfo) {
    schemaFields.objectInfo = Yup.string().required('Наименование и адрес объекта обязательны');
  }

  return Yup.object().shape(schemaFields);
};
