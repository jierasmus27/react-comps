import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}


Button.propTypes = {
  checkVariationValue: ({primary,
    secondary,
    success,
    warning,
    danger,
  }) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!warning)
      + Number(!!danger)
      + Number(!!success)

    if (count > 1) {
      return new Error('Invalid props');
    }
  }
};

export default Button;
