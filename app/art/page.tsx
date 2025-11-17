import styles from "./page.module.css";
import Link from "next/link";

function getRandomSample<T>(arr: T[], count: number): T[] {
  const copy = [...arr]; // don't mutate original
  const n = Math.min(count, copy.length);

  // Fisher–Yates shuffle
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, n);
}

async function getArtData(departmentId: string, count: number) {
  try {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (!data.objectIDs || data.objectIDs.length === 0) {
      return [];
    }

    const selectedData = getRandomSample(data.objectIDs, count);

    const objects = await Promise.all(
      selectedData.map(async (id) => {
        const res = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );

        const resJson = await res.json();
        return resJson;
      })
    );

    return objects;
  } catch (err) {
    console.error("Failed to fetch art data:", err);
    return null;
  }
}

function ArtItem(props: any) {
  return (
    <div className={styles.artItem}>
      <div className={styles.textSection}>
        {props.name && (
          <p>
            <span className={styles.descriptor}>Title: </span>
            {props.name}
          </p>
        )}
        {props.artistName && (
          <p>
            {" "}
            <span className={styles.descriptor}>Artist: </span>
            {props.artistName}
            {(props.artistBegin || props.artistEnd) && (
              <>
                {" ("}
                {props.artistEnd === "" ? "?" : props.artistBegin ?? "?"}-
                {props.artistEnd === "9999"
                  ? "present"
                  : props.artistEnd ?? "?"}
                {")"}
              </>
            )}
          </p>
        )}{" "}
        {props.date && (
          <p>
            <span className={styles.descriptor}>Date: </span>
            {props.date}
          </p>
        )}
        {props.country && (
          <p>
            <span className={styles.descriptor}>Country: </span>
            {props.country}
          </p>
        )}
        {props.culture && (
          <p>
            <span className={styles.descriptor}>Culture: </span>
            {props.culture}
          </p>
        )}
      </div>
      <div className={styles.imageSection}>
        <Link className={styles.imageAltText} href={props.url}>
          <img
            className={styles.thumbnailImage}
            src={props.image}
            alt="No image available"
          />
        </Link>
      </div>
    </div>
  );
}

export default async function ArtApp() {
  

  const artData = await getArtData("5", 10);
  let artItems: any | null = [];
  let departmentName = "";

  if (artData) {
    departmentName = artData[0].department;

    artItems = artData.map((artItem) => (
      <ArtItem
        key={artItem.objectID}
        name={artItem.title}
        artistName={artItem.artistDisplayName}
        image={artItem.primaryImageSmall}
        date={artItem.objectDate}
        artistBegin={artItem.artistBeginDate}
        artistEnd={artItem.artistEndDate}
        url={artItem.objectURL}
        country={artItem.country}
        culture={artItem.culture}
      />
    ));
  }

  return (
    <div>
      <h1 className={styles.appHeader}>Art App</h1>
      <h2 className={styles.departmentHeader}>{departmentName}</h2>
      <div className={styles.artItemsContainer}>{artItems}</div>
    </div>
  );
}
