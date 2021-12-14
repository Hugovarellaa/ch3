import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="logo" />
          </a>
        </Link>
        <nav>
          <ActiveLink activeClasseName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClasseName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
