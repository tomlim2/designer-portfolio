import Image from "next/image";
import styles from "./homeHeader.module.css";

export default function ImageComp({
  srcUrl = "/assets/imgs/img_thumbnail_default.png",
}) {
  return (
    <Image
      src={srcUrl}
      alt="image"
      height={1280}
      width={1280}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    />
  );
}
