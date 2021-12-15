import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/images/logo.svg" alt="logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#" className={styles.active}>
            Posts
          </a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
