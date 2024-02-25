import styles from "./SectionHome.module.scss";
import { ListWork, IfItemWork, TypeTag } from "./DataHome";
import Image from "next/image";
import ImageComp from "@/components/ImageComp";

export default function SectionHome() {
  return (
    <main className={styles.main}>
      <section className={styles.sectionHero}></section>
      <section className={styles.sectionProjects}>
        <div className={styles.container}>
          <ul className={styles.projects}>
            {ListWork.map((item: IfItemWork, index: number) => {
              return (
                <li key={index + item.projectName} className={styles.project}>
                  <a href={`/projects/${item.url}`}>
                    <div className={styles.imageWrapper}>
                      <ImageComp />
                    </div>
                  </a>
                  <div className={styles.description}>
                    <h4 className={styles.projectName}>{item.projectName}</h4>
                    <div>{item.jobTitle}</div>
                    <div>
                      {item.tags.map((tag: TypeTag, index: number) => (
                        <span
                          className={styles.tagName}
                          key={index + tag.tagName}
                        >
                          {tag.tagName}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
