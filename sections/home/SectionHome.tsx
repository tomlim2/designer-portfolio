import styles from "./SectionHome.module.scss";
import { ListWork, IfItemWork, TypeTag } from "./DataHome";

export default function SectionHome() {
  return (
    <main className={styles.section}>
      <div>
        <ul>
          {ListWork.map((item: IfItemWork, index: number) => {
            return (
              <a  key={index + item.projectName} href={`/projects/${item.url}`}>
                <li className={styles.project}>
                  {item.projectName}
                  <br />
                  {item.jobTitle}
                  <br />
                  {item.tags.map((tag: TypeTag, index: number) => (
                    <span className={styles.tagName} key={index + tag.tagName}>
                      {tag.tagName}
                    </span>
                  ))}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
