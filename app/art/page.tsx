// "use client";

import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";
import styles from "./page.module.css";

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
    <div className="artItem">
      {props.name} {props.artistName} {props.image}
    </div>
  );
}

export default async function ArtApp() {
  const artData = await getArtData("1", 2);
  var artItems: any | null = [];
  if (artData) {
    artItems = artData.map((artItem) => (
      <ArtItem key={artItem.objectID} name={artItem.title} artistName={artItem.artistDisplayName} image = {artItem.primaryImage} />
    ));
  }

  return (
    <main>
      <h1 className={styles.hey}>Art App</h1>
      {artItems}
    </main>
  );
}
