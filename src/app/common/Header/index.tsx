import Avatar from "@mui/material/Avatar";
import logo from "../../../images/logo-1366.png";

import styles from "./styles.module.scss";

const Logo = () => (
  <div className={styles.logo}>
    <img src={logo} alt="logoType" />
  </div>
);

const UserAvatar = () => (
  <div className={styles.avatarContainer}>
    <button>
      <Avatar
        alt="user avatar"
        className={styles.avatar}
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
      />
      <i className="fas fa-caret-down"></i>
    </button>
  </div>
);

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
