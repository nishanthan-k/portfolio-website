import PropTypes from "prop-types";

const Button = (props) => {
  const { content, icon } = props;

  return (
    <div className="p-10">
      <button className="rounded-2xl bg-sky-600 px-6 py-2 text-textColor">
        {content}
        {icon && <icon />}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.any,
};
