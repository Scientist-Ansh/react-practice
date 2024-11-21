import styles from "./ButtonGroup.module.css";
import { useState } from "react";

interface ButtonGroupProps{

    
}

const ButtonGroup = ({
  children,
  direction = "horizontal",
  visibleButton = 2,
  variant=
}: any) => {
  const childrenLength = children.length;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleToggleDropDown() {
    setIsDropdownOpen((prevState) => !prevState);
  }

  if (childrenLength <= visibleButton) {
    return <div className={styles.container}>{children}</div>;
  }

  if (childrenLength > visibleButton) {
    return (
      <div className={styles.container}>
        {/* button-item */}
        <button className="">{children[0]}</button>
        <div className="">{children[1]}</div>

        <div className={styles.dropdownTriggercontainer}>
          <div
            className={styles.dropdownTrigger}
            onClick={handleToggleDropDown}
          >
            three dot icon
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdownContent}>
              {/* {children.slice(visibleButton).map((button) => {
                console.log(button);
                <div>{button.props.label}</div>;
              })} */}

              <p>It works</p>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default ButtonGroup;
