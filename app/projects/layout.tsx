import styles from "./LayoutProjects.module.scss"
export default function projectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.wrapper}>{children}</div>
    </>
  );
}
