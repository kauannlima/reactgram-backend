const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O título é obrigatório.")
      .isString(0)
      .withMessage("O título é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O título precisa ter no mínimo 3 caracteres"),
    body("image").custom((value, { req }) => {
      {
        if (!req.file) {
          throw new Error("A imagem é obrigatória.");
        }
        return true;
      }
    }),
  ];
};

const photoUpdatevalidation = () => {
  return [
    body("title")
      .optional()
      .isString(0)
      .withMessage("O título é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O título precisa ter no mínimo 3 caracteres"),
    ,
  ];
};

const commentValidation = () => {
  return [
    body("comment").isString(0).withMessage("O comentário é obrigatório."),
  ];
};

module.exports = {
  photoInsertValidation,
  photoUpdatevalidation,
  commentValidation,
};
