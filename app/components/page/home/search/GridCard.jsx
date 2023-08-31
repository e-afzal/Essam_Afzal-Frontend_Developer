import Image from "next/image";
import Link from "next/link";

export default function GridCard({ data, styles }) {
  return (
    <Link className={styles.grid_card} href={`/dragons/${data.id}`}>
      <Image
        src={data.flickr_images[0]}
        alt={data.name}
        className={styles.card_image}
        width={300}
        height={300}
      />
      <h4>{data.name}</h4>
    </Link>
  );
}
