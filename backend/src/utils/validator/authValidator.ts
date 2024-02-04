import { check } from 'express-validator';
import { validatorMiddleware } from '../../authorization/middelware/validatormiddelware';
import slugify from 'slugify';
import { User } from '../../model/user';

const userobject = new User();

export const signupValidator = [
  check('username')
    .notEmpty()
    .withMessage('username required field')
    .isLength({ min: 5 })
    .withMessage('username must be at least 5 chars')
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  // check('email')
  // .notEmpty()
  // .withMessage('Email required field')
  // .isEmail()
  // .withMessage('من فضلك ادخل ايميل صحيح')
  // .custom(async (_val, { req })=>{
  //     const existemail = await userobject.emailExists(req.body.email);
  //     if (existemail) {
  //         throw  new Error(`الايميل موجود بالفعل`);
  //     }
  //     return true;
  // }),

  check('password')
    .notEmpty()
    .withMessage('Password required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 chars'),

  check('confirmPassword')
    .notEmpty()
    .withMessage('passwordConfirm is required field')
    .custom((val, { req }) => {
      if (val !== req.body.password) {
        throw new Error(`فم بتاكيد كلمة السر`);
      }
      return true;
    }),

  // check('phone')
  // .optional()
  // .isMobilePhone('ar-EG')
  // .withMessage('accept only Egypt phone numbers')
  // .custom(async (_val, { req }) => {
  //     const existphone = await userobject.phoneExists(req.body.phone);
  //     if (existphone) {
  //     throw new Error("الرقم موجود بالفعل");
  //     }
  //     return true;
  // }),

  validatorMiddleware
];

export const loginValidator = [
  check('email')
    .notEmpty()
    .withMessage('Email required field')
    .isEmail()
    .withMessage('Invalid email format'),

  check('password')
    .notEmpty()
    .withMessage('Password required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 chars'),
  validatorMiddleware
];
export const forgetPasswordValidator = [
  check('email')
    .notEmpty()
    .withMessage('Email required field')
    .isEmail()
    .withMessage('من فضلك ادخل ايميل صحيح')
    .custom(async (_val, { req }) => {
      const existemail = await userobject.emailExists(req.body.email);
      if (!existemail) {
        throw new Error(`الايميل غير موجود لدينا`);
      }
      return true;
    }),

  validatorMiddleware
];
export const verifyPasswordValidator = [
  check('email')
    .notEmpty()
    .withMessage('الايميل حقل ضروري')
    .isEmail()
    .withMessage('من فضلك ادخل ايميل صحيح')
    .custom(async (_val, { req }) => {
      const existemail = await userobject.emailExists(req.body.email);
      if (!existemail) {
        throw new Error(`الايميل غير موجود لدينا`);
      }
      return true;
    }),
  check('resetCode')
    .notEmpty()
    .withMessage('من فضلك ادخل الكود')
    .isInt()
    .withMessage('الكود يجب أن يحتوي على أرقام فقط')
    .isLength({ min: 6 })
    .withMessage('الكود لا يقل عن سته ارقام'),

  validatorMiddleware
];

export const resetPasswordValidator = [
  check('email')
    .notEmpty()
    .withMessage('Email required field')
    .isEmail()
    .withMessage('من فضلك ادخل ايميل صحيح')
    .custom(async (_val, { req }) => {
      const existemail = await userobject.emailExists(req.body.email);
      if (!existemail) {
        throw new Error(`الايميل غير موجود لدينا`);
      }
      return true;
    }),

  check('newpassword')
    .notEmpty()
    .withMessage('password required')
    .isLength({ min: 8 })
    .withMessage('يجب الا تقل كلمه عن تماني احرف'),

  check('confirmPassword')
    .notEmpty()
    .withMessage('من فضلك تاكد من كلمه السر')
    .custom((val, { req }) => {
      if (val !== req.body.newpassword) {
        throw new Error(`قم بتاكيد كلمة السر`);
      }
      return true;
    }),

  validatorMiddleware
];
