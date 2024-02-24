import styles from "./SectionCNMCasual.module.scss";

export default function SectionCNMCasual() {
  const passwordForPage = process.env.NEXT_PASSWORD;
  console.log(passwordForPage, "ji");
  return (
    <>
      <h1 style={{ color: styles.primaryColor }}>Casual system</h1>
      <h2></h2>
      <section className={styles.heroImage}></section>
      <p>
        vrm(vrm4u) setup
        <br />
        <br />
        <br />
        pmx(im4u) setup
        <br />
        bp_wrapper
        <br />
        toon shader (handmade)
        <br />
        <br />
        postprocess custom depth stencil
        <br />
        <br />
      </p>
      <h3>Password test</h3>
      <section>{`${passwordForPage}`}</section>
    </>
  );
}
