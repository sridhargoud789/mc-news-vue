import { extend } from "vee-validate";
import { required, email, min, confirmed } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "isRequired"
});
extend("email", {
  ...email,
  message: "isInvalidEmail"
} );
extend("min", {
  ...min,
  message: "theMinimumLength"
} );
extend("confirmed", {
  ...confirmed,
  message: "theFieldsHaveMatch"
} );
